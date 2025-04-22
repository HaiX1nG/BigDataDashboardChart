import React, { useEffect, useState } from 'react';
import { ECharts } from 'echarts';
import EChartsReact from 'echarts-for-react';
import instance from '../request/request';

interface category {
    categoryId: number,
    cnt: number
}

function CategoryCnt() {
    const [data, setData] = useState<category[]>([]);

    useEffect(() => {
        instance.get("http://localhost:8080/top10category/select").then(res => {
            if(res.status) {
                setData(res.data)
            }else {
                console.log("请求发生错误");
            }
        })
    }, [])

    const option = {
        title: {
            text: '热门商品类别top10',
            textStyle: {
                fontSize: '15px'
            }
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
            data: data.map(i => i.categoryId)
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
        <div style={{ width: '100%', height: '100%' }}>
            <EChartsReact 
                option={option}
                style={{ width: '100%', height: '40vh' }}
            />
        </div>
    );
}

export default CategoryCnt;