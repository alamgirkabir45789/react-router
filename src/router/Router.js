
import type { RouteObject } from "react-router-dom";
import Layout from "../layout/Layout";
import CoursesIndex from "../view/course/courseIndex/CoursesIndex";
import Courses from "../view/course/Courses";
import Course from "../view/course/title/Course";
import Error from "../view/error/Error";
import Home from "../view/home/Home";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            {
                path: "/courses",
                element: <Courses />,
                children: [
                    { index: true, element: <CoursesIndex /> },
                    { path: "/courses/:id", element: <Course /> }
                ]
            },
            { path: "*", element: <Error /> }
        ]
    }
];
