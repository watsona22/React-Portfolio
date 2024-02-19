// code from my portfolio in github
// import Image from "react-bootstrap/Image";
import '../styles/Project.css';
// import horiseon from "../assets/images/horiseon.png";
// import password from "../assets/images/password.png";
// import manager from "../assets/images/rate-my-manager.png";
// import planner from "../assets/images/event-planner.png";
// import assessment from "../assets/images/assessment.png";
import Project from '../components/Project';

const projectData = [
    {
        className: "card-1",
        gitHubLink: "https://watsona22.github.io/02-Challenge_Amber-Watson/",
        imgLink: "/assets/images/horiseon.png",
        title: "Code-Refactor: Debugging & Semantics",
        buttonLink: "https://github.com/watsona22/02-Challenge_Amber-Watson"
    },
    {
        className: "card",
        gitHubLink: "https://watsona22.github.io/02-Challenge-3/",
        imgLink: "/assets/images/password.png",
        title: "Password-Generator: Javascript & Algorithms",
        buttonLink: "https://github.com/watsona22/02-Challenge-3"
    },
    {
        className: "card",
        gitHubLink: "https://rate-my-manager22-e94af912c6ea.herokuapp.com/",
        imgLink: "/assets/images/rate-my-manager.png",
        title: "Fullstack Development with Express & Handlebars",
        buttonLink: "https://github.com/watsona22/rate-my-manager"
    },
    {
        className: "card",
        gitHubLink: "https://watsona22.github.io/Event-Planner/",
        imgLink: "/assets/images/event-planner.png",
        title: "Event-Planner: Jquery & Local Storage",
        buttonLink: "https://github.com/watsona22/Event-Planner"
    },
    {
        className: "card",
        gitHubLink: "https://watsona22.github.io/Web-Dev-Assessment/",
        imgLink: "/assets/images/assessment.png",
        title: "Web-Dev-Assessment: Event Handlers & Local Storage",
        buttonLink: "https://github.com/watsona22/Web-Dev-Assessment"
    }
]

export default function Portfolio() {
    return (

        <div>
            <section className="nav">
            </section>
            <main className="my-tooltip container" id="work">
                <section className="code">
                    {projectData.map(project => (<Project key={project.title} project={project} />))}
                </section>
            </main>
        </div>
        // </header>
    );
}
