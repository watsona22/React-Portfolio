import profilepic_1 from "../assets/images/profilepic_1.jpg";


export default function About() {
    return (
        <header className="header">

            <div>
                <h3>About</h3>
                <p>
                    <img src={profilepic_1} alt="About-Me" />
                    <div className="wrap">
                        <div>Hello and welcome! Thanks for stopping by to check out my portfolio.</div>
                        <div>My name is Amber Watson, recent graduate of the edX Full Stack Web Development Bootcamp at the University of Texas in Austin.</div>
                        <div>You will find five deliverables from every major section of the course program.</div>
                        <div>Those five projects are accessible via an interactive page, complete with functionality and responsive design feautures consistent with industry standards.</div>
                        <div>Please feel free to peruse the site and contact me with any questions you have.</div>
                    </div>
                </p>
            </div>
        </header>
    );
}