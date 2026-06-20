import { useState } from "react";

function HabitTracker({
  habits,
  setHabits,
}) {

  const [newHabit, setNewHabit] =
    useState("");

  const addHabit = () => {

    if (!newHabit.trim()) return;

    const habit = {
      id: Date.now(),
      name: newHabit,
      completed: false,
    };

    setHabits([
      ...habits,
      habit,
    ]);

    setNewHabit("");
  };

  const toggleHabit = (id) => {

    const updatedHabits =
      habits.map((habit) =>
        habit.id === id
          ? {
              ...habit,
              completed:
                !habit.completed,
            }
          : habit
      );

    setHabits(updatedHabits);
  };

  const deleteHabit = (id) => {

    setHabits(
      habits.filter(
        (habit) =>
          habit.id !== id
      )
    );
  };

  const completedHabits =
    habits.filter(
      (habit) =>
        habit.completed
    ).length;

  const percentage =
    habits.length === 0
      ? 0
      : Math.round(
          (completedHabits /
            habits.length) *
            100
        );

  return (
    <div className="bg-white rounded-2xl shadow-md p-8 mt-8">

      <div className="flex justify-between items-center mb-4">

        <h2 className="text-3xl font-bold">
          Daily Habits
        </h2>

        <span className="text-blue-600 font-bold">
          {completedHabits}/
          {habits.length} Completed
        </span>

      </div>

      <div className="mb-6">

        <div className="w-full bg-gray-200 rounded-full h-3">

          <div
            className="bg-blue-600 h-3 rounded-full"
            style={{
              width: `${percentage}%`,
            }}
          />

        </div>

      </div>

      <div className="flex gap-3 mb-6">

        <input
          type="text"
          value={newHabit}
          onChange={(e) =>
            setNewHabit(
              e.target.value
            )
          }
          placeholder="Add Habit"
          className="flex-1 border rounded-lg p-3"
        />

        <button
          onClick={addHabit}
          className="bg-blue-600 text-white px-5 rounded-lg"
        >
          Add
        </button>

      </div>

      <div className="grid md:grid-cols-2 gap-4">

        {habits.map((habit) => (

          <div
            key={habit.id}
            className={`border rounded-xl p-4 flex justify-between items-center ${
              habit.completed
                ? "bg-green-50 border-green-400"
                : ""
            }`}
          >

            <div className="flex items-center gap-3">

              <input
                type="checkbox"
                checked={
                  habit.completed
                }
                onChange={() =>
                  toggleHabit(
                    habit.id
                  )
                }
              />

              <span>
                {habit.name}
              </span>

            </div>

            <button
              onClick={() =>
                deleteHabit(
                  habit.id
                )
              }
              className="text-red-500"
            >
              ✕
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default HabitTracker;