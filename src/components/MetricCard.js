function MetricCard({ title, value }) {

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition-all">

      <h3 className="text-gray-500 text-sm">
        {title}
      </h3>

      <p className="text-3xl font-bold text-blue-600 mt-3">
        {value}
      </p>

    </div>
  );
}

export default MetricCard;