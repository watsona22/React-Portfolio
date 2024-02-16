// code from my portfolio in github
import '../styles/Project.css';

export default function Portfolio() {
    return (
        <div>
            <h3>Portfolio</h3>
            <section className="nav">
                <section id="about-me"></section>
            </section>
            <main className="tooltip" id="work">
                <section className="code">
                    <section className="card-1">
                        <a href="https://watsona22.github.io/02-Challenge_Amber-Watson/">
                            <img src={("./assets/images/project photo 2.jpg")} alt="image 1" />
                        </a>
                    </section>
                    <section className="card">
                        <a href="https://watsona22.github.io/project-1-lil-chefs/">
                            <img src={("./assets/images/project photo 1.jpg")} alt="image 2" />
                        </a>
                    </section>
                    <section className="card">
                        <a href="https://rate-my-manager22-e94af912c6ea.herokuapp.com/">
                            <img src={("./assets/images/project photo 3.jpg")} alt="image 3" />
                        </a>
                    </section>
                    <section className="card">
                        <p>Mern Stack</p>
                        <img src={("./assets/images/project photo 4.jpg")} alt="image 4" />
                    </section>
                    <section className="card">
                        <img src={("./assets/images/project photo 5.jpg")} alt="image 5" />
                    </section>
                </section>
            </main>
        </div>
    );
}
