import React, { createContext, useState } from 'react';

export const TimeContext = createContext();

export function TimeProvider({ children }) {
  const [selectedTime, setSelectedTime] = useState(null);

  return (
    <TimeContext.Provider value={{ selectedTime, setSelectedTime }}>
      {children}
    </TimeContext.Provider>
  );
}
export default TimeProvider;