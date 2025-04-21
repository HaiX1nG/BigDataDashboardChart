import React from 'react';
import * as echarts from 'echarts';
import EChartsReact from 'echarts-for-react';

function FunnelAnalysis() {
    const option = {
        title: {
          text: '漏斗转化分析',
          textStyle: {
            fontSize: '15px'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}%'
        },
        legend: {
          data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order'],
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
            max: 100,
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
            data: [
              { value: 60, name: 'Visit' },
              { value: 40, name: 'Inquiry' },
              { value: 20, name: 'Order' },
              { value: 80, name: 'Click' },
              { value: 100, name: 'Show' }
            ]
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

export default FunnelAnalysis;