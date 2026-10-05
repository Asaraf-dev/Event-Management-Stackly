/*--- Login Page ---*/
document.addEventListener('DOMContentLoaded', function () {
    const emAuthLoginForm = document.getElementById('emAuthLoginForm');
    const emAuthLoginPassword = document.getElementById('emAuthLoginPassword');
    const emAuthLoginPasswordToggle = document.getElementById('emAuthLoginPasswordToggle');
    const emAuthLoginEmail = document.getElementById('emAuthLoginEmail');
    const emAuthLoginRemember = document.getElementById('emAuthLoginRemember');
    const emAuthLoginRoleOptions = document.querySelectorAll('.em-auth-login-role-option');
    if (!emAuthLoginForm) {
        return;
    }
    /*--- Role Selection ---*/
    emAuthLoginRoleOptions.forEach(function (emAuthLoginRoleOption) {
        const emAuthLoginRadio = emAuthLoginRoleOption.querySelector('input[type="radio"]');
        if (!emAuthLoginRadio) {
            return;
        }
        emAuthLoginRoleOption.addEventListener('click', function () {
            emAuthLoginRoleOptions.forEach(function (emAuthLoginCurrentOption) {
                emAuthLoginCurrentOption.classList.remove('active');
            });
            emAuthLoginRoleOption.classList.add('active');
            emAuthLoginRadio.checked = true;
        });
    });
    /*--- Password Visibility ---*/
    if (emAuthLoginPassword && emAuthLoginPasswordToggle) {
        emAuthLoginPasswordToggle.addEventListener('click', function () {
            const emAuthLoginIsPassword = emAuthLoginPassword.type === 'password';
            emAuthLoginPassword.type = emAuthLoginIsPassword ? 'text' : 'password';
            emAuthLoginPasswordToggle.innerHTML = emAuthLoginIsPassword ? '<i class="bi bi-eye-slash"></i>' : '<i class="bi bi-eye"></i>';
            emAuthLoginPasswordToggle.setAttribute('aria-label', emAuthLoginIsPassword ? 'Hide password' : 'Show password');
        });
    }
    /*--- Load Remembered Email ---*/
    const emAuthRememberedEmail = localStorage.getItem('emRememberedEmail');
    if (emAuthRememberedEmail && emAuthLoginEmail) {
        emAuthLoginEmail.value = emAuthRememberedEmail;
        if (emAuthLoginRemember) {
            emAuthLoginRemember.checked = true;
        }
    }
    /*--- Load Previous Role ---*/
    const emAuthSavedRole = localStorage.getItem('emLoginRole') || sessionStorage.getItem('emLoginRole');
    if (emAuthSavedRole) {
        emAuthLoginRoleOptions.forEach(function (emAuthLoginRoleOption) {
            const emAuthLoginRadio = emAuthLoginRoleOption.querySelector('input[type="radio"]');
            if (emAuthLoginRadio && emAuthLoginRadio.value === emAuthSavedRole) {
                emAuthLoginRoleOptions.forEach(function (emAuthLoginCurrentOption) {
                    emAuthLoginCurrentOption.classList.remove('active');
                });
                emAuthLoginRoleOption.classList.add('active');
                emAuthLoginRadio.checked = true;
            }
        });
    }
    /*--- Login Submit ---*/
    emAuthLoginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        if (!emAuthLoginForm.checkValidity()) {
            emAuthLoginForm.reportValidity();
            return;
        }
        const emAuthLoginSelectedRole = document.querySelector('input[name="loginRole"]:checked');
        if (!emAuthLoginSelectedRole) {
            emAuthLoginForm.reportValidity();
            return;
        }
        const emAuthLoginSelectedEmail = emAuthLoginEmail.value.trim();
        const emAuthLoginSelectedRoleValue = emAuthLoginSelectedRole.value;
        /*--- Store Login Details ---*/
        sessionStorage.setItem('emLoginEmail', emAuthLoginSelectedEmail);
        sessionStorage.setItem('emLoginRole', emAuthLoginSelectedRoleValue);
        if (emAuthLoginRemember && emAuthLoginRemember.checked) {
            localStorage.setItem('emRememberedEmail', emAuthLoginSelectedEmail);
            localStorage.setItem('emLoginRole', emAuthLoginSelectedRoleValue);
        } else {
            localStorage.removeItem('emRememberedEmail');
            localStorage.removeItem('emLoginRole');
        }
        /*--- Redirect By Role ---*/
        if (emAuthLoginSelectedRoleValue === 'admin') {
            window.location.href = 'admin-dashboard.html';
        } else {
            window.location.href = 'client-dashboard.html';
        }
    });
});

/*--- Register Page ---*/
document.addEventListener('DOMContentLoaded', function () {
    const emAuthRegisterForm = document.getElementById('emAuthRegisterForm');
    const emAuthRegisterName = document.getElementById('emAuthRegisterName');
    const emAuthRegisterPhone = document.getElementById('emAuthRegisterPhone');
    const emAuthRegisterPassword = document.getElementById('emAuthRegisterPassword');
    const emAuthRegisterConfirmPassword = document.getElementById('emAuthRegisterConfirmPassword');
    const emAuthRegisterPasswordToggle = document.getElementById('emAuthRegisterPasswordToggle');
    const emAuthRegisterConfirmPasswordToggle = document.getElementById('emAuthRegisterConfirmPasswordToggle');
    const emAuthRegisterRoleOptions = document.querySelectorAll('.em-auth-register-role-option');
    if (!emAuthRegisterForm) {
        return;
    }
    /*--- Role Selection ---*/
    emAuthRegisterRoleOptions.forEach(function (emAuthRegisterRoleOption) {
        const emAuthRegisterRadio = emAuthRegisterRoleOption.querySelector('input[type="radio"]');
        if (!emAuthRegisterRadio) {
            return;
        }
        emAuthRegisterRoleOption.addEventListener('click', function () {
            emAuthRegisterRoleOptions.forEach(function (emAuthRegisterCurrentOption) {
                emAuthRegisterCurrentOption.classList.remove('active');
            });
            emAuthRegisterRoleOption.classList.add('active');
            emAuthRegisterRadio.checked = true;
        });
    });
    /*--- Name Validation ---*/
    if (emAuthRegisterName) {
        emAuthRegisterName.addEventListener('input', function () {
            this.value = this.value.replace(/[^A-Za-z ]/g, '');
        });
    }
    /*--- Phone Validation ---*/
    if (emAuthRegisterPhone) {
        emAuthRegisterPhone.addEventListener('input', function () {
            this.value = this.value.replace(/[^0-9]/g, '').slice(0, 10);
        });
    }
    /*--- Password Visibility ---*/
    function emAuthRegisterTogglePassword(emAuthRegisterInput, emAuthRegisterButton) {
        if (!emAuthRegisterInput || !emAuthRegisterButton) {
            return;
        }
        const emAuthRegisterIsPassword = emAuthRegisterInput.type === 'password';
        emAuthRegisterInput.type = emAuthRegisterIsPassword ? 'text' : 'password';
        emAuthRegisterButton.innerHTML = emAuthRegisterIsPassword ? '<i class="bi bi-eye-slash"></i>' : '<i class="bi bi-eye"></i>';
        emAuthRegisterButton.setAttribute('aria-label', emAuthRegisterIsPassword ? 'Hide password' : 'Show password');
    }
    if (emAuthRegisterPasswordToggle) {
        emAuthRegisterPasswordToggle.addEventListener('click', function () {
            emAuthRegisterTogglePassword(emAuthRegisterPassword, emAuthRegisterPasswordToggle);
        });
    }
    if (emAuthRegisterConfirmPasswordToggle) {
        emAuthRegisterConfirmPasswordToggle.addEventListener('click', function () {
            emAuthRegisterTogglePassword(emAuthRegisterConfirmPassword, emAuthRegisterConfirmPasswordToggle);
        });
    }
    /*--- Confirm Password Validation ---*/
    if (emAuthRegisterConfirmPassword && emAuthRegisterPassword) {
        emAuthRegisterConfirmPassword.addEventListener('input', function () {
            if (this.value !== emAuthRegisterPassword.value) {
                this.setCustomValidity('Passwords do not match.');
            } else {
                this.setCustomValidity('');
            }
        });
        emAuthRegisterPassword.addEventListener('input', function () {
            if (emAuthRegisterConfirmPassword.value !== '') {
                if (emAuthRegisterConfirmPassword.value !== this.value) {
                    emAuthRegisterConfirmPassword.setCustomValidity('Passwords do not match.');
                } else {
                    emAuthRegisterConfirmPassword.setCustomValidity('');
                }
            }
        });
    }
    /*--- Register Submit ---*/
    emAuthRegisterForm.addEventListener('submit', function (event) {
        event.preventDefault();
        if (!emAuthRegisterForm.checkValidity()) {
            emAuthRegisterForm.reportValidity();
            return;
        }
        const emAuthRegisterSelectedRole = emAuthRegisterForm.querySelector('input[name="registerRole"]:checked');
        const emAuthRegisterNameValue = emAuthRegisterName.value.trim();
        const emAuthRegisterPhoneValue = emAuthRegisterPhone.value.trim();
        const emAuthRegisterEmailValue = document.getElementById('emAuthRegisterEmail').value.trim();
        const emAuthRegisterRoleValue = emAuthRegisterSelectedRole.value;
        /*--- Store Registration Details ---*/
        localStorage.setItem('emRegisteredName', emAuthRegisterNameValue);
        localStorage.setItem('emRegisteredPhone', emAuthRegisterPhoneValue);
        localStorage.setItem('emRegisteredEmail', emAuthRegisterEmailValue);
        localStorage.setItem('emRegisteredRole', emAuthRegisterRoleValue);
        sessionStorage.setItem('emLoginEmail', emAuthRegisterEmailValue);
        sessionStorage.setItem('emLoginRole', emAuthRegisterRoleValue);
        /*--- Go To Login ---*/
        window.location.href = 'login.html';
    });
});