use QL_BANHANG_TRANHCHAP


--T1: đặt hàng với số dư ví bằng 0

--Đầu tiên tạo tài khoản khách hàng với số dư ví = 0
--exec sp_DANGKYKH 'VieKhanh', '12345'

declare @listmonan list_MONAN
insert @listmonan values(1, '2', 2)
insert @listmonan values(1, '7', 3)
exec sp_Tao_DH 'VI', null, '1', '1', 12000, @listmonan