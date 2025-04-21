import React from 'react';
import * as echarts from 'echarts';
import EChartsReact from 'echarts-for-react';

function DailyTrafficAnalysis() {
    let xjcs = [1, 4.4, 3, 5, 2.5, 1, 3, 4.4, 3, 5, 2.5, 1];
    let xjgls = [160, 280, 300, 220, 280, 164, 160, 280, 320, 220, 180, 224];
    let myData1 = [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
    ];
    const option = {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow",
            },
            textStyle: {
                color: "#2C3E50",
                fontSize: 12,
            },
            confine: true, // 超出范围
            formatter: "{b}<br>{a}：{c} 个<br>{a1}：{c1} 元",
        },
        legend: {
            top: "4%",
            left: "center",
            itemWidth: 18,
            itemHeight: 10,
            itemGap: 30,
            textStyle: {
                fontSize: 12,
                color: "#2C3E50",
                padding: [0, 0, 0, 10],
            },
        },
        grid: {
            top: "18%",
            left: "4%",
            right: "3%",
            bottom: "2%",
            containLabel: true,
        },
        xAxis: [
            {
                type: "category",
                data: myData1,
                axisTick: {
                    show: false,
                    alignWithLabel: true,
                },
                axisLine: {
                    lineStyle: {
                        color: "#D5DBDE",
                    },
                },
                axisLabel: {
                    interval: 0,
                    margin: 10,
                    color: "#05D5FF",
                    textStyle: {
                        fontSize: 14,
                        color: "#2C3E50",
                    },
                },
            },
        ],
        yAxis: [
            {
                type: "value",
                name: "单位/个",
                splitNumber: 5,
                nameTextStyle: {
                    color: "#2C3E50",
                    fontSize: 12,
                    align: "center",
                    padding: [0, 28, 0, 0],
                },
                axisLabel: {
                    formatter: "{value}",
                    color: "rgba(95, 187, 235, 1)",
                    textStyle: {
                        fontSize: 14,
                        color: "#2C3E50",
                        lineHeight: 16,
                    },
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#D5DBDE",
                    },

                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(28, 130, 197, .3)",
                        type: "dashed",
                    },
                },
            },
            {
                name: "单位/元",
                splitNumber: 5,
                type: "value",
                nameTextStyle: {
                    color: "#2C3E50",
                    fontSize: 12,
                    align: "center",
                    padding: [0, 0, 0, 25],
                },
                axisLabel: {
                    show: true,
                    fontSize: 12,
                    color: "#2C3E50",
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#D5DBDE",
                    },
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: false,
                },
            },
        ],
        series: [

            {
                name: "订单数量",
                type: "line",
                yAxisIndex: 1, // 与第二个 y 轴关联
                showSymbol: true,
                symbolSize: 8,
                lineStyle: {
                    normal: {
                        color: "#5378EE",
                    },
                },
                itemStyle: {
                    color: "#5378EE",
                    borderColor: "#5378EE",
                    borderWidth: 2,
                },
                label: {
                    show: false,
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 1,
                                color: 'rgba(83, 120, 238, 0.85)'
                            },
                            {
                                offset: 0.25,
                                color: 'rgba(83, 120, 238, 0.25)'
                            }
                        ]
                    }
                },
                data: xjgls, // 折线图的数据
            },

            {
                name: "订单金额",
                type: "bar",
                barWidth: "25",
                data: xjcs,
                itemStyle: {
                    normal: {
                        color: '#FA6400'
                    }
                },
            },
        ],
    };
    return (
        <div>
            <EChartsReact 
                option={option}
                style={{ width: '100%', height: '30vh' }}
            />
        </div>
    );
}

export default DailyTrafficAnalysis;