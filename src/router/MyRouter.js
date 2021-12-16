import { lazy } from 'react';


export const inventoryRoutes = [
    {
        path: '/',
        component: lazy( () => import( '../view/home/Home' ) )
    },
    {
        path: '/about',
        component: lazy( () => import( '../view//about/About' ) )
    },
    {
        path: '/contact',
        component: lazy( () => import( '../view/contact/Contact' ) )
    },
    {
        path: '/course',
        component: lazy( () => import( '../view/course/Courses' ) )
    },
    {
        path: '/test',
        component: lazy( () => import( '../Test/Test' ) )

    },

];