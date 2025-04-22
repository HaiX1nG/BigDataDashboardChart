import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';
import EChartsReact from 'echarts-for-react';
import instance from '../request/request';
import Item from 'antd/es/list/Item';
interface FunnelData {
  name: string,
  value: number,
  rate: number
}

function FunnelAnalysis() {
  const [data, setData] = useState<FunnelData[]>([]);

  useEffect(() => {
    instance.get('http://localhost:8080/TrafficFunnelConversionAnalysis/select').then(res => {
      if (res.status === 200) {
        setData(res.data)
      } else {
        console.log("请求错误");
      }
    })
  }, [])

  const maxValue = Math.max(...data.map((i) => i.value))

  const option = {
    title: {
      text: '漏斗转化分析',
      textStyle: {
        fontSize: '15px'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: (params: any) => {
        // params 是当前数据项的信息
        if (params.data) {
          return `漏斗转化分析<br/>
                  ${params.name} : ${params.value}<br/>
                  转化率 : ${params.data.rate}%`;
        }
        return '';
      },
    },
    legend: {
      data: data.map(i => i.name),
      top: 'bottom'
    },
    series: [
      {
        name: 'Funnel',
        type: 'funnel',
        left: '10%',
        top: 60,
        bottom: 60,
        width: '80%',
        min: 0,
        max: maxValue,
        minSize: '0%',
        maxSize: '100%',
        sort: 'descending',
        gap: 2,
        label: {
          show: true,
          position: 'inside'
        },
        labelLine: {
          length: 10,
          lineStyle: {
            width: 1,
            type: 'solid'
          }
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1
        },
        emphasis: {
          label: {
            fontSize: 20
          }
        },
        data: data.map((i) => ({
          name: i.name,
          value: i.value,
          rate: i.rate
        }))
      }
    ]
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <EChartsReact
        option={option}
        style={{ width: '100%', height: '25vh' }}
      />
    </div>
  );
}

export default FunnelAnalysis;