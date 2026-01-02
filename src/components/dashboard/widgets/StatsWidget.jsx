import WidgetCard from "./WidgetCard";

function StatsWidget() {
  const stats = [
    { label: "Users", value: 120, max: 200 },       // max is for bar scaling
    { label: "Projects", value: 6, max: 20 },
    { label: "Tasks Done", value: 34, max: 50 },
  ];

  return (
    <WidgetCard title="Overview" data-aos="fade-up">
      <div className="flex flex-col gap-4">
        {stats.map((stat) => {
          // Calculate width percentage
          const widthPercent = Math.min((stat.value / stat.max) * 100, 100);
          return (
            <div key={stat.label}>
              <div className="flex justify-between mb-1 text-black font-medium">
                <span>{stat.label}</span>
                <span>{stat.value}</span>
              </div>
              <div className="w-full bg-gray-200 h-3 rounded">
                <div
                  className="bg-black h-3 rounded"
                  style={{ width: `${widthPercent}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </WidgetCard>
  );
}

export default StatsWidget;
