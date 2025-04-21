import FunnelAnalysis from '../components/FunnelAnalysis';
import React, { useEffect, useState } from 'react';
import style from '../styles/DashboardChart.module.css';
import { Card } from 'antd';
import RFMCustomerAnalysis from '../components/RFMCustomerAnalysis';
import CustomerRetention from '../components/CustomerRetention';
import CategoryCnt from '../components/CategoryCnt';
import ItemCnt from '../components/ItemCnt';
import DailyTrafficAnalysis from '../components/DailyTrafficAnalysis';
import HourlyTrafficAnalysis from '../components/HourlyTrafficAnalysis';
import instance from '../request/request';

function DashboardChart() {
    const [userData, setUserData] = useState(null)
    const [buyAll, setBuyAll] = useState(null)
    const [loadingUser, setLoadingUser] = useState(true)
    const [loadingBuyAll, setLoadingBuyAll] = useState(true)

    useEffect(() => {
        instance.get('http://localhost:8080/day/allUser').then(res => {
            if (res.status === 200) {
                setUserData(res.data)
            } else {
                console.log("请求出错！");
            }
        }).finally(() => {
            setLoadingUser(false)
        })
    }, [])

    useEffect(() => {
        instance.get('http://localhost:8080/top10category/buyAll').then(res => {
            if (res.status === 200) {
                setBuyAll(res.data)
            } else {
                console.log("请求出错！");
            }
        }).finally(() => {
            setLoadingBuyAll(false)
        })
    }, [])


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
                                <h2 style={{ color: 'blue' }}>100000000</h2>
                                <p>数据总量</p>
                            </Card>
                        </div>
                        <div className={style.main2_1_2}>
                            <Card variant='borderless' style={{ width: '100%', height: '100%' }}>
                                {loadingUser ? (<h4 style={{ color: 'red' }}>正在分析数据...</h4>) : (<h2 style={{ color: 'blue' }}>{userData}</h2>)}
                                <p>用户总量</p>
                            </Card>
                        </div>
                        <div className={style.main2_1_3}>
                            <Card variant='borderless' style={{ width: '100%', height: '100%' }}>
                                {loadingBuyAll ? (<h4 style={{ color: 'red' }}>正在分析数据...</h4>) : (<h2 style={{ color: 'blue' }}>{buyAll}</h2>)}
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