import React, { useEffect, useState } from 'react';
import { ECharts } from 'echarts';
import EChartsReact from 'echarts-for-react';
import instance from '../request/request';

interface item {
    itemId: number,
    cnt: number
}

function ItemCnt() {
    const [data, setData] = useState<item[]>([])

    useEffect(() => {
        instance.get('http://localhost:8080/top10item/select').then(res => {
            if(res.status === 200) {
                setData(res.data)
            }else {
                console.log('请求出错!');
            }
        })
    }, [])

    const option = {
        title: {
            text: '热门商品TOP10'
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
            data: data.map(i => i.itemId)
        },
        series: [
            {
                name: '购买数量',
                type: 'bar',
                data: data.map(i => i.cnt)
            }
        ]
    };

    return (
        <div>
            <EChartsReact 
                option={option}
                style={{ width: '100%', height: '40vh' }}
            />
        </div>
    );
}

export default ItemCnt;