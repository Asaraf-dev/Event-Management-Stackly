/*--- Admin Overview ---*/
document.addEventListener('DOMContentLoaded',function () {
    const emOvDate = document.getElementById('emOvDate');
    const emOvChartFilters = document.querySelectorAll('.em-ov-chart-filter button');
    const emOvChartLine = document.querySelector('.em-ov-chart-line');
    const emOvChartFill = document.querySelector('.em-ov-chart-fill');
    const emOvChartPoint = document.querySelector('.em-ov-chart-point');
    if (!document.querySelector('.em-ov-header')) {
        return;
    }
    /*--- Current Date ---*/
    if (emOvDate) {
        const emOvCurrentDate = new Date();
        emOvDate.textContent = emOvCurrentDate.toLocaleDateString('en-IN',{
            day:'2-digit',
            month:'short',
            year:'numeric'
        });
    }
    /*--- Chart Data ---*/
    const emOvChartData = {
        monthly: {
            line:'M0,190 C60,165 80,175 125,145 C170,115 185,145 230,125 C275,105 295,120 340,90 C385,60 405,95 450,70 C495,45 520,75 560,48 C600,22 635,48 700,20',
            fill:'M0,190 C60,165 80,175 125,145 C170,115 185,145 230,125 C275,105 295,120 340,90 C385,60 405,95 450,70 C495,45 520,75 560,48 C600,22 635,48 700,20 L700,250 L0,250 Z',
            point:'20',
            total:'48'
        },
        weekly: {
            line:'M0,170 C70,155 100,175 145,125 C190,80 225,125 275,105 C325,80 350,115 405,65 C460,25 485,85 530,55 C575,30 625,60 700,15',
            fill:'M0,170 C70,155 100,175 145,125 C190,80 225,125 275,105 C325,80 350,115 405,65 C460,25 485,85 530,55 C575,30 625,60 700,15 L700,250 L0,250 Z',
            point:'15',
            total:'14'
        }
    };
    /*--- Chart Update ---*/
    function emOvUpdateChart(emOvPeriod) {
        const emOvData = emOvChartData[emOvPeriod];
        if (!emOvData) {
            return;
        }
        if (emOvChartLine) {
            emOvChartLine.setAttribute('d',emOvData.line);
        }
        if (emOvChartFill) {
            emOvChartFill.setAttribute('d',emOvData.fill);
        }
        if (emOvChartPoint) {
            emOvChartPoint.setAttribute('cy',emOvData.point);
        }
    }
    /*--- Chart Filter ---*/
    emOvChartFilters.forEach(function (emOvChartFilter) {
        emOvChartFilter.addEventListener('click',function () {
            emOvChartFilters.forEach(function (emOvCurrentFilter) {
                emOvCurrentFilter.classList.remove('active');
            });
            emOvChartFilter.classList.add('active');
            const emOvPeriod = emOvChartFilter.getAttribute('data-period');
            emOvUpdateChart(emOvPeriod);
        });
    });

    const ssIndBlogReadButtons = document.querySelectorAll(".em-ov-event-arrow");
        if (ssIndBlogReadButtons.length) {
            ssIndBlogReadButtons.forEach(function (ssButton) {
                ssButton.addEventListener("click", function (ssEvent) {
                    ssEvent.preventDefault();
                    ssEvent.stopPropagation();
                    window.location.href = "404.html";
                });
            });
        }
});

/*--- Client Overview ---*/
document.addEventListener('DOMContentLoaded',function () {
    const emCloWelcomeName = document.getElementById('emCloWelcomeName');
    /*--- Load Client Data ---*/
    const emCloRegisteredName = localStorage.getItem('emRegisteredName') || 'Admin';
    if (emCloWelcomeName) {
        emCloWelcomeName.textContent = emCloRegisteredName.split(' ')[0];
    }
});
