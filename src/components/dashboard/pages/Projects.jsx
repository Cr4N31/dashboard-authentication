function Projects({ projects = [] }) {
    const getStatusClass = (status) => {
    switch (status) {
        case "Completed":
        return "text-green-600";
        case "In Progress":
        return "text-yellow-500";
        case "Pending":
        return "text-red-500";
        default:
        return "text-gray-500";
    }
    };

  return (
    <div data-aos="fade-up">
      <h3 className="text-2xl font-bold mb-4">Projects</h3>

      {projects.length === 0 ? (
        <p className="text-gray-500">No projects yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-4 bg-white rounded shadow border"
            >
              <h3 className="font-bold text-lg">{project.name}</h3>
              <p>
                Status: <span className={getStatusClass(project.status)}>{project.status}</span>
              </p>
              <p className="text-sm text-gray-500">
                Created: {project.createdAt}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;
