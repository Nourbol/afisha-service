import {Layout} from "./components/layout/Layout.tsx";
import {LoginPage, MainPage, ProductPage, SearchProductsPage} from "./pages";
import {Route, Routes} from "react-router-dom";
import {ProfileProvider} from "./context/ProfileProvider.tsx";
import {CategoryProductsPage} from "./pages/CategoryProductsPage.tsx";
import {RegistrationPage} from "./pages/RegistrationPage.tsx";

function App() {
    return (
        <ProfileProvider>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/search" element={<SearchProductsPage/>}/>
                    <Route path="/afisha/:productId" element={<ProductPage/>}/>
                    <Route path="/category/:categoryId" element={<CategoryProductsPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegistrationPage />}/>
                </Route>
            </Routes>
        </ProfileProvider>
    );
}

export default App
