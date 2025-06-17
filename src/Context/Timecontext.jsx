import React, { createContext, useState } from 'react';
import dayjs from 'dayjs';

// Create the context with a default value for better autocomplete/debugging
export const TimeContext = createContext({
  selectedDate: dayjs(),
  setSelectedDate: () => {},
  selectedTime: dayjs(),
  setSelectedTime: () => {},
});

function TimeProvider({ children }) {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState(dayjs());

  return (
    <TimeContext.Provider value={{ selectedDate, setSelectedDate, selectedTime, setSelectedTime }}>
      {children}
    </TimeContext.Provider>
  );
}

export default TimeProvider;
