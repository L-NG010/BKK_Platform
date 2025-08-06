import { Head } from "@inertiajs/react";
import Header from "../Components/Header";
import Main from "../Sections/Dashboard/Main";

const Home = ({ name, appName }) => {
    return (
        <div>
            <Head title={`${appName} - Dashboard`} />
            <Header />
            {/* Main Content */}
            <div className="flex-1 p-6 bg-[#f6f9fb] min-h-screen">
                <Main />
            </div>
        </div>
    );
};

export default Home;
