import { useEffect, useState } from "react";

function GoalTracker({
  totalHours,
}) {

  const [goal, setGoal] =
    useState(() => {

      const savedGoal =
        localStorage.getItem(
          "goal"
        );

      return savedGoal
        ? Number(savedGoal)
        : 30;
    });

  useEffect(() => {

    localStorage.setItem(
      "goal",
      goal
    );

  }, [goal]);

  const progress =
    Math.min(
      100,
      Math.round(
        (totalHours / goal) *
          100
      )
    );

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-8">

      <h2 className="text-2xl font-bold mb-4">

         Weekly Goal

      </h2>

      <div className="flex gap-3 mb-4">

        <input
          type="number"
          value={goal}
          onChange={(e) =>
            setGoal(
              Number(
                e.target.value
              )
            )
          }
          className="border rounded-lg p-3"
        />

      </div>

      <p className="mb-3">

        {totalHours} / {goal}
        Hours

      </p>

      <div className="bg-gray-200 h-4 rounded-full">

        <div
          className="bg-green-500 h-4 rounded-full"
          style={{
            width:
              `${progress}%`,
          }}
        />

      </div>

      <p className="mt-3 font-bold text-green-600">

        {progress}% Complete

      </p>

    </div>
  );
}

export default GoalTracker;