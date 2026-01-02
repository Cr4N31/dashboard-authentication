function WidgetCard({ title, children }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* Title */}
      <h3 className="text-lg font-bold text-black mb-4">{title}</h3>

      {/* Content */}
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}

export default WidgetCard;
