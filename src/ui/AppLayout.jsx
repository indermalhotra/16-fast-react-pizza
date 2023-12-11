import { Outlet, useNavigation } from "react-router-dom"
import CartOverview from "../features/cart/CartOverview"
import Header from "./Header"
import Loader from "../utilis/Loader";

function AppLayout() {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";
    return (
        <div className="layout">
            {isLoading && <Loader/>}
            <Header/>
            <main>
                <h2>Main Heading</h2>
                <Outlet/>
            </main>
            <CartOverview/>
        </div>
    )
}

export default AppLayout
