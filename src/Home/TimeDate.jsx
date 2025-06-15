import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import { Button } from '@mui/material';

function TimeDate() {
  const navigate = useNavigate();

  const handleSetClick = () => {
    navigate('/user');
  };

  return (
    <div className="bg-[#f1faee] min-h-screen p-6 flex flex-col items-center">
      <div className="text-center max-w-4xl py-12">
        <h1 className="text-5xl md:text-7xl font-bold text-[#511D43] leading-tight">
          DISPENSER
        </h1>
        <div className="text-center max-w-4xl py-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#00809D] leading-tight">
            TIME
          </h2>
          <div className="flex justify-center items-center space-x-4 py-3 mb-6">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['MobileTimePicker']}>
                <DemoItem label="Set time">
                  <MobileTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-[#00809D] leading-tight">
            DATE
          </h2>
          <div className="flex justify-center items-center space-x-4 py-3 mb-6">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>
        <Button
          style={{
            backgroundColor: '#00809D',
            color: 'white',
            borderRadius: '20px',
            fontSize: '15px',
            fontWeight: 'bold'
          }}
          className='h-15 w-30'
          onClick={handleSetClick}
        >
          SET
        </Button>
      </div>
      <div style={{
        position: "fixed",
        left: 20,
        bottom: 20,
        fontWeight: "bold",
        fontSize: "1.2em",
        color: "#511D43"
      }}>
        KERALA
      </div>
      <div style={{
        position: "fixed",
        right: 20,
        bottom: 20,
        fontWeight: "bold",
        fontSize: "1.2em",
        color: "#511D43"
      }}>
        INDIA
      </div>
    </div>
  );
}

export default TimeDate;