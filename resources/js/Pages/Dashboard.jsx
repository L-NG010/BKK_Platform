// Pages/Dashboard.jsx
import { Head } from "@inertiajs/react";
import Header from "../Components/AdminComponents/Header";
import Main from "../Sections/Admin/Dashboard/Main";
import StudentMain from "../Sections/Admin/Student/Main";
import { useState } from "react";
import NavigationButton from "../Components/NavigationButton";
import AppLayout from "../Layout/AppLayout";


const Dashboard = () => {
    const [activeSection, setActiveSection] = useState("Dashboard");

    return (
        <div>
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

Dashboard.layout = (page) => <AppLayout title="Dashboard">{page}</AppLayout>;

export default Dashboard;
