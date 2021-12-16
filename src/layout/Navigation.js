import { Eye, Framer, GitCommit, User } from 'react-feather';
export const navigation = [
    {
        id: 'home',
        title: 'Home',
        icon: <Framer size={20} />,
        children: []
    },

    {
        id: 'about',
        title: 'About',
        icon: <GitCommit size={20} />,
        children: [
            {
                id: 'contact',
                title: 'Contact',
                icon: <User size={20} />,
                navLink: '/contact'
            },
            {
                id: 'course',
                title: 'Course ',
                icon: <User size={20} />,
                navLink: '/course'
            },

        ]
    },

    {
        id: 'test',
        title: 'Test Me',
        icon: <Eye size={20} />,
        navLink: '/test'
    }
];