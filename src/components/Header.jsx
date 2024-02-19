import { useState } from 'react';
// import NavTabs from './Navigation';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

export default function Container() {
    const [currentPage] = useState('About');

    //conditionally renders pages based on whether the current page equals the designated page paths
    () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <Resume />;
    };

    // const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            {/* both the currentpage variable and handlepagechange function are passed through */}
            {/* <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} /> */}
            {/* the page is rendered using the css style specified for the mx-3 classname */}
            {/* <main className="mx-3">{renderPage()}</main> */}
        </div>
    );
}
