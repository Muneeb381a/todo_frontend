import React from 'react'
import DailyRoutine from './components/DailyRoutine'
import DailyRoutineForm from './components/DailyRoutineForm'
import Routine from './components/Routine'

const App = () => {
  return (
    <div className='bg-gray-900 w-full h-full'>
      <DailyRoutine/>
      <DailyRoutineForm/>
      <Routine />
    </div>
  )
}

export default App