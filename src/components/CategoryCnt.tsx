import React from 'react';
import { ECharts } from 'echarts';
import EChartsReact from 'echarts-for-react';

function CategoryCnt() {
    const option = {
        title: {
            text: 'World Population'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {},
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
        },
        series: [
            {
                name: '2011',
                type: 'bar',
                data: [18203, 23489, 29034, 104970, 131744, 630230]
            },
            {
                name: '2012',
                type: 'bar',
                data: [19325, 23438, 31000, 121594, 134141, 681807]
            }
        ]
    };
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <EChartsReact 
                option={option}
                style={{ width: '100%', height: '40vh' }}
            />
        </div>
    );
}

export default CategoryCnt;