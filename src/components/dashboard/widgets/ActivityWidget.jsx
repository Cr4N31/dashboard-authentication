import WidgetCard from "./WidgetCard";

function ActivityWidget() {
  const activities = [
    { id: 1, text: "Logged in successfully" },
    { id: 2, text: "Created a new project" },
    { id: 3, text: "Updated dashboard layout" },
  ];

  return (
    <WidgetCard title="Recent Activity" data-aos="fade-up">
      <ul className="flex flex-col gap-2">
        {activities.map((activity) => (
          <li key={activity.id} className="text-black text-sm">
            <span className="font-bold mr-2">•</span>
            {activity.text}
          </li>
        ))}
      </ul>
    </WidgetCard>
  );
}

export default ActivityWidget;
