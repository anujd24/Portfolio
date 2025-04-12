import { PROJECTS } from "../constants";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-8 flex flex-wrap lg:justify-center hover:bg-neutral-800 p-4 rounded transition-all duration-300"
          >
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                width={250}
                height={250}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold text-purple-300">{project.title}</h6>
              
              <ul className="mb-4 list-disc list-inside text-neutral-400">
                  {project.description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
              </ul>

              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                >
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Project;
