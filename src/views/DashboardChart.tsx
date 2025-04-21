import FunnelAnalysis from '../components/FunnelAnalysis';
import React from 'react';
import style from '../styles/DashboardChart.module.css';
import { Card } from 'antd';
import RFMCustomerAnalysis from '../components/RFMCustomerAnalysis';
import CustomerRetention from '../components/CustomerRetention';
import CategoryCnt from '../components/CategoryCnt';
import ItemCnt from '../components/ItemCnt';
import DailyTrafficAnalysis from '../components/DailyTrafficAnalysis';
import HourlyTrafficAnalysis from '../components/HourlyTrafficAnalysis';

function DashboardChart() {
    return (
        <div className={style.body}>
            <div className={style.title}>
                <Card variant="borderless" style={{ width: '100%' }}>
                    <h1>电商用户行为可视大屏</h1>
                </Card>
            </div>
            <div className={style.main}>
                <div className={style.main1}>
                    <div className={style.main1_1}>
                        <Card variant='borderless' style={{ width: '100%', height: '100%' }}>
                            <FunnelAnalysis />
                        </Card>
                    </div>
                    <div className={style.main1_2}>
                        <Card variant='borderless' style={{ width: '100%', height: '100%' }}>
                            <RFMCustomerAnalysis />
                        </Card>
                    </div>
                    <div className={style.main1_3}>
                        <Card variant='borderless' style={{ width: '100%', height: '100%' }}>
                            <CustomerRetention />
                        </Card>
                    </div>
                </div>
                <div className={style.main2}>
                    <div className={style.main2_1}>
                        <div className={style.main2_1_1}>
                            <Card variant='borderless' style={{ width: '100%', height: '100%' }}>
                                <h2>1000000000</h2>
                                <p>数据总量</p>
                            </Card>
                        </div>
                        <div className={style.main2_1_2}>
                            <Card variant='borderless' style={{ width: '100%', height: '100%' }}>
                                <h2>1000000000</h2>
                                <p>用户总量</p>
                            </Card>
                        </div>
                        <div className={style.main2_1_3}>
                            <Card variant='borderless' style={{ width: '100%', height: '100%' }}>
                                <h2>1000000000</h2>
                                <p>购买数量</p>
                            </Card>
                        </div>
                    </div>
                    <div className={style.main2_2}>
                        <Card variant='borderless' style={{ width: '100%', height: '100%' }}>
                            <DailyTrafficAnalysis />
                        </Card>
                    </div>
                    <div className={style.main2_3}>
                        <Card variant='borderless' style={{ width: '100%', height: '100%' }}>
                            <HourlyTrafficAnalysis />
                        </Card>
                    </div>
                </div>
                <div className={style.main3}>
                    <div className={style.main3_1}>
                        <Card variant='borderless' style={{ width: '100%', height: '100%' }}>
                            <CategoryCnt />
                        </Card>
                    </div>
                    <div className={style.main3_2}>
                        <Card variant='borderless' style={{ width: '100%', height: '100%' }}>
                            <ItemCnt />
                        </Card>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default DashboardChart