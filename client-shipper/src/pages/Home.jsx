import Tabs from "../components/Home/Tabs";
import Helmet from "../components/Helmet/Helmet";
import Sidebar from "../components/Layout/Sidebar";
import Header from "../components/Layout/Header";

export default function Home({ }) {
    return (
        <>
        <main className="flex min-h-screen">
            <Sidebar />
            <div className="w-full bg-gray-50">
                <Header title = "Homepage"/>
                <Helmet title="Home">
                    <div className="flex w-11/12 mx-auto space-x-5 pt-5">
                        <div className="bg-white w-full rounded-xl shadow-sm my-5">
                            <Tabs/>
                        </div>
                    </div>
                </Helmet>
            </div>
        </main>
        </>
    );
}


