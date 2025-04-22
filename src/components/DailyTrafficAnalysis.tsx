import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';
import EChartsReact from 'echarts-for-react';
import instance from '../request/request';

interface day {
    day: string,
    userCnt: number,
    pvCnt: number,
    favCnt: number,
    cartCnt: number,
    buyCnt: number
}

function DailyTrafficAnalysis() {
    const [data, setData] = useState<day[]>([])

    useEffect(() => {
        instance.get('http://localhost:8080/day/select').then(res => {
            if (res.status === 200) {
                setData(res.data)
            } else {
                console.log("请求错误");
            }
        })
    }, [])

    const option = {
        title: {
            text: '每日趋势分析',
            textStyle: {
                fontSize: '15px'
            }
        },
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
            formatter: (params: any) => {
                console.log(params);
                return `每日趋势分析<br />
                        日期: ${params[0].name}<br />
                        用户访问数: ${params[0].value} 次<br />
                        页面访问数: ${params[1].value} 次
                `;
            }
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
                data: data.map(i => i.day),
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
                    interval: 1,
                    margin: 10,
                    // rotate: 30,
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
                name: "单位/次",
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
                name: "单位/次",
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
            // 访问数
            {
                name: "页面访问数",
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
                data: data.map(i => i.pvCnt), // 折线图的数据
            },
            // 购买数
            {
                name: "用户访问数",
                type: "bar",
                barWidth: "25",
                data: data.map(i => i.userCnt),
                itemStyle: {
                    normal: {
                        color: '#FA6400'
                    }
                },
            },
        ],
    };
    return (
        <div style={{ width: '100%', height: '310px' }}>
            <EChartsReact
                option={option}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
}

export default DailyTrafficAnalysis;