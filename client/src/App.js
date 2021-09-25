import {useState, useEffect }from 'react';
import axios from "axios"

const { workers, useEffect} = useState([]) 
useEffect(() => {
axios.get("/api/workers;")
})
.catch(err => console.log(err) ) 
}, [])

export default App;
