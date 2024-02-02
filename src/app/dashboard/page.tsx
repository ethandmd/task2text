'use client'

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  
  // Calendar readme:
  // https://github.com/wojtekmaj/react-calendar#readme
  return (
    <div>
      <h1 className='text-center'>Calendar</h1>
      <div className='calendar-container'>
        <Calendar 
		  onChange={setDate}
		  value={date}
		/>
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>
  );
}
