USE QL_BANHANG
DECLARE @OUTPUT INT
SELECT* from thucdon
EXEC sp_THEMMONAN N'Trà sữa phúc long888888888888888888888888888888888888888888888888888888888888888888888888888888888',NULL,NULL,NULL,0,NULL,'1','1',@OUTPUT OUT
PRINT @OUTPUT
GO
use QL_BANHANG
select* from thucdon
select* from phamvibang
USE MASTER
