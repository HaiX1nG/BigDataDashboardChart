import { Breadcrumb } from 'antd';
import styles from "../styles/BreadcrumbCom.module.css";
import { useLocation, Link } from 'react-router-dom';


type RoutePaths = Record<string, string>

const routePaths: RoutePaths = {
    '/home': '首页',
    '/page1': '页面1',
    '/page2': '页面2',
    '/page3': '页面3'
}

function BreadcrumbCom() {
    const location = useLocation()

    const pathSnippets = location.pathname.split('/').filter(Boolean)
    const extraBreadcrumbItem = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
        const name = routePaths[url] || decodeURIComponent(pathSnippets[index])
        const isCurrentPage = index === pathSnippets.length - 1
        const key = isCurrentPage ? 'current' : url
        return {
            key,
            title: (
                isCurrentPage ? (<span>{name}</span>) : (<Link to={url}>{name}</Link>)
            )
        }
    })

    return (
        <div className={styles.box}>
            <Breadcrumb items={extraBreadcrumbItem} />
        </div>
    );
}

export default BreadcrumbCom;