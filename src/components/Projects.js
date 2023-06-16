const projects = [
    {
        name: "github", 
        date: "2021/1/28 - present",
        description: "have fun",
        link: "https://github.com/Hubertchenxdd"
    },
    {
        name: "html", 
        date: "2022-2-2 - 2022-3-3",
        description: "have more fun",
        link: "https://www.tutorialspoint.com/online_html_editor.php"

    }
]

// template component
// def ProjectSection(project):
const ProjectSection = ({ project }) => (
    <div>
        <h1>{ project.name }</h1>
        <span>{ project.date }</span>
        <p>{ project.description }</p>
        <a href={ project.link }>project link</a>
    </div>
)

const Projects = () => {
    return (
        <div className="projects">
            <div>this is for the projects section</div>

            { projects.map((pr, index) => <ProjectSection key={ index } project={ pr }/>) }
        </div>
    );
};


// change for testing


export default Projects;