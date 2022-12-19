﻿USE QL_BANHANG_TRANHCHAP
GO
-- tự động thêm bảng
CREATE PROC sp_ThemPhamVi
as
	INSERT PHAMVIBANG values 
	(1,'TAIKHOAN',0),
	(2,'KHACHHANG',0),
	(3,'TAIXE',0),
	(4,'DOITAC',0),
	(5,'CHINHANH',0),
	(6,'NHANVIEN',0),
	(7,'QUANTRIVIEN',0),
	(8,'NGANHANG',0),
	(9,'HOPDONG',0),
	(10,'THUCDON',0),
	(11,'DON_DH',0),
	(12,'LOAIAMTHUC',0),
	(13,'KHUVUC',0),
	(14,'QUANHUYEN',0),
	(15,'PHUONG',0),
	(16,'DIACHI',0),
	(17,'GIACUOC',0),
	(18,'HOAHONG',0)

go
-- Cập nhật số liệu cho bảng Phạm Vi
CREATE PROC sp_CapNhatPhamVi
as
	IF EXISTS (SELECT * FROM TAIXE)
	UPDATE PHAMVIBANG SET IDMAX  =(SELECT MAX(convert(int,MATX)) FROM TAIXE ) WHERE TENPHAMVI='TAIXE'
	IF EXISTS (SELECT * FROM DOITAC)
	UPDATE PHAMVIBANG SET IDMAX  =(SELECT MAX(convert(int,MADOITAC)) FROM DOITAC ) WHERE TENPHAMVI='DOITAC'
	IF EXISTS (SELECT * FROM CHINHANH)
	UPDATE PHAMVIBANG SET IDMAX  =(SELECT MAX(convert(int,MACN)) FROM CHINHANH ) WHERE TENPHAMVI='CHINHANH'
	IF EXISTS (SELECT * FROM NHANVIEN)
	UPDATE PHAMVIBANG SET IDMAX  =(SELECT MAX(convert(int,MANHANVIEN)) FROM NHANVIEN ) WHERE TENPHAMVI='NHANVIEN'
	IF EXISTS (SELECT * FROM QUANTRIVIEN)
	UPDATE PHAMVIBANG SET IDMAX  =(SELECT MAX(convert(int,MAQTV)) FROM QUANTRIVIEN ) WHERE TENPHAMVI='QUANTRIVIEN'
	IF EXISTS (SELECT * FROM NGANHANG)
	UPDATE PHAMVIBANG SET IDMAX  =(SELECT MAX(convert(int,MASTKNGANHANG)) FROM NGANHANG ) WHERE TENPHAMVI='NGANHANG'
	IF EXISTS (SELECT * FROM HOPDONG)
	UPDATE PHAMVIBANG SET IDMAX  =(SELECT MAX(convert(int,MAHD)) FROM HOPDONG ) WHERE TENPHAMVI='HOPDONG'
	IF EXISTS (SELECT * FROM THUCDON)
	UPDATE PHAMVIBANG SET IDMAX  =(SELECT MAX(convert(int,MAMONAN)) FROM THUCDON ) WHERE TENPHAMVI='THUCDON'
	IF EXISTS (SELECT * FROM DON_DH)
	UPDATE PHAMVIBANG SET IDMAX  =(SELECT MAX(convert(int,MADH)) FROM DON_DH ) WHERE TENPHAMVI='DON_DH'
	IF EXISTS (SELECT * FROM TAIKHOAN)
	UPDATE PHAMVIBANG SET IDMAX  =(SELECT MAX(convert(int,MATK)) FROM TAIKHOAN ) WHERE TENPHAMVI='TAIKHOAN'
	IF EXISTS (SELECT * FROM KHACHHANG)
	UPDATE PHAMVIBANG SET IDMAX  =(SELECT MAX(convert(int,MAKH)) FROM KHACHHANG ) WHERE TENPHAMVI='KHACHHANG'
	IF EXISTS (SELECT * FROM THONGTIN_HOAHONG)
	UPDATE PHAMVIBANG SET IDMAX  =(SELECT MAX(convert(int,MAHH)) FROM THONGTIN_HOAHONG ) WHERE TENPHAMVI='HOAHONG'

go
-- Hàm lấy id max


CREATE PROC sp_IDMAX
	@TENPHAMVI CHAR(20),
	@OUTPUT int OUT
AS
	SET @OUTPUT=(SELECT IDMAX FROM PHAMVIBANG WHERE @TENPHAMVI=TENPHAMVI)
	SET @OUTPUT=@OUTPUT+1
	UPDATE PHAMVIBANG SET IDMAX=@OUTPUT where @TENPHAMVI=TENPHAMVI
GO
--CREATE
CREATE PROC sp_DANGKYKH
	@TENTK VARCHAR(50),
	@MATKHAUTK VARCHAR(50)
AS
BEGIN TRAN
DECLARE @IDTK int 
EXEC sp_IDMAX 'TAIKHOAN',@IDTK OUT
EXEC sp_ThemTaiKhoan @IDTK,@TENTK,N'Hoạt động',@MATKHAUTK,5
IF @@ERROR <>0
	BEGIN 
		RAISERROR (N'LỖI HỆ THỐNG KHÔNG TẠO TÀI KHOẢN ĐƯỢC',16,1)
		ROLLBACK 
		RETURN 
	END 
DECLARE @IDKH int 
EXEC sp_IDMAX 'KHACHHANG',@IDKH OUT
EXEC sp_ThemKhachHang @IDKH,@TENTK,NULL,NULL,0,NULL,NULL,@IDTK,NULL,0
IF @@ERROR <>0
	BEGIN 
		PRINT N'LỖI HỆ THỐNG KHÔNG TẠO TÀI KHOẢN ĐƯỢC'
		ROLLBACK 
		RETURN 
	END 
COMMIT 
GO

CREATE PROC sp_DANGKYTX
	@TENTK VARCHAR(50),
	@MATKHAUTK VARCHAR(50),
	@EMAIL VARCHAR(50),
	@TEN NVARCHAR(50),
	@SDT CHAR(10),
	@BIENSOXE CHAR(10),
	@CMND CHAR(12)

AS
BEGIN TRAN
DECLARE @IDTK int 
EXEC sp_IDMAX 'TAIKHOAN',@IDTK OUT
EXEC sp_ThemTaiKhoan @IDTK,@TENTK,N'Hoạt động',@MATKHAUTK,4
IF @@ERROR <>0
	BEGIN 
		PRINT N'LỖI HỆ THỐNG KHÔNG TẠO TÀI KHOẢN ĐƯỢC'
		ROLLBACK TRAN
		RETURN 
	END 
DECLARE @IDTX int 
EXEC sp_IDMAX 'TAIXE',@IDTX OUT
EXEC sp_ThemTaiXe @IDTX,@EMAIL,@TEN,@SDT ,0,null,null,@IDTK ,NULL,@BIENSOXE,0,@CMND,NULL
IF @@ERROR <>0
	BEGIN 
		PRINT N'LỖI HỆ THỐNG KHÔNG TẠO TÀI KHOẢN ĐƯỢC'
		ROLLBACK TRAN
		RETURN 
	END 
COMMIT TRAN
GO
-- Đăng ký đối tác
CREATE PROC sp_DANGKYDT
	@TENTK VARCHAR(50),
	@MATKHAUTK VARCHAR(50),
	@EMAILDT CHAR(50),
	@TENDT NVARCHAR(50),
	@SDTDT CHAR(10),
	@MSTHUE CHAR(10),
	@MAIL_NDD VARCHAR(50),
	@SLDUKIENMIN INT,
	@SLDUKIENMAX INT

AS
BEGIN TRAN


DECLARE @IDTK int 
EXEC sp_IDMAX 'TAIKHOAN',@IDTK OUT
EXEC sp_ThemTaiKhoan @IDTK,@TENTK,N'Hoạt động',@MATKHAUTK,2
IF @@ERROR <>0
	BEGIN 
		PRINT N'LỖI HỆ THỐNG KHÔNG TẠO TÀI KHOẢN ĐƯỢC'
		ROLLBACK TRAN
		RETURN 
	END 
DECLARE @IDDT int 
EXEC sp_IDMAX 'DOITAC',@IDDT OUT
EXEC sp_ThemDoiTac @IDDT,@EMAILDT,@TENDT,@SDTDT,0,NULL,NULL,@IDTK,NULL,@MSTHUE ,@MAIL_NDD ,@SLDUKIENMIN ,@SLDUKIENMAX 
	  
IF @@ERROR <>0
	BEGIN 
		PRINT N'LỖI HỆ THỐNG KHÔNG TẠO TÀI KHOẢN ĐƯỢC'
		ROLLBACK TRAN
		RETURN 
	END 
COMMIT TRAN
GO
-- Đăng ký quản trị viên
CREATE PROC sp_DANGKYQTV
	@TENTK VARCHAR(50),
	@MATKHAUTK VARCHAR(50),
	@EMAIL VARCHAR(50),
	@TEN NVARCHAR(50),
	@SDT CHAR(10)
AS
BEGIN TRAN


DECLARE @IDTK int 
EXEC sp_IDMAX 'TAIKHOAN',@IDTK OUT
EXEC sp_ThemTaiKhoan @IDTK,@TENTK,N'Bị Khóa',@MATKHAUTK,0
IF @@ERROR <>0
	BEGIN 
		PRINT N'LỖI HỆ THỐNG KHÔNG TẠO TÀI KHOẢN ĐƯỢC'
		ROLLBACK TRAN
		RETURN 
	END 
DECLARE @IDQTV int 
EXEC sp_IDMAX 'QUANTRIVIEN',@IDQTV OUT
EXEC sp_ThemQuanTriVien @IDQTV,@EMAIL,@TEN ,@SDT ,0,NULL,NULL,@IDTK,NULL,NULL
IF @@ERROR <>0
	BEGIN 
		PRINT N'LỖI HỆ THỐNG KHÔNG TẠO TÀI KHOẢN ĐƯỢC'
		ROLLBACK TRAN
		RETURN 
	END 
COMMIT TRAN
GO	
-- ĐĂNG KÝ NHÂN VIÊN
CREATE PROC sp_DANGKYNV
	@TENTK VARCHAR(50),
	@MATKHAUTK VARCHAR(50),
	@EMAIL VARCHAR(50),
	@TEN NVARCHAR(50),
	@SDT CHAR(10)
AS
BEGIN TRAN


DECLARE @IDTK int 
EXEC sp_IDMAX 'TAIKHOAN',@IDTK OUT
EXEC sp_ThemTaiKhoan @IDTK,@TENTK,N'Bị Khóa',@MATKHAUTK,1
IF @@ERROR <>0
	BEGIN 
		PRINT N'LỖI HỆ THỐNG KHÔNG TẠO TÀI KHOẢN ĐƯỢC'
		ROLLBACK TRAN
		RETURN 
	END 
DECLARE @IDNV int 
EXEC sp_IDMAX 'NHANVIEN',@IDNV OUT
EXEC sp_ThemNhanVien @IDNV ,@EMAIL,@TEN ,@SDT ,0,NULL,NULL,@IDTK,NULL,0
IF @@ERROR <>0
	BEGIN 
		PRINT N'LỖI HỆ THỐNG KHÔNG TẠO TÀI KHOẢN ĐƯỢC'
		ROLLBACK TRAN
		RETURN 
	END 
COMMIT TRAN
GO	
-- Thêm ngân hàng cho người dùng
CREATE 
PROC sp_DANGKYNGANHANG
	@MAND CHAR(10),
	@LOAIND INT,
	@TENNGANHANG NVARCHAR(50),
	@TENCHINHANH NVARCHAR(50),
	@STK CHAR(13)
AS
BEGIN TRAN
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
PRINT @MATKNH
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
--Lấy sản phẩm theo giá
CREATE PROC sp_MonAn_TheoGia
@SL int,
@THUTU CHAR(10)
AS
	if @THUTU='INCREASE'
	BEGIN
	SELECT TOP (@SL) * FROM THUCDON ORDER BY GIA ASC
	RETURN
	END
	IF @THUTU='DECREASE'
	BEGIN
	SELECT TOP (@SL) * FROM THUCDON ORDER BY GIA DESC
	RETURN
	END
GO
--Lấy món theo chi nhánh
CREATE PROC sp_MonAn_ChiNhanh
@SL int,
@MACN CHAR(10)
AS
	IF EXISTS(SELECT MACN FROM CHINHANH WHERE MACN=@MACN)
	SELECT TOP (@SL) * FROM THUCDON WHERE MACN=@MACN
	ELSE
	RAISERROR ('KHONG TON TAI CHI NHANH',16,1)
GO
--Lấy món theo loại ẩm thực
CREATE PROC sp_MonAn_LoaiAmThuc
@SL int,
@MALAT CHAR(10)
AS
	IF EXISTS(SELECT MALAT FROM LOAIAMTHUC WHERE MALAT=@MALAT)
	SELECT TOP (@SL) * FROM THUCDON WHERE MALAT=@MALAT
	ELSE
	RAISERROR ('KHONG TON TAI LOAI AM THUC',16,1)
GO
-- LÁY Đơn Hàng của Khách hàng
CREATE PROC sp_DonHang_KH
@MAKH CHAR(10),
@TGBD DATETIME,
@TGKT DATETIME
AS
	IF EXISTS(SELECT MAKH FROM KHACHHANG WHERE MAKH=@MAKH)
	SELECT * FROM DON_DH DH JOIN KHACHHANG KH ON DH.MAKH=KH.MAKH JOIN TAIXE TX ON DH.MATX=TX.MATX JOIN CHINHANH CN ON DH.MACN=CN.MACN JOIN CUAHANG CH ON CH.MACN=CN.MACN
	WHERE DH.MAKH=@MAKH
	ELSE
	RAISERROR ('KHONG TON TAI KHACH HANG',16,1)
GO
-- LẤY ĐƠN HÀNG TÀI XẾ
CREATE PROC sp_DonHang_TX
@MATX CHAR(10),
@TGBD DATETIME,
@TGKT DATETIME
AS
	IF EXISTS(SELECT MATX FROM TAIXE WHERE MATX=@MATX)
	SELECT * FROM DON_DH DH JOIN KHACHHANG KH ON DH.MAKH=KH.MAKH JOIN TAIXE TX ON DH.MATX=TX.MATX JOIN CHINHANH CN ON DH.MACN=CN.MACN JOIN CUAHANG CH ON CH.MACN=CN.MACN
	WHERE TX.MATX=@MATX
	ELSE
	RAISERROR ('KHONG TON TAI TAI XE',16,1)
GO
-- LẤY ĐƠN HÀNG CHI NHANH
CREATE PROC sp_DonHang_CN
@MACN CHAR(10),
@TGBD DATETIME,
@TGKT DATETIME
AS
	IF EXISTS(SELECT MACN FROM CHINHANH WHERE MACN=@MACN)
	SELECT * FROM DON_DH DH JOIN KHACHHANG KH ON DH.MAKH=KH.MAKH JOIN TAIXE TX ON DH.MATX=TX.MATX JOIN CHINHANH CN ON DH.MACN=CN.MACN JOIN CUAHANG CH ON CH.MACN=CN.MACN
	WHERE CN.MACN=@MACN
	ELSE
	RAISERROR ('KHONG TON TAI CHI NHANH',16,1)
GO
-- LẤY ĐƠN HÀNG DOI TAC
CREATE PROC sp_DonHang_DT
@MADT CHAR(10),
@TGBD DATETIME,
@TGKT DATETIME
AS
	IF EXISTS(SELECT MADOITAC FROM DOITAC WHERE MADOITAC=@MADT)
	SELECT * FROM DON_DH DH JOIN KHACHHANG KH ON DH.MAKH=KH.MAKH JOIN TAIXE TX ON DH.MATX=TX.MATX JOIN CHINHANH CN ON DH.MACN=CN.MACN JOIN CUAHANG CH ON CH.MACN=CN.MACN JOIN DOITAC DT ON DT.MADOITAC=CN.MADT
	WHERE DT.MADOITAC=@MADT
	ELSE
	RAISERROR ('KHONG TON TAI DOI TAC',16,1)
GO
CREATE PROC sp_Lay_CN
@MACN CHAR(10)
AS
	IF EXISTS(SELECT MACN FROM CHINHANH WHERE MACN=@MACN)
	BEGIN
	SELECT * FROM CHINHANH CN JOIN CUAHANG CH ON CN.MACN=CN.MACN
	WHERE CN.MACN=@MACN
	SELECT * FROM THUCDON WHERE MACN=@MACN
	END
	ELSE
	RAISERROR ('KHONG TON TAI CHI NHANH',16,1)
GO
-- Tạo thực đơn
CREATE TYPE list_MONAN as TABLE (STT INT,MAMONAN CHAR(10),SOLUONG INT)
GO
CREATE PROC sp_Tao_DH
@HINHTHUCTT CHAR(20),
@MADIACHI CHAR(10),
@MAKH CHAR(10),
@MACN CHAR(10),
@PHIVANCHUYEN INT,
@list_MONAN list_MONAN READONLY
--@MONAN TABLE(MAMONAN CHAR(10),SOLUONG INT)
AS
BEGIN TRAN
	IF (@HINHTHUCTT='CHUYEN KHOAN' OR @HINHTHUCTT='VI' OR @HINHTHUCTT='NGAN HANG')
	BEGIN
		SELECT *FROM @list_MONAN
		IF NOT EXISTS(SELECT MACN FROM CUAHANG WHERE MACN=@MACN AND CAST(GETDATE() AS TIME) BETWEEN TG_HD_MO AND TG_HD_DONG AND TINHTRANGCH ='AVAILABLE')
		BEGIN
			ROLLBACK TRAN
			RAISERROR ('CUA HANG KHONG HOAT DONG',16,1)
			RETURN
		END
		DECLARE @MADH INT
		EXEC sp_IDMAX 'DON_DH',@MADH OUT
		--IF NOT EXISTS (SELECT MADIACHI FROM DIACHI WHERE MADIACHI=@MADIACHI)
		--BEGIN
		--	ROLLBACK TRAN
		--	RAISERROR ('KHONG TON TAI DIA CHI',16,1)
		--	RETURN
		--END
		DECLARE @MAKHUVUC CHAR(10)=NULL-- (SELECT KV.MAKHUVUC FROM DIACHI DC JOIN PHUONG P ON DC.MAPHUONG=P.MAPHUONG JOIN QUANHUYEN QH ON QH.MAHUYEN=P.MAHUYEN JOIN KHUVUC KV ON QH.MAKHUVUC=KV.MAKHUVUC WHERE MADC=DC.MADC)
		DECLARE @NGAYTAO DATETIME=GETDATE()
		EXEC sp_ThemDonDH @MADH,'AVAILABLE',@NGAYTAO,@HINHTHUCTT,0,@PHIVANCHUYEN,@MAKH,@MADIACHI,@MACN,NULL,@MAKHUVUC
		IF @@ERROR<>0
		BEGIN
			ROLLBACK TRAN
			RAISERROR ('KHONG TAO DUOC DON HANG',16,1)
			RETURN
		END
		DECLARE @STT INT =(SELECT MAX(STT) FROM @list_MONAN)
		DECLARE @I INT =1
		WHILE (@I<=@STT)
		BEGIN
			DECLARE @MAMONAN CHAR(10)
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
		
	END
	ELSE
	BEGIN
		ROLLBACK TRAN
		RAISERROR ('HINH THUC THANH TOAN KHONG HOP LE',16,1)
		RETURN
	END

COMMIT
GO

-- cập nhật trạng thái đơn hàng của tài xế
CREATE PROC sp_CapNhat_DH_TX
@TRANGTHAIDH CHAR(20),
@MATX CHAR(10),
@MADH CHAR(10)
AS
BEGIN TRAN
	IF NOT EXISTS(SELECT MADH FROM DON_DH WHERE MADH=@MADH)
	BEGIN
			ROLLBACK TRAN
			RAISERROR ('KHONG TON TAI DON HANG',16,1)
			RETURN
	END
	IF NOT EXISTS(SELECT MATX FROM TAIXE WHERE MATX=@MATX)
	BEGIN
			ROLLBACK TRAN
			RAISERROR ('KHONG TON TAI TAI XE',16,1)
			RETURN
	END
	IF (@TRANGTHAIDH='DELIVERING')
	BEGIN
		IF NOT EXISTS (SELECT MADH FROM DON_DH WHERE MADH=@MADH AND TRANGTHAIDH='PROCESSING')
		BEGIN
			ROLLBACK TRAN
			RAISERROR ('KHONG NHAN DON DUOC',16,1)
			RETURN
		END
		UPDATE DON_DH SET MATX=@MATX,TRANGTHAIDH=@TRANGTHAIDH WHERE MADH=@MADH AND TRANGTHAIDH='PROCESSING'
		IF @@ERROR <>0
		BEGIN
			ROLLBACK TRAN
			RAISERROR ('KHONG NHAN DON DUOC',16,1)
			RETURN
		END
		COMMIT TRAN
		RETURN
	END
	IF (@TRANGTHAIDH='DELIVERED')
	BEGIN
		IF NOT EXISTS (SELECT MADH FROM DON_DH WHERE MADH=@MADH AND MATX=@MATX AND TRANGTHAIDH='DELIVERING')
		BEGIN
			ROLLBACK TRAN
			RAISERROR ('KHONG NHAN DON DUOC',16,1)
			RETURN
		END
		UPDATE DON_DH SET TRANGTHAIDH=@TRANGTHAIDH WHERE MADH=@MADH AND MATX=@MATX AND TRANGTHAIDH='DELIVERING'
		IF @@ERROR <>0
		BEGIN
			ROLLBACK TRAN
			RAISERROR ('KHONG NHAN DON DUOC',16,1)
			RETURN
		END
		COMMIT TRAN
		RETURN
	END

	RAISERROR ('TINH TRANG KHÒNG PHU HOP',16,1)
	ROLLBACK TRAN

	
GO
-- cập nhật trạng thái đơn hàng của khách hàng
CREATE PROC sp_CapNhat_DH_KH
@TRANGTHAIDH CHAR(20),
@MAKH CHAR(10),
@MADH CHAR(10)
AS
BEGIN TRAN
	IF NOT EXISTS(SELECT MADH FROM DON_DH WHERE MADH=@MADH)
	BEGIN
			ROLLBACK TRAN
			RAISERROR ('KHONG TON TAI DON HANG',16,1)
			RETURN
	END
	IF NOT EXISTS(SELECT MAKH FROM KHACHHANG WHERE MAKH=@MAKH)
	BEGIN
			ROLLBACK TRAN
			RAISERROR ('KHONG TON TAI KHACH HANG',16,1)
			RETURN
	END
	IF (@TRANGTHAIDH='CANCELED')
	BEGIN
		IF NOT EXISTS (SELECT MADH FROM DON_DH WHERE MADH=@MADH AND MAKH=@MAKH AND TRANGTHAIDH='AVAILABLE')
		BEGIN
			ROLLBACK TRAN
			RAISERROR ('KHONG HUY DON DUOC',16,1)
			RETURN
		END
		UPDATE DON_DH SET TRANGTHAIDH=@TRANGTHAIDH WHERE MADH=@MADH AND MAKH=@MAKH AND TRANGTHAIDH='AVAILABLE'
		IF @@ERROR <>0
		BEGIN
			ROLLBACK TRAN
			RAISERROR ('KHONG HUY DON DUOC',16,1)
			RETURN
		END
		COMMIT TRAN
		RETURN
	END


	RAISERROR ('TINH TRANG KHÒNG PHU HOP',16,1)
	ROLLBACK TRAN

	
GO
-- cập nhật trạng thái đơn hàng của chi nhánh
CREATE PROC sp_CapNhat_DH_CN
@TRANGTHAIDH CHAR(20),
@MACN CHAR(10),
@MADH CHAR(10)
AS
BEGIN TRAN
	IF NOT EXISTS(SELECT MADH FROM DON_DH WHERE MADH=@MADH )
	BEGIN
			ROLLBACK TRAN
			RAISERROR ('KHONG TON TAI DON HANG',16,1)
			RETURN
	END
	IF NOT EXISTS(SELECT MACN FROM CHINHANH WHERE MACN=@MACN)
	BEGIN
			ROLLBACK TRAN
			RAISERROR ('KHONG TON TAI CHI NHANH',16,1)
			RETURN
	END
	IF (@TRANGTHAIDH='PROCESSING' OR @TRANGTHAIDH='CANCELED' )
	BEGIN
		IF NOT EXISTS(SELECT MADH FROM DON_DH WHERE MADH=@MADH AND MACN=@MACN AND TRANGTHAIDH='AVAILABLE')
		BEGIN
			ROLLBACK TRAN
			RAISERROR ('KHONG NHAN DON DUOC',16,1)
			RETURN
		END
		UPDATE DON_DH SET TRANGTHAIDH=@TRANGTHAIDH WHERE MADH=@MADH AND MACN=@MACN AND TRANGTHAIDH='AVAILABLE'
		IF @@ERROR <>0
		BEGIN
			ROLLBACK TRAN
			RAISERROR ('KHONG NHAN DON DUOC',16,1)
			RETURN
		END
		COMMIT TRAN
		RETURN
	END


	RAISERROR ('TINH TRANG KHÒNG PHU HOP',16,1)
	ROLLBACK TRAN

	
GO
--Thêm thực đơn--
CREATE PROC sp_ThemThucDon
	@TENMONAN VARCHAR(100),
	@MOTA NVARCHAR (80),
	@GIA INT,
	@HINHANHTD BIT,
	@DIACHIHINHANHTD VARCHAR(max),
	@MACN CHAR(10),
	@MALAT CHAR(10)

AS
BEGIN TRAN 
	
	IF NOT EXISTS(SELECT MACN  FROM CHINHANH WHERE MACN=@MACN)
	BEGIN
			ROLLBACK TRAN
			RAISERROR ('KHONG TON TAI CHI NHANH',16,1)
			RETURN
	END
	IF NOT EXISTS(SELECT MALAT  FROM LOAIAMTHUC WHERE MALAT=@MALAT)
	BEGIN
			ROLLBACK TRAN
			RAISERROR ('KHONG TON TAI LOAI AM THUC NAY',16,1)
			RETURN
	END
	IF EXISTS (SELECT MAMONAN FROM THUCDON WHERE  MACN=@MACN AND TENMONAN=@TENMONAN)
	BEGIN
			ROLLBACK TRAN
			RAISERROR ('DA TON TAI MON AN NAY',16,1)
			RETURN
	END
	DECLARE @MAMONAN CHAR(10)
	EXEC sp_IDMAX 'THUCDON',@MAMONAN OUT
	INSERT INTO THUCDON
	VALUES
		(@MAMONAN,	@TENMONAN,	@MOTA,	@GIA,'AVAILABLE',	@HINHANHTD,	@DIACHIHINHANHTD, @MACN, @MALAT)
	IF @@ERROR<>0
	BEGIN
		PRINT 'KHONG THEM MON DUOC'
		ROLLBACK TRAN
		RETURN
	END
COMMIT TRAN
RETURN
GO
-- Thêm loại ẩm thực
CREATE PROC sp_ThemLoaiAmThuc
	@TENLAT NCHAR(20)

AS
BEGIN TRAN 
	
	IF EXISTS (SELECT @TENLAT FROM LOAIAMTHUC WHERE TENLAT=@TENLAT)
	BEGIN

		ROLLBACK TRAN
		RAISERROR ('DA TON TAI LOAI AM THUC NAY',16,1)
		RETURN
	END	
	DECLARE @MALAT CHAR(10)
	EXEC sp_IDMAX 'LOAIAMTHUC',@MALAT OUT
	PRINT @MALAT
	INSERT INTO LOAIAMTHUC
	VALUES
		(@MALAT, @TENLAT)
	IF @@ERROR<>0
	BEGIN
		ROLLBACK TRAN
		RAISERROR ('KHONG THEM LOAI AM THUC DUOC',16,1)
		RETURN
	END
COMMIT TRAN
RETURN
GO
-- Tạo hợp đồng cho đối tác
CREATE TYPE list_ChiNhanh as TABLE (STT INT,MATKNGANHANG CHAR(10),MADIACHI CHAR(10),TENTK VARCHAR(50),MATKHAUTK VARCHAR(50))
GO
CREATE PROC sp_KyHopDong
	@PHIKH INT,
	@THOIHAN INT,
	@MADOITAC CHAR(10),
	@list_ChiNhanh list_ChiNhanh READONLY

AS
BEGIN TRAN 
-- tạo hợp đồng
IF NOT EXISTS(SELECT MADOITAC FROM DOITAC WHERE MADOITAC=@MADOITAC)
BEGIN
	ROLLBACK TRAN
	RAISERROR ('KHONG TON TAI DOI TAC',16,1)
	RETURN
END
DECLARE @MAHD CHAR(10)
EXEC sp_IDMAX 'HOPDONG',@MAHD OUT
EXEC sp_ThemHopDong @MAHD,0,@PHIKH,@MADOITAC
IF @@ERROR<>0
BEGIN
	ROLLBACK TRAN
	RAISERROR ('KHONG TON TAO HOP DONG DUOC',16,1)
	RETURN
END
-- tạo thông tin hợp đồng
IF NOT EXISTS(SELECT MAHH FROM THONGTIN_HOAHONG WHERE GETDATE() BETWEEN NGAYBD AND NGAYHH)
BEGIN
	ROLLBACK TRAN
	RAISERROR ('KHONG CO THONG TIN HOA HONG',16,1)
	RETURN
END

DECLARE @MAHH CHAR(10)=(SELECT MAHH FROM THONGTIN_HOAHONG WHERE GETDATE() BETWEEN NGAYBD AND NGAYHH)
EXEC sp_ThemThongTinHopDong @MAHD,1,@THOIHAN,NULL,NULL,@MAHH,NULL
IF @@ERROR<>0
BEGIN
	ROLLBACK TRAN
	RAISERROR ('KHONG TON TAO HOP DONG DUOC',16,1)
	RETURN
END

-- tạo chi nhánh
DECLARE @SL INT=(SELECT MAX(STT) FROM @list_ChiNhanh)
IF(@SL<=0)
BEGIN
	ROLLBACK TRAN
	RAISERROR ('THIEU THONG TIN CHI NHANH',16,1)
	RETURN
END
DECLARE @I INT=1
WHILE (@I<=@SL)
BEGIN
	DECLARE @TENTK VARCHAR(50)
	DECLARE @MATKHAUTK VARCHAR(50)
	DECLARE @MATKNGANHANG CHAR(10)
	DECLARE @MADIACHI CHAR(10)
	DECLARE @MATK CHAR(10)
	
	SELECT @MADIACHI=MADIACHI,@MATKNGANHANG=MATKNGANHANG,@TENTK=TENTK,@MATKHAUTK=MATKHAUTK FROM @list_ChiNhanh WHERE STT=@I
	EXEC sp_IDMAX 'TAIKHOAN',@MATK OUT
	EXEC sp_ThemTaiKhoan @MATK,@TENTK,'BLOCKED',@MATKHAUTK,3
	IF @@ERROR<>0
	BEGIN
		ROLLBACK TRAN
		RAISERROR ('TAI KHOAN CHI NHANH DA TON TAI',16,1)
		RETURN
	END

	DECLARE @MACN CHAR(10)
	EXEC sp_IDMAX 'CHINHANH',@MACN OUT
	EXEC sp_ThemChiNhanh @MACN,NULL,0,NULL,@MATKNGANHANG,@MATK,@MADIACHI,@MADOITAC
	IF @@ERROR<>0
	BEGIN
		ROLLBACK TRAN
		RAISERROR ('KHONG THEM CHI NHANH DUOC',16,1)
		RETURN
	END

	EXEC sp_ThemHopDongChiNhanh @MACN,@MAHD
	IF @@ERROR<>0
	BEGIN
		ROLLBACK TRAN
		RAISERROR ('TAO HOP DONG THAT BAI ',16,1)
		RETURN
	END
	UPDATE HOPDONG SET SL_CN_DK=SL_CN_DK+1 WHERE MAHD=@MAHD
	IF @@ERROR<>0
	BEGIN
		ROLLBACK TRAN
		RAISERROR ('TAO HOP DONG THAT BAI ',16,1)
		RETURN
	END
	SET @I=@I+1

END
COMMIT TRAN
GO
-- Insert loại ẩm thực
CREATE PROC sp_insert_LAT
AS
	EXEC sp_ThemLoaiAmThuc 'MILKTEA'
	EXEC sp_ThemLoaiAmThuc 'NOODDLE'
	EXEC sp_ThemLoaiAmThuc 'BUN BO'
	EXEC sp_ThemLoaiAmThuc 'CAKE'
	EXEC sp_ThemLoaiAmThuc 'SNACK'
	EXEC sp_ThemLoaiAmThuc 'MAIN DISH'
GO
CREATE PROC sp_ThemHoaHong
	@NGAYBD DATE,
	@NGAYKT DATE,
	@PTHH INT
AS
BEGIN TRAN
	DECLARE @MAHH CHAR(10)
	EXEC sp_IDMAX 'HOAHONG',@MAHH OUT
	INSERT INTO THONGTIN_HOAHONG
	VALUES
		(@MAHH,@NGAYBD,@NGAYKT,@PTHH)
	IF @@ERROR<>0
	BEGIN 
		PRINT N'LỖI HỆ THỐNG'
		ROLLBACK TRAN
		RETURN 
	END 
COMMIT TRAN
return 
GO
-- //////////////////////TEST//////////////////////////////
EXEC sp_ThemPhamVi
EXEC sp_CapNhatPhamVi
EXEC sp_ThemHoaHong '01/01/2020','01/01/2025',10
EXEC sp_DANGKYKH '123','123'
EXEC sp_DANGKYTX 'TAIXE','123','taigavn113@gmail.com','TAI','012345678','61D1.42558','0123'
EXEC sp_DANGKYDT 'DOITAC','123','Pmt@gmail.com',N'Cơm nhà làm','0123456','mail@mail','0123456',0,50
EXEC sp_DANGKYQTV 'Admin1','123','admin1',N'Phạm Minh Tài','0123456'
EXEC sp_DANGKYNV 'NHANVIEN1','123','HELLO',N'Phạm Minh Tài','0123456'
EXEC sp_DANGKYNGANHANG '1',1,N'DĨ AN',N'TPBANK','01234456'
EXEC sp_DANGKYNGANHANG '1',2,N'DĨ AN',N'TPBANK','01234456'
EXEC sp_ThemChiNhanh '0',null,0,null,null,null,null,'1'
EXEC  sp_ThemCuaHang '0','BOBABOP','8:00','23:59','AVAILABLE'
EXEC sp_insert_LAT

EXEC sp_ThemThucDon 'chicken burger',NULL,20000,0,'https://i.postimg.cc/8z4jH0mR/chicken-burger.jpg','1','0'
EXEC sp_ThemThucDon 'chicken deluxe fry',NULL,30000,0,'https://i.postimg.cc/DzhPWHy1/chicken-deluxe-fry.jpg','1','0'	
EXEC sp_ThemThucDon 'chicken malai gravy',NULL,400000,0,'https://i.postimg.cc/qRSL7Rtv/chicken-malai-gravy.jpg','1','0'
EXEC sp_ThemThucDon 'chicken malai gravy 123',NULL,400000,0,'https://i.postimg.cc/NMQwJWP3/chicken-pizza.jpg','1','0'

EXEC sp_MonAn_TheoGia 1,'INCREASE'
EXEC sp_Lay_CN '1'
SELECT * from PHAMVIBANG 
SELECT * FROM KHACHHANG 
SELECT * FROM TAIKHOAN
SELECT *FROM TAIXE
SELECT * FROM DOITAC
SELECT *FROM NHANVIEN
SELECT * FROM NGANHANG
SELECT * FROM PHUONG
SELECT * FROM CHINHANH
SELECT *FROM THUCDON
SELECT * FROM DON_DH
SELECT * FROM THUCDONDATHANG
SELECT *FROM LOAIAMTHUC
select * from THONGTIN_HOAHONG
select * from HOPDONG
select *from HOPDONGCHINHANH
select *from THONGTIN_HOPDONG
--EXEC sp_ThemThucDonDatHang '6','1',3

print convert (int,'123')