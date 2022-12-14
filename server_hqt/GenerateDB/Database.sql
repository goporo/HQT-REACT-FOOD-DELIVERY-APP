USE master
GO
IF DB_ID('QL_BANHANG_TRANHCHAP') IS NOT NULL
	DROP DATABASE QL_BANHANG_TRANHCHAP
GO

CREATE DATABASE QL_BANHANG_TRANHCHAP
GO

USE QL_BANHANG_TRANHCHAP
GO 

CREATE TABLE THONGTIN_HOAHONG
(
	MAHH VARCHAR(10),
	NGAYBD DATE,
	NGAYHH DATE,
	PTHH INT
	PRIMARY KEY (MAHH)
)
CREATE TABLE KHACHHANG
(
	MAKH VARCHAR(10) UNIQUE,
	EMAIL CHAR(50 ) UNIQUE,
	TEN NCHAR(50),
	SDT VARCHAR(10),
	HINHANHND  BIT,
	DIACHIHINHANHND VARCHAR(300),
	MATKNGANHANG VARCHAR(10),
	MATK VARCHAR(10),
	MADIACHI VARCHAR(10),
	SODUVI INT
	
	PRIMARY KEY(MAKH)
)

CREATE TABLE TAIKHOAN
(
	MATK VARCHAR(10), 
	TENTK VARCHAR(50),
	TINHTRANGTK NCHAR(30),
	MATKHAUTK VARCHAR(50),
	LOAITK INT

	PRIMARY KEY(MATK)
)

CREATE TABLE NGANHANG
(
	MASTKNGANHANG VARCHAR(10),
	TENNGANHANG NVARCHAR(50),
	TENCHINHANH NVARCHAR(50),
	STK CHAR(13)

	PRIMARY KEY(MASTKNGANHANG)
)

CREATE TABLE DON_DH
(
	MADH VARCHAR(10),
	TRANGTHAIDH VARCHAR(20),
	NGAYLAP DATE,
	HINHTHUCTT NVARCHAR(20),
	PHISP int,
	PHIVANCHUYEN int,
	MADCGH VARCHAR(10),
	MAKH VARCHAR(10),
	MACN VARCHAR(10),
	MATX VARCHAR(10),
	MAKHUVUC VARCHAR(10),

	PRIMARY KEY (MADH)
)


CREATE TABLE DANHGIA_CHINHANH
(

	MADH VARCHAR(10),
	RATING FLoat,
	NOIDUNG NVARCHAR(100),
	MACN VARCHAR(10),
	MADT VARCHAR(10),

	PRIMARY KEY(MADH)
)
CREATE TABLE DANHGIA_MONAN
(

	MADH VARCHAR(10),
	MAMONAN VARCHAR(10),
	RATING FLoat,
	NOIDUNG NVARCHAR(100),


	PRIMARY KEY(MADH,MAMONAN)
)
CREATE TABLE DANHGIA_TX
(

	MADH VARCHAR(10),
	MATX VARCHAR(10),
	RATING FLoat,
	NOIDUNG NVARCHAR(100),


	PRIMARY KEY(MADH)
)
CREATE TABLE DIACHI
(
	MADIACHI VARCHAR(10),
	DIACHI NVARCHAR(50),
	MAPHUONG VARCHAR(10)

	PRIMARY KEY (MADIACHI)
)

CREATE TABLE PHUONG
(
	MAPHUONG VARCHAR(10),
	TENPHUONG NVARCHAR(50),
	MAHUYEN VARCHAR(10)

	PRIMARY KEY (MAPHUONG)
)

CREATE TABLE QUAN_HUYEN
(
	MAHUYEN VARCHAR(10),
	TENHUYEN NVARCHAR(50),
	MAKHUVUC VARCHAR(10)

	PRIMARY KEY (MAHUYEN)
)

CREATE TABLE KHUVUC
(
	MAKHUVUC VARCHAR(10),
	TENKHUVUC NVARCHAR(50),
	MACUOC VARCHAR(10),
	

	PRIMARY KEY (MAKHUVUC)
)

CREATE TABLE GIACUOC
(
	MACUOC VARCHAR(10),
	GIACUOC INT,
	KHOANGCACH INT,
	NGAYTAO DATE,
	THOIGIANHIEULUC DATETIME,
	DONVITIEN VARCHAR(10),
	MAQTV VARCHAR(10)

	PRIMARY KEY (MACUOC)
)

CREATE TABLE TAIXE
(
	MATX VARCHAR(10) UNIQUE,
	EMAIL CHAR(50)UNIQUE,
	TEN NCHAR(50),
	HINHANHND BIT,
	DIACHIHINHANHND VARCHAR(300),
	SDT VARCHAR(10),
	BIENSOXE VARCHAR(10) UNIQUE,
	PHITHECHAN INT,
	CMND CHAR(12) UNIQUE,
	MAKHUVUCHD VARCHAR(10),
	MATKNGANHANG VARCHAR(10),
	MATK VARCHAR(10) UNIQUE,
	MADIACHI VARCHAR(10)

	PRIMARY KEY(MATX)
)

CREATE TABLE QUANTRIVIEN 
(
	MAQTV VARCHAR(10) UNIQUE,
	EMAIL CHAR(50)UNIQUE,
	MATK VARCHAR(10)UNIQUE,
	TEN NCHAR(50),
	SDT VARCHAR(10),
	HINHANHND BIT,
	DIACHIHINHANHND VARCHAR(300),
	LUONGQTV INT,
	MATKNGANHANG VARCHAR(10),
	MADIACHI VARCHAR(10)

	PRIMARY KEY (MAQTV)
)

CREATE TABLE QUYENTHAOTAC
(
	MATK VARCHAR(10),
	MAQTV VARCHAR(10),
	MATHAOTAC VARCHAR(10),
	MATHUOCTINH VARCHAR(10),
	DUOCPHEP BIT

	PRIMARY KEY (MATK, MAQTV, MATHAOTAC, MATHUOCTINH)
)

CREATE TABLE THAOTAC
(
	MATHAOTAC VARCHAR(10),
	TENTHAOTAC NCHAR(20)

	PRIMARY KEY (MATHAOTAC)
)

CREATE TABLE THUOCTINH
(
	MATHUOCTINH VARCHAR(10),
	TENTHUOCTINH NCHAR(20),
	MAPHAMVI VARCHAR(10),
	
	PRIMARY KEY (MATHUOCTINH)
)

CREATE TABLE PHAMVIBANG
(
	MAPHAMVI VARCHAR(10),
	TENPHAMVI NCHAR(20),
	IDMAX int,

	PRIMARY KEY (MAPHAMVI)
)

CREATE TABLE NHANVIEN
(
	MANHANVIEN VARCHAR(10) UNIQUE,
	EMAIL CHAR(50)UNIQUE,
	TEN NCHAR(20),
	SDT VARCHAR(10),
	HINHANHND BIT,
	DIACHIHINHANHND VARCHAR(300),
	NGAYVAOCT DATE,
	LUONGNV MONEY,
	MATKNGANHANG VARCHAR(10),
	MATK VARCHAR(10)UNIQUE,
	MADIACHI VARCHAR(10)

	PRIMARY KEY (MANHANVIEN)
)

CREATE TABLE HOPDONG
(
	MAHD VARCHAR(10),
	SL_CN_DK INT,
	NGAYLAP DATE,
	PHIKH INT,
	MADOITAC VARCHAR(10),


	PRIMARY KEY (MAHD)
)


CREATE TABLE THONGTIN_HOPDONG
(
	MAHD VARCHAR(10),
	STT int,
	THOIHAN int,
	TGBD DATE,
	TGHH DATE,
	MAHH VARCHAR(10),
	MANHANVIEN VARCHAR(10)

	PRIMARY KEY (MAHD,STT)
)
CREATE TABLE DOITAC
(
	MADOITAC VARCHAR(10) UNIQUE,
	EMAILDT CHAR(50) UNIQUE,
	TENDT NCHAR(50),
	HINHANHND  BIT,
	DIACHIHINHANHND VARCHAR(300),
	SDTDT VARCHAR(10),
	MSTHUE VARCHAR(10)UNIQUE,
	MAIL_NDD CHAR(50),
	SLDUKIENMIN INT,
	SLDUKIENMAX INT,
	MATKNGANHANG VARCHAR(10),
	MATK VARCHAR(10) UNIQUE,
	MADIACHI VARCHAR(10)
	PRIMARY KEY (MADOITAC)
)

CREATE TABLE LOAIAMTHUCDOITAC 
(
	MALAT VARCHAR(10), 
	MADT VARCHAR(10)
	
	PRIMARY KEY (MALAT, MADT)
)

CREATE TABLE CHINHANH
(
	MACN VARCHAR(10) UNIQUE,
	HINHANHND BIT,
	DIACHIHINHANHND VARCHAR(300),
	SDT_CN VARCHAR(10),
	MATK VARCHAR(10),
	MATKNGANHANG VARCHAR(10),
	MADIACHI VARCHAR(10),
	MADT VARCHAR(10)
	PRIMARY KEY (MACN)
)

CREATE TABLE HOPDONGCHINHANH
(
	MACN VARCHAR(10),
	MAHD VARCHAR(10)

	PRIMARY KEY (MACN, MAHD)
)

CREATE TABLE CUAHANG
(
	MACN VARCHAR(10),
	TENCH NCHAR(20),
	TG_HD_MO TIME,
	TG_HD_DONG TIME,
	TINHTRANGCH NCHAR(20)

	PRIMARY KEY (MACN)
)

CREATE TABLE LOAIAMTHUC
(
	MALAT VARCHAR(10),
	TENLAT NCHAR(20)

	PRIMARY KEY (MALAT)
)

CREATE TABLE THUCDON
(
	MAMONAN VARCHAR(10),
	TENMONAN NVARCHAR(100),
	MOTA NVARCHAR (80),
	GIA INT,
	TINHTRANG NCHAR(20),
	HINHANHTD BIT,
	DIACHIHINHANHTD VARCHAR(300),
	MACN VARCHAR(10),
	MALAT VARCHAR(10)

	PRIMARY KEY (MAMONAN)
)

CREATE TABLE TUYCHONMONAN
(
	MATUYCHON VARCHAR(10),
	TENTUYCHON NCHAR(20),
	MUCDO NCHAR(20),
	MAMONAN VARCHAR(10)

	PRIMARY KEY (MATUYCHON)
)

CREATE TABLE THUCDONDATHANG
(
	MAMONAN VARCHAR(10),
	MADH VARCHAR(10),
	GIABAN INT,
	SOLUONG INT,

	PRIMARY KEY (MAMONAN, MADH)
)

CREATE TABLE TUYCHONMONDATHANG
(
	MATUYCHON VARCHAR(10),
	MADH VARCHAR(10),

	PRIMARY KEY (MATUYCHON, MADH)
)

ALTER TABLE DIACHI
ADD 
	CONSTRAINT FK_DC_D
	FOREIGN KEY (MAPHUONG)
	REFERENCES PHUONG(MAPHUONG)

ALTER TABLE PHUONG
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
	REFERENCES DOITAC(MADOITAC)
	ALTER TABLE DANHGIA_CHINHANH
ADD 
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
	CONSTRAINT FK_DGMA_DH
	FOREIGN KEY (MADH)
	REFERENCES DON_DH(MADH),
	CONSTRAINT FK_DG_MA
	FOREIGN KEY (MAMONAN)
	REFERENCES THUCDON(MAMONAN)
ALTER TABLE DANHGIA_TX
ADD 
	CONSTRAINT FK_DGTX_DH
	FOREIGN KEY (MADH)
	REFERENCES DON_DH(MADH),
	CONSTRAINT FK_DG_TX
	FOREIGN KEY (MATX)
	REFERENCES TAIXE(MATX)
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
	CONSTRAINT FK_DH_KH
	FOREIGN KEY (MAKH)
	REFERENCES KHACHHANG(MAKH),

	CONSTRAINT FK_DH_CN
	FOREIGN KEY (MACN)
	REFERENCES CHINHANH(MACN),

	CONSTRAINT FK_DH_TX
	FOREIGN KEY (MATX)
	REFERENCES TAIXE(MATX)


ALTER TABLE THONGTIN_HOPDONG
ADD CONSTRAINT FK_TT_HD
	FOREIGN KEY (MAHD)
	REFERENCES HOPDONG,
	CONSTRAINT FK_HD_NV
	FOREIGN KEY (MANHANVIEN)
	REFERENCES NHANVIEN(MANHANVIEN),
	CONSTRAINT FK_HD_HH
	FOREIGN KEY (MAHH)
	REFERENCES THONGTIN_HOAHONG(MAHH)

ALTER TABLE CUAHANG
ADD CONSTRAINT FK_CH_CN
	FOREIGN KEY (MACN)
	REFERENCES CHINHANH



