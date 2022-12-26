USE master
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