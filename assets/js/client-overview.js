/*--- Client Overview ---*/
document.addEventListener('DOMContentLoaded',function () {
    const emCloWelcomeName = document.getElementById('emCloWelcomeName');
    /*--- Load Client Data ---*/
    const emCloRegisteredName = localStorage.getItem('emRegisteredName') || 'Client';
    if (emCloWelcomeName) {
        emCloWelcomeName.textContent = emCloRegisteredName.split(' ')[0];
    }
});