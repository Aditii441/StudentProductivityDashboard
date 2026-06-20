function Analytics({ sessions }) {

  const subjectMap = {};

  sessions.forEach((session) => {
    subjectMap[session.subject] =
      (subjectMap[session.subject] || 0) +
      session.duration;
  });

  const subjects = Object.entries(subjectMap);

  const mostStudied =
    subjects.length > 0
      ? subjects.reduce((a, b) =>
          a[1] > b[1] ? a : b
        )[0]
      : "N/A";

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-4">
        Analytics Overview
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <div className="border rounded-xl p-4">
          <p className="text-gray-500">
            Most Studied Subject
          </p>

          <h3 className="text-xl font-bold">
            {mostStudied}
          </h3>
        </div>

        <div className="border rounded-xl p-4">
          <p className="text-gray-500">
            Total Subjects
          </p>

          <h3 className="text-xl font-bold">
            {subjects.length}
          </h3>
        </div>

      </div>

    </div>
  );
}

export default Analytics;