import { PROJECTS } from "../constants";
import styled from 'styled-components';

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="relative mb-8 group hover:bg-neutral-900/10 rounded-lg transition-all duration-300">
            {/* Project Content */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-wrap lg:justify-center p-4 relative z-10"
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
                <h6 className="mb-2 font-semibold text-orange-300">{project.title}</h6>
                <ul className="mb-4 list-disc list-inside text-neutral-400">
                  {project.description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-orange-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          
            <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
              <MatrixPattern />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MatrixPattern = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #0d0d1a;
  background-image: 
    linear-gradient(#262645 1px, transparent 1px),
    linear-gradient(90deg, #262645 1px, transparent 1px),
    repeating-linear-gradient(45deg, rgba(0, 255, 170, 0.05) 0px 1px, transparent 1px 12px),
    repeating-linear-gradient(-45deg, rgba(0, 255, 170, 0.05) 0px 1px, transparent 1px 12px),
    radial-gradient(circle at center, #0a0a1a 0%, #000 100%);
  background-size: 
    28px 28px,
    28px 28px,
    50px 50px,
    50px 50px,
    cover;
  border: 1px solid rgba(0, 255, 170, 0.1);
  box-shadow: 
    inset 0 0 40px rgba(0, 255, 170, 0.1),
    0 0 60px rgba(0, 255, 170, 0.15);
  opacity: 0.5;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 170, 0.4), transparent);
    animation: borderFlow 6s linear infinite;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 160px;
    height: 160px;
    background: radial-gradient(circle, rgba(0, 255, 170, 0.15) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    animation: pulse 3.5s ease-in-out infinite alternate;
  }

  @keyframes borderFlow {
    0% { background-position: 0% 50%; }
    100% { background-position: 200% 50%; }
  }

  @keyframes pulse {
    0% { transform: translate(-50%, -50%) scale(0.85); opacity: 0.2; }
    100% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.5; }
  }
`;

export default Project;