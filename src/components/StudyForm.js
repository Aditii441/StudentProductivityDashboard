import { useState } from "react";

function StudyForm({ sessions, setSessions }) {

  const [subject, setSubject] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!subject || !duration || !date) {
      alert("Please fill all required fields");
      return;
    }

    const newSession = {
      id: Date.now(),
      subject,
      duration: Number(duration),
      date,
      notes,
    };

    setSessions([...sessions, newSession]);

    setSubject("");
    setDuration("");
    setDate("");
    setNotes("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md mb-8"
    >

      <h2 className="text-xl font-bold mb-4">
        Add Study Session
      </h2>

      <div className="grid md:grid-cols-3 gap-4">

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="border rounded-lg p-3"
        />

        <input
          type="number"
          placeholder="Hours"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="border rounded-lg p-3"
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border rounded-lg p-3"
        />

      </div>

      <textarea
        placeholder="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="border rounded-lg p-3 mt-4 w-full"
        rows="4"
      />

      <button
        className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-4 hover:bg-blue-700"
      >
        Add Session
      </button>

    </form>
  );
}

export default StudyForm;