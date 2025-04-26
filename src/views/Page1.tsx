import EChartsReact from 'echarts-for-react';

function Page1() {
    const option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line'
            }
        ]
    };

    return (
        <div>
            <p>page1</p>
            <EChartsReact
                option={option}
                style={{width: '100%', height: '70vh'}}
            />
        </div>
    );
}

export default Page1