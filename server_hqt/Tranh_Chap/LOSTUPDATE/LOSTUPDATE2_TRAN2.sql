

USE QL_BANHANG_TRANHCHAP
declare @listmonan list_MONAN
insert @listmonan values(1, '5', 1)
exec sp_Tao_DH_TranhChap1 'VI', null, '1', '1', 500, @listmonan

