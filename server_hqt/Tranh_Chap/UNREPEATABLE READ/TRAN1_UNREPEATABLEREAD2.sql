USE QL_BANHANG_TRANHCHAP
GO
declare @listmonan list_MONAN
insert @listmonan values(1, '2', 2)
insert @listmonan values(1, '7', 3)
EXEC sp_Tao_DH 'VI',NULL,'1','1',20000,@listmonan
go
SELECT * FROM DON_DH
GO