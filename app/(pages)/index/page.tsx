import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import RaampObj from "./components/RaampObj";
import WhatWeDo from "./components/WhatWeDo";
import RecentProjects from "./components/RecentProjects";
function HomeLayout() {
    return ( 
        <>
            <Hero/>
            <AboutUs/>
            <RaampObj/>
            <WhatWeDo/>
            <RecentProjects/>
        </>
    );
}

export default HomeLayout;