import Routers from "../../routes/Routers";
import Header from "./Header";
import Sidebar from "./Sidebar";



const Layout = ({ children }) => {
    return (
        <>
            <main className="flex min-h-screen">
                <Sidebar />
                <div className="w-full bg-gray-50">
                    <Header />
                    <div>
                        <Routers />
                    </div>
                </div>
            </main>
            
        </>
    );
};

export default Layout;
