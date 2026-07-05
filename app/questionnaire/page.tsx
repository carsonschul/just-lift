"use client";
import { useState } from "react";

export default function Questionnaire() {
  const days = [1, 2, 3, 4, 5, 6];
  const [daysSelected, setDaysSelected] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen gap-6 bg-gray-950">
      {step === 1 && (
        <>
          <h1 className="text-3xl font-bold text-white">
            How many days a week can you work out?
          </h1>
          <div className="flex gap-3">
            {days.map((d) => (
              <button
                key={d}
                onClick={() => setDaysSelected(d)}
                className={
                  d <= daysSelected
                    ? "bg-sky-500 text-white px-5 py-3 rounded-lg active:scale-95 transition"
                    : "bg-gray-800 text-white px-5 py-3 rounded-lg hover:bg-gray-700 active:scale-95 transition"
                }
              >
                {d}
              </button>
            ))}
          </div>

          <div className="absolute top-2/3 flex flex-col items-center gap-4">
            {daysSelected > 0 && (
              <button
                onClick={() => setStep(2)}
                className="bg-sky-500 hover:bg-sky-400 active:scale-95 transition font-semibold rounded-lg px-6 py-3 text-white"
              >
                Confirm
              </button>
            )}
            {daysSelected === 1 && (
              <p className="text-sm text-gray-400 max-w-md text-center">
                Note: Working out 1 day a week will limit your weekly volume,
                which is the main driver of muscle growth. However, 1 day a week
                in the gym is infinitely better than 7 days on your couch.
              </p>
            )}
          </div>
        </>
      )}
      {step === 2 && (
        <h1 className="text-3xl font-bold text-white">
          How long can your sessions be?
        </h1>
      )}
    </main>
  );
}
