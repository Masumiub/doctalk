import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import MyBookings from "../pages/MyBookings";
import Blogs from "../pages/Blogs";
import DoctorDetails from "../pages/DoctorDetails";
import DoctorError from "../pages/DoctorError";
import { Suspense } from "react";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        hydrateFallbackElement: <p className="text-center my-20"><span className="loading loading-spinner text-primary loading-xl"></span></p>,
        errorElement: (
            <Suspense fallback={<p className="text-center my-20"><span className="loading loading-spinner text-primary loading-xl"></span></p>}>
                <ErrorPage></ErrorPage>
            </Suspense>
        ),
        children: [
            {
                index: true,
                element: <Home></Home>,
                loader: () => fetch('../doctorsInfo.json'),
            },
            {
                path: "/mybookings",
                element: <MyBookings></MyBookings>,
            },
            {
                path: "/blogs",
                element: (
                    <Suspense fallback={<p className="text-center my-20"><span className="loading loading-spinner text-primary loading-xl"></span></p>}>
                        <Blogs />
                    </Suspense>
                ),
                loader: () => fetch('../blogsData.json'),

            },
            {
                path: "/doctordetails/:id",
                element: <DoctorDetails></DoctorDetails>,
                loader: () => fetch('../doctorsInfo.json'),
                errorElement: (
                    <Suspense fallback={<p className="text-center my-20"><span className="loading loading-spinner text-primary loading-xl"></span></p>}>
                        <DoctorError></DoctorError>
                    </Suspense>
                ),
            }
        ]
    }
])