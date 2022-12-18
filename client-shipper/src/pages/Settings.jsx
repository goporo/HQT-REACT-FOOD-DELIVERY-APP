import Header from "../components/Layout/Header";
import Sidebar from "../components/Layout/Sidebar";

export default function Settings({ }) {
    return (
        <>
            <main className="flex min-h-screen">
                <Sidebar />
                <div className="w-full bg-gray-50">
                    <Header title = "Setting"/>
                        <div className="flex w-11/12 mx-auto space-x-5 ">
                            This is setting page
                        </div>
                </div>
            </main>
        </>
    );
}