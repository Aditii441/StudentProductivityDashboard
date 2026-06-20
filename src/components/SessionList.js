function SessionList({ sessions, setSessions }) {

  const totalHours = sessions.reduce(
    (total, session) => total + session.duration,
    0
  );

  const handleDelete = (id) => {

    const updatedSessions = sessions.filter(
      (session) => session.id !== id
    );

    setSessions(updatedSessions);
  };

  if (sessions.length === 0) {

    return (

      <div className="bg-white rounded-2xl shadow-md p-10 text-center">

        <h2 className="text-2xl font-bold">
          No Study Sessions Yet
        </h2>

        <p className="text-gray-500 mt-3">
          Add your first study session to start tracking productivity.
        </p>

      </div>

    );
  }

  return (
    <div>

      <div className="bg-white rounded-2xl shadow-md p-5 mb-6">

        <h2 className="text-2xl font-bold">
          📚 Total Study Hours: {totalHours}
        </h2>

      </div>

      <div className="space-y-4">

        {sessions.map((session) => (

          <div
            key={session.id}
            className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition"
          >

            <div className="flex justify-between items-start">

              <div>

                <h3 className="text-2xl font-bold text-blue-600">
                   {session.subject}
                </h3>

                <p className="text-gray-600 mt-2">
                   {session.duration} Hours
                </p>

                <p className="text-gray-600">
                   {session.date}
                </p>

                {session.notes && (

                  <p className="mt-3 bg-slate-100 p-3 rounded-lg">
                     {session.notes}
                  </p>

                )}

              </div>

              <button
                onClick={() =>
                  handleDelete(session.id)
                }
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default SessionList;
