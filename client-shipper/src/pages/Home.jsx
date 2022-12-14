import Tabs from "../components/Home/Tabs";
import Helmet from "../components/Helmet/Helmet";

export default function Home({ }) {
    return (
        <>
            <Helmet title="Home">
                <div className="flex w-11/12 mx-auto space-x-5 pt-5">
                    <div className="bg-white w-full rounded-xl shadow-sm my-5">
                        <Tabs/>
                    </div>
                </div>
            </Helmet>
        </>
    );
}


