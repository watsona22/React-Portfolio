// code from my portfolio in github
import '../styles/Project.css';
import project_photo_2 from "../assets/images/project_photo_2.jpg";
import project_photo_1 from "../assets/images/project_photo_1.jpg";
import project_photo_3 from "../assets/images/project_photo_3.jpg";
import project_photo_4 from "../assets/images/project_photo_4.jpg";
import project_photo_5 from "../assets/images/project_photo_5.jpg";


export default function Portfolio() {
    return (
        <header className="header">

            <div>
                {/* <h3>Portfolio</h3> */}
                <section className="nav">
                    <section id="about-me"></section>
                </section>
                <main className="tooltip" id="work">
                    <section className="code">
                        <section className="card-1">
                            <a href="https://watsona22.github.io/02-Challenge_Amber-Watson/">
                                <img src={project_photo_2} alt="Debug & Semantics" />
                            </a>
                        </section>
                        <section className="card">
                            <a href="https://watsona22.github.io/project-1-lil-chefs/">
                                <img src={project_photo_1} alt="API & CSS Framework" />
                            </a>
                        </section>
                        <section className="card">
                            <a href="https://rate-my-manager22-e94af912c6ea.herokuapp.com/">
                                <img src={project_photo_3} alt="Fullstack Development with Express & Handlebars" />
                            </a>
                        </section>
                        <section className="card">
                            <img src={project_photo_4} alt="image 4" />
                        </section>
                        <section className="card">
                            <img src={project_photo_5} alt="image 5" />
                        </section>
                    </section>
                </main>
            </div>
        </header>
    );
}
