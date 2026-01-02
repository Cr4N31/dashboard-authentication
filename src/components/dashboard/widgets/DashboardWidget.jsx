import StatsWidget from "./StatsWidget";
import ProjectsWidget from "./ProjectsWidget";
import ActivityWidget from "./ActivityWidget";

function DashboardWidgets() {
  return (
    <section className="dashboard-widgets grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <StatsWidget />
      <ProjectsWidget />
      <ActivityWidget />
    </section>
  );
}

export default DashboardWidgets;
