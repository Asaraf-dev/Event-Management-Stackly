/*--- Admin Analytics ---*/
document.addEventListener('DOMContentLoaded',function () {
    const emAnlDate = document.getElementById('emAnlDate');
    const emAnlPeriods = document.querySelectorAll('.em-anl-periods button');
    const emAnlExport = document.getElementById('emAnlExport');
    const emAnlEvents = document.getElementById('emAnlEvents');
    const emAnlAttendees = document.getElementById('emAnlAttendees');
    const emAnlEnquiries = document.getElementById('emAnlEnquiries');
    const emAnlCompletion = document.getElementById('emAnlCompletion');
    if (!document.querySelector('.em-anl-header')) {
        return;
    }
    /*--- Current Date ---*/
    if (emAnlDate) {
        const emAnlCurrentDate = new Date();
        emAnlDate.textContent = emAnlCurrentDate.toLocaleDateString('en-IN',{
            day:'2-digit',
            month:'short',
            year:'numeric'
        });
    }
    /*--- Analytics Data ---*/
    const emAnlData = {
        7:{
            events:'4',
            attendees:'1.2K',
            enquiries:'24',
            completion:'88.2%'
        },
        30:{
            events:'12',
            attendees:'3.8K',
            enquiries:'76',
            completion:'87.1%'
        },
        90:{
            events:'29',
            attendees:'8.4K',
            enquiries:'184',
            completion:'86.8%'
        },
        365:{
            events:'48',
            attendees:'12.8K',
            enquiries:'284',
            completion:'86.4%'
        }
    };
    /*--- Period Change ---*/
    emAnlPeriods.forEach(function (emAnlPeriod) {
        emAnlPeriod.addEventListener('click',function () {
            emAnlPeriods.forEach(function (emAnlCurrentPeriod) {
                emAnlCurrentPeriod.classList.remove('active');
            });
            emAnlPeriod.classList.add('active');
            const emAnlPeriodValue = emAnlPeriod.getAttribute('data-period');
            const emAnlSelectedData = emAnlData[emAnlPeriodValue];
            if (!emAnlSelectedData) {
                return;
            }
            if (emAnlEvents) {
                emAnlEvents.textContent = emAnlSelectedData.events;
            }
            if (emAnlAttendees) {
                emAnlAttendees.textContent = emAnlSelectedData.attendees;
            }
            if (emAnlEnquiries) {
                emAnlEnquiries.textContent = emAnlSelectedData.enquiries;
            }
            if (emAnlCompletion) {
                emAnlCompletion.textContent = emAnlSelectedData.completion;
            }
        });
    });
    /*--- Export Analytics ---*/
    if (emAnlExport) {
        emAnlExport.addEventListener('click',function () {
            const emAnlExportData = [
                ['Analytics Report','Stackly Events'],
                ['Generated',new Date().toLocaleString('en-IN')],
                ['Total Events',emAnlEvents ? emAnlEvents.textContent : ''],
                ['Total Attendees',emAnlAttendees ? emAnlAttendees.textContent : ''],
                ['Total Enquiries',emAnlEnquiries ? emAnlEnquiries.textContent : ''],
                ['Completion Rate',emAnlCompletion ? emAnlCompletion.textContent : '']
            ];
            const emAnlCsv = emAnlExportData.map(function (emAnlRow) {
                return emAnlRow.map(function (emAnlCell) {
                    return '"' + String(emAnlCell).replace(/"/g,'""') + '"';
                }).join(',');
            }).join('\n');
            const emAnlBlob = new Blob([emAnlCsv],{type:'text/csv;charset=utf-8;'});
            const emAnlUrl = URL.createObjectURL(emAnlBlob);
            const emAnlLink = document.createElement('a');
            emAnlLink.href = emAnlUrl;
            emAnlLink.download = 'stackly-events-analytics.csv';
            document.body.appendChild(emAnlLink);
            emAnlLink.click();
            emAnlLink.remove();
            URL.revokeObjectURL(emAnlUrl);
        });
    }
});