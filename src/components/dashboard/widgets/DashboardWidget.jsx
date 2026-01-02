import StatsWidget from "./StatsWidget";
import ProjectsWidget from "./ProjectsWidget";
import ActivityWidget from "./ActivityWidget";

function DashboardWidgets() {
  return (
    <section className="dashboard-widgets">
      <StatsWidget data-aos="fade-up" />
      <ProjectsWidget  data-aos="fade-up"/>
      <ActivityWidget data-aos="fade-up"/>
    </section>
  );
}

export default DashboardWidgets;
