
-- //////////////////////TEST//////////////////////////////
EXEC sp_ThemPhamVi
EXEC sp_CapNhatPhamVi
EXEC sp_ThemHoaHong '01/01/2020','01/01/2025',10

EXEC sp_DANGKYKH '123','123'
EXEC sp_DANGKYKH 'NguyenPhan','pnguyen123'
EXEC sp_DANGKYKH 'HangThanh', 'abcdxyz123'

EXEC sp_DANGKYTX 'TAIXE','123','taigavn113@gmail.com','TAI','012345678','61D1.42558','0123'

EXEC sp_DANGKYDT 'DOITAC','123','Pmt@gmail.com',N'Cơm nhà làm','0123456','mail@mail','0123456',0,50
EXEC sp_DANGKYDT 'DOITAC','123','Ntth@gmail.com',N'Bún bò','0999996','MST01','mailNDD01',0,150
EXEC sp_DANGKYDT 'DOITAC','123','Vnkvy@gmail.com',N'Tokboki','03232446','MST02','mailNDD02',0,150

EXEC sp_DANGKYQTV 'Admin1','123','admin1',N'Phạm Minh Tài','0123456'

EXEC sp_DANGKYNV 'NHANVIEN1','123','HELLO',N'Phạm Minh Tài','0123456'
EXEC sp_DANGKYNV 'NHANVIEN2','123','Hi@gmail.com',N'Phan Nguyễn Phước Nguyên','01243256'
EXEC sp_DANGKYNV 'NHANVIEN3','123','Vie@hcmus.edu',N'Võ Ngọc Khánh Vy','012434343'

EXEC sp_DANGKYNGANHANG '1',1,N'DĨ AN',N'TPBANK','01234456'
EXEC sp_DANGKYNGANHANG '1',2,N'DĨ AN',N'TPBANK','01234456'

EXEC sp_ThemChiNhanh '0',null,0,null,null,null,null,'1'
EXEC sp_ThemChiNhanh 2, '132324', 0, NULL, NULL,NULL,NULL, '3'
EXEC sp_ThemChiNhanh 3, '1432324', 0, NULL, NULL,NULL,NULL, '2'
EXEC sp_ThemChiNhanh 4, '13243324', 0, NULL, NULL,NULL,NULL, '2'

EXEC  sp_ThemCuaHang '0','BOBABOP','8:00','23:59','AVAILABLE'


EXEC sp_insert_LAT

EXEC sp_ThemThucDon 'chicken burger',NULL,20000,0,'https://i.postimg.cc/8z4jH0mR/chicken-burger.jpg','0','1'
EXEC sp_ThemThucDon 'chicken deluxe fry',NULL,30000,0,'https://i.postimg.cc/DzhPWHy1/chicken-deluxe-fry.jpg','0','1'	
EXEC sp_ThemThucDon 'chicken malai gravy',NULL,400000,0,'https://i.postimg.cc/qRSL7Rtv/chicken-malai-gravy.jpg','0','1'
EXEC sp_ThemThucDon 'chicken malai gravy 123',NULL,400000,0,'https://i.postimg.cc/NMQwJWP3/chicken-pizza.jpg','0','1'

EXEC sp_ThemHopDong HD1, 5, 1000000, 1
EXEC sp_ThemHopDong HD2, 1, 1000000, 2
EXEC sp_ThemHopDong HD3, 2, 1000000, 3


EXEC sp_ThemHoaHong 'HH1','01/01/2020','01/01/2025',10
EXEC sp_ThemHoaHong 'HH2','01/01/2020','01/01/2026',10
EXEC sp_ThemHoaHong 'HH3','01/01/2020','01/01/2022',10

EXEC sp_ThemThongTinHopDong 'HD1',5,'01/01/2020','01/01/2025','HH1','1'
EXEC sp_ThemThongTinHopDong 'HD2',6,'01/01/2020','01/01/2026','HH2','1'
EXEC sp_ThemThongTinHopDong 'HD3',2,'01/01/2020','01/01/2022','HH3','2'

EXEC sp_ThemDonDH '1','DELIVERING','12/1/2022','VPBank', 200000, 15000,NULL, 1, 1, NULL, NULL

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