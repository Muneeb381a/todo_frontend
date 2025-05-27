import React from 'react'
import { useGetAllRoutinesQuery } from '../app/service/apiData'

const Routine = () => {
    const res = useGetAllRoutinesQuery()
    console.log(res);
    
  return (
    <div>
        {res?.data.data.map((d) => (
            <h1 key={d.id}>{d.title}</h1>
        ))}
    </div>
  )
}

export default Routine