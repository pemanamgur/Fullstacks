import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'; 

function App() {
  const [jokes , setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)    //axios ko faida we dont need to convert into json ()
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])
  // console.log(jokes)

  return (
    <>
     <h1>Full Stack</h1>
     <p>{jokes.length}</p>
     {jokes.map((joke)=>(
      <div key={joke.id}>
          <h1>{joke.title}</h1>
          <p>{joke.content}</p>
      </div>
     ))}
    </>
  )
}

export default App
