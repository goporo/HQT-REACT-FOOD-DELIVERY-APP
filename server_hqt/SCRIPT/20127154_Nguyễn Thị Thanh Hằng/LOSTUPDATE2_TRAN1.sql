use QL_BANHANG_TRANHCHAP

--T1: 
--test trên khách hàng có số dư ví lớn

declare @listmonan list_MONAN
insert @listmonan values(1, '5', 1)
insert @listmonan values(1, '7', 1)
exec sp_Tao_DH_TranhChap1 'VI', null, '1', '1', 600, @listmonan


--kiểm tra
EXEC sp_DonHang_KH '1', NULL, NULL