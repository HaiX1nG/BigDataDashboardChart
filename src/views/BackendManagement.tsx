import { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import styles from "../styles/BackendManagement.module.css";
import BreadcrumbCom from '../components/BreadcrumbCom';
import { useNavigate, Outlet } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

function BackendManagement() {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <div className={styles.box}>
            <Layout style={{ width: '100%', height: '100%' }}>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="demo-logo-vertical" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <UserOutlined />,
                                label: 'nav 1',
                                onClick: () => navigate('/home/page1'),
                            },
                            {
                                key: '2',
                                icon: <VideoCameraOutlined />,
                                label: 'nav 2',
                                onClick: () => navigate('/home/page2'),
                            },
                            {
                                key: '3',
                                icon: <UploadOutlined />,
                                label: 'nav 3',
                                onClick: () => navigate('/home/page3'),
                            },
                        ]}
                    />
                </Sider>
                <Layout>
                    <Header style={{ padding: 0, background: colorBgContainer }}>
                        <div className={styles.header}>
                            <Button
                                type="text"
                                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                onClick={() => setCollapsed(!collapsed)}
                                style={{
                                    fontSize: '16px',
                                    width: 64,
                                    height: 64,
                                }}
                            />
                            <h1>电商用户点击行为分析展示系统</h1>
                        </div>
                    </Header>
                    <BreadcrumbCom />
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {/* 使用 Outlet 渲染子路由 */}
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
}

export default BackendManagement;