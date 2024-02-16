//A single `Navigation` component within the header
// that will use `Link` components from
//`react-router-dom` to conditionally render
// the different sections of your portfolio
// import { Link, useLocation } from 'react-router-dom';

import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
    const currentPage = useLocation().pathname;

    // const currentPage = useLocation().pathname;

    return (
        <ul className="body nav navbar">
            <Link

                to="/About"
                // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
            >
                <li>About</li>
            </Link>
            <Link
                to="/Portfolio"
                // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
            >
                <li>Portfolio</li>
            </Link>
            <Link
                to="/Contact"
                // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
            >
                <li>Contact</li>

            </Link>
            <Link
                to="/Resume"
                // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
            >
                <li>Resume</li>

            </Link>
        </ul>
    );
}

export default NavTabs;
