import React, { useState } from 'react';
import { Avatar, InputLabel, MenuItem, Select, Stack, TextField, FormControl, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function User() {
  const [age, setAge] = useState('');
  const [name, setName] = useState('');
  const [selectedSex, setSelectedSex] = useState('');
  const navigate = useNavigate();

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSelectSexChange = (event) => {
    setSelectedSex(event.target.value);
  };

  const handleSetClick = () => {
    navigate('/medtime');
  };

  return (
    <div className="bg-[#f1faee] min-h-screen p-6 flex flex-col items-center gap-8">
      <Stack direction="row" spacing={2} className='py-10'>
        <Avatar
          src="/broken-image.jpg"
          sx={{ width: 120, height: 120 }}
        />
      </Stack>
      <h1 className="text-2xl font-bold text-[#511D43] leading-tight">
        Profile
      </h1>

      <div className="flex items-center gap-5 text-2xl">
        <TextField
          id="outlined-name"
          label="Name"
          variant="outlined"
          sx={{ width: 300 }}
          value={name}
          onChange={handleNameChange}
        />
      </div>

      <div className="flex items-center gap-5 text-2xl">
        <TextField
          id="outlined-age"
          label="Age"
          variant="outlined"
          type="number"
          sx={{ width: 300 }}
          value={age}
          onChange={handleAgeChange}
        />
      </div>
      <div className="flex items-center gap-5 text-2xl">
        <FormControl sx={{ width: 300 }}>
          <InputLabel id="demo-simple-select-helper-label">Sex</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={selectedSex}
            label="Sex"
            onChange={handleSelectSexChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Male</MenuItem>
            <MenuItem value={20}>Female</MenuItem>
          </Select>
        </FormControl>
      </div>
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

export default User;