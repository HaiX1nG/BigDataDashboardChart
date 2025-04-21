import React from 'react';
import { ECharts } from 'echarts';
import EChartsReact from 'echarts-for-react';

function CustomerRetention() {
    const option = {
        legend: {
            
        },
        xAxis: {
            type: 'category',
            data: ['A', 'B', 'C'] // 类别轴数据
        },
        yAxis: {
            type: 'value' // 数值轴
        },
        series: [
            {
                name: '数据1',
                data: [50, 20, 60], // 数据1
                type: 'line',
                smooth: true, // 使折线变得平滑
                lineStyle: {
                    width: 3,
                    color: '#5470c6'
                },
                symbol: 'circle',
                symbolSize: 8,
                itemStyle: {
                    color: '#5470c6'
                }
            },
            {
                name: '数据2',
                data: [30, 80, 40], // 数据2
                type: 'line',
                smooth: true,
                lineStyle: {
                    width: 3,
                    color: '#91cc75'
                },
                symbol: 'circle',
                symbolSize: 8,
                itemStyle: {
                    color: '#91cc75'
                }
            },
            {
                name: '数据3',
                data: [70, 40, 50], // 数据3
                type: 'line',
                smooth: true,
                lineStyle: {
                    width: 3,
                    color: '#fac858'
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