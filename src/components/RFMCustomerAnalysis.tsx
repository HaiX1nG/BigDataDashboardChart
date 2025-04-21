import React from 'react';
import * as echarts from 'echarts';
import EChartsReact from 'echarts-for-react';

function RFMCustomerAnalysis() {
    const option = {
        title: {
            text: 'RFM客户分析',
            textStyle: {
                fontSize: '15px'
            }
        },
        legend: {
            top: '190px'
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['40%', '60%'], // 设置内半径和外半径，创建空心效果
                avoidLabelOverlap: false,
                label: {
                    show: true, // 显示标签
                    position: 'outside', // 标签位置
                    formatter: '{name}: {value}' // 标签格式
                },
                labelLine: {
                    show: true, // 显示引导线
                    length: 15, // 引导线第一段的长度
                    length2: 10, // 引导线第二段的长度
                    linestyle: {
                        width: 2, // 引导线宽度
                        color: '#333' // 引导线颜色
                    }
                },
                data: [
                    { value: 1048, name: '搜索引擎' },
                    { value: 735, name: '直接访问' },
                    { value: 580, name: '邮件营销' },
                    { value: 484, name: '联盟广告' },
                    { value: 300, name: '视频广告' },
                ]
            }
        ]
    };

    return (
        <div style={{ width: '100%', height: '100%'}}>
            <EChartsReact
                option={option}
                style={{ width: '100%', height: '25vh' }}
            />
        </div>
    );
}

export default RFMCustomerAnalysis;