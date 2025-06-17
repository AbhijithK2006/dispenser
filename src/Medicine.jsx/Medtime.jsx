import React, { useState } from 'react';
import { MenuItem, Select, FormControl, InputLabel, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Medtime() {
  // Separate state for each selection
  const [morningBefore, setMorningBefore] = useState('');
  const [morningAfter, setMorningAfter] = useState('');
  const [afternoonBefore, setAfternoonBefore] = useState('');
  const [afternoonAfter, setAfternoonAfter] = useState('');
  const [nightBefore, setNightBefore] = useState('');
  const [nightAfter, setNightAfter] = useState('');

  const navigate = useNavigate();

  const handleSetClick = () => {
    navigate('/medinfo');
  };

  return (
    <div className="bg-[#f1faee] min-h-screen p-6 flex flex-col items-center">
      <div className="text-center max-w-4xl py-12">
        <h1 className="text-5xl font-bold text-[#511D43] leading-tight">
          Medicine Timing
        </h1>
      </div>
      {/* MORNING */}
      <div className="w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-[#00809D] text-left px-15">
          MORNING
        </h2>
      </div>
      <div className="flex gap-4 items-center justify-center py-5">
        <h2 className='text-2xl font-medium'>Before food</h2>
        <FormControl sx={{ width: 300 }}>
          <InputLabel id="morning-before-label">YES/NO</InputLabel>
          <Select
            labelId="morning-before-label"
            id="morning-before"
            value={morningBefore}
            label="YES/NO"
            onChange={e => setMorningBefore(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="flex gap-7 items-center justify-center">
        <h2 className='text-2xl font-medium'>After food</h2>
        <FormControl sx={{ width: 300 }}>
          <InputLabel id="morning-after-label">YES/NO</InputLabel>
          <Select
            labelId="morning-after-label"
            id="morning-after"
            value={morningAfter}
            label="YES/NO"
            onChange={e => setMorningAfter(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </Select>
        </FormControl>
      </div>
      {/* AFTERNOON */}
      <div className="w-full max-w-4xl py-3">
        <h2 className="text-3xl font-bold text-[#00809D] text-left px-15">
          AFTERNOON
        </h2>
      </div>
      <div className="flex gap-4 items-center justify-center py-5">
        <h2 className='text-2xl font-medium'>Before food</h2>
        <FormControl sx={{ width: 300 }}>
          <InputLabel id="afternoon-before-label">YES/NO</InputLabel>
          <Select
            labelId="afternoon-before-label"
            id="afternoon-before"
            value={afternoonBefore}
            label="YES/NO"
            onChange={e => setAfternoonBefore(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="flex gap-7 items-center justify-center">
        <h2 className='text-2xl font-medium'>After food</h2>
        <FormControl sx={{ width: 300 }}>
          <InputLabel id="afternoon-after-label">YES/NO</InputLabel>
          <Select
            labelId="afternoon-after-label"
            id="afternoon-after"
            value={afternoonAfter}
            label="YES/NO"
            onChange={e => setAfternoonAfter(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </Select>
        </FormControl>
      </div>
      {/* NIGHT */}
      <div className="w-full max-w-4xl py-3">
        <h2 className="text-3xl font-bold text-[#00809D] text-left px-15">
          NIGHT
        </h2>
      </div>
      <div className="flex gap-4 items-center justify-center py-5">
        <h2 className='text-2xl font-medium'>Before food</h2>
        <FormControl sx={{ width: 300 }}>
          <InputLabel id="night-before-label">YES/NO</InputLabel>
          <Select
            labelId="night-before-label"
            id="night-before"
            value={nightBefore}
            label="YES/NO"
            onChange={e => setNightBefore(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="flex gap-7 items-center justify-center">
        <h2 className='text-2xl font-medium'>After food</h2>
        <FormControl sx={{ width: 300 }}>
          <InputLabel id="night-after-label">YES/NO</InputLabel>
          <Select
            labelId="night-after-label"
            id="night-after"
            value={nightAfter}
            label="YES/NO"
            onChange={e => setNightAfter(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className='py-10'>
        <Button
          style={{
            backgroundColor: '#00809D',
            color: 'white',
            borderRadius: '20px',
            fontSize: '15px',
            fontWeight: 'bold'
          }}
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

export default Medtime;