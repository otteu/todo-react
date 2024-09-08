const { Suspense, lazy } = require("react");


const Loading = <div>Loading .....</div>;
const Login = lazy(() => import("../pages/member/LoginPage"));

const memberRouter = () => {
    return [
        {
            path: "login",
            element: <Suspense fallback={Loading}><Login/></Suspense>
        }
    ]



}

export default memberRouter;