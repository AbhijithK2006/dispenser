import React, { useState, createContext, useContext, useEffect } from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);


// --- ICONS (Using SVG for better performance and customization) ---
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-gray-400 group-hover:text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

const AlarmIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-gray-400 group-hover:text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const BookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-gray-400 group-hover:text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);

const SettingsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-gray-400 group-hover:text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);


// --- CONTEXT PROVIDERS ---

// 1. Time Context
const TimeContext = createContext();
const TimeProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState(dayjs());
  return (
    <TimeContext.Provider value={{ selectedDate, setSelectedDate, selectedTime, setSelectedTime }}>
      {children}
    </TimeContext.Provider>
  );
};

// 2. User Context
const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [profileData, setProfileData] = useState({
    name: '', age: '', sex: '', profilePhoto: null,
  });
  return (
    <UserContext.Provider value={{ profileData, setProfileData }}>
      {children}
    </UserContext.Provider>
  );
};

// 3. Medication Context
const MedicationContext = createContext();
const MedicationProvider = ({ children }) => {
    const [medicationTimings, setMedicationTimings] = useState({
        morningBefore: { active: 'No', time: '08:00' },
        morningAfter: { active: 'No', time: '09:00' },
        afternoonBefore: { active: 'No', time: '12:00' },
        afternoonAfter: { active: 'No', time: '13:00' },
        nightBefore: { active: 'No', time: '19:00' },
        nightAfter: { active: 'No', time: '20:00' },
    });
    return (
        <MedicationContext.Provider value={{ medicationTimings, setMedicationTimings }}>
            {children}
        </MedicationContext.Provider>
    );
};


// --- HELPER COMPONENTS ---
const PageWrapper = ({ children, className }) => (
  <div className={`min-h-screen bg-slate-50 text-slate-800 p-4 sm:p-6 lg:p-8 ${className}`}>
     <div className="absolute top-4 left-4 text-xs text-slate-400 font-bold">KERALA</div>
     <div className="absolute top-4 right-4 text-xs text-slate-400 font-bold">INDIA</div>
    <div className="max-w-5xl mx-auto">
      {children}
    </div>
  </div>
);

const StyledButton = ({ onClick, children, className }) => (
    <button
        onClick={onClick}
        className={`px-8 py-3 bg-cyan-500 text-white font-bold rounded-full hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-transform transform hover:scale-105 ${className}`}
    >
        {children}
    </button>
);


// --- PAGE COMPONENTS ---

function Home({ setPage }) {
  return (
    <PageWrapper className="flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-4 animate-fade-in-down">
        WELCOME
      </h1>
      <p className="text-3xl md:text-5xl font-light text-cyan-600 mb-12 animate-fade-in-up">
        DISPENSER
      </p>
      <StyledButton onClick={() => setPage('timedate')}>
        Set Clock
      </StyledButton>
    </PageWrapper>
  );
}

function TimeDate({ setPage }) {
  const { selectedDate, setSelectedDate, selectedTime, setSelectedTime } = useContext(TimeContext);

  return (
    <PageWrapper className="flex flex-col items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Dispenser</h1>
        <p className="text-xl text-cyan-600 mb-8">Set Global Time & Date</p>
        
        <div className="space-y-6">
            <div>
                <label className="block text-left font-semibold text-gray-600 mb-2">TIME</label>
                <input
                    type="time"
                    value={selectedTime.format('HH:mm')}
                    onChange={(e) => setSelectedTime(dayjs(`2022-04-17T${e.target.value}`))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                />
            </div>
             <div>
                <label className="block text-left font-semibold text-gray-600 mb-2">DATE</label>
                <input
                    type="date"
                    value={selectedDate.format('YYYY-MM-DD')}
                    onChange={(e) => setSelectedDate(dayjs(e.target.value))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                />
            </div>
        </div>

        <div className="mt-10">
            <StyledButton onClick={() => setPage('user')}>
                Confirm and Set Profile
            </StyledButton>
        </div>
      </div>
    </PageWrapper>
  );
}

const useRunningClock = (initialTime) => {
    const [time, setTime] = useState(initialTime);
    useEffect(() => {
        const timerId = setInterval(() => setTime(prevTime => prevTime.add(1, 'second')), 1000);
        return () => clearInterval(timerId);
    }, []);
    return time;
};


function User({ setPage }) {
    const { profileData, setProfileData } = useContext(UserContext);
    const { selectedTime } = useContext(TimeContext);
    const runningTime = useRunningClock(selectedTime);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prev => ({ ...prev, [name]: value }));
    };

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileData(prev => ({ ...prev, profilePhoto: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };
    
    return (
        <PageWrapper className="flex items-center justify-center">
             <div className="absolute top-6 right-6 bg-white p-3 rounded-xl shadow-md text-cyan-600 font-mono text-2xl">
                {runningTime.format('HH:mm:ss')}
            </div>
            <div className="w-full max-w-lg p-8 bg-white rounded-2xl shadow-xl flex flex-col items-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">User Profile</h1>
                
                <div className="relative mb-6">
                    <img
                        src={profileData.profilePhoto || 'https://placehold.co/128x128/E0E7FF/4F46E5?text=Upload'}
                        alt="Profile"
                        className="w-32 h-32 rounded-full object-cover border-4 border-cyan-200"
                    />
                     <label htmlFor="photo-upload" className="absolute -bottom-2 -right-2 bg-cyan-500 text-white p-2 rounded-full cursor-pointer hover:bg-cyan-600 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                        <input id="photo-upload" type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} />
                    </label>
                </div>

                <div className="w-full space-y-4">
                    <input type="text" name="name" placeholder="Name" value={profileData.name} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500"/>
                    <input type="number" name="age" placeholder="Age" value={profileData.age} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500"/>
                    <select name="sex" value={profileData.sex} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500">
                        <option value="">Select Sex</option> <option value="Male">Male</option> <option value="Female">Female</option> <option value="Other">Other</option>
                    </select>
                </div>
                
                <StyledButton onClick={() => setPage('medtime')} className="mt-8">
                    Set Medicine Times
                </StyledButton>
            </div>
        </PageWrapper>
    );
}

function Medtime({ setPage }) {
    const { profileData } = useContext(UserContext);
    const { medicationTimings, setMedicationTimings } = useContext(MedicationContext);

    const handleTimingChange = (period, condition, field, value) => {
        const key = `${period}${condition}`;
        setMedicationTimings(prev => ({
            ...prev,
            [key]: { ...prev[key], [field]: value }
        }));
    };

    return (
        <PageWrapper>
             <div className="flex items-center mb-8">
                 <img src={profileData.profilePhoto || 'https://placehold.co/64x64/E0E7FF/4F46E5?text=User'} alt="Profile" className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"/>
                <h2 className="ml-4 text-2xl font-bold text-gray-700">{profileData.name || 'User'}</h2>
             </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
                 <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Medicine Timings</h1>
                 
                 <div className="space-y-8">
                    {['morning', 'afternoon', 'night'].map((period) => (
                        <div key={period} className="p-6 border border-gray-200 rounded-xl bg-gray-50">
                            <h3 className="text-2xl font-semibold text-cyan-600 mb-4">{period.toUpperCase()}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                {['Before', 'After'].map((condition) => {
                                    const key = `${period}${condition}`;
                                    const timingData = medicationTimings[key];
                                    return (
                                        <div key={key} className="space-y-3">
                                            <label className="font-semibold text-gray-700">{condition} Food</label>
                                            <div className="flex items-center gap-4">
                                                <select
                                                    value={timingData.active}
                                                    onChange={e => handleTimingChange(period, condition, 'active', e.target.value)}
                                                    className="p-2 border border-gray-300 rounded-lg w-24"
                                                >
                                                    <option value="No">No</option>
                                                    <option value="Yes">Yes</option>
                                                </select>
                                                {timingData.active === 'Yes' && (
                                                    <input
                                                        type="time"
                                                        value={timingData.time}
                                                        onChange={e => handleTimingChange(period, condition, 'time', e.target.value)}
                                                        className="p-2 border border-gray-300 rounded-lg flex-grow"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                 </div>

                 <div className="text-center mt-10">
                    <StyledButton onClick={() => setPage('medinfo')}>
                        Go to Dashboard
                    </StyledButton>
                 </div>
            </div>
        </PageWrapper>
    );
}


function Medinfo({ setPage }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const { selectedDate, selectedTime } = useContext(TimeContext);
    const { profileData } = useContext(UserContext);
    const { medicationTimings } = useContext(MedicationContext);
    const runningTime = useRunningClock(selectedTime);
    const [nextMedication, setNextMedication] = useState(null);

    useEffect(() => {
        // Function to find the next medication
        const findNextMedication = () => {
            const now = runningTime;

            // 1. Get all active medication slots
            const activeSlots = Object.entries(medicationTimings)
                .filter(([, details]) => details.active === 'Yes')
                .map(([key, details]) => {
                    const period = key.includes('morning') ? 'Morning' : key.includes('afternoon') ? 'Afternoon' : 'Night';
                    const condition = key.includes('Before') ? 'Before Food' : 'After Food';
                    const time = dayjs(`${selectedDate.format('YYYY-MM-DD')}T${details.time}`);
                    return { time, period, condition, key };
                });

            if (activeSlots.length === 0) {
                setNextMedication(null); // No meds scheduled
                return;
            }

            // 2. Find slots after the current time today
            const upcomingToday = activeSlots.filter(slot => slot.time.isAfter(now));

            // 3. Determine the next medication
            if (upcomingToday.length > 0) {
                // If there are upcoming meds today, find the earliest one
                upcomingToday.sort((a, b) => a.time - b.time);
                setNextMedication(upcomingToday[0]);
            } else {
                // If no more meds today, find the earliest one for tomorrow
                activeSlots.sort((a, b) => a.time - b.time);
                const nextDaySlot = activeSlots[0];
                setNextMedication({
                    ...nextDaySlot,
                    time: nextDaySlot.time.add(1, 'day'), // Set it for tomorrow
                });
            }
        };

        findNextMedication();
        // Recalculate every second along with the running clock
        const intervalId = setInterval(findNextMedication, 1000); 

        return () => clearInterval(intervalId); // Cleanup
    }, [runningTime, medicationTimings, selectedDate]);
    
    const Sidebar = () => (
         <aside className={`bg-gray-800 text-white transform top-0 left-0 h-screen fixed transition-all duration-300 ease-in-out z-30 ${isSidebarOpen ? 'w-64 translate-x-0' : 'w-0 -translate-x-full'}`}>
             <div className="p-4">
                 <div className="flex items-center mb-10">
                     <img src={profileData.profilePhoto || 'https://placehold.co/48x48/E0E7FF/4F46E5?text=U'} alt="Profile" className="w-12 h-12 rounded-full object-cover" />
                     <span className="ml-3 font-semibold">{profileData.name || "User"}</span>
                 </div>
                 <nav className="space-y-2">
                     <button onClick={() => setPage('user')} className="w-full text-left flex items-center p-3 rounded-lg hover:bg-gray-700 transition group"><UserIcon /> Profile</button>
                     <button onClick={() => setPage('timedate')} className="w-full text-left flex items-center p-3 rounded-lg hover:bg-gray-700 transition group"><AlarmIcon /> Set Alarm</button>
                     <button className="w-full text-left flex items-center p-3 rounded-lg hover:bg-gray-700 transition group"><BookIcon /> User Manual</button>
                     <button className="w-full text-left flex items-center p-3 rounded-lg hover:bg-gray-700 transition group"><SettingsIcon /> Settings</button>
                 </nav>
             </div>
        </aside>
    );
    
    return (
        <div className="bg-slate-100">
            <Sidebar />
            <main className={`flex-grow transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
                <div className="min-h-screen p-6">
                    <header className="flex justify-between items-center mb-8">
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 rounded-md hover:bg-gray-200 z-40 relative">{isSidebarOpen ? <CloseIcon /> : <MenuIcon />}</button>
                        <h1 className="text-4xl font-bold text-gray-800">Dispenser</h1>
                         <div className="flex items-center bg-white p-3 rounded-xl shadow-md space-x-4">
                            <span className="font-bold text-cyan-600">{selectedDate.format('ddd')}</span>
                            <span className="font-bold text-gray-700">{selectedDate.format('DD MMM')}</span>
                            <span className="font-bold text-gray-500">{selectedDate.format('YYYY')}</span>
                        </div>
                    </header>
                    
                    <div className="text-center">
                        <h2 className="text-2xl text-gray-600 mb-4">Current Time</h2>
                        <div className="text-7xl font-mono font-bold text-cyan-600 mb-12 bg-white inline-block px-8 py-4 rounded-2xl shadow-lg">{runningTime.format('HH:mm:ss')}</div>

                        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm mx-auto">
                            <h3 className="text-2xl font-bold text-gray-700 mb-4">Next Medicine At</h3>
                            {nextMedication ? (
                                <>
                                    <div className="text-5xl font-bold text-red-500 bg-red-100 p-4 rounded-lg">
                                        {nextMedication.time.format('hh:mm A')}
                                    </div>
                                    <p className="mt-2 text-gray-500 font-semibold">{`${nextMedication.period} - ${nextMedication.condition}`}</p>
                                    <p className="mt-1 text-xs text-gray-400">on {nextMedication.time.format('MMM DD, YYYY')}</p>
                                </>
                            ) : (
                                <div className="text-xl font-bold text-gray-500 bg-gray-100 p-4 rounded-lg">
                                    No medicine scheduled
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}


// --- Main App Component ---
export default function App() {
  const [page, setPage] = useState('home'); // home, timedate, user, medtime, medinfo

  const renderPage = () => {
    switch (page) {
      case 'timedate': return <TimeDate setPage={setPage} />;
      case 'user': return <User setPage={setPage} />;
      case 'medtime': return <Medtime setPage={setPage} />;
      case 'medinfo': return <Medinfo setPage={setPage} />;
      case 'home': default: return <Home setPage={setPage} />;
    }
  };

  return (
    <UserProvider>
      <TimeProvider>
        <MedicationProvider>
            <style>{`
                @keyframes fade-in-down { 0% { opacity: 0; transform: translateY(-20px); } 100% { opacity: 1; transform: translateY(0); } }
                @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
                .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
                .animate-fade-in-up { animation: fade-in-up 0.8s ease-out 0.3s forwards; }
            `}</style>
            {renderPage()}
        </MedicationProvider>
      </TimeProvider>
    </UserProvider>
  );
}
