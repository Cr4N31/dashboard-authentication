import WidgetCard from "./WidgetCard";

function ProjectsWidget({ projects = [] }) {

  const statusColor = (status) => {
    if (status === "Completed") return "bg-green-500 text-white";

    if (status === "In Progress") return "bg-yellow-400 text-black";
    return "bg-gray-300 text-black";
  };

  return (
    
          <WidgetCard title="Projects" data-aos="fade-up">
          <div className="max-h-[150px] overflow-auto">
            <ul className="flex flex-col gap-3">
              {projects.map((project) => (
                <li key={project.id} className="flex items-center justify-between">
                  <span className="text-black font-medium">{project.name}</span>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded ${statusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          </WidgetCard>

  );
}

export default ProjectsWidget;
