import React, { useEffect, useState } from 'react';
import { ECharts } from 'echarts';
import EChartsReact from 'echarts-for-react';
import instance from '../request/request';

interface userRetention {
    day: string,
    reten1Rate: number,
    reten3Rate: number,
    reten5Rate: number
}

function CustomerRetention() {
    const [data, setData] = useState<userRetention[]>([])

    useEffect(() => {
        instance.get('http://localhost:3000/UserRetentionAnalysis/select').then(res => {
            if(res.status) {
                setData(res.data)
            }else {
                console.log("用户留存率请求错误");
            }
        })
    }, [])

    const option = {
        title: {
            text: '用户留存率分析',
            textStyle: {
                fontSize: '15px'
            }
        },
        legend: {
            top: 'bottom',
            data: ['第一天留存率', '第三天留存率', '第五天留存率']
        },
        xAxis: {
            type: 'category',
            data: data.map(i => i.day) // 类别轴数据
        },
        yAxis: {
            type: 'value' // 数值轴
        },
        series: [
            {
                name: '第一天留存率',
                data: data.map(i => i.reten1Rate), // 数据1
                type: 'line',
                smooth: true, // 使折线变得平滑
                lineStyle: {
                    width: 3,
                    color: '#5470c6'
                },
                label: {
                    show: true,
                    position: 'top',
                    formatter: '{c}%'
                },
                symbol: 'circle',
                symbolSize: 8,
                itemStyle: {
                    color: '#5470c6'
                }
            },
            {
                name: '第三天留存率',
                data: data.map(i => i.reten3Rate), // 数据2
                type: 'line',
                smooth: true,
                lineStyle: {
                    width: 3,
                    color: '#91cc75'
                },
                label: {
                    show: true,
                    position: 'top',
                    formatter: '{c}%'
                },
                symbol: 'circle',
                symbolSize: 8,
                itemStyle: {
                    color: '#91cc75'
                }
            },
            {
                name: '第五天留存率',
                data: data.map(i => i.reten5Rate), // 数据3
                type: 'line',
                smooth: true,
                lineStyle: {
                    width: 3,
                    color: '#fac858'
                },
                label: {
                    show: true,
                    position: 'top',
                    formatter: '{c}%'
                },
                symbol: 'circle',
                symbolSize: 8,
                itemStyle: {
                    color: '#fac858'
                }
            }
        ]
    };

    return (
        <div style={{ width: '100%', height: '100%'}}>
            <EChartsReact
                option={option}
                style={{width: '100%', height: '25vh'}}
            />
        </div>
    );
}

export default CustomerRetention;