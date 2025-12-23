import React, { useEffect, useState } from 'react'

const App = () => {

  const [user, setUser] = useState([]);

  useEffect(()=>{
    const fetchData = async ()=>{
       const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const result = await response.json()
      // console.log(result)
      setUser(result);
    }

    fetchData()

  }, [])

  
  

  return (
    <div>App</div>
  )
}

export default App