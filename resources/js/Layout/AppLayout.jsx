import { Head, usePage } from "@inertiajs/react";

const AppLayout = ({ children, title }) => {
    const { props } = usePage();
    const appName = props.app?.name;

    // useEffect(() => {
    //     // Initialize AOS
    //     AOS.init({
    //         duration: 800, // animation duration
    //         easing: "ease-in-out", // easing type
    //         once: true, // whether animation should happen only once
    //     });
    // }, []);

    return (
        <div>
            <Head title={`${title} - ${appName}`} />

            {/* Fixed Header */}
            <div className="fixed top-0 left-0 right-0 z-50">
                {/* <Header /> */}
            </div>

            {/* Main Content with padding to account for header height */}
            <main className="">{children}</main>
        </div>
    );
};

export default AppLayout;
