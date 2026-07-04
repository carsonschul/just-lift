"use client";
import { useState } from "react";

export default function Questionnaire() {
  const days = [1, 2, 3, 4, 5, 6];
  const [selected, setSelected] = useState(0);

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen gap-6 bg-gray-950">
      <h1 className="text-3xl font-bold text-white">
        How many days a week can you work out?
      </h1>
      <div className="flex gap-3">
        {days.map((d) => (
          <button
            key={d}
            onClick={() => setSelected(d)}
            className={
              d <= selected
                ? "bg-sky-500 text-white px-5 py-3 rounded-lg active:scale-95 transition"
                : "bg-gray-800 text-white px-5 py-3 rounded-lg hover:bg-gray-700 active:scale-95 transition"
            }
          >
            {d}
          </button>
        ))}
      </div>
      {selected === 1 && (
        <p className="absolute top-1/2 mt-20 text-sm text-gray-400 max-w-md text-center">
          Note: Working out 1 day a week will limit your weekly volume, which is
          the main driver of muscle growth. However, 1 day a week in the gym is
          infinitely better than 7 days on your couch.
        </p>
      )}
    </main>
  );
}