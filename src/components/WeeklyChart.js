import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function WeeklyChart({ sessions }) {

  const data = sessions.map((session) => ({
    date: session.date.slice(5),
    hours: session.duration,
  }));

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-4">
        Weekly Study Hours
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <BarChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="hours"
            fill="#2563eb"
          />
        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default WeeklyChart;