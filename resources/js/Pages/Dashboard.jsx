// Pages/Dashboard.jsx
import { Head } from "@inertiajs/react";
import Header from "../Components/Header";
import Main from "../Sections/Dashboard/Main";
import TableStudent from "../Sections/Student/Table";
import { useState } from "react";
import NavigationButton from "../Components/NavigationButton";

const Home = ({ name, appName }) => {
    const [activeSection, setActiveSection] = useState("Dashboard");

    return (
        <div>
            <Head title={`${appName} - Dashboard`} />
            <Header />
            <div className="flex-1 bg-[#f6f9fb] min-h-screen">
                <div className="flex justify-center pt-6">
                    <NavigationButton
                        activeSection={activeSection}
                        setActiveSection={setActiveSection}
                    />
                </div>
                {activeSection === "Dashboard" ? <Main /> : <TableStudent />}
            </div>
        </div>
    );
};

export default Home;
