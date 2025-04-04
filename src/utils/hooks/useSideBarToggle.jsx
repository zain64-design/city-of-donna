import { useState, useEffect } from 'react';

const useSideBarToggle = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth >= 1200) {
            setSidebarOpen(false);
        } else {
            setSidebarOpen(true);
        }
    }, [windowWidth]);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return [isSidebarOpen, toggleSidebar];
};

export default useSideBarToggle;