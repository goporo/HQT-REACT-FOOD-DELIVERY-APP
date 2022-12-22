USE QL_BANHANG_TRANHCHAP
GO
ALTER PROC sp_ThemThucDon
	@TENMONAN VARCHAR(100),
	@MOTA NVARCHAR (80),
	@GIA INT,
	@HINHANHTD BIT,
	@DIACHIHINHANHTD VARCHAR(max),
	@MACN VARCHAR(10),
	@MALAT VARCHAR(10)

AS
BEGIN TRAN 
	
	IF NOT EXISTS(SELECT MACN  FROM CHINHANH WHERE MACN=@MACN)
	BEGIN
			ROLLBACK TRAN
			RAISERROR ('KHONG TON TAI CHI NHANH',16,1)
			RETURN
	END
	IF NOT EXISTS(SELECT MALAT  FROM LOAIAMTHUC WHERE MALAT=@MALAT)
	BEGIN
			ROLLBACK TRAN
			RAISERROR ('KHONG TON TAI LOAI AM THUC NAY',16,1)
			RETURN
	END
	IF EXISTS (SELECT MAMONAN FROM THUCDON WHERE  MACN=@MACN AND TENMONAN=@TENMONAN)
	BEGIN
			ROLLBACK TRAN
			RAISERROR ('DA TON TAI MON AN NAY',16,1)
			RETURN
	END
	DECLARE @MAMONAN VARCHAR(10)
	EXEC sp_IDMAX 'THUCDON',@MAMONAN OUT
	INSERT INTO THUCDON
	VALUES
		(@MAMONAN,	@TENMONAN,	@MOTA,	@GIA,'AVAILABLE',	@HINHANHTD,	@DIACHIHINHANHTD, @MACN, @MALAT)
	IF @@ERROR<>0
	BEGIN
		PRINT 'KHONG THEM MON DUOC'
		ROLLBACK TRAN
		RETURN
	END
		SELECT RESOURCE_TYPE,DB_NAME(RESOURCE_DATABASE_ID)NAME,REQUEST_SESSION_ID,REQUEST_MODE,REQUEST_STATUS FROM SYS.DM_TRAN_LOCKS
COMMIT TRAN
RETURN
GO
ALTER PROC sp_MonAn_TheoGia
@SL int,
@THUTU VARCHAR(10)
AS
	BEGIN TRAN
	if @THUTU='INCREASE'
	BEGIN
	SELECT TOP (@SL) * FROM THUCDON WITH (HOLDLOCK,TabLOCK) ORDER BY GIA ASC
	WAITFOR DELAY '0:00:10'
	SELECT COUNT(TD.MAMONAN) SOLUONG FROM ( SELECT TOP (@SL) * FROM THUCDON ORDER BY GIA ASC) TD
	SELECT RESOURCE_TYPE,DB_NAME(RESOURCE_DATABASE_ID)NAME,REQUEST_SESSION_ID,REQUEST_MODE,REQUEST_STATUS FROM SYS.DM_TRAN_LOCKS
	COMMIT TRAN
	RETURN
	END
	IF @THUTU='DECREASE'
	BEGIN
	SELECT TOP (@SL) * FROM THUCDON WITH (HOLDLOCK,TabLOCK) ORDER BY GIA DESC
	WAITFOR DELAY '0:00:10'
	SELECT COUNT(TD.MAMONAN) SOLUONG FROM ( SELECT TOP (@SL) * FROM THUCDON ORDER BY GIA DESC) TD
	COMMIT TRAN
	RETURN
	END
GO