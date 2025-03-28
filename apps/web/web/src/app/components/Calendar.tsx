"use client"

import { Calendar as ReactCalendar } from "react-calendar";

// TODO: replace with actual data
const mockIntensityData: Record<string, number> = {
  "2025-02-01": 10,
  "2025-02-02": 50,
  "2025-02-03": 100,
  "2025-02-23": 30,
  "2025-02-24": 70,
  "2025-02-28": 90,
};

const getIntensityClass = (intensity: number) => {
  if (intensity >= 70) return "tile-intensity-high"; 
  if (intensity >= 30) return "tile-intensity-medium";
  return "tile-intensity-low"; 
};

export default function Calendar() {
    return (
      <div>
        <ReactCalendar
          next2Label={null}
          prev2Label={null}
          tileClassName={({ date, view }) => {
            if (view !== "month") return;
            const dateKey = date.toISOString().split("T")[0];
            const intensity = mockIntensityData[dateKey] || 0;
            return getIntensityClass(intensity);
          }}
        />
      </div>
    );
  }
