/*--- 404 Page ---*/
document.addEventListener('DOMContentLoaded',function () {
    /*--- Go Back Button ---*/
    const em404BackBtn = document.getElementById('em404BackBtn');
    if (em404BackBtn) {
        em404BackBtn.addEventListener('click',function () {
            if (window.history.length > 1) {
                window.history.back();
            } else {
                window.location.href = 'index.html';
            }
        });
    }
});