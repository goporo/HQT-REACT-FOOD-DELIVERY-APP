﻿USE master
GO
IF DB_ID('QL_BANHANG') IS NOT NULL
	DROP DATABASE QL_BANHANG
GO

CREATE DATABASE QL_BANHANG
GO

USE QL_BANHANG
GO 

CREATE TABLE KHACHHANG
(
	MANGUOIDUNG CHAR(10) UNIQUE,
	EMAIL VARCHAR(50 )UNIQUE,
	TEN NVARCHAR(50),
	SDT CHAR(10),
	NGAYTG DATETIME,
	HINHANHND  BIT,
	DIACHIHINHANHND VARCHAR(100),
	MASTKNGANHANG CHAR(10),
	MATK CHAR(10),
	MADIACHI CHAR(10),
	DIACHI NVARCHAR(50),
	SODUVI INT
	
	PRIMARY KEY(MANGUOIDUNG)
)

CREATE TABLE TAIKHOAN
(
	MATK CHAR(10), 
	TENTK VARCHAR(50),
	TINHTRANGTK NVARCHAR(30),
	MATKHAUTK VARCHAR(50),
	LOAITK INT

	PRIMARY KEY(MATK)
)

CREATE TABLE NGANHANG
(
	MASTKNGANHANG CHAR(10),
	TENNGANHANG NVARCHAR(50),
	TENCHINHANH NVARCHAR(50),
	STK CHAR(13)

	PRIMARY KEY(MASTKNGANHANG)
)

CREATE TABLE DON_DH
(
	MADH CHAR(10),
	TRANGTHAIDH NCHAR(20),
	NGAYLAP DATE,
	HINHTHUCTT NCHAR(20),
	PHISP int,
	PHIVANCHUYEN int,
	MAKH CHAR(10),
	TENKH NVARCHAR(50),
	SDTKH CHAR(10),
	MADCGH CHAR(10),
	DIACHIGH NVARCHAR(50),
	MACN CHAR(10),
	TENCN NCHAR(20),
	DIACHICN NVARCHAR(50),
	MADT CHAR(10),
	PTHH INT,
	MATX CHAR(10),
	TENTX NVARCHAR(50),
	MAKHUVUC CHAR(10)

	PRIMARY KEY (MADH)
)

CREATE TABLE DANHGIA
(
	MADANHGIA CHAR(10),
	MADH CHAR(10),
	NGAYLAP DATETIME,
	RATING FLoat,
	LOAI NCHAR(10),
	NOIDUNG NVARCHAR(100),
	MACN CHAR(10),
	MADT CHAR(10),

	PRIMARY KEY(MADANHGIA, MADH)
)

CREATE TABLE DIACHI
(
	MADIACHI CHAR(10),
	SONHA VARCHAR(20),
	MADUONG CHAR(10)

	PRIMARY KEY (MADIACHI)
)

CREATE TABLE DUONG
(
	MADUONG CHAR(10),
	TENDUONG NVARCHAR(50),
	MAHUYEN CHAR(10)

	PRIMARY KEY (MADUONG)
)

CREATE TABLE QUAN_HUYEN
(
	MAHUYEN CHAR(10),
	TENHUYEN NVARCHAR(50),
	MAKHUVUC CHAR(10)

	PRIMARY KEY (MAHUYEN)
)

CREATE TABLE KHUVUC
(
	MAKHUVUC CHAR(10),
	TENKHUVUC NVARCHAR(50),
	MACUOC CHAR(10),
	

	PRIMARY KEY (MAKHUVUC)
)

CREATE TABLE GIACUOC
(
	MACUOC CHAR(10),
	GIACUOC INT,
	KHOANGCACH INT,
	NGAYTAO DATE,
	THOIGIANHIEULUC DATETIME,
	DONVITIEN CHAR(10),
	MAQTV CHAR(10)

	PRIMARY KEY (MACUOC)
)

CREATE TABLE TAIXE
(
	MATX CHAR(10) UNIQUE,
	EMAIL VARCHAR(50)UNIQUE,
	TEN NVARCHAR(50),
	NGAYTG DATETIME,
	HINHANHND BIT,
	DIACHIHINHANHND VARCHAR(100),
	SDT CHAR(10),
	BIENSOXE CHAR(10) UNIQUE,
	PHITHECHAN INT,
	CMND CHAR(12) UNIQUE,
	MAKHUVUCHD CHAR(10),
	MATKNGANHANG CHAR(10),
	MATK CHAR(10) UNIQUE,
	MADIACHI CHAR(10)

	PRIMARY KEY(MATX)
)

CREATE TABLE QUANTRIVIEN 
(
	MAQTV CHAR(10) UNIQUE,
	EMAIL VARCHAR(50)UNIQUE,
	MATK CHAR(10)UNIQUE,
	TEN NVARCHAR(50),
	SDT CHAR(10),
	HINHANHND BIT,
	DIACHIHINHANHND VARCHAR(100),
	LUONGQTV INT,
	MATKNGANHANG CHAR(10),
	MADIACHI CHAR(10)

	PRIMARY KEY (MAQTV)
)

CREATE TABLE QUYENTHAOTAC
(
	MATK CHAR(10),
	MAQTV CHAR(10),
	MATHAOTAC CHAR(10),
	MATHUOCTINH CHAR(10),
	DUOCPHEP BIT

	PRIMARY KEY (MATK, MAQTV, MATHAOTAC, MATHUOCTINH)
)

CREATE TABLE THAOTAC
(
	MATHAOTAC CHAR(10),
	TENTHAOTAC NCHAR(20)

	PRIMARY KEY (MATHAOTAC)
)

CREATE TABLE THUOCTINH
(
	MATHUOCTINH CHAR(10),
	TENTHUOCTINH NCHAR(20),
	MAPHAMVI CHAR(10),
	
	PRIMARY KEY (MATHUOCTINH)
)

CREATE TABLE PHAMVIBANG
(
	MAPHAMVI CHAR(10),
	TENPHAMVI NCHAR(20),
	IDMAX int,

	PRIMARY KEY (MAPHAMVI)
)

CREATE TABLE NHANVIEN
(
	MANHANVIEN CHAR(10) UNIQUE,
	EMAIL VARCHAR(50)UNIQUE,
	TEN NVARCHAR(20),
	SDT CHAR(10),
	HINHANHND BIT,
	DIACHIHINHANHND VARCHAR(100),
	NGAYTG DATE,
	LUONGNV MONEY,
	MATKNGANHANG CHAR(10),
	MATK CHAR(10)UNIQUE ,
	MADIACHI CHAR(10)

	PRIMARY KEY (MANHANVIEN)
)

CREATE TABLE HOPDONG
(
	MAHD CHAR(10),
	SL_CN_DK INT,
	PHIKH INT,
	NGAYLAP DATE,
	MADOITAC CHAR(10),
	MANHANVIEN CHAR(10)

	PRIMARY KEY (MAHD)
)


CREATE TABLE THONGTIN_HOPDONG
(
	MAHD CHAR(10),
	STT int,
	TGBD DATETIME,
	TGHH DATETIME,
	PTHH INT,


	PRIMARY KEY (MAHD,STT)
)
CREATE TABLE DOITAC
(
	MADOITAC CHAR(10) UNIQUE,
	EMAILDT VARCHAR(50) UNIQUE,
	TENDT NVARCHAR(50),
	NGAYTG DATETIME,
	HINHANHND  BIT,
	DIACHIHINHANHND VARCHAR(100),
	SDTDT CHAR(10),
	MSTHUE CHAR(10)UNIQUE,
	MAIL_NDD VARCHAR(50),
	SLDUKIENMIN INT,
	SLDUKIENMAX INT,
	MATKNGANHANG CHAR(10),
	MATK CHAR(10) UNIQUE,
	MADIACHI CHAR(10),
	NGAYDK DATE
	PRIMARY KEY (MADOITAC)
)

CREATE TABLE LOAIAMTHUCDOITAC 
(
	MALAT CHAR(10), 
	MADT CHAR(10)
	
	PRIMARY KEY (MALAT, MADT)
)

CREATE TABLE CHINHANH
(

	MACN CHAR(10) UNIQUE,
	SDT_CN CHAR(10),
	NGAYTG DATE,
	MATK CHAR(10)UNIQUE,
	MATKNGANHANG CHAR(10),
	MADIACHI CHAR(10),
	DIACHI NCHAR(50),
	PTHH INT,
	MADT CHAR(10)
	PRIMARY KEY (MACN)
)

CREATE TABLE HOPDONGCHINHANH
(
	MACN CHAR(10),
	MAHD CHAR(10)

	PRIMARY KEY (MACN, MAHD)
)

CREATE TABLE CUAHANG
(
    MACN CHAR(10),
	TENCH NVARCHAR(50),
	TG_HD_MO TIME,
	TG_HD_DONG TIME,
	TINHTRANGCH NCHAR(20),
	HINHANHND BIT,
	DIACHIHINHANHND VARCHAR(100),
	TGCAPNHATSOLIEU DATETIME,
	SLDH INT,
	DANHGIATB FLOAT,
	PRIMARY KEY (MACN)
)

CREATE TABLE LOAIAMTHUC
(
	MALAT CHAR(10),
	TENLAT NCHAR(20)

	PRIMARY KEY (MALAT)
)

CREATE TABLE THUCDON
(
	MAMONAN CHAR(10),
	TENMONAN NVARCHAR(50),
	MOTA NVARCHAR (80),
	GIA INT,
	TINHTRANG NCHAR(20),
	HINHANHTD BIT,
	DIACHIHINHANHTD VARCHAR(100),
	TGCAPNHATSOLIEU DATETIME,
	SLDH INT,
	MACN CHAR(10),
	MALAT CHAR(10)

	PRIMARY KEY (MAMONAN)
)

CREATE TABLE TUYCHONMONAN
(
	MATUYCHON CHAR(10),
	TENTUYCHON NCHAR(20),
	MUCDO NCHAR(20),
	MAMONAN CHAR(10)

	PRIMARY KEY (MATUYCHON)
)

CREATE TABLE THUCDONDATHANG
(
	MAMONAN CHAR(10),
	TENMONAN NVARCHAR(50),
	MADH CHAR(10),
	NGAYLAP DATE,
	GIABAN INT,
	SOLUONG INT,
	PRIMARY KEY (MAMONAN, MADH)
)

CREATE TABLE TUYCHONMONDATHANG
(
	MATUYCHON CHAR(10),
	MADH CHAR(10),

	PRIMARY KEY (MATUYCHON, MADH)
)

ALTER TABLE DIACHI
ADD 
	CONSTRAINT FK_DC_D
	FOREIGN KEY (MADUONG)
	REFERENCES DUONG(MADUONG)

ALTER TABLE DUONG
ADD 
	CONSTRAINT FK_D_QH
	FOREIGN KEY (MAHUYEN)
	REFERENCES QUAN_HUYEN(MAHUYEN)

ALTER TABLE QUAN_HUYEN
ADD 
	CONSTRAINT FK_QH_KV
	FOREIGN KEY (MAKHUVUC)
	REFERENCES KHUVUC(MAKHUVUC)

ALTER TABLE KHUVUC
ADD 
	CONSTRAINT FK_KV_GC
	FOREIGN KEY (MACUOC)
	REFERENCES GIACUOC(MACUOC)

ALTER TABLE TAIXE
ADD 
	CONSTRAINT FK_TX_KV
	FOREIGN KEY (MAKHUVUCHD)
	REFERENCES KHUVUC(MAKHUVUC),

	CONSTRAINT FK_TX_NH
	FOREIGN KEY (MATKNGANHANG)
	REFERENCES NGANHANG(MASTKNGANHANG),

	CONSTRAINT FK_TX_TK
	FOREIGN KEY (MATK)
	REFERENCES TAIKHOAN(MATK),

	CONSTRAINT FK_TX_DC
	FOREIGN KEY (MADIACHI)
	REFERENCES DIACHI(MADIACHI)

ALTER TABLE QUANTRIVIEN
ADD 
	CONSTRAINT FK_QTV_NH
	FOREIGN KEY (MATKNGANHANG)
	REFERENCES NGANHANG(MASTKNGANHANG),

	CONSTRAINT FK_QTV_TK
	FOREIGN KEY (MATK)
	REFERENCES TAIKHOAN(MATK),

	CONSTRAINT FK_QTV_DC
	FOREIGN KEY (MADIACHI)
	REFERENCES DIACHI(MADIACHI)

ALTER TABLE QUYENTHAOTAC
ADD 
	CONSTRAINT FK_QTT_QTV
	FOREIGN KEY (MAQTV)
	REFERENCES QUANTRIVIEN(MAQTV),

	CONSTRAINT FK_QTT_TK
	FOREIGN KEY (MATK)
	REFERENCES TAIKHOAN(MATK),

	CONSTRAINT FK_QTT_TTINH
	FOREIGN KEY (MATHUOCTINH)
	REFERENCES THUOCTINH(MATHUOCTINH),

	CONSTRAINT FK_QTT_TTAC
	FOREIGN KEY (MATHAOTAC)
	REFERENCES THAOTAC(MATHAOTAC)

ALTER TABLE THUOCTINH
ADD 
	CONSTRAINT FK_TT_PVB
	FOREIGN KEY (MAPHAMVI)
	REFERENCES PHAMVIBANG(MAPHAMVI)

ALTER TABLE NHANVIEN
ADD 
	CONSTRAINT FK_NV_NH
	FOREIGN KEY (MATKNGANHANG)
	REFERENCES NGANHANG(MASTKNGANHANG),

	CONSTRAINT FK_NV_TK
	FOREIGN KEY (MATK)
	REFERENCES TAIKHOAN(MATK),

	CONSTRAINT FK_NV_DC
	FOREIGN KEY (MADIACHI)
	REFERENCES DIACHI(MADIACHI)

ALTER TABLE HOPDONG
ADD 
	CONSTRAINT FK_HD_DT
	FOREIGN KEY (MADOITAC)
	REFERENCES DOITAC(MADOITAC),

	CONSTRAINT FK_HD_NV
	FOREIGN KEY (MANHANVIEN)
	REFERENCES NHANVIEN(MANHANVIEN)

ALTER TABLE DOITAC
ADD 
	CONSTRAINT FK_DT_NH
	FOREIGN KEY (MATKNGANHANG)
	REFERENCES NGANHANG(MASTKNGANHANG),

	CONSTRAINT FK_DT_TK
	FOREIGN KEY (MATK)
	REFERENCES TAIKHOAN(MATK),

	CONSTRAINT FK_DT_DC
	FOREIGN KEY (MADIACHI)
	REFERENCES DIACHI(MADIACHI)

ALTER TABLE LOAIAMTHUCDOITAC
ADD 
	CONSTRAINT FK_LATDT_DT
	FOREIGN KEY (MADT)
	REFERENCES DOITAC(MADOITAC),

	CONSTRAINT FK_LATDT_LAT
	FOREIGN KEY (MALAT)
	REFERENCES LOAIAMTHUC(MALAT)

ALTER TABLE CHINHANH
ADD 
	CONSTRAINT FK_CN_NH
	FOREIGN KEY (MATKNGANHANG)
	REFERENCES NGANHANG(MASTKNGANHANG),

	CONSTRAINT FK_CN_TK
	FOREIGN KEY (MATK)
	REFERENCES TAIKHOAN(MATK),

	CONSTRAINT FK_CN_DC
	FOREIGN KEY (MADIACHI)
	REFERENCES DIACHI(MADIACHI),

	CONSTRAINT FK_CN_DT
	FOREIGN KEY (MADT)
	REFERENCES DOITAC(MADOITAC)

ALTER TABLE HOPDONGCHINHANH
ADD 
	CONSTRAINT FK_HDCN_CN
	FOREIGN KEY (MACN)
	REFERENCES CHINHANH(MACN),

	CONSTRAINT FK_HDCN_HD
	FOREIGN KEY (MAHD)
	REFERENCES HOPDONG(MAHD)

ALTER TABLE THUCDON
ADD 
	CONSTRAINT FK_TD_CN
	FOREIGN KEY (MACN)
	REFERENCES CHINHANH(MACN),

	CONSTRAINT FK_TD_LAT
	FOREIGN KEY (MALAT)
	REFERENCES LOAIAMTHUC(MALAT)

ALTER TABLE TUYCHONMONAN
ADD 
	CONSTRAINT FK_TCMA_TD
	FOREIGN KEY (MAMONAN)
	REFERENCES THUCDON(MAMONAN)

ALTER TABLE THUCDONDATHANG
ADD 
	CONSTRAINT FK_TDDH_TD
	FOREIGN KEY (MAMONAN)
	REFERENCES THUCDON(MAMONAN),

	CONSTRAINT FK_TDDH_DH
	FOREIGN KEY (MADH)
	REFERENCES DON_DH(MADH)

ALTER TABLE TUYCHONMONDATHANG
ADD 
	CONSTRAINT FK_TCMDH_TCMA
	FOREIGN KEY (MATUYCHON)
	REFERENCES TUYCHONMONAN(MATUYCHON),

	CONSTRAINT FK_TCMDH_DH
	FOREIGN KEY (MADH)
	REFERENCES DON_DH(MADH)

ALTER TABLE KHACHHANG
ADD 
	CONSTRAINT FK_KH_NH
	FOREIGN KEY (MASTKNGANHANG)
	REFERENCES NGANHANG(MASTKNGANHANG),

	CONSTRAINT FK_KH_TK
	FOREIGN KEY (MATK)
	REFERENCES TAIKHOAN(MATK),

	CONSTRAINT FK_KH_DC
	FOREIGN KEY (MADIACHI)
	REFERENCES DIACHI(MADIACHI)

ALTER TABLE DON_DH
ADD 
	CONSTRAINT FK_DH_KH
	FOREIGN KEY (MANGUOIDUNG)
	REFERENCES KHACHHANG(MANGUOIDUNG),

	CONSTRAINT FK_DH_CN
	FOREIGN KEY (MACN)
	REFERENCES CHINHANH(MACN),

	CONSTRAINT FK_DH_TX
	FOREIGN KEY (MATX)
	REFERENCES TAIXE(MATX)

ALTER TABLE DANHGIA
ADD 
	CONSTRAINT FK_DG_DH
	FOREIGN KEY (MADH)
	REFERENCES DON_DH(MADH)
ALTER TABLE CUAHANG
ADD
	CONSTRAINT FK_CH_CN
	FOREIGN KEY (MACN)
	REFERENCES CHINHANH
ALTER TABLE THONGTIN_HOPDONG
ADD CONSTRAINT FK_TT_HD
	FOREIGN KEY (MAHD)
	REFERENCES HOPDONG



--tạo procedure tranh chấp lỗi
GO
CREATE PROCEDURE sp_THEMMONAN
@TENMA NCHAR(80),@MOTA NVARCHAR(100),@GIA INT,@TINHTRANG NCHAR(20),@HINHANH BIT,@DIACHIHA CHAR(50),@MACN CHAR(10),@MALAT CHAR(10),
@OUTPUT INT OUT
AS
BEGIN TRAN
	IF EXISTS (SELECT* FROM THUCDON TD WHERE TD.TENMONAN=@TENMA AND TD.MACN=@MACN )
	BEGIN
		PRINT @TENMA + N'đã tồn tại'
		ROLLBACK TRAN
	END
	DECLARE @MaMonAn INT= (SELECT B.IDMAX FROM PHAMVIBANG B WHERE B.TENPHAMVI= 'THUCDON') 
	UPDATE PHAMVIBANG
	SET IDMAX=IDMAX+1 
	WHERE TENPHAMVI= 'THUCDON'
	PRINT @TenMA
	INSERT INTO THUCDON VALUES(@MAMONAN,@TenMA, @MoTa, @Gia, @TinhTrang, 0, NULL,@MACN,@MALAT)
	
	IF (@@ERROR<>0)
		ROLLBACK TRAN
	ELSE
		COMMIT TRAN
GO
INSERT INTO PHAMVIBANG VALUES('1','THUCDON',1)
INSERT INTO LOAIAMTHUC VALUES ('1',N'TRÀ SỮA')
INSERT INTO CHINHANH VALUES('1',0,NULL,NULL,NULL,NULL,NULL,NULL)
DECLARE @OUTPUT INT
EXEC sp_THEMMONAN N'Trà sữa trân châu ',NULL,NULL,NULL,0,NULL,'1','1',@OUTPUT OUT
EXEC sp_THEMMONAN N'Trà sữa Ô long',NULL,NULL,NULL,0,NULL,'1','1',@OUTPUT OUT
EXEC sp_THEMMONAN N'Trà sữa phúc long',NULL,NULL,NULL,0,NULL,'1','1',@OUTPUT OUT
GO
CREATE TRIGGER i_THUCDON
ON THUCDON
for INSERT
AS

BEGIN

	
	IF EXISTS(SELECT *FROM inserted I WHERE LEN(I.TENMONAN)>80)
	BEGIN

		RAISERROR (N'TÊN DÀI QUÁ 80 KÝ TỰ',16,1)
		
	END
END
GO
ALTER PROCEDURE sp_THEMMONAN
@TENMA NCHAR(100),@MOTA NVARCHAR(100),@GIA INT,@TINHTRANG NCHAR(20),@HINHANH BIT,@DIACHIHA CHAR(50),@MACN CHAR(10),@MALAT CHAR(10),
@OUTPUT INT OUT
AS
BEGIN TRAN
	DECLARE @ERROR INT=0
	IF EXISTS (SELECT* FROM THUCDON TD WHERE TD.TENMONAN=@TENMA AND TD.MACN=@MACN )
	BEGIN
	
		PRINT N'MÓN ĂN đã tồn tại'
		ROLLBACK TRAN
		SET @OUTPUT=0
		RETURN
		
	END
	DECLARE @MaMonAn INT= (SELECT B.IDMAX FROM PHAMVIBANG B WHERE B.TENPHAMVI= 'THUCDON') 
	UPDATE PHAMVIBANG
	SET IDMAX=IDMAX+1 
	WHERE TENPHAMVI= 'THUCDON'

	PRINT @TenMA
	INSERT INTO THUCDON VALUES(@MAMONAN,@TenMA, @MoTa, @Gia, @TinhTrang, 0, NULL,@MACN,@MALAT)
	IF (@@ERROR<>0)
		SET @ERROR=@ERROR+1
	WAITFOR DELAY '0:00:5'
	IF (@ERROR<>0)
	BEGIN
		ROLLBACK 
		SET @OUTPUT=0
		RETURN
	END
	
	COMMIT TRAN
	SET @OUTPUT=1
GO
