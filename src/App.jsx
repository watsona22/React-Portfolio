
// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Navigation from '../src/components/Navigation';
import Header from "./components/Header";
import Footer from "./components/Footer";

import 'bootstrap/dist/css/bootstrap.css';

function App() {
    // The Outlet component will conditionally swap between the different pages according to the URL
    return (
        <>
            <Navigation />
            <main className="content">

                <div>
                    <Header />
                </div>
                <div>
                    <Outlet />
                </div>
                <div>
                    <Footer />
                </div>
            </main>
        </>
    );
}

export default App;
