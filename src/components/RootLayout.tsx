// components/RootLayout.tsx
import React, { ReactNode } from 'react';
import Navbar from './ui/Navbar';
import Footer from './ui/Footer';

interface RootLayoutProps {
    children: ReactNode;
    darkTheme: boolean;
    setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children, darkTheme, setDarkTheme }) => {
    const handleToggleTheme = () => {
        setDarkTheme((prevTheme) => !prevTheme);
    };

    return (
        <div data-theme={darkTheme ? 'dark' : 'light'}>
            <Navbar darkTheme={darkTheme} setDarkTheme={handleToggleTheme} />
            <div>{children}</div>
            <Footer />
        </div>
    );
};

export default RootLayout;
