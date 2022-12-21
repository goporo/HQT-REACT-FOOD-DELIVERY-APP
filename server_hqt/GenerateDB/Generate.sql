-- //////////////////////TEST//////////////////////////////

EXEC sp_DANGKYKH '123','123'
EXEC sp_DANGKYKH 'NguyenPhan','pnguyen123'
EXEC sp_DANGKYKH 'HangThanh', 'abcdxyz123'

EXEC sp_DANGKYTX 'TAIXE','123','taigavn113@gmail.com','TAI','012345678','61D1.42558','0123'

EXEC sp_DANGKYDT 'DOITAC','123','Pmt@gmail.com',N'Cơm nhà làm','0123456','mail@mail','0123456',0,50
EXEC sp_DANGKYDT 'DOITAC','123','Ntth@gmail.com',N'Bún bò','0999996','MST01','mailNDD01',0,150
EXEC sp_DANGKYDT 'DOITAC','123','Vnkvy@gmail.com',N'Tokboki','03232446','MST02','mailNDD02',0,150

EXEC sp_DANGKYQTV 'Admin1','123','admin1',N'Phạm Minh Tài','0123456'
EXEC sp_DANGKYQTV 'Admin2','admin2','adm@mail','Hèng Đẹp Gái', '23321412'

EXEC sp_DANGKYNV 'NHANVIEN1','123','HELLO',N'Phạm Minh Tài','0123456'
EXEC sp_DANGKYNV 'NHANVIEN2','123','Hi@gmail.com',N'Phan Nguyễn Phước Nguyên','01243256'
EXEC sp_DANGKYNV 'NHANVIEN3','123','Vie@hcmus.edu',N'Võ Ngọc Khánh Vy','012434343'

EXEC sp_DANGKYNGANHANG '1',1,N'DĨ AN',N'TPBANK','01234456'
EXEC sp_DANGKYNGANHANG '1',2,N'DĨ AN',N'TPBANK','01234456'
EXEC sp_DANGKYNGANHANG '2',2,N'Phú Yên',N'MPBANK','01245456'

EXEC sp_ThemGiaCuoc 'MC1', 15000, 2, '12/12/2022', 'VND', '1'
EXEC sp_ThemKhuVuc 'KV1', 'Khu vực 1', 'MC1'
EXEC sp_ThemQuanHuyen 'H1', 'Huyện Quan Hóa','KV1'
EXEC sp_ThemPhuong 'P1', 'Phường 1','H1'
EXEC sp_ThemDiaChi 'DC1','123 Bùi Đình Túy', 'P1'

EXEC sp_ThemGiaCuoc 'MC2', 30000, 4, '12/12/2022', 'VND', '2'
EXEC sp_ThemKhuVuc 'KV2', 'Khu vực 2', 'MC2'
EXEC sp_ThemQuanHuyen 'H2', 'Huyện Đồng Văn','KV2'
EXEC sp_ThemPhuong 'P2', 'Phường 2','H2'
EXEC sp_ThemDiaChi 'DC2','123 Thành Thái', 'P2'


EXEC sp_ThemChiNhanh '1', '132324',0,'https://i.pinimg.com/originals/4e/95/ff/4e95ff2406e7914e70cbbba6dd9c51d2.jpg',null,null,null,'1'
EXEC sp_ThemChiNhanh '2', '132324', 0, 'https://i.etsystatic.com/21215114/r/il/d0c7bd/4104680841/il_fullxfull.4104680841_hxug.jpg', NULL,NULL,NULL, '3'
EXEC sp_ThemChiNhanh '3', '098736325',1,'https://c8.alamy.com/comp/PCYG1J/pizzeria-fast-food-logo-or-label-happy-chef-holding-pizza-and-scapula-in-hands-vector-illustration-PCYG1J.jpg','1','12', 'DC1','1'
EXEC sp_ThemChiNhanh '4', '342342243',1, 'https://dynamic.brandcrowd.com/asset/logo/fc77e70d-34f4-44ca-8773-b3884b2213b9/logo-search-grid-1x?v=637936310133200000', '2', '1', 'DC2', '2'


EXEC  sp_ThemCuaHang '1','BOBABOP','8:00','23:59','AVAILABLE'
EXEC  sp_ThemCuaHang '2','BURGER KING','8:00','23:59','AVAILABLE'
EXEC  sp_ThemCuaHang '3','CHICKEN ADVENTURE','8:00','23:59','AVAILABLE'
EXEC  sp_ThemCuaHang '4','MILK CHEA','8:00','23:59','AVAILABLE'


EXEC sp_insert_LAT

EXEC sp_ThemThucDon 'chicken burger',NULL,20000,0,'https://i.postimg.cc/8z4jH0mR/chicken-burger.jpg','3','1'
EXEC sp_ThemThucDon 'chicken deluxe fry',NULL,30000,0,'https://i.postimg.cc/DzhPWHy1/chicken-deluxe-fry.jpg','1','1'	
EXEC sp_ThemThucDon 'chicken malai gravy',NULL,400000,0,'https://i.postimg.cc/qRSL7Rtv/chicken-malai-gravy.jpg','4','1'
EXEC sp_ThemThucDon 'chicken malai gravy 123',NULL,400000,0,'https://i.postimg.cc/NMQwJWP3/chicken-pizza.jpg','3','1'
EXEC sp_ThemThucDon 'Tra sua full topping', 'Ngon quá trời ngon', 20000, 1, 'https://www.bartender.edu.vn/wp-content/uploads/2022/04/tra-sua-nuong-hap-dan.jpg','1','1'
EXEC sp_ThemThucDon 'Bun bo Hue dac biet', 'Ngon một chút hoy chứ hong ngon nhiều', 50000, 1, 'https://i.ytimg.com/vi/A_o2qfaTgKs/maxresdefault.jpg','2', '3'
EXEC sp_ThemThucDon 'Bong Lan Trung Muoi', 'Ăn một miếng tăng 5 kí', 25000, 1, 'https://vn-live-02.slatic.net/p/e862cf389a7345d91c1de656a85d4287.jpg','1','4'
EXEC sp_ThemThucDon 'Tra sua nuong', 'Ngon mà tui tỉnh luôn', 35000, 1, 'https://abar.vn/wp-content/uploads/2021/08/tra-sua-nuong.jpg','2', '1'


EXEC sp_ThemHopDong 1, 5, 1000000, 1
EXEC sp_ThemHopDong 2, 1, 1000000, 2
EXEC sp_ThemHopDong 3, 2, 1000000, 3

EXEC sp_ThemHoaHong '01/01/2020','01/01/2025',10
EXEC sp_ThemHoaHong '01/01/2020','01/01/2025',10
EXEC sp_ThemHoaHong '01/01/2020','01/01/2026',10
EXEC sp_ThemHoaHong '01/01/2020','01/01/2022',10

EXEC sp_ThemThongTinHopDong 1,5,'01/01/2020','01/01/2025','HH1','1'
EXEC sp_ThemThongTinHopDong 2,6,'01/01/2020','01/01/2026','HH2','1'
EXEC sp_ThemThongTinHopDong 3,2,'01/01/2020','01/01/2022','HH3','2'

EXEC sp_ThemDonDH '1','DELIVERING','12/1/2022','VPBank', 200000, 15000,'1', '1', '1', '1', NULL
EXEC sp_ThemDonDH '2','DELIVERING','12/1/2022','VPBank', 200000, 15000,'1', '1', '1', '1', NULL


EXEC sp_ThemThucDonDatHang '1', '1', 1
EXEC sp_ThemThucDonDatHang '2', '1', 1
EXEC sp_ThemThucDonDatHang '3', '2', 1
EXEC sp_ThemThucDonDatHang '4', '2', 1




EXEC sp_ThemPhamVi
EXEC sp_CapNhatPhamVi
UPDATE KHACHHANG SET SODUVI=1000000
UPDATE TAIXE SET PHITHECHAN=1000000
UPDATE PHAMVIBANG SET IDMAX  =(SELECT MAX(convert(int,MADH)) FROM DON_DH ) WHERE TENPHAMVI='DON_DH'