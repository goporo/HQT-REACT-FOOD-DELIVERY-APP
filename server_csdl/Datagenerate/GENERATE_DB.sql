﻿USE master
GO
IF DB_ID('QL_BANHANG') IS NOT NULL
	DROP DATABASE QL_BANHANG
GO

CREATE DATABASE QL_BANHANG
GO

USE QL_BANHANG
GO 
CREATE TABLE THONGTIN_HOAHONG
(
	MAHH VARCHAR(10)NOT NULL,
	NGAYBD DATE,
	NGAYHH DATE,
	PTHH INT
)
CREATE TABLE KHACHHANG
(

	MAKH VARCHAR(10) NOT NULL UNIQUE,
	EMAIL VARCHAR(50 ) NOT NULL UNIQUE,
	TEN NVARCHAR(50),
	SDT VARCHAR(10),
	NGAYTG DATETIME,
	HINHANHND  BIT,
	DIACHIHINHANHND VARCHAR(300),
	MATKNGANHANG VARCHAR(10),
	MATK VARCHAR(10),
	MADIACHI VARCHAR(10),
	DIACHI NVARCHAR(50),
	SODUVI INT CHECK (SODUVI >= 0)
)

CREATE TABLE TAIKHOAN
(
	MATK VARCHAR(10) NOT NULL UNIQUE, 
	TENTK VARCHAR(50) NOT NULL UNIQUE,
	TINHTRANGTK NVARCHAR(10),
	MATKHAUTK VARCHAR(50) NOT NULL,
	NGAYTG DATETIME,
	LOAITK INT CHECK (LOAITK >=0 AND LOAITK <= 5)

)

CREATE TABLE NGANHANG
(
	MASTKNGANHANG VARCHAR(10) NOT NULL UNIQUE,
	TENNGANHANG NVARCHAR(50) NOT NULL,
	TENCHINHANH NVARCHAR(50) NOT NULL,
	STK CHAR(13) NOT NULL
)

CREATE TABLE DON_DH
(
	MADH VARCHAR(10)NOT NULL UNIQUE,
	TRANGTHAIDH NCHAR(20) NOT NULL,
	NGAYLAP DATE,
	HINHTHUCTT NCHAR(20),
	PHISP int CHECK (PHISP >= 0),
	PHIVANCHUYEN int CHECK(PHIVANCHUYEN >= 0),
	MAKH VARCHAR(10),
	TENKH NVARCHAR(50),
	SDTKH VARCHAR(10) ,
	MADCGH VARCHAR(10),
	DIACHIGH NVARCHAR(50),
	MACN VARCHAR(10),
	TENCN NCHAR(20),
	DIACHICN NVARCHAR(50),
	MADT VARCHAR(10),
	PTHH INT,
	MATX VARCHAR(10),
	TENTX NVARCHAR(50),
	SDTTX VARCHAR(10),
	BIENSOXE VARCHAR(10),
	MAKHUVUC VARCHAR(10)
)

CREATE TABLE DANHGIA_CHINHANH
(

	MADH VARCHAR(10)NOT NULL UNIQUE,
	NGAYLAP DATETIME,
	RATING FLoat CHECK(RATING >= 0 AND RATING <= 5),
	NOIDUNG NVARCHAR(100),
	MACN VARCHAR(10),
	MADT VARCHAR(10)
)
CREATE TABLE DANHGIA_MONAN
(

	MADH VARCHAR(10)NOT NULL ,
	MAMONAN VARCHAR(10)NOT NULL,
	NGAYLAP DATETIME,
	RATING FLoat CHECK(RATING >= 0 AND RATING <= 5),
	NOIDUNG NVARCHAR(100)
)

CREATE TABLE DANHGIA_TX
(
	MADH VARCHAR(10)NOT NULL UNIQUE,
	MATX VARCHAR(10),
	NGAYLAP DATETIME,
	RATING FLoat CHECK(RATING >= 0 AND RATING <= 5),
	NOIDUNG NVARCHAR(100)
)

CREATE TABLE DIACHI
(
	MADIACHI VARCHAR(10) NOT NULL UNIQUE,
	DIACHI VARCHAR(20),
	MAPHUONG VARCHAR(10)
)

CREATE TABLE PHUONG
(
	MAPHUONG VARCHAR(10)NOT NULL UNIQUE,
	TENPHUONG NVARCHAR(50),
	MAHUYEN VARCHAR(10)
)

CREATE TABLE QUAN_HUYEN
(
	MAHUYEN VARCHAR(10)NOT NULL UNIQUE,
	TENHUYEN NVARCHAR(50),
	MAKHUVUC VARCHAR(10)
)

CREATE TABLE KHUVUC
(
	MAKHUVUC VARCHAR(10)NOT NULL UNIQUE,
	TENKHUVUC NVARCHAR(50),
	MACUOC VARCHAR(10)
)

CREATE TABLE GIACUOC
(
	MACUOC VARCHAR(10)NOT NULL UNIQUE,
	GIACUOC INT CHECK(GIACUOC >= 0),
	KHOANGCACH INT ,
	NGAYTAO DATE,
	THOIGIANHIEULUC DATETIME,
	DONVITIEN VARCHAR(10),
	MAQTV VARCHAR(10)
)

CREATE TABLE TAIXE
(
	MATX VARCHAR(10) NOT NULL UNIQUE,
	TEN NVARCHAR(50),
	NGAYTG DATETIME,
	HINHANHND BIT,
	DIACHIHINHANHND VARCHAR(300),
	SDT VARCHAR(10) ,
	BIENSOXE VARCHAR(10) NOT NULL UNIQUE,
	PHITHECHAN INT CHECK(PHITHECHAN >= 0),
	MAKHUVUCHD VARCHAR(10),
	MATK VARCHAR(10)
)
CREATE TABLE TAIXE_CHITIET
(
	MATX VARCHAR(10) UNIQUE NOT NULL,
	EMAIL VARCHAR(50) NOT NULL UNIQUE,
	NGAYTG DATETIME,
	CMND CHAR(12) NOT NULL UNIQUE,
	MATKNGANHANG VARCHAR(10),
	MADIACHI VARCHAR(10),
	DIACHI NVARCHAR(50)
)
CREATE TABLE QUANTRIVIEN 
(
	MAQTV VARCHAR(10) NOT NULL UNIQUE,
	EMAIL VARCHAR(50)NOT NULL UNIQUE,
	MATK VARCHAR(10),
	TEN NVARCHAR(50),
	SDT VARCHAR(10) ,
	NGAYTG DATETIME,
	HINHANHND BIT,
	DIACHIHINHANHND VARCHAR(300),
	LUONGQTV INT,
	MATKNGANHANG VARCHAR(10),
	MADIACHI VARCHAR(10),
	DIACHI NVARCHAR(50)
)

CREATE TABLE QUYENTHAOTAC
(
	MATK VARCHAR(10)NOT NULL,
	MAQTV VARCHAR(10)NOT NULL,
	MATHAOTAC VARCHAR(10)NOT NULL,
	MATHUOCTINH VARCHAR(10)NOT NULL,
	DUOCPHEP BIT
)

CREATE TABLE THAOTAC
(
	MATHAOTAC VARCHAR(10)NOT NULL UNIQUE,
	TENTHAOTAC NCHAR(20)
)

CREATE TABLE THUOCTINH
(
	MATHUOCTINH VARCHAR(10)NOT NULL UNIQUE,
	TENTHUOCTINH NCHAR(20),
	MAPHAMVI VARCHAR(10)
)

CREATE TABLE PHAMVIBANG
(
	MAPHAMVI VARCHAR(10)NOT NULL UNIQUE,
	TENPHAMVI NCHAR(20),
	IDMAX int
)

CREATE TABLE NHANVIEN
(
	MANHANVIEN VARCHAR(10)NOT NULL UNIQUE,
	TEN NVARCHAR(50),
	HINHANHND BIT,
	DIACHIHINHANHND VARCHAR(300),
	MATK VARCHAR(10)
)
CREATE TABLE NHANVIEN_CHITIET
(
	MANHANVIEN VARCHAR(10) NOT NULL UNIQUE,
	EMAIL VARCHAR(50)NOT NULL UNIQUE,
	SDT VARCHAR(10) UNIQUE,
	NGAYTG DATE,
	LUONGNV MONEY CHECK(LUONGNV >= 0),
	MATKNGANHANG VARCHAR(10),
	MADIACHI VARCHAR(10),
	DIACHI NVARCHAR(50)
)

CREATE TABLE HOPDONG
(
	MAHD VARCHAR(10)NOT NULL UNIQUE,
	SL_CN_DK INT NOT NULL CHECK (SL_CN_DK >= 0),
	NGAYLAP DATE,
	PHIKH INT CHECK(PHIKH > 0),
	MADOITAC VARCHAR(10)
)


CREATE TABLE THONGTIN_HOPDONG
(
	MAHD VARCHAR(10)NOT NULL ,
	STT int NOT NULL,
	THOIHAN int,
	TGBD DATE,
	TGHH DATE,
	MAHH VARCHAR(10),
	MANHANVIEN VARCHAR(10)
)
CREATE TABLE DOITAC
(
	MADOITAC VARCHAR(10) NOT NULL UNIQUE,
	TENDT NVARCHAR(50),
	NGAYTG DATETIME,
	HINHANHND  BIT,
	DIACHIHINHANHND VARCHAR(300),
	MATK VARCHAR(10)
)
CREATE TABLE DOITAC_CHITIET
(
	MADOITAC VARCHAR(10) NOT NULL UNIQUE,
	EMAILDT VARCHAR(50) NOT NULL UNIQUE,
	SDTDT VARCHAR(10) ,
	MSTHUE VARCHAR(10)UNIQUE,
	MAIL_NDD VARCHAR(50) NOT NULL,
	SLDUKIENMIN INT NOT NULL CHECK(SLDUKIENMIN >= 0) ,
	SLDUKIENMAX INT NOT NULL CHECK(SLDUKIENMAX > 0),
	MATKNGANHANG VARCHAR(10),
	MADIACHI VARCHAR(10),
	DIACHI VARCHAR(50)
)
CREATE TABLE LOAIAMTHUCDOITAC 
(
	MALAT VARCHAR(10)NOT NULL, 
	MADT VARCHAR(10)NOT NULL
)

CREATE TABLE CHINHANH
(
	MACN VARCHAR(10) NOT NULL UNIQUE,
	SDT_CN VARCHAR(10) ,
	NGAYTG DATE,
	MATK VARCHAR(10),
	MATKNGANHANG VARCHAR(10),
	MADIACHI VARCHAR(10),
	DIACHI VARCHAR(50),
	PTHH INT,
	MADT VARCHAR(10)
)

CREATE TABLE HOPDONGCHINHANH
(
	MACN VARCHAR(10)NOT NULL ,
	MAHD VARCHAR(10)NOT NULL
)

CREATE TABLE CUAHANG
(
	MACN VARCHAR(10)NOT NULL UNIQUE,
	TENCH NVARCHAR(50),
	TG_HD_MO TIME,
	TG_HD_DONG TIME,
	TINHTRANGCH NCHAR(20),
	HINHANHND BIT,
	DIACHIHINHANHND VARCHAR(300),
	TGCAPNHATSOLIEU DATETIME,
	SLDH INT,
	DANHGIATB FLOAT
)

CREATE TABLE LOAIAMTHUC
(
	MALAT VARCHAR(10)NOT NULL UNIQUE,
	TENLAT NCHAR(20)
)

CREATE TABLE THUCDON
(
	MAMONAN VARCHAR(10)NOT NULL UNIQUE,
	TENMONAN NVARCHAR(50),
	MOTA NVARCHAR (80),
	GIA INT CHECK (GIA >= 0),
	TINHTRANG NCHAR(20),
	HINHANHTD BIT,
	DIACHIHINHANHTD VARCHAR(300),
	TGCAPNHATSOLIEU DATETIME,
	SLDH INT,
	DANHGIATB FLOAT,
	MACN VARCHAR(10) NOT NULL,
	MALAT VARCHAR(10) NOT NULL
)

CREATE TABLE TUYCHONMONAN
(
	MATUYCHON VARCHAR(10)NOT NULL UNIQUE,
	TENTUYCHON NVARCHAR(20),
	MUCDO NCHAR(20),
	MAMONAN VARCHAR(10)
)

CREATE TABLE THUCDONDATHANG
(
	MAMONAN VARCHAR(10)NOT NULL,
	TENMONAN NVARCHAR(50) NOT NULL,
	MADH VARCHAR(10)NOT NULL,
	NGAYLAP DATE NOT NULL,
	GIABAN INT,
	SOLUONG INT
)

CREATE TABLE TUYCHONMONDATHANG
(
	MATUYCHON VARCHAR(10)NOT NULL,
	MADH VARCHAR(10)NOT NULL
)
ALTER TABLE THONGTIN_HOAHONG
ADD 
	CONSTRAINT PK_THONGTIN_HOAHONG
	PRIMARY KEY (MAHH)
ALTER TABLE DIACHI
ADD 
	CONSTRAINT PK_DIACHI
	PRIMARY KEY (MADIACHI),
	
	CONSTRAINT FK_DC_D
	FOREIGN KEY (MAPHUONG)
	REFERENCES PHUONG(MAPHUONG)

ALTER TABLE PHUONG
ADD 	
	CONSTRAINT PK_PHUONG
	PRIMARY KEY (MAPHUONG),
	
	CONSTRAINT FK_D_QH
	FOREIGN KEY (MAHUYEN)
	REFERENCES QUAN_HUYEN(MAHUYEN)

ALTER TABLE QUAN_HUYEN
ADD 
	CONSTRAINT PK_QUAN_HUYEN
	PRIMARY KEY (MAHUYEN),
	
	CONSTRAINT FK_QH_KV
	FOREIGN KEY (MAKHUVUC)
	REFERENCES KHUVUC(MAKHUVUC)

ALTER TABLE KHUVUC
ADD 
	CONSTRAINT PK_KHUVUC
	PRIMARY KEY (MAKHUVUC),
	
	CONSTRAINT FK_KV_GC
	FOREIGN KEY (MACUOC)
	REFERENCES GIACUOC(MACUOC)

ALTER TABLE TAIXE
ADD 
	CONSTRAINT PK_TAIXE
	PRIMARY KEY(MATX),
	
	CONSTRAINT FK_TX_KV
	FOREIGN KEY (MAKHUVUCHD)
	REFERENCES KHUVUC(MAKHUVUC),

	
	CONSTRAINT FK_TX_TK
	FOREIGN KEY (MATK)
	REFERENCES TAIKHOAN(MATK)


ALTER TABLE QUANTRIVIEN
ADD 
	CONSTRAINT PK_QUANTRIVIEN
	PRIMARY KEY (MAQTV),
	
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
	CONSTRAINT PK_QUYENTHAOTAC
	PRIMARY KEY (MATK, MAQTV, MATHAOTAC, MATHUOCTINH),
	
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
	CONSTRAINT PK_THUOCTINH
	PRIMARY KEY (MATHUOCTINH),
	
	CONSTRAINT FK_TT_PVB
	FOREIGN KEY (MAPHAMVI)
	REFERENCES PHAMVIBANG(MAPHAMVI)

ALTER TABLE NHANVIEN
ADD 
	CONSTRAINT PK_NHANVIEN
	PRIMARY KEY (MANHANVIEN),
	
	CONSTRAINT FK_NV_TK
	FOREIGN KEY (MATK)
	REFERENCES TAIKHOAN(MATK)


ALTER TABLE NHANVIEN_CHITIET
ADD 
	CONSTRAINT PK_NHANVIEN_CHITIET
	PRIMARY KEY (MANHANVIEN),
	
	CONSTRAINT FK_NV_NH
	FOREIGN KEY (MATKNGANHANG)
	REFERENCES NGANHANG(MASTKNGANHANG),

	CONSTRAINT FK_NV_CT
	FOREIGN KEY (MANHANVIEN)
	REFERENCES NHANVIEN,

	CONSTRAINT FK_NV_DC
	FOREIGN KEY (MADIACHI)
	REFERENCES DIACHI(MADIACHI)

ALTER TABLE HOPDONG
ADD 
	CONSTRAINT PK_HOPDONG
	PRIMARY KEY (MAHD),
	
	CONSTRAINT FK_HD_DT
	FOREIGN KEY (MADOITAC)
	REFERENCES DOITAC(MADOITAC)


ALTER TABLE DOITAC
ADD 
	CONSTRAINT PK_DOITAC
	PRIMARY KEY (MADOITAC),

	CONSTRAINT FK_DT_TK
	FOREIGN KEY (MATK)
	REFERENCES TAIKHOAN(MATK)


ALTER TABLE LOAIAMTHUCDOITAC
ADD 
	CONSTRAINT PK_LOAIAMTHUCDOITAC
	PRIMARY KEY (MALAT, MADT),
	
	CONSTRAINT FK_LATDT_DT
	FOREIGN KEY (MADT)
	REFERENCES DOITAC(MADOITAC),

	CONSTRAINT FK_LATDT_LAT
	FOREIGN KEY (MALAT)
	REFERENCES LOAIAMTHUC(MALAT)

ALTER TABLE CHINHANH
ADD 
	CONSTRAINT PK_CHINHANH
	PRIMARY KEY (MACN),
	
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
	CONSTRAINT PK_HOPDONGCHINHANH
	PRIMARY KEY (MACN, MAHD),
	
	CONSTRAINT FK_HDCN_CN
	FOREIGN KEY (MACN)
	REFERENCES CHINHANH(MACN),

	CONSTRAINT FK_HDCN_HD
	FOREIGN KEY (MAHD)
	REFERENCES HOPDONG(MAHD)

ALTER TABLE THUCDON
ADD 	
	CONSTRAINT PK_THUCDON
	PRIMARY KEY (MAMONAN),
	
	CONSTRAINT FK_TD_CN
	FOREIGN KEY (MACN)
	REFERENCES CHINHANH(MACN),

	CONSTRAINT FK_TD_LAT
	FOREIGN KEY (MALAT)
	REFERENCES LOAIAMTHUC(MALAT)

ALTER TABLE TUYCHONMONAN
ADD 
	CONSTRAINT PK_TUYCHONMONAN
	PRIMARY KEY (MATUYCHON),
	
	CONSTRAINT FK_TCMA_TD
	FOREIGN KEY (MAMONAN)
	REFERENCES THUCDON(MAMONAN)

ALTER TABLE THUCDONDATHANG
ADD 
	CONSTRAINT PK_THUCDONDATHANG
	PRIMARY KEY (MAMONAN, MADH),
	
	CONSTRAINT FK_TDDH_TD
	FOREIGN KEY (MAMONAN)
	REFERENCES THUCDON(MAMONAN),

	CONSTRAINT FK_TDDH_DH
	FOREIGN KEY (MADH)
	REFERENCES DON_DH(MADH)

ALTER TABLE TUYCHONMONDATHANG
ADD 
	CONSTRAINT PK_TUYCHONMONDATHANG
	PRIMARY KEY (MATUYCHON, MADH),
	
	CONSTRAINT FK_TCMDH_TCMA
	FOREIGN KEY (MATUYCHON)
	REFERENCES TUYCHONMONAN(MATUYCHON),

	CONSTRAINT FK_TCMDH_DH
	FOREIGN KEY (MADH)
	REFERENCES DON_DH(MADH)

ALTER TABLE KHACHHANG
ADD 
	CONSTRAINT PK_KHACHHANG
	PRIMARY KEY(MAKH),
	
	CONSTRAINT FK_KH_NH
	FOREIGN KEY (MATKNGANHANG)
	REFERENCES NGANHANG(MASTKNGANHANG),

	CONSTRAINT FK_KH_TK
	FOREIGN KEY (MATK)
	REFERENCES TAIKHOAN(MATK),

	CONSTRAINT FK_KH_DC
	FOREIGN KEY (MADIACHI)
	REFERENCES DIACHI(MADIACHI)

ALTER TABLE DON_DH
ADD 
	CONSTRAINT PK_DON_DH
	PRIMARY KEY (MADH),
	
	CONSTRAINT FK_DH_KH
	FOREIGN KEY (MAKH)
	REFERENCES KHACHHANG(MAKH),

	CONSTRAINT FK_DH_CN
	FOREIGN KEY (MACN)
	REFERENCES CHINHANH(MACN),

	CONSTRAINT FK_DH_TX
	FOREIGN KEY (MATX)
	REFERENCES TAIXE(MATX),

	CONSTRAINT FK_DC_DH
	FOREIGN KEY (MADCGH)
	REFERENCES DIACHI(MADIACHI),

	CONSTRAINT FK_DH_DT
	FOREIGN KEY(MADT)
	REFERENCES DOITAC,
	
	CONSTRAINT FK_DH_KV
	FOREIGN KEY (MAKHUVUC)
	REFERENCES KHUVUC(MAKHUVUC)

ALTER TABLE DANHGIA_CHINHANH
ADD 
	CONSTRAINT PK_DANHGIA_CHINHANH
	PRIMARY KEY(MADH),
	
	CONSTRAINT FK_DG_DH
	FOREIGN KEY (MADH)
	REFERENCES DON_DH(MADH),
	
	CONSTRAINT FK_DG_CN
	FOREIGN KEY (MACN)
	REFERENCES CHINHANH(MACN),
	
	CONSTRAINT FK_DG_DT
	FOREIGN KEY (MADT)
	REFERENCES DOITAC(MADOITAC)
ALTER TABLE DANHGIA_MONAN
ADD 
	CONSTRAINT PK_DANHGIA_MONAN
	PRIMARY KEY(MADH,MAMONAN),
	
	CONSTRAINT FK_DGMA_DH
	FOREIGN KEY (MADH)
	REFERENCES DON_DH(MADH),
	
	CONSTRAINT FK_DG_MA
	FOREIGN KEY (MAMONAN)
	REFERENCES THUCDON(MAMONAN)
ALTER TABLE DANHGIA_TX
ADD 
	CONSTRAINT PK_DANHGIA_TX
	PRIMARY KEY(MADH),
	
	CONSTRAINT FK_DGTX_DH
	FOREIGN KEY (MADH)
	REFERENCES DON_DH(MADH),
	
	CONSTRAINT FK_DG_TX
	FOREIGN KEY (MATX)
	REFERENCES TAIXE(MATX)
ALTER TABLE CUAHANG
ADD
	CONSTRAINT PK_CUAHANG
	PRIMARY KEY (MACN),
	
	CONSTRAINT FK_CH_CN
	FOREIGN KEY (MACN)
	REFERENCES CHINHANH
ALTER TABLE THONGTIN_HOPDONG
ADD 
	CONSTRAINT PK_THONGTIN_HOPDONG
	PRIMARY KEY (MAHD,STT),
	
	CONSTRAINT FK_TT_HD
	FOREIGN KEY (MAHD)
	REFERENCES HOPDONG,
	
	CONSTRAINT FK_HD_NV
	FOREIGN KEY (MANHANVIEN)
	REFERENCES NHANVIEN(MANHANVIEN),
	
	CONSTRAINT FK_HD_HH
	FOREIGN KEY (MAHH)
	REFERENCES THONGTIN_HOAHONG(MAHH)
ALTER TABLE DOITAC_CHITIET
ADD 
	CONSTRAINT PK_DOITAC_CHITIET
	PRIMARY KEY (MADOITAC),
	
	CONSTRAINT FK_DT_CT
	FOREIGN KEY (MADOITAC)
	REFERENCES DOITAC,
	
	CONSTRAINT FK_DT_NH
	FOREIGN KEY (MATKNGANHANG)
	REFERENCES NGANHANG(MASTKNGANHANG),
	CONSTRAINT FK_DT_DC
	FOREIGN KEY (MADIACHI)
	REFERENCES DIACHI(MADIACHI)
ALTER TABLE TAIXE_CHITIET
ADD 
	CONSTRAINT PK_TAIXE_CHITIET
	PRIMARY KEY(MATX),
	
	CONSTRAINT FK_TX_CT
	FOREIGN KEY (MATX)
	REFERENCES TAIXE,
	
	CONSTRAINT FK_TX_NH
	FOREIGN KEY (MATKNGANHANG)
	REFERENCES NGANHANG(MASTKNGANHANG),

	CONSTRAINT FK_TX_DC
	FOREIGN KEY (MADIACHI)
	REFERENCES DIACHI(MADIACHI)

ALTER TABLE TAIKHOAN
ADD
	CONSTRAINT PK_TAIKHOAN
	PRIMARY KEY(MATK)
ALTER TABLE NGANHANG
ADD 
	CONSTRAINT PK_NGANHANG
	PRIMARY KEY(MASTKNGANHANG)
ALTER TABLE GIACUOC
ADD 
	CONSTRAINT PK_GIACUOC
	PRIMARY KEY (MACUOC)
ALTER TABLE THAOTAC
ADD 
	CONSTRAINT PK_THAOTAC
	PRIMARY KEY (MATHAOTAC)
ALTER TABLE PHAMVIBANG
ADD 
	CONSTRAINT PK_PHAMVIBANG
	PRIMARY KEY (MAPHAMVI)
ALTER TABLE LOAIAMTHUC
ADD 
	CONSTRAINT PK_LOAIAMTHUC
	PRIMARY KEY (MALAT)

GO
CREATE PROC sp_CheckTGHD
	@TG_HD_MO TIME,
	@TG_HD_DONG TIME
AS
BEGIN TRAN
	BEGIN TRY
		IF @TG_HD_DONG < @TG_HD_MO
		BEGIN
			RAISERROR ('LOI THOI GIAN DONG CUA SOM HON THOI GIAN MO',16,1)
			ROLLBACK
		END
	END TRY
	BEGIN CATCH
		RAISERROR( N'LỖI HỆ THỐNG', 16, 1)
		ROLLBACK TRAN
		RETURN 1
	END CATCH
COMMIT TRAN
RETURN 0
GO

GO
CREATE PROC sp_CheckDate
	@MACN VARCHAR(10),
	@MAHD VARCHAR(10)
AS
BEGIN TRAN
	BEGIN TRY
		IF (SELECT DATEDIFF(DAY, HD.NGAYLAP, CH.TGCAPNHATSOLIEU) FROM CUAHANG CH
		JOIN CHINHANH CN ON CH.MACN = CN.MACN
		JOIN HOPDONGCHINHANH HDCN ON HDCN.MACN = CN.MACN
		JOIN HOPDONG HD ON HD.MAHD = HD.MAHD) > 30
		BEGIN
			RAISERROR ('LOI KHONG DUOC CAP NHAT TEN CUA HANG SAU 30 NGAY KE TU KHI KY HOP DONG',16,1)
			ROLLBACK
		END
	END TRY
	BEGIN CATCH
		RAISERROR( N'LỖI HỆ THỐNG', 16, 1)
		ROLLBACK TRAN
		RETURN 1
	END CATCH
COMMIT TRAN
RETURN 0
GO

--Partition Tai khoan--
ALTER DATABASE QL_BANHANG
ADD FILEGROUP LOAITK0_3
GO

ALTER DATABASE QL_BANHANG
ADD FILEGROUP LOAITK4
GO

ALTER DATABASE QL_BANHANG
ADD FILEGROUP LOAITK5 
GO

SELECT name AS AvailableFilegroups
FROM sys.filegroups
WHERE type = 'FG'

ALTER DATABASE [QL_BANHANG]
    ADD FILE 
    (
    NAME = [Part0_3],
    FILENAME = 'D:\LOAITK0_3.ndf',
        SIZE = 3072 KB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024 KB
    ) TO FILEGROUP [LOAITK0_3]

ALTER DATABASE [QL_BANHANG]
    ADD FILE 
    (
    NAME = [Part4],
    FILENAME = 'D:\LOAITK4.ndf',
        SIZE = 3072 KB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024 KB
    ) TO FILEGROUP [LOAITK4]

ALTER DATABASE [QL_BANHANG]
    ADD FILE 
    (
    NAME = [Part5],
    FILENAME = 'D:\LOAITK5.ndf',
        SIZE = 3072 KB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024 KB
    ) TO FILEGROUP [LOAITK5]


--Partition khach hang--
ALTER DATABASE QL_BANHANG
ADD FILEGROUP NGAYTG_2021
GO

ALTER DATABASE QL_BANHANG
ADD FILEGROUP NGAYTG_2022
GO

ALTER DATABASE QL_BANHANG
ADD FILEGROUP NGAYTG_2023
GO

SELECT name AS AvailableFilegroups
FROM sys.filegroups
WHERE type = 'FG'

ALTER DATABASE [QL_BANHANG]
    ADD FILE 
    (
    NAME = [Part2021],
    FILENAME = 'D:\NGAYTG_2021.ndf',
        SIZE = 3072 KB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024 KB
    ) TO FILEGROUP [NGAYTG_2021]

ALTER DATABASE [QL_BANHANG]
    ADD FILE 
    (
    NAME = [Part2022],
    FILENAME = 'D:\NGAYTG_2022.ndf',
        SIZE = 3072 KB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024 KB
    ) TO FILEGROUP [NGAYTG_2022]

ALTER DATABASE [QL_BANHANG]
    ADD FILE 
    (
    NAME = [Part2023],
    FILENAME = 'D:\NGAYTG_2023.ndf',
        SIZE = 3072 KB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024 KB
    ) TO FILEGROUP [NGAYTG_2023]


--Partition tai xe--
ALTER DATABASE QL_BANHANG
ADD FILEGROUP NGAYTXTG_2021
GO

ALTER DATABASE QL_BANHANG
ADD FILEGROUP NGAYTXTG_2022
GO

ALTER DATABASE QL_BANHANG
ADD FILEGROUP NGAYTXTG_2023
GO

ALTER DATABASE [QL_BANHANG]
    ADD FILE 
    (
    NAME = [PartNGAYTXTG2021],
    FILENAME = 'D:\NGAYTXTG_2021.ndf',
        SIZE = 3072 KB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024 KB
    ) TO FILEGROUP [NGAYTXTG_2021]

ALTER DATABASE [QL_BANHANG]
    ADD FILE 
    (
    NAME = [PartNGAYTXTG2022],
    FILENAME = 'D:\NGAYTXTG_2022.ndf',
        SIZE = 3072 KB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024 KB
    ) TO FILEGROUP [NGAYTXTG_2022]

ALTER DATABASE [QL_BANHANG]
    ADD FILE 
    (
    NAME = [PartNGAYTXTG2023],
    FILENAME = 'D:\NGAYTXTG_2023.ndf',
        SIZE = 3072 KB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024 KB
    ) TO FILEGROUP [NGAYTXTG_2023]


--Partition thong tin hop dong--
ALTER DATABASE QL_BANHANG
ADD FILEGROUP TGHH_2021
GO

ALTER DATABASE QL_BANHANG
ADD FILEGROUP TGHH_2022
GO

ALTER DATABASE QL_BANHANG
ADD FILEGROUP TGHH_2023
GO

ALTER DATABASE [QL_BANHANG]
    ADD FILE 
    (
    NAME = [PartTGHH2021],
    FILENAME = 'D:\TGHH_2021.ndf',
        SIZE = 3072 KB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024 KB
    ) TO FILEGROUP [TGHH_2021]

ALTER DATABASE [QL_BANHANG]
    ADD FILE 
    (
    NAME = [PartTGHH2022],
    FILENAME = 'D:\TGHH_2022.ndf',
        SIZE = 3072 KB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024 KB
    ) TO FILEGROUP [TGHH_2022]

ALTER DATABASE [QL_BANHANG]
    ADD FILE 
    (
    NAME = [PartTGHH2023],
    FILENAME = 'D:\TGHH_2023.ndf',
        SIZE = 3072 KB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024 KB
    ) TO FILEGROUP [TGHH_2023]

--Partition don dat hang--
ALTER DATABASE QL_BANHANG
ADD FILEGROUP NGAYLAPDON_2021
GO

ALTER DATABASE QL_BANHANG
ADD FILEGROUP NGAYLAPDON_2022
GO

ALTER DATABASE QL_BANHANG
ADD FILEGROUP NGAYLAPDON_2023
GO

ALTER DATABASE [QL_BANHANG]
    ADD FILE 
    (
    NAME = [PartNLD2021],
    FILENAME = 'D:\NGAYLAPDON_2021.ndf',
        SIZE = 3072 KB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024 KB
    ) TO FILEGROUP [NGAYLAPDON_2021]

ALTER DATABASE [QL_BANHANG]
    ADD FILE 
    (
    NAME = [PartNLD2022],
    FILENAME = 'D:\NGAYLAPDON_2022.ndf',
        SIZE = 3072 KB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024 KB
    ) TO FILEGROUP [NGAYLAPDON_2022]

ALTER DATABASE [QL_BANHANG]
    ADD FILE 
    (
    NAME = [PartNLD2023],
    FILENAME = 'D:\NGAYLAPDON_2023.ndf',
        SIZE = 3072 KB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024 KB
    ) TO FILEGROUP [NGAYLAPDON_2023]

--Partition thuc don dat hang--
ALTER DATABASE QL_BANHANG
ADD FILEGROUP NGAYLAPTHUCDON_2021
GO

ALTER DATABASE QL_BANHANG
ADD FILEGROUP NGAYLAPTHUCDON_2022
GO

ALTER DATABASE QL_BANHANG
ADD FILEGROUP NGAYLAPTHUCDON_2023
GO

ALTER DATABASE [QL_BANHANG]
    ADD FILE 
    (
    NAME = [PartNLTD2021],
    FILENAME = 'D:\NGAYLAPTHUCDON_2021.ndf',
        SIZE = 3072 KB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024 KB
    ) TO FILEGROUP [NGAYLAPTHUCDON_2021]

ALTER DATABASE [QL_BANHANG]
    ADD FILE 
    (
    NAME = [PartNLTD2022],
    FILENAME = 'D:\NGAYLAPTHUCDON_2022.ndf',
        SIZE = 3072 KB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024 KB
    ) TO FILEGROUP [NGAYLAPTHUCDON_2022]

ALTER DATABASE [QL_BANHANG]
    ADD FILE 
    (
    NAME = [PartNLTD2023],
    FILENAME = 'D:\NGAYLAPTHUCDON_2023.ndf',
        SIZE = 3072 KB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024 KB
    ) TO FILEGROUP [NGAYLAPTHUCDON_2023]

--Partition danh gia chi nhanh--
ALTER DATABASE QL_BANHANG
ADD FILEGROUP NLDGCN_2021
GO

ALTER DATABASE QL_BANHANG
ADD FILEGROUP NLDGCN_2022
GO

ALTER DATABASE QL_BANHANG
ADD FILEGROUP NLDGCN_2023
GO

ALTER DATABASE [QL_BANHANG]
    ADD FILE 
    (
    NAME = [PartNLDGCN2021],
    FILENAME = 'D:\NLDGCN_2021.ndf',
        SIZE = 3072 KB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024 KB
    ) TO FILEGROUP [NLDGCN_2021]

ALTER DATABASE [QL_BANHANG]
    ADD FILE 
    (
    NAME = [PartNLDGCN2022],
    FILENAME = 'D:\NLDGCN_2022.ndf',
        SIZE = 3072 KB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024 KB
    ) TO FILEGROUP [NLDGCN_2022]

ALTER DATABASE [QL_BANHANG]
    ADD FILE 
    (
    NAME = [PartNLDGCN2023],
    FILENAME = 'D:\NLDGCN_2023.ndf',
        SIZE = 3072 KB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024 KB
    ) TO FILEGROUP [NLDGCN_2023]

--Partition danh gia mon an--
ALTER DATABASE QL_BANHANG
ADD FILEGROUP NLDGMA_2021
GO

ALTER DATABASE QL_BANHANG
ADD FILEGROUP NLDGMA_2022
GO

ALTER DATABASE QL_BANHANG
ADD FILEGROUP NLDGMA_2023
GO

ALTER DATABASE [QL_BANHANG]
    ADD FILE 
    (
    NAME = [PartNLDGMA2021],
    FILENAME = 'D:\NLDGMA_2021.ndf',
        SIZE = 3072 KB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024 KB
    ) TO FILEGROUP [NLDGMA_2021]

ALTER DATABASE [QL_BANHANG]
    ADD FILE 
    (
    NAME = [PartNLDGMA2022],
    FILENAME = 'D:\NLDGMA_2022.ndf',
        SIZE = 3072 KB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024 KB
    ) TO FILEGROUP [NLDGMA_2022]

ALTER DATABASE [QL_BANHANG]
    ADD FILE 
    (
    NAME = [PartNLDGMA2023],
    FILENAME = 'D:\NLDGMA_2023.ndf',
        SIZE = 3072 KB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024 KB
    ) TO FILEGROUP [NLDGMA_2023]

--Partition danh gia tai xe--
ALTER DATABASE QL_BANHANG
ADD FILEGROUP NLDGTX_2021
GO

ALTER DATABASE QL_BANHANG
ADD FILEGROUP NLDGTX_2022
GO

ALTER DATABASE QL_BANHANG
ADD FILEGROUP NLDGTX_2023
GO

ALTER DATABASE [QL_BANHANG]
    ADD FILE 
    (
    NAME = [PartNLDGTX2021],
    FILENAME = 'D:\NLDGTX_2021.ndf',
        SIZE = 3072 KB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024 KB
    ) TO FILEGROUP [NLDGTX_2021]

ALTER DATABASE [QL_BANHANG]
    ADD FILE 
    (
    NAME = [PartNLDGTX2022],
    FILENAME = 'D:\NLDGTX_2022.ndf',
        SIZE = 3072 KB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024 KB
    ) TO FILEGROUP [NLDGTX_2022]

ALTER DATABASE [QL_BANHANG]
    ADD FILE 
    (
    NAME = [PartNLDGTX2023],
    FILENAME = 'D:\NLDGTX_2023.ndf',
        SIZE = 3072 KB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024 KB
    ) TO FILEGROUP [NLDGTX_2023]

--INDEX TAI KHOAN--

CREATE INDEX idx_DANGNHAP ON TAIKHOAN (TENTK, MATKHAUTK,TINHTRANGTK) INCLUDE (MATK,NGAYTG)

--INDEX KHACH HANG--
CREATE INDEX idx_MATK ON KHACHHANG (NGAYTG,MATK) INCLUDE (MAKH)

--INDEX TAI XE
CREATE INDEX idx_MADIACHI ON TAIXE_CHITIET (MADIACHI)
CREATE INDEX idx_MATK ON TAIXE (NGAYTG,MATK) INCLUDE (MATX)
CREATE INDEX idx_MATKNGANHANG ON TAIXE_CHITIET (MATKNGANHANG)
--INDEX DOI TAC--
CREATE INDEX idx_MATK ON DOITAC (MATK) INCLUDE (MADOITAC)
CREATE INDEX idx_MATKNGANHANG ON DOITAC_CHITIET (MATKNGANHANG)
CREATE INDEX idx_MADIACHI ON DOITAC_CHITIET (MADIACHI)
--INDEX CHI NHANH--
CREATE INDEX idx_MATK ON CHINHANH (MATK) INCLUDE (MACN)
CREATE INDEX idx_MATKNGANHANG ON CHINHANH (MATKNGANHANG)
CREATE INDEX idx_MADT ON CHINHANH (MADT)
--INDEX CUA HANG--
CREATE INDEX idx_TENCH ON CUAHANG (TENCH)
--CREATE INDEX idx_MADT ON CUAHANG (MADT)
CREATE INDEX idx_SLDH ON CUAHANG (SLDH)
--INDEX THUC DON--
CREATE INDEX idx_TENMONAN ON THUCDON (TENMONAN)
CREATE INDEX idx_GIA ON THUCDON (GIA)
CREATE INDEX idx_SLDH ON THUCDON (SLDH)
CREATE INDEX idx_MACN ON THUCDON (MACN)
--INDEX NHAN VIEN--
CREATE INDEX idx_MATK ON NHANVIEN (MATK) INCLUDE (MANHANVIEN)
CREATE INDEX idx_MATKNGANHANG ON NHANVIEN_CHITIET (MATKNGANHANG)
CREATE INDEX idx_MADIACHI ON NHANVIEN_CHITIET (MADIACHI)
--INDEX QUAN TRI VIEN
CREATE INDEX idx_MATK ON QUANTRIVIEN (MATK) INCLUDE (MAQTV)
CREATE INDEX idx_MATKNGANHANG ON QUANTRIVIEN (MATKNGANHANG)
CREATE INDEX idx_MADIACHI ON QUANTRIVIEN (MADIACHI)
--INDEX HOP DONG--
CREATE INDEX idx_MADT ON HOPDONG (MADOITAC)
--INDEX THONG TIN HOP DONG--
--CREATE INDEX idx_MADT ON THONGTIN_HOPDONG (MADT)
CREATE INDEX idx_MANV ON THONGTIN_HOPDONG (MANHANVIEN)
--INDEX HOPDONG CHI NHANH

CREATE INDEX idx_HD_HD ON HOPDONGCHINHANH (MAHD)
--INDEX DON DAT HANG--
CREATE INDEX idx_MAKH ON DON_DH (MAKH) INCLUDE (PHIVANCHUYEN,PHISP)
CREATE INDEX idx_MACN ON DON_DH (MACN) INCLUDE (PHISP,PTHH)
CREATE INDEX idx_MADT ON DON_DH (MADT) INCLUDE (PHISP,PTHH)
CREATE INDEX idx_MATX ON DON_DH (MATX) INCLUDE (PHIVANCHUYEN)
--CREATE INDEX THUCDON DATHANG
CREATE INDEX idx_TDDH ON THUCDONDATHANG (MADH) INCLUDE (MAMONAN)
CREATE INDEX idx_TDDHMA ON THUCDONDATHANG (MAMONAN) INCLUDE (SOLUONG,GIABAN)
--CREATE INDEX idx_MADCGH ON DON_DH (MADCGH)
--INDEX DANH GIA CHI NHANH--
CREATE INDEX idx_MACN ON DANHGIA_CHINHANH (MACN)
CREATE INDEX idx_MADT ON DANHGIA_CHINHANH (MADT)
--INDEX DANH GIA MON AN--
CREATE INDEX idx_MAMONAN ON DANHGIA_MONAN (MAMONAN)
--INDEX DANH GIA TAI XE--
CREATE INDEX idx_MATX ON DANHGIA_TX (MATX)
--INDEX PHUONG--
CREATE INDEX idx_MAHUYEN ON PHUONG (MAHUYEN)
--INDEX DIA CHI--
CREATE INDEX idx_MAPHUONG ON DIACHI (MAPHUONG)
--PARTITION
USE [QL_BANHANG]
GO
BEGIN TRANSACTION
CREATE PARTITION FUNCTION [PART_F_DGCN](datetime) AS RANGE RIGHT FOR VALUES (N'2022-01-01T00:00:00', N'2023-01-01T00:00:00', N'2024-01-01T00:00:00')


CREATE PARTITION SCHEME [PART_S_DGCN] AS PARTITION [PART_F_DGCN] TO ([NLDGCN_2021], [NLDGCN_2022], [NLDGCN_2023], [PRIMARY])






ALTER TABLE [dbo].[DANHGIA_CHINHANH] DROP CONSTRAINT [PK_DANHGIA_CHINHANH] WITH ( ONLINE = OFF )


SET ANSI_PADDING ON

ALTER TABLE [dbo].[DANHGIA_CHINHANH] ADD PRIMARY KEY NONCLUSTERED 
(
	[MADH] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]


CREATE CLUSTERED INDEX [ClusteredIndex_on_PART_S_DGCN_638073183461933639] ON [dbo].[DANHGIA_CHINHANH]
(
	[NGAYLAP] ASC
)WITH (SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF) ON [PART_S_DGCN]([NGAYLAP])


DROP INDEX [ClusteredIndex_on_PART_S_DGCN_638073183461933639] ON [dbo].[DANHGIA_CHINHANH]








COMMIT TRANSACTION


USE [QL_BANHANG]
GO
BEGIN TRANSACTION
CREATE PARTITION FUNCTION [PART_F_DGMA](datetime) AS RANGE RIGHT FOR VALUES (N'2022-01-01T00:00:00', N'2023-01-01T00:00:00', N'2024-01-01T00:00:00')


CREATE PARTITION SCHEME [PART_S_DGMA] AS PARTITION [PART_F_DGMA] TO ([NLDGMA_2021], [NLDGMA_2022], [NLDGMA_2023], [PRIMARY])






ALTER TABLE [dbo].[DANHGIA_MONAN] DROP CONSTRAINT [PK_DANHGIA_MONAN] WITH ( ONLINE = OFF )


SET ANSI_PADDING ON

ALTER TABLE [dbo].[DANHGIA_MONAN] ADD PRIMARY KEY NONCLUSTERED 
(
	[MADH] ASC,
	[MAMONAN] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]


CREATE CLUSTERED INDEX [ClusteredIndex_on_PART_S_DGMA_638073185050397937] ON [dbo].[DANHGIA_MONAN]
(
	[NGAYLAP] ASC
)WITH (SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF) ON [PART_S_DGMA]([NGAYLAP])


DROP INDEX [ClusteredIndex_on_PART_S_DGMA_638073185050397937] ON [dbo].[DANHGIA_MONAN]








COMMIT TRANSACTION


USE [QL_BANHANG]
GO
BEGIN TRANSACTION
CREATE PARTITION FUNCTION [PART_F_DGTX](datetime) AS RANGE RIGHT FOR VALUES (N'2022-01-01T00:00:00', N'2023-01-01T00:00:00', N'2024-01-01T00:00:00')


CREATE PARTITION SCHEME [PART_S_DGTX] AS PARTITION [PART_F_DGTX] TO ([NLDGTX_2021], [NLDGTX_2022], [NLDGTX_2023], [PRIMARY])






ALTER TABLE [dbo].[DANHGIA_TX] DROP CONSTRAINT [PK_DANHGIA_TX] WITH ( ONLINE = OFF )


SET ANSI_PADDING ON

ALTER TABLE [dbo].[DANHGIA_TX] ADD PRIMARY KEY NONCLUSTERED 
(
	[MADH] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]


CREATE CLUSTERED INDEX [ClusteredIndex_on_PART_S_DGTX_638073186971305613] ON [dbo].[DANHGIA_TX]
(
	[NGAYLAP] ASC
)WITH (SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF) ON [PART_S_DGTX]([NGAYLAP])


DROP INDEX [ClusteredIndex_on_PART_S_DGTX_638073186971305613] ON [dbo].[DANHGIA_TX]








COMMIT TRANSACTION


USE [QL_BANHANG]
GO
BEGIN TRANSACTION
CREATE PARTITION FUNCTION [PART_F_DH](date) AS RANGE RIGHT FOR VALUES (N'2022-01-01', N'2023-01-01', N'2024-01-01')


CREATE PARTITION SCHEME [PART_S_DH] AS PARTITION [PART_F_DH] TO ([NGAYLAPDON_2021], [NGAYLAPDON_2022], [NGAYLAPDON_2023], [PRIMARY])


ALTER TABLE [dbo].[DANHGIA_CHINHANH] DROP CONSTRAINT [FK_DG_DH]


ALTER TABLE [dbo].[DANHGIA_MONAN] DROP CONSTRAINT [FK_DGMA_DH]


ALTER TABLE [dbo].[DANHGIA_TX] DROP CONSTRAINT [FK_DGTX_DH]


ALTER TABLE [dbo].[THUCDONDATHANG] DROP CONSTRAINT [FK_TDDH_DH]


ALTER TABLE [dbo].[TUYCHONMONDATHANG] DROP CONSTRAINT [FK_TCMDH_DH]






ALTER TABLE [dbo].[DON_DH] DROP CONSTRAINT [PK_DON_DH] WITH ( ONLINE = OFF )


SET ANSI_PADDING ON

ALTER TABLE [dbo].[DON_DH] ADD PRIMARY KEY NONCLUSTERED 
(
	[MADH] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]


CREATE CLUSTERED INDEX [ClusteredIndex_on_PART_S_DH_638073175574493854] ON [dbo].[DON_DH]
(
	[NGAYLAP] ASC
)WITH (SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF) ON [PART_S_DH]([NGAYLAP])


DROP INDEX [ClusteredIndex_on_PART_S_DH_638073175574493854] ON [dbo].[DON_DH]




ALTER TABLE [dbo].[DANHGIA_CHINHANH]  WITH CHECK ADD  CONSTRAINT [FK_DG_DH] FOREIGN KEY([MADH])
REFERENCES [dbo].[DON_DH] ([MADH])
ALTER TABLE [dbo].[DANHGIA_CHINHANH] CHECK CONSTRAINT [FK_DG_DH]


ALTER TABLE [dbo].[DANHGIA_MONAN]  WITH CHECK ADD  CONSTRAINT [FK_DGMA_DH] FOREIGN KEY([MADH])
REFERENCES [dbo].[DON_DH] ([MADH])
ALTER TABLE [dbo].[DANHGIA_MONAN] CHECK CONSTRAINT [FK_DGMA_DH]


ALTER TABLE [dbo].[DANHGIA_TX]  WITH CHECK ADD  CONSTRAINT [FK_DGTX_DH] FOREIGN KEY([MADH])
REFERENCES [dbo].[DON_DH] ([MADH])
ALTER TABLE [dbo].[DANHGIA_TX] CHECK CONSTRAINT [FK_DGTX_DH]


ALTER TABLE [dbo].[THUCDONDATHANG]  WITH CHECK ADD  CONSTRAINT [FK_TDDH_DH] FOREIGN KEY([MADH])
REFERENCES [dbo].[DON_DH] ([MADH])
ALTER TABLE [dbo].[THUCDONDATHANG] CHECK CONSTRAINT [FK_TDDH_DH]


ALTER TABLE [dbo].[TUYCHONMONDATHANG]  WITH CHECK ADD  CONSTRAINT [FK_TCMDH_DH] FOREIGN KEY([MADH])
REFERENCES [dbo].[DON_DH] ([MADH])
ALTER TABLE [dbo].[TUYCHONMONDATHANG] CHECK CONSTRAINT [FK_TCMDH_DH]






COMMIT TRANSACTION


USE [QL_BANHANG]
GO
BEGIN TRANSACTION
CREATE PARTITION FUNCTION [PART_F_KH](datetime) AS RANGE RIGHT FOR VALUES (N'2022-01-01T00:00:00', N'2023-01-01T00:00:00', N'2024-01-01T00:00:00')


CREATE PARTITION SCHEME [PART_S_KH] AS PARTITION [PART_F_KH] TO ([NGAYTG_2021], [NGAYTG_2022], [NGAYTG_2023], [PRIMARY])


ALTER TABLE [dbo].[DON_DH] DROP CONSTRAINT [FK_DH_KH]






ALTER TABLE [dbo].[KHACHHANG] DROP CONSTRAINT [PK_KHACHHANG] WITH ( ONLINE = OFF )


SET ANSI_PADDING ON

ALTER TABLE [dbo].[KHACHHANG] ADD PRIMARY KEY NONCLUSTERED 
(
	[MAKH] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]


CREATE CLUSTERED INDEX [ClusteredIndex_on_PART_S_KH_638073064601035851] ON [dbo].[KHACHHANG]
(
	[NGAYTG] ASC
)WITH (SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF) ON [PART_S_KH]([NGAYTG])


DROP INDEX [ClusteredIndex_on_PART_S_KH_638073064601035851] ON [dbo].[KHACHHANG]




ALTER TABLE [dbo].[DON_DH]  WITH CHECK ADD  CONSTRAINT [FK_DH_KH] FOREIGN KEY([MAKH])
REFERENCES [dbo].[KHACHHANG] ([MAKH])
ALTER TABLE [dbo].[DON_DH] CHECK CONSTRAINT [FK_DH_KH]






COMMIT TRANSACTION
USE [QL_BANHANG]
GO
BEGIN TRANSACTION
CREATE PARTITION FUNCTION [PART_F_TDDH](date) AS RANGE RIGHT FOR VALUES (N'2022-01-01', N'2023-01-01', N'2024-01-01')


CREATE PARTITION SCHEME [PART_S_TDDH] AS PARTITION [PART_F_TDDH] TO ([NGAYLAPTHUCDON_2021], [NGAYLAPTHUCDON_2022], [NGAYLAPTHUCDON_2023], [PRIMARY])






ALTER TABLE [dbo].[THUCDONDATHANG] DROP CONSTRAINT [PK_THUCDONDATHANG] WITH ( ONLINE = OFF )


SET ANSI_PADDING ON

ALTER TABLE [dbo].[THUCDONDATHANG] ADD PRIMARY KEY NONCLUSTERED 
(
	[MAMONAN] ASC,
	[MADH] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]


CREATE CLUSTERED INDEX [ClusteredIndex_on_PART_S_TDDH_638073179621251855] ON [dbo].[THUCDONDATHANG]
(
	[NGAYLAP] ASC
)WITH (SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF) ON [PART_S_TDDH]([NGAYLAP])


DROP INDEX [ClusteredIndex_on_PART_S_TDDH_638073179621251855] ON [dbo].[THUCDONDATHANG]








COMMIT TRANSACTION


USE [QL_BANHANG]
GO
BEGIN TRANSACTION
CREATE PARTITION FUNCTION [PART_F_TK](int) AS RANGE LEFT FOR VALUES (N'3', N'4', N'5')


CREATE PARTITION SCHEME [PART_S_TK] AS PARTITION [PART_F_TK] TO ([LOAITK0_3], [LOAITK4], [LOAITK5], [PRIMARY])


ALTER TABLE [dbo].[CHINHANH] DROP CONSTRAINT [FK_CN_TK]


ALTER TABLE [dbo].[DOITAC] DROP CONSTRAINT [FK_DT_TK]


ALTER TABLE [dbo].[KHACHHANG] DROP CONSTRAINT [FK_KH_TK]


ALTER TABLE [dbo].[NHANVIEN] DROP CONSTRAINT [FK_NV_TK]


ALTER TABLE [dbo].[QUANTRIVIEN] DROP CONSTRAINT [FK_QTV_TK]


ALTER TABLE [dbo].[QUYENTHAOTAC] DROP CONSTRAINT [FK_QTT_TK]


ALTER TABLE [dbo].[TAIXE] DROP CONSTRAINT [FK_TX_TK]






ALTER TABLE [dbo].[TAIKHOAN] DROP CONSTRAINT [PK_TAIKHOAN] WITH ( ONLINE = OFF )


SET ANSI_PADDING ON

ALTER TABLE [dbo].[TAIKHOAN] ADD PRIMARY KEY NONCLUSTERED 
(
	[MATK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]


CREATE CLUSTERED INDEX [ClusteredIndex_on_PART_S_TK_638073027221677830] ON [dbo].[TAIKHOAN]
(
	[LOAITK]
)WITH (SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF) ON [PART_S_TK]([LOAITK])


DROP INDEX [ClusteredIndex_on_PART_S_TK_638073027221677830] ON [dbo].[TAIKHOAN]




ALTER TABLE [dbo].[CHINHANH]  WITH CHECK ADD  CONSTRAINT [FK_CN_TK] FOREIGN KEY([MATK])
REFERENCES [dbo].[TAIKHOAN] ([MATK])
ALTER TABLE [dbo].[CHINHANH] CHECK CONSTRAINT [FK_CN_TK]


ALTER TABLE [dbo].[DOITAC]  WITH CHECK ADD  CONSTRAINT [FK_DT_TK] FOREIGN KEY([MATK])
REFERENCES [dbo].[TAIKHOAN] ([MATK])
ALTER TABLE [dbo].[DOITAC] CHECK CONSTRAINT [FK_DT_TK]


ALTER TABLE [dbo].[KHACHHANG]  WITH CHECK ADD  CONSTRAINT [FK_KH_TK] FOREIGN KEY([MATK])
REFERENCES [dbo].[TAIKHOAN] ([MATK])
ALTER TABLE [dbo].[KHACHHANG] CHECK CONSTRAINT [FK_KH_TK]


ALTER TABLE [dbo].[NHANVIEN]  WITH CHECK ADD  CONSTRAINT [FK_NV_TK] FOREIGN KEY([MATK])
REFERENCES [dbo].[TAIKHOAN] ([MATK])
ALTER TABLE [dbo].[NHANVIEN] CHECK CONSTRAINT [FK_NV_TK]


ALTER TABLE [dbo].[QUANTRIVIEN]  WITH CHECK ADD  CONSTRAINT [FK_QTV_TK] FOREIGN KEY([MATK])
REFERENCES [dbo].[TAIKHOAN] ([MATK])
ALTER TABLE [dbo].[QUANTRIVIEN] CHECK CONSTRAINT [FK_QTV_TK]


ALTER TABLE [dbo].[QUYENTHAOTAC]  WITH CHECK ADD  CONSTRAINT [FK_QTT_TK] FOREIGN KEY([MATK])
REFERENCES [dbo].[TAIKHOAN] ([MATK])
ALTER TABLE [dbo].[QUYENTHAOTAC] CHECK CONSTRAINT [FK_QTT_TK]


ALTER TABLE [dbo].[TAIXE]  WITH CHECK ADD  CONSTRAINT [FK_TX_TK] FOREIGN KEY([MATK])
REFERENCES [dbo].[TAIKHOAN] ([MATK])
ALTER TABLE [dbo].[TAIXE] CHECK CONSTRAINT [FK_TX_TK]






COMMIT TRANSACTION

USE [QL_BANHANG]
GO
BEGIN TRANSACTION
CREATE PARTITION FUNCTION [PART_F_TTHD](date) AS RANGE RIGHT FOR VALUES (N'2022-01-01', N'2023-01-01', N'2024-01-01')


CREATE PARTITION SCHEME [PART_S_TTHD] AS PARTITION [PART_F_TTHD] TO ([TGHH_2021], [TGHH_2022], [TGHH_2023], [PRIMARY])






ALTER TABLE [dbo].[THONGTIN_HOPDONG] DROP CONSTRAINT [PK_THONGTIN_HOPDONG] WITH ( ONLINE = OFF )


SET ANSI_PADDING ON

ALTER TABLE [dbo].[THONGTIN_HOPDONG] ADD PRIMARY KEY NONCLUSTERED 
(
	[MAHD] ASC,
	[STT] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]


CREATE CLUSTERED INDEX [ClusteredIndex_on_PART_S_TTHD_638073166823412133] ON [dbo].[THONGTIN_HOPDONG]
(
	[TGHH] ASC
)WITH (SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF) ON [PART_S_TTHD]([TGHH])


DROP INDEX [ClusteredIndex_on_PART_S_TTHD_638073166823412133] ON [dbo].[THONGTIN_HOPDONG]








COMMIT TRANSACTION


USE [QL_BANHANG]
GO
BEGIN TRANSACTION
CREATE PARTITION FUNCTION [PART_F_TX](datetime) AS RANGE RIGHT FOR VALUES (N'2021-01-01T00:00:00', N'2022-01-01T00:00:00', N'2023-01-01T00:00:00', N'2024-01-01T00:00:00')


CREATE PARTITION SCHEME [PART_S_TX] AS PARTITION [PART_F_TX] TO ([PRIMARY], [NGAYTXTG_2021], [NGAYTXTG_2022], [NGAYTXTG_2023], [PRIMARY])


ALTER TABLE [dbo].[DANHGIA_TX] DROP CONSTRAINT [FK_DG_TX]


ALTER TABLE [dbo].[DON_DH] DROP CONSTRAINT [FK_DH_TX]


ALTER TABLE [dbo].[TAIXE_CHITIET] DROP CONSTRAINT [FK_TX_CT]






ALTER TABLE [dbo].[TAIXE] DROP CONSTRAINT [PK_TAIXE] WITH ( ONLINE = OFF )


SET ANSI_PADDING ON

ALTER TABLE [dbo].[TAIXE] ADD PRIMARY KEY NONCLUSTERED 
(
	[MATX] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]


CREATE CLUSTERED INDEX [ClusteredIndex_on_PART_S_TX_638073155255713363] ON [dbo].[TAIXE]
(
	[NGAYTG] ASC
)WITH (SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF) ON [PART_S_TX]([NGAYTG])


DROP INDEX [ClusteredIndex_on_PART_S_TX_638073155255713363] ON [dbo].[TAIXE]




ALTER TABLE [dbo].[DANHGIA_TX]  WITH CHECK ADD  CONSTRAINT [FK_DG_TX] FOREIGN KEY([MATX])
REFERENCES [dbo].[TAIXE] ([MATX])
ALTER TABLE [dbo].[DANHGIA_TX] CHECK CONSTRAINT [FK_DG_TX]


ALTER TABLE [dbo].[DON_DH]  WITH CHECK ADD  CONSTRAINT [FK_DH_TX] FOREIGN KEY([MATX])
REFERENCES [dbo].[TAIXE] ([MATX])
ALTER TABLE [dbo].[DON_DH] CHECK CONSTRAINT [FK_DH_TX]


ALTER TABLE [dbo].[TAIXE_CHITIET]  WITH CHECK ADD  CONSTRAINT [FK_TX_CT] FOREIGN KEY([MATX])
REFERENCES [dbo].[TAIXE] ([MATX])
ALTER TABLE [dbo].[TAIXE_CHITIET] CHECK CONSTRAINT [FK_TX_CT]






COMMIT TRANSACTION

