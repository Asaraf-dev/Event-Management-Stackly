/*--- Admin Profile ---*/
document.addEventListener('DOMContentLoaded',function () {
    const emAprProfileName = document.getElementById('emAprProfileName');
    const emAprProfileEmail = document.getElementById('emAprProfileEmail');
    const emAprProfileRole = document.getElementById('emAprProfileRole');
    const emAprProfileLoginRole = document.getElementById('emAprProfileLoginRole');
    const emAprAccountType = document.getElementById('emAprAccountType');
    const emAprQuickEmail = document.getElementById('emAprQuickEmail');
    const emAprName = document.getElementById('emAprName');
    const emAprPhone = document.getElementById('emAprPhone');
    const emAprRegisteredEmail = document.getElementById('emAprRegisteredEmail');
    const emAprRegisteredRole = document.getElementById('emAprRegisteredRole');
    const emAprLoginEmail = document.getElementById('emAprLoginEmail');
    const emAprLoginRole = document.getElementById('emAprLoginRole');
    const emAprRememberedEmail = document.getElementById('emAprRememberedEmail');
    if (!document.querySelector('.em-apr-header')) {
        return;
    }
    /*--- Load Stored Data ---*/
    const emAprRegisteredNameValue = localStorage.getItem('emRegisteredName') || 'Not Available';
    const emAprRegisteredPhoneValue = localStorage.getItem('emRegisteredPhone') || 'Not Available';
    const emAprRegisteredEmailValue = localStorage.getItem('emRegisteredEmail') || 'Not Available';
    const emAprRegisteredRoleValue = localStorage.getItem('emRegisteredRole') || 'Not Available';
    const emAprLoginEmailValue = sessionStorage.getItem('emLoginEmail') || localStorage.getItem('emRememberedEmail') || emAprRegisteredEmailValue;
    const emAprLoginRoleValue = sessionStorage.getItem('emLoginRole') || localStorage.getItem('emLoginRole') || emAprRegisteredRoleValue;
    const emAprRememberedEmailValue = localStorage.getItem('emRememberedEmail');
    /*--- Format Role ---*/
    function emAprFormatRole(emAprRole) {
        if (emAprRole === 'admin') {
            return 'Administrator';
        }
        if (emAprRole === 'client') {
            return 'Client';
        }
        return 'Not Available';
    }
    /*--- Display Profile Information ---*/
    if (emAprProfileName) {
        emAprProfileName.textContent = emAprRegisteredNameValue;
    }
    if (emAprProfileEmail) {
        emAprProfileEmail.textContent = emAprLoginEmailValue;
    }
    if (emAprProfileRole) {
        emAprProfileRole.textContent = emAprFormatRole(emAprLoginRoleValue);
    }
    if (emAprProfileLoginRole) {
        emAprProfileLoginRole.textContent = emAprFormatRole(emAprLoginRoleValue) + ' Access';
    }
    if (emAprAccountType) {
        emAprAccountType.textContent = emAprFormatRole(emAprRegisteredRoleValue);
    }
    if (emAprQuickEmail) {
        emAprQuickEmail.textContent = emAprLoginEmailValue;
    }
    if (emAprName) {
        emAprName.textContent = emAprRegisteredNameValue;
    }
    if (emAprPhone) {
        emAprPhone.textContent = emAprRegisteredPhoneValue;
    }
    if (emAprRegisteredEmail) {
        emAprRegisteredEmail.textContent = emAprRegisteredEmailValue;
    }
    if (emAprRegisteredRole) {
        emAprRegisteredRole.textContent = emAprFormatRole(emAprRegisteredRoleValue);
    }
    if (emAprLoginEmail) {
        emAprLoginEmail.textContent = emAprLoginEmailValue;
    }
    if (emAprLoginRole) {
        emAprLoginRole.textContent = emAprFormatRole(emAprLoginRoleValue);
    }
    if (emAprRememberedEmail) {
        emAprRememberedEmail.textContent = emAprRememberedEmailValue || 'Not Enabled';
    }
});