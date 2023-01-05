﻿use QL_BANHANG_TRANHCHAP

--T1: khách hàng A đặt đơn hàng 
--T2: Khách hàng A đặt thêm 1 đơn khác cùng lúc


--Cài đặt trigger
CREATE TRIGGER i_KHACHHANG
ON KHACHHANG
for UPDATE
AS
IF UPDATE (SODUVI)
BEGIN
	IF EXISTS (SELECT I.SODUVI FROM inserted I WHERE I.SODUVI < 0)
	BEGIN
		RAISERROR (N'SO DU VI KHONG DU',16,1)
	END
END
GO


--Tạo list món ăn
CREATE TYPE list_MONAN as TABLE (STT INT,MAMONAN VARCHAR(10),SOLUONG INT)
GO


--Tạo proc
--CREATE
ALTER PROC sp_Tao_DH
@HINHTHUCTT CHAR(20),
@MADIACHI VARCHAR(10),
@MAKH VARCHAR(10),
@MACN VARCHAR(10),
@PHIVANCHUYEN INT,
@list_MONAN list_MONAN READONLY
--@MONAN TABLE(MAMONAN VARCHAR(10),SOLUONG INT)
AS
SET TRAN ISOLATION LEVEL READ COMMITTED
BEGIN TRAN
	IF (@HINHTHUCTT='CHUYEN KHOAN' OR @HINHTHUCTT='VI' OR @HINHTHUCTT='NGAN HANG')
	BEGIN
		SELECT *FROM @list_MONAN
		IF NOT EXISTS(SELECT MACN FROM CUAHANG WHERE MACN=@MACN AND TINHTRANGCH ='AVAILABLE')
		BEGIN
			ROLLBACK TRAN
			RAISERROR ('CUA HANG KHONG HOAT DONG',16,1)
			RETURN
		END
		DECLARE @SODUVI INT=(SELECT SODUVI FROM KHACHHANG with(updlock) WHERE MAKH=@MAKH)
		DECLARE @MADH INT
		EXEC sp_IDMAX 'DON_DH',@MADH OUT
		--IF NOT EXISTS (SELECT MADIACHI FROM DIACHI WHERE MADIACHI=@MADIACHI)
		--BEGIN
		--	ROLLBACK TRAN
		--	RAISERROR ('KHONG TON TAI DIA CHI',16,1)
		--	RETURN
		--END
		DECLARE @MAKHUVUC VARCHAR(10)=NULL-- (SELECT KV.MAKHUVUC FROM DIACHI DC JOIN PHUONG P ON DC.MAPHUONG=P.MAPHUONG JOIN QUANHUYEN QH ON QH.MAHUYEN=P.MAHUYEN JOIN KHUVUC KV ON QH.MAKHUVUC=KV.MAKHUVUC WHERE MADC=DC.MADC)
		DECLARE @NGAYTAO DATETIME=GETDATE()
		EXEC sp_ThemDonDH @MADH,'AVAILABLE',@NGAYTAO,@HINHTHUCTT,0,@PHIVANCHUYEN,@MADIACHI, @MAKH, @MACN,NULL,@MAKHUVUC
		IF @@ERROR<>0
		BEGIN
			ROLLBACK TRAN
			RAISERROR ('KHONG TAO DUOC DON HANG',16,1)
			RETURN
		END
		
		DECLARE @STT INT =(SELECT MAX(STT) FROM @list_MONAN )
		DECLARE @I INT = 1
		WHILE (@I<= @STT)
		BEGIN
			DECLARE @MAMONAN VARCHAR(10)
			DECLARE @SOLUONG INT
			SELECT @MAMONAN=MAMONAN,@SOLUONG=SOLUONG FROM @list_MONAN WHERE STT=@I
			EXEC sp_ThemThucDonDatHang @MAMONAN,@MADH,@SOLUONG
			IF @@ERROR <>0
			BEGIN
			ROLLBACK TRAN
			RAISERROR ('KHONG TAO DUOC DON HANG',16,1)
			RETURN
			END
		
			SET @I=@I+1
		END
		
		IF (@HINHTHUCTT='VI')
		BEGIN
			DECLARE @TONGTIEN INT=(SELECT PHIVANCHUYEN+PHISP FROM DON_DH WHERE MADH=@MADH)
			WAITFOR DELAY '00:00:06'
			UPDATE KHACHHANG SET SODUVI=@SODUVI- @TONGTIEN WHERE MAKH=@MAKH
			IF @@ERROR <>0
			BEGIN
			ROLLBACK TRAN
			RETURN
			END
		END
	END
	ELSE
	BEGIN
		ROLLBACK TRAN
		RAISERROR ('HINH THUC THANH TOAN KHONG HOP LE',16,1)
		RETURN
	END

COMMIT
GO

