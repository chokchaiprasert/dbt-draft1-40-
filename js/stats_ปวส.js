document.addEventListener('DOMContentLoaded', function() {
    // ตั้งค่าสีธีม (Theme Colors)
    const colorPurple = '#66398A';
    const colorYellow = '#FFC50F';
    const colorBlue = '#3b5998';
    const colorPink = '#e4405f';
    const colorGrey = '#e0e0e0';

    // -------------------------------------------------------
    // 1. Bar Chart Config (กราฟแท่ง - จำนวนนักเรียนแต่ละชั้นปี)
    // -------------------------------------------------------
    const barChartElement = document.getElementById('studentBarChart');
    if (barChartElement) {
        const ctxBar = barChartElement.getContext('2d');
        new Chart(ctxBar, {
            type: 'bar',
            data: {
                labels: ['ปวส.1', 'ปวส.2'],
                datasets: [{
                    label: 'จำนวนนักเรียน (คน)',
                    data: [46, 53], // **แก้ไขตัวเลขตรงนี้ตามจริง**
                    backgroundColor: [
                        colorPurple, colorPurple, colorPurple, 
                    ],
                    borderRadius: 5,
                    barPercentage: 0.6, 
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { 
                        beginAtZero: true,
                        grid: { color: '#f0f0f0' } 
                    },
                    x: {
                        grid: { display: false } 
                    }
                },
                plugins: {
                    legend: { display: false }, 
                    tooltip: {
                        backgroundColor: '#333',
                        titleFont: { family: 'Prompt' },
                        bodyFont: { family: 'Prompt' }
                    }
                }
            }
        });
    }

    // -------------------------------------------------------
    // กราฟวงกลม 
    // -------------------------------------------------------
    const pieChartElement = document.getElementById('levelPieChart');
    if (pieChartElement) {
        const ctxPie = pieChartElement.getContext('2d');
        new Chart(ctxPie, {
            type: 'doughnut', 
            data: {
                labels: ['ชาย', 'หญิง'],
                datasets: [{
                    data: [33, 66], 
                    backgroundColor: [colorBlue, colorPink],
                    borderWidth: 0, 
                    hoverOffset: 10
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '60%', 
                plugins: {
                    legend: { 
                        position: 'bottom',
                        labels: {
                            font: { family: 'Prompt', size: 14 },
                            usePointStyle: true,
                            padding: 20
                        }
                    },
                    tooltip: {
                        backgroundColor: '#333',
                        bodyFont: { family: 'Prompt' },
                        callbacks: {
                            label: function(context) {
                                let label = context.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                let value = context.raw;
                                let total = context.chart._metasets[context.datasetIndex].total;
                                let percentage = Math.round((value / total) * 100) + '%';
                                return label + value + ' คน (' + percentage + ')';
                            }
                        }
                    }
                }
            }
        });
    }
});