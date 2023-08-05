import React, { ReactNode } from 'react';
import Navbar from './ui/Navbar';
import Footer from './ui/Footer';

interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
