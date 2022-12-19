﻿use QL_BANHANG_TRANHCHAP
--T1: tài xế A cập nhật tình trạng đơn hàng
CREATE PROC sp_CapNhat_DH_TX_Tranhchap1
@TRANGTHAIDH CHAR(20),
@MATX CHAR(10),
@MADH CHAR(10)
AS
BEGIN TRAN
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED
	IF NOT EXISTS(SELECT MADH FROM DON_DH WHERE MADH=@MADH)
	BEGIN
			ROLLBACK TRAN
			RAISERROR ('KHONG TON TAI DON HANG',16,1)
			RETURN
	END
	IF NOT EXISTS(SELECT MATX FROM TAIXE WHERE MATX=@MATX)
	BEGIN
			ROLLBACK TRAN
			RAISERROR ('KHONG TON TAI TAI XE',16,1)
			RETURN
	END
	IF (@TRANGTHAIDH='DELIVERING')
	BEGIN
		IF NOT EXISTS (SELECT MADH FROM DON_DH WHERE MADH=@MADH AND TRANGTHAIDH='PROCESSING')
		BEGIN
			ROLLBACK TRAN
			RAISERROR ('KHONG NHAN DON DUOC',16,1)
			RETURN
		END
		WAITFOR DELAY '00:00:10'
		UPDATE DON_DH SET MATX=@MATX, TRANGTHAIDH=@TRANGTHAIDH WHERE MADH=@MADH

		IF @@ERROR <>0
		BEGIN
			ROLLBACK TRAN
			RAISERROR ('KHONG NHAN DON DUOC',16,1)
			RETURN
		END
		COMMIT TRAN
		RETURN
	END
	IF (@TRANGTHAIDH='DELIVERED')
	BEGIN
		IF NOT EXISTS (SELECT MADH FROM DON_DH WHERE MADH=@MADH AND MATX=@MATX AND TRANGTHAIDH='DELIVERING')
		BEGIN
			ROLLBACK TRAN
			RAISERROR ('KHONG NHAN DON DUOC',16,1)
			RETURN
		END
		UPDATE DON_DH SET TRANGTHAIDH=@TRANGTHAIDH WHERE MADH=@MADH AND MATX=@MATX AND TRANGTHAIDH='DELIVERING'
		IF @@ERROR <>0
		BEGIN
			ROLLBACK TRAN
			RAISERROR ('KHONG NHAN DON DUOC',16,1)
			RETURN
		END
		COMMIT TRAN
		RETURN
	END

	RAISERROR ('TINH TRANG KHONG PHU HOP',16,1)
	ROLLBACK TRAN
GO



--T2: tài xế B tiến hành cập nhật trạng thái đơn hàng (cùng 1 đơn với tài xế A)
CREATE PROC sp_CapNhat_DH_TX_Tranhchap2
@TRANGTHAIDH CHAR(20),
@MATX CHAR(10),
@MADH CHAR(10)
AS
BEGIN TRAN
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED
	IF NOT EXISTS(SELECT MADH FROM DON_DH WHERE MADH=@MADH)
	BEGIN
			ROLLBACK TRAN
			RAISERROR ('KHONG TON TAI DON HANG',16,1)
			RETURN
	END
	IF NOT EXISTS(SELECT MATX FROM TAIXE WHERE MATX=@MATX)
	BEGIN
			ROLLBACK TRAN
			RAISERROR ('KHONG TON TAI TAI XE',16,1)
			RETURN
	END
	IF (@TRANGTHAIDH='DELIVERING')
	BEGIN
		IF NOT EXISTS (SELECT MADH FROM DON_DH WHERE MADH=@MADH)
		BEGIN
			ROLLBACK TRAN
			RAISERROR ('KHONG NHAN DON DUOC',16,1)
			RETURN
		END
		UPDATE DON_DH SET MATX=@MATX,TRANGTHAIDH=@TRANGTHAIDH WHERE MADH=@MADH

		IF @@ERROR <>0
		BEGIN
			ROLLBACK TRAN
			RAISERROR ('KHONG NHAN DON DUOC',16,1)
			RETURN
		END
		COMMIT TRAN
		RETURN
	END
	IF (@TRANGTHAIDH='DELIVERED')
	BEGIN
		IF NOT EXISTS (SELECT MADH FROM DON_DH WHERE MADH=@MADH AND MATX=@MATX AND TRANGTHAIDH='DELIVERING')
		BEGIN
			ROLLBACK TRAN
			RAISERROR ('KHONG NHAN DON DUOC',16,1)
			RETURN
		END
		UPDATE DON_DH SET TRANGTHAIDH=@TRANGTHAIDH WHERE MADH=@MADH AND MATX=@MATX AND TRANGTHAIDH='DELIVERING'
		IF @@ERROR <>0
		BEGIN
			ROLLBACK TRAN
			RAISERROR ('KHONG NHAN DON DUOC',16,1)
			RETURN
		END
		COMMIT TRAN
		RETURN
	END

	RAISERROR ('TINH TRANG KHONG PHU HOP',16,1)
	ROLLBACK TRAN
GO

