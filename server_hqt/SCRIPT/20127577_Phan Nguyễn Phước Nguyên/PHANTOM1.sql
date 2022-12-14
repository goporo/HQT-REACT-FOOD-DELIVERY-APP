-- 2 nguoi dung cung dang ky mot tai khoan trung ten, luc dau tai khoan 2 kiem tra thi hop le nhung sau do trong 
-- qua trinh insert thi tai khoan 1 dang ky thanh cong truoc, lm tap tai khoan xuat hien mot tai khoan moi,
-- gay xung dot cho qua trinh dang ky cua tai khoan 2

USE QL_BANHANG_TRANHCHAP
GO

CREATE 
--ALTER
PROC sp_DANGKYNGANHANG_TRANHCHAP_1
	@MAND CHAR(10),
	@LOAIND INT,
	@TENNGANHANG NVARCHAR(50),
	@TENCHINHANH NVARCHAR(50),
	@STK CHAR(13)
AS
BEGIN TRAN
SET TRANSACTION ISOLATION LEVEL READ COMMITTED
IF @LOAIND<0 OR @LOAIND>5
	BEGIN
		RAISERROR (N'KHÔNG TỒN TẠI NGƯỜI DÙNG',16,1);
		ROLLBACK
		RETURN
	END

IF @LOAIND=0
	IF NOT EXISTS(SELECT MAQTV FROM QUANTRIVIEN WHERE MAQTV=@MAND)
	BEGIN
		RAISERROR (N'KHÔNG TỒN TẠI NGƯỜI DÙNG',16,1);
		ROLLBACK
		RETURN
	END
IF @LOAIND=1
	IF NOT EXISTS(SELECT MANHANVIEN FROM NHANVIEN WHERE MANHANVIEN=@MAND)
	BEGIN
		RAISERROR (N'KHÔNG TỒN TẠI NGƯỜI DÙNG',16,1);
		ROLLBACK
		RETURN
	END
IF @LOAIND=2
	IF NOT EXISTS(SELECT MADOITAC FROM DOITAC WHERE MADOITAC=@MAND)
	BEGIN
		RAISERROR (N'KHÔNG TỒN TẠI NGƯỜI DÙNG',16,1);
		ROLLBACK
		RETURN
	END
IF @LOAIND=3
	IF NOT EXISTS(SELECT MACN FROM CHINHANH WHERE MACN=@MAND)
	BEGIN
		RAISERROR (N'KHÔNG TỒN TẠI NGƯỜI DÙNG',16,1);
		ROLLBACK
		RETURN
	END
IF @LOAIND=4
	IF NOT EXISTS(SELECT MATX FROM TAIXE WHERE MATX=@MAND)
	BEGIN
		RAISERROR (N'KHÔNG TỒN TẠI NGƯỜI DÙNG',16,1);
		ROLLBACK
		RETURN
	END

IF @LOAIND=5
	IF NOT EXISTS(SELECT MAKH FROM KHACHHANG WHERE MAKH=@MAND)
	BEGIN
		RAISERROR (N'KHÔNG TỒN TẠI NGƯỜI DÙNG',16,1);
		ROLLBACK
		RETURN
	END

DECLARE @MATKNH INT= (SELECT CONVERT(INT, MASTKNGANHANG) FROM NGANHANG NH WHERE STK=@STK AND TENNGANHANG=@TENNGANHANG AND TENCHINHANH=@TENCHINHANH )
WAITFOR DELAY '0:00:10'
IF @MATKNH>0
	DECLARE @DONOTHING INT =0
ELSE
BEGIN
	EXEC sp_IDMAX 'NGANHANG',@MATKNH OUT
	EXEC sp_ThemNganHang @MATKNH,@TENNGANHANG,@TENCHINHANH,@STK
	IF @@ERROR <>0
	BEGIN 
		RAISERROR (N'KHONG THÊM ĐƯỢC TÀI KHOẢN NGÂN HÀNG',16,1)
		ROLLBACK 
		RETURN 
	END 
END
IF @LOAIND=0
BEGIN
	UPDATE QUANTRIVIEN SET MATKNGANHANG=@MATKNH WHERE MAQTV=@MAND
		IF @@ERROR <>0
	BEGIN 
		RAISERROR (N'KHONG THÊM ĐƯỢC TÀI KHOẢN NGÂN HÀNG',16,1)
		ROLLBACK TRAN
		RETURN 
	END 
	COMMIT TRAN
	RETURN
END
IF @LOAIND=1
BEGIN
	UPDATE NHANVIEN SET MATKNGANHANG=@MATKNH WHERE MANHANVIEN=@MAND
		IF @@ERROR <>0
	BEGIN 
		RAISERROR (N'KHONG THÊM ĐƯỢC TÀI KHOẢN NGÂN HÀNG',16,1)
		ROLLBACK TRAN
		RETURN 
	END 
	COMMIT TRAN
	RETURN
END
IF @LOAIND=2
BEGIN
	UPDATE DOITAC SET MATKNGANHANG=@MATKNH WHERE MADOITAC=@MAND
		IF @@ERROR <>0
	BEGIN 
		RAISERROR (N'KHONG THÊM ĐƯỢC TÀI KHOẢN NGÂN HÀNG',16,1)
		ROLLBACK TRAN
		RETURN 
	END 
	COMMIT TRAN
	RETURN
END
IF @LOAIND=3
BEGIN
	UPDATE CHINHANH SET MATKNGANHANG=@MATKNH WHERE MACN=@MAND
		IF @@ERROR <>0
	BEGIN 
		RAISERROR (N'KHONG THÊM ĐƯỢC TÀI KHOẢN NGÂN HÀNG',16,1)
		ROLLBACK TRAN
		RETURN 
	END 
	COMMIT TRAN
	RETURN
END
IF @LOAIND=4
BEGIN
	UPDATE TAIXE SET MATKNGANHANG=@MATKNH WHERE MATX=@MAND
	IF @@ERROR <>0
	BEGIN 
		RAISERROR (N'KHONG THÊM ĐƯỢC TÀI KHOẢN NGÂN HÀNG',16,1)
		ROLLBACK TRAN
		RETURN 
	END 
	COMMIT TRAN
	RETURN
END
IF @LOAIND=5
BEGIN
	UPDATE KHACHHANG SET MATKNGANHANG=@MATKNH WHERE MAKH=@MAND
		IF @@ERROR <>0
	BEGIN 
		RAISERROR (N'KHONG THÊM ĐƯỢC TÀI KHOẢN NGÂN HÀNG',16,1)
		ROLLBACK TRAN
		RETURN 
	END 
	COMMIT TRAN
	RETURN
END
GO	
