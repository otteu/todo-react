import { Suspense, lazy } from "react";
import todoRouter from "./todoRouter";
import memberRouter from "./memberRouter";
const { createBrowserRouter } = require("react-router-dom");

const Loading = <div>Loading....</div>
// 지연 로딩 
const Main = lazy(() => import("../pages/MainPage"))
const About = lazy(() => import("../pages/AboutPage"))

const TodoIndex = lazy(() => import("../pages/todo/IndexPage"))



const root = createBrowserRouter([
    {
        path: "",
        // Suspense의 fallback이 먼져 실행 되고, 그 다음 Main 실행 
        element: <Suspense fallback={Loading}><Main/></Suspense>
    },
    {
        path: "about",
        element: <Suspense fallback={Loading}><About/></Suspense>
    },
    {
        path: "todo",
        element: <Suspense fallback={Loading}><TodoIndex/></Suspense>,
        children: todoRouter()        
    },
    

])


export default root;