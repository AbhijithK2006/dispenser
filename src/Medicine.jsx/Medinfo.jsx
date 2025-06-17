import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

function Medinfo() {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-4">
        <h1 className="text-2xl font-bold mb-6">Menu</h1>
        <nav className="space-y-4">
          <button className="block w-full text-left px-4 py-2 bg-blue-800 hover:bg-blue-700 rounded">Profile Dashboard</button>
          <button className="block w-full text-left px-4 py-2 hover:bg-blue-700 rounded">Set Alarm</button>
          <button className="block w-full text-left px-4 py-2 hover:bg-blue-700 rounded">User Manual</button>
          <button className="block w-full text-left px-4 py-2 hover:bg-blue-700 rounded">Settings</button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-grow p-6 bg-[#f5f5f5] relative">
        {/* Header */}
        <div className="relative flex items-center justify-center mb-6">
          <h1 className="text-5xl font-bold text-[#511D43]">DISPENSER</h1>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="absolute right-0 flex bg-white rounded-lg shadow-md p-4 gap-4 min-w-[180px] max-w-[300px]">
              <div className="font-bold text-[#00809D]">
                {selectedDate.format('ddd')}
              </div>
              <div className="font-bold text-[#00809D]">
                {selectedDate.format('DD')}
              </div>
              <div className="font-bold text-[#00809D]">
                {selectedDate.format('YYYY')}
              </div>
            </div>
          </LocalizationProvider>
        </div>

        {/* Time Input */}
        <div className="flex justify-center items-center gap-4 py-9">
          <input
            type="text"
            className="text-3xl w-20 h-20 text-center rounded-lg bg-white shadow"
            placeholder="HH"
          />
          <span className="text-3xl font-bold">:</span>
          <input
            type="text"
            className="text-3xl w-20 h-20 text-center rounded-lg bg-white shadow"
            placeholder="MM"
          />
          <span className="text-3xl font-bold">:</span>
          <input
            type="text"
            className="text-3xl w-20 h-20 text-center rounded-lg bg-white shadow"
            placeholder="Sec"
          />
        </div>

        {/* Next Medicine Time */}
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-2xl font-bold text-[#511D43] text-center">
            NEXT MEDICINE AT
          </h3>
          <input
            type="text"
            className="text-3xl w-40 h-20 text-center rounded-lg bg-white shadow"
            placeholder="Time"
          />
        </div>
      </div>
    </div>
  );
}

export default Medinfo;
