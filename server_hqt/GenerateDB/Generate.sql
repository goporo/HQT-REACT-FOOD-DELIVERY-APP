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