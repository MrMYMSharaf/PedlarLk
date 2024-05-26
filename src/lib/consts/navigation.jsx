// src/lib/consts/navigation.js
import { HiOutlineViewGrid, HiOutlineCube, HiOutlineShoppingCart, HiOutlineUsers, HiOutlineDocumentText, HiOutlineAnnotation, HiOutlineCog, HiOutlineQuestionMarkCircle } from "react-icons/hi";

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'categories',
        label: 'Categories',
        path: '/',
        icon: <HiOutlineViewGrid />
    },
    {
        key: 'viewallads',
        label: 'View All Ads',
        path: '/viewallads',
        icon: <HiOutlineCube />
    },
    {
        key: 'myAds',
        label: 'My Ads',
        path: '/myAds',
        icon: <HiOutlineShoppingCart />
    },
    {
        key: 'groups',
        label: 'Groups',
        path: '/groups',
        icon: <HiOutlineUsers />
    },
    {
        key: 'pages',
        label: 'Pages',
        path: '/pages',
        icon: <HiOutlineDocumentText />
    },
    {
        key: 'messages',
        label: 'Messages',
        path: '/messages',
        icon: <HiOutlineAnnotation />
    }
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: 'settings',
        label: 'Settings',
        path: '/settings',
        icon: <HiOutlineCog />
    },
    {
        key: 'support',
        label: 'Help & Support',
        path: '/support',
        icon: <HiOutlineQuestionMarkCircle />
    }
];
