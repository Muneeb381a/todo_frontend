import React from 'react'
import DailyRoutine from './components/DailyRoutine'
import DailyRoutineForm from './components/DailyRoutineForm'

const App = () => {
  return (
    <div className='bg-gray-900 w-full h-full'>
      <DailyRoutine/>
      <DailyRoutineForm/>
    </div>
  )
}

export default App