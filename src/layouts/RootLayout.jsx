import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import ImprintFooter from '../components/ImprintFooter';
import ScrollToTop from '../components/ScrollToTop';

export default function RootLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <ScrollToTop />
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <ImprintFooter />
        </div>
    );
}
