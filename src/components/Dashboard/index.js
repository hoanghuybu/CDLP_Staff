import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

function DashBoard() {
    let cardColor, axisColor, borderColor;

    cardColor = '#fff';
    // headingColor = '#566a7f';
    axisColor = '#a1acb8';
    borderColor = '#eceef1';

    const state = {
        series: [
            {
                name: '2021',
                data: [18, 7, 15, 29, 18, 12, 9],
            },
            {
                name: '2020',
                data: [-13, -18, -9, -14, -5, -17, -15],
            },
        ],
        options: {
            chart: {
                height: 300,
                stacked: true,
                type: 'bar',
                toolbar: { show: false },
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '33%',
                    borderRadius: 12,
                    startingShape: 'rounded',
                    endingShape: 'rounded',
                },
            },
            colors: ['#696cff', '#03c3ec'],
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
                width: 6,
                lineCap: 'round',
                colors: [cardColor],
            },
            legend: {
                show: true,
                horizontalAlign: 'left',
                position: 'top',
                markers: {
                    height: 8,
                    width: 8,
                    radius: 12,
                    offsetX: -3,
                },
                labels: {
                    colors: axisColor,
                },
                itemMargin: {
                    horizontal: 10,
                },
            },
            grid: {
                borderColor: borderColor,
                padding: {
                    top: 0,
                    bottom: -8,
                    left: 20,
                    right: 20,
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                labels: {
                    style: {
                        fontSize: '13px',
                        colors: axisColor,
                    },
                },
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
            },
            yaxis: {
                labels: {
                    style: {
                        fontSize: '13px',
                        colors: axisColor,
                    },
                },
            },
            responsive: [
                {
                    breakpoint: 1700,
                    options: {
                        plotOptions: {
                            bar: {
                                borderRadius: 10,
                                columnWidth: '32%',
                            },
                        },
                    },
                },
                {
                    breakpoint: 1580,
                    options: {
                        plotOptions: {
                            bar: {
                                borderRadius: 10,
                                columnWidth: '35%',
                            },
                        },
                    },
                },
                {
                    breakpoint: 1440,
                    options: {
                        plotOptions: {
                            bar: {
                                borderRadius: 10,
                                columnWidth: '42%',
                            },
                        },
                    },
                },
                {
                    breakpoint: 1300,
                    options: {
                        plotOptions: {
                            bar: {
                                borderRadius: 10,
                                columnWidth: '48%',
                            },
                        },
                    },
                },
                {
                    breakpoint: 1200,
                    options: {
                        plotOptions: {
                            bar: {
                                borderRadius: 10,
                                columnWidth: '40%',
                            },
                        },
                    },
                },
                {
                    breakpoint: 1040,
                    options: {
                        plotOptions: {
                            bar: {
                                borderRadius: 11,
                                columnWidth: '48%',
                            },
                        },
                    },
                },
                {
                    breakpoint: 991,
                    options: {
                        plotOptions: {
                            bar: {
                                borderRadius: 10,
                                columnWidth: '30%',
                            },
                        },
                    },
                },
                {
                    breakpoint: 840,
                    options: {
                        plotOptions: {
                            bar: {
                                borderRadius: 10,
                                columnWidth: '35%',
                            },
                        },
                    },
                },
                {
                    breakpoint: 768,
                    options: {
                        plotOptions: {
                            bar: {
                                borderRadius: 10,
                                columnWidth: '28%',
                            },
                        },
                    },
                },
                {
                    breakpoint: 640,
                    options: {
                        plotOptions: {
                            bar: {
                                borderRadius: 10,
                                columnWidth: '32%',
                            },
                        },
                    },
                },
                {
                    breakpoint: 576,
                    options: {
                        plotOptions: {
                            bar: {
                                borderRadius: 10,
                                columnWidth: '37%',
                            },
                        },
                    },
                },
                {
                    breakpoint: 480,
                    options: {
                        plotOptions: {
                            bar: {
                                borderRadius: 10,
                                columnWidth: '45%',
                            },
                        },
                    },
                },
                {
                    breakpoint: 420,
                    options: {
                        plotOptions: {
                            bar: {
                                borderRadius: 10,
                                columnWidth: '52%',
                            },
                        },
                    },
                },
                {
                    breakpoint: 380,
                    options: {
                        plotOptions: {
                            bar: {
                                borderRadius: 10,
                                columnWidth: '60%',
                            },
                        },
                    },
                },
            ],
            states: {
                hover: {
                    filter: {
                        type: 'none',
                    },
                },
                active: {
                    filter: {
                        type: 'none',
                    },
                },
            },
        },
    };

    return (
        <div>
            <div className="app">
                <div className="row">
                    <div className="mixed-chart">
                        <ReactApexChart options={state.options} series={state.series} type="bar" width="500" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashBoard;
