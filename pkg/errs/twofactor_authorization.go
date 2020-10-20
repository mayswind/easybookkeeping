package errs

import "net/http"

var (
	ErrPasscodeInvalid               = NewNormalError(NORMAL_SUBCATEGORY_TWOFACTOR, 0, http.StatusUnauthorized, "passcode is invalid")
	ErrTwoFactorRecoveryCodeInvalid  = NewNormalError(NORMAL_SUBCATEGORY_TWOFACTOR, 1, http.StatusUnauthorized, "two factor recovery code is invalid")
	ErrTwoFactorIsNotEnabled         = NewNormalError(NORMAL_SUBCATEGORY_TWOFACTOR, 2, http.StatusBadRequest, "two factor is not enabled")
	ErrTwoFactorAlreadyEnabled       = NewNormalError(NORMAL_SUBCATEGORY_TWOFACTOR, 3, http.StatusBadRequest, "two factor has already been enabled")
	ErrTwoFactorRecoveryCodeNotExist = NewNormalError(NORMAL_SUBCATEGORY_TWOFACTOR, 4, http.StatusUnauthorized, "two factor recovery code does not exist")
)
