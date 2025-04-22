import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';
import EChartsReact from 'echarts-for-react';
import instance from '../request/request';

interface RFMData {
    userType: string,
    userCnt: number
}

function RFMCustomerAnalysis() {
    const [data, useData] = useState<RFMData[]>([]);

    useEffect(() => {
        instance.get('http://localhost:8080/rfm/select').then(res => {
            if(res.status === 200) {
                useData(res.data)
            } else {
                console.log("RFM数据分析结果请求错误");
            }
        })
    }, [])

    const option = {
        title: {
            text: 'RFM客户分析',
            textStyle: {
                fontSize: '15px'
            }
        },
        tooltip:{
            trigger: 'item',
            formatter: (params: any) => {
                if(params.data) {
                    return `${params.seriesName}<br />
                            ${params.name} : ${params.value}人`;
                }
            }
        },
        legend: {
            top: '190px',
            data: data.map(i => i.userType)
        },
        series: [
            {
                name: 'RFM客户',
                type: 'pie',
                radius: ['40%', '60%'], // 设置内半径和外半径，创建空心效果
                avoidLabelOverlap: false,
                label: {
                    show: true, // 显示标签
                    position: 'outside', // 标签位置
                    formatter: '{b}: {c}人' // 标签格式
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
                data: data.map((i) => ({
                    value: i.userCnt,
                    name: i.userType
                }))
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