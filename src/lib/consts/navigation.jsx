// src/lib/consts/navigation.js
import { HiOutlineViewGrid, HiOutlineCube,HiOutlineSpeakerphone, HiOutlineShoppingCart, HiOutlineUsers, HiOutlineDocumentText, HiOutlineAnnotation, HiOutlineCog, HiOutlineQuestionMarkCircle } from "react-icons/hi";

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
        key: 'myneeds',
        label: 'My Needs',
        path: '/myneeds',
        icon: <HiOutlineSpeakerphone />
    },
    {
        key: 'offers',
        label: 'Offers',
        path: '/offers',
        icon: <HiOutlineSpeakerphone />
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
        key: 'page',
        label: 'Page',
        path: '/page',
        icon: <HiOutlineDocumentText />
    },
    
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
