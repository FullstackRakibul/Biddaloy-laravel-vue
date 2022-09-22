import Home from "../pages/Home.vue";
import AboutUs from "../pages/AboutUs.vue"
import ContactUs from "../pages/ContactUs.vue";


const routes =[
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/aboutus",
        name: "aboutus",
        component: AboutUs,
    },
    {
        path: "/contactus",
        name: "contactus",
        component: ContactUs,
    },
]
export default routes;