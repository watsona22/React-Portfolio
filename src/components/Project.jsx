export default function Project({ project }) {
    // Iterate over each mock user to display their abridged profile data and a link to their page
    console.log(project)
    return (
        <section className={project.className}>
            <a href={project.gitHubLink}>
                <img src={project.imgLink} title={project.title} alt="Amber's Recent Work" />
            </a>
            <a href={project.buttonLink}><button className="btn" >GitHub Repo</button></a>

        </section>
    );
}
