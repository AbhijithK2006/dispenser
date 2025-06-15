import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const goToTimeDate = () => {
    navigate('/timedate');
  };

  return (
    <>
      <div className="bg-[#f1faee] min-h-screen p-6 flex flex-col items-center">
        <div className="text-center max-w-4xl py-12">
          <h1 className="text-5xl md:text-7xl font-bold text-[#511D43] leading-tight">
            WELCOME
          </h1>
        </div>
        <div className="text-center max-w-4xl py-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#00809D] leading-tight">
            DISPENSER
          </h2>
        </div>
        <Button
          onClick={goToTimeDate}
          style={{
            backgroundColor: '#00809D',
            color: 'white',
            borderRadius: '20px',
            fontSize: '15px',
            fontWeight: 'bold'
          }}
          className="h-15 w-30"
        >
          Set CLOCK
        </Button>
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
    </>
  );
}

export default Home;