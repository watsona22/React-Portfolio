// code from my portfolio in github
// import Image from "react-bootstrap/Image";
import '../styles/Project.css';
import horiseon from "../assets/images/horiseon.png";
import password from "../assets/images/password.png";
import manager from "../assets/images/rate-my-manager.png";
import planner from "../assets/images/event-planner.png";
import assessment from "../assets/images/assessment.png";


export default function Portfolio() {
    return (
        // <header className="header">

        <div>
            {/* <h3>Portfolio</h3> */}
            <section className="nav">
                {/* <section id="about-me"></section> */}
            </section>
            <main className="tooltip container" id="work">
                <section className="code">
                    <section className="card-1">
                        <a href="https://watsona22.github.io/02-Challenge_Amber-Watson/">
                            <img src={horiseon} title="Code-Refactor: Debugging & Semantics" alt="https://github.com/watsona22/02-Challenge_Amber-Watson" />
                        </a>
                    </section>
                    <section className="card">
                        <a href="https://watsona22.github.io/02-Challenge-3/">
                            <img src={password} title="Password-Generator: Javascript & Algorithms" alt="https://github.com/watsona22/02-Challenge-3" />
                        </a>
                    </section>
                    <section className="card">
                        <a href="https://rate-my-manager22-e94af912c6ea.herokuapp.com/">
                            <img src={manager} title="Rate-my-manager: Fullstack Development with Express & Handlebars" alt="https://github.com/watsona22/rate-my-manager" />
                        </a>
                    </section>
                    <section className="card">
                        <a href="https://watsona22.github.io/Event-Planner/">
                            <img src={planner} title="Event-Planner: Jquery & Local Storage" alt="https://github.com/watsona22/Event-Planner" />
                        </a>
                    </section>
                    <section className="card">
                        <a href="https://watsona22.github.io/Web-Dev-Assessment/">
                            <img src={assessment} title="Web-Dev-Assessment: Event Handlers & Local Storage" alt="https://github.com/watsona22/Web-Dev-Assessment" />
                        </a>
                    </section>
                </section>
            </main>
        </div>
        // </header>
    );
}
