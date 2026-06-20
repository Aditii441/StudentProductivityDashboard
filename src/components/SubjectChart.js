import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const COLORS = [
  "#2563eb",
  "#16a34a",
  "#dc2626",
  "#ca8a04",
  "#9333ea",
];

function SubjectChart({ sessions }) {

  const subjectMap = {};

  sessions.forEach((session) => {
    subjectMap[session.subject] =
      (subjectMap[session.subject] || 0) +
      session.duration;
  });

  const data = Object.entries(subjectMap).map(
    ([subject, hours]) => ({
      name: subject,
      value: hours,
    })
  );

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-4">
        Subject Distribution
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
            label
          >

            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={
                  COLORS[
                    index %
                    COLORS.length
                  ]
                }
              />
            ))}

          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}

export default SubjectChart;