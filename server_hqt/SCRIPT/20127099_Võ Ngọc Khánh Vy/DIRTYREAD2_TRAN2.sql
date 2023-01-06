
--T2: Chi nhánh tiến hành xem đơn hàng đang chờ xử lý
exec sp_DonHang_CN_XuLy_TranhChap '1', 'AVAILABLE', NULL, NULL
