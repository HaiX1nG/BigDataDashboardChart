import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import BackendManagement from '../views/BackendManagement';
const Page1 = lazy(() => import('../views/Page1'));
const Page2 = lazy(() => import('../views/Page2'));
const Page3 = lazy(() => import('../views/Page3'));

function RouterConfig() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {/* 默认重定向到 /home */}
                    <Route path="/*" element={<Navigate to="/home" replace />} />
                    <Route path="/home" element={<Navigate to="/home/page1" replace />} />
                    {/* BackendManagement 路由 */}
                    <Route path="/home/*" element={<BackendManagement />}>
                        {/* 子路由 */}
                        <Route path="page1" element={<Page1 />} />
                        <Route path="page2" element={<Page2 />} />
                        <Route path="page3" element={<Page3 />} />
                        {/* 默认子路由，确保访问 /home 时显示 Page1 */}
                        <Route index element={<Page1 />} />
                    </Route>
                </Routes>
            </Suspense>
        </div>
    );
}

export default RouterConfig;