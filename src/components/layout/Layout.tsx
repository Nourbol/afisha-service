import {Header} from "../header/Header.tsx";
import {Footer} from "../footer/Footer.tsx";
import {CategoryList} from "../category/CategoryList.tsx";
import {Outlet} from "react-router-dom";
import './Layout.css';
import {useSidebar} from "../../hooks/useSidebar.ts";

export const Layout = () => {
    const { isSidebarOpen, categories, handleMenuButtonClick, handleCategoryClick } = useSidebar();

    return (
        <div className={isSidebarOpen ? 'shadow-overlay' : ''}>
            <Header categories={categories} onMenuButtonClick={handleMenuButtonClick} />
            {isSidebarOpen && (
                <aside className="sidebar">
                    <CategoryList categories={categories} onCategoryClick={handleCategoryClick}/>
                </aside>
            )}
            <main className="main">
                <Outlet/>
            </main>
            <Footer className="footer" />
        </div>
    );
};
