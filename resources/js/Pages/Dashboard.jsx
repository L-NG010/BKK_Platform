// Pages/Dashboard.jsx
import { Head } from "@inertiajs/react";
import Header from "../Components/Header";
import Main from "../Sections/Dashboard/Main";
import StudentMain from "../Sections/Student/Main";
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
                {activeSection === "Dashboard" ? <Main /> : <StudentMain/>}
            </div>
        </div>
    );
};

export default Home;
