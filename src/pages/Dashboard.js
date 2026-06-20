import { useEffect, useState } from "react";

import StudyForm from "../components/StudyForm";
import SessionList from "../components/SessionList";
import MetricCard from "../components/MetricCard";
import HabitTracker from "../components/HabitTracker";
import Analytics from "../components/Analytics";
import WeeklyChart from "../components/WeeklyChart";
import SubjectChart from "../components/SubjectChart";
import GoalTracker from "../components/GoalTracker";

function Dashboard() {

  const [sessions, setSessions] = useState(() => {
    const savedSessions =
      localStorage.getItem("sessions");

    return savedSessions
      ? JSON.parse(savedSessions)
      : [];
  });

  const [habits, setHabits] = useState(() => {
    const savedHabits =
      localStorage.getItem("habits");

    return savedHabits
      ? JSON.parse(savedHabits)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "sessions",
      JSON.stringify(sessions)
    );
  }, [sessions]);

  useEffect(() => {
    localStorage.setItem(
      "habits",
      JSON.stringify(habits)
    );
  }, [habits]);

  const totalHours = sessions.reduce(
    (sum, session) => sum + session.duration,
    0
  );

  const totalSessions = sessions.length;

  const averageHours =
    totalSessions === 0
      ? 0
      : (
          totalHours /
          totalSessions
        ).toFixed(1);

  const today = new Date()
    .toISOString()
    .split("T")[0];

  const todayHours = sessions
    .filter(
      (session) =>
        session.date === today
    )
    .reduce(
      (sum, session) =>
        sum + session.duration,
      0
    );

  const completedHabits =
    habits.filter(
      (habit) =>
        habit.completed
    ).length;

  const uniqueDates = [
    ...new Set(
      sessions.map(
        (session) =>
          session.date
      )
    ),
  ];

  const streak =
    uniqueDates.length;

  const focusScore =
    Math.min(
      100,
      totalHours * 4 +
        completedHabits * 10 +
        streak * 3
    );
const goal =
  Number(localStorage.getItem("goal")) || 30;

const progress = Math.min(
  100,
  Math.round(
    (totalHours / goal) * 100
  )
);

  return (
    <div className="min-h-screen bg-slate-100">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="text-center mb-10">

          <h1 className="text-5xl font-bold text-slate-800">
            Student Productivity Dashboard
          </h1>

          <p className="text-gray-500 mt-3">
            Track study sessions, habits and progress
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

          <MetricCard
            title="Total Hours"
            value={totalHours}
          />

          <MetricCard
            title="Goal Progress"
            value={`${progress}%`}
          />

          <MetricCard
            title="Total Sessions"
            value={totalSessions}
          />

          <MetricCard
            title="Average Hours"
            value={averageHours}
          />

          <MetricCard
            title="Focus Score"
            value={`${focusScore}%`}
          />

          <MetricCard
            title="Active Days"
            value={streak}
          />

          <MetricCard
            title="Completed Habits"
            value={completedHabits}
          />

          <MetricCard
            title="Habits Remaining"
            value={
              habits.length -
              completedHabits
            }
          />

        </div>

        <GoalTracker
          totalHours={totalHours}
        />

        <StudyForm
          sessions={sessions}
          setSessions={setSessions}
        />

        <div className="mt-8">

          <Analytics
            sessions={sessions}
          />

        </div>

        <div className="grid lg:grid-cols-2 gap-6 mt-8">

          <WeeklyChart
            sessions={sessions}
          />

          <SubjectChart
            sessions={sessions}
          />

        </div>

        <div className="mt-8">

          <SessionList
            sessions={sessions}
            setSessions={setSessions}
          />

        </div>

        <HabitTracker
          habits={habits}
          setHabits={setHabits}
        />

        <div className="mt-10 flex justify-center">

  <button
    onClick={() => {

      const confirmReset =
        window.confirm(
          "Are you sure you want to reset all data?"
        );

      if (!confirmReset) return;

      localStorage.removeItem("sessions");
      localStorage.removeItem("habits");
      localStorage.removeItem("goal");

      setSessions([]);
      setHabits([]);

      window.location.reload();

    }}
    className="bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600 transition"
  >
    Reset Dashboard
  </button>

</div>

        <footer className="text-center text-gray-500 mt-12 py-6 border-t">

  Student Productivity Dashboard

  <div className="mt-2 text-sm">

    Built using React, Tailwind CSS and Recharts

  </div>

</footer>

      </div>

    </div>
  );
}

export default Dashboard;