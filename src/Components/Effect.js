import React, {useState, useEffect} from 'react'

function Effect() {

    let [response, setResponse] = useState("state1");
    console.log('shashidhar');
    useEffect(()=>{
        console.log('state changed');
    },[response])
    
  return (
    <div>
        
        <button onClick={()=>setResponse("state1")}>State1</button>
        <button onClick={()=> setResponse('state2')}>State2</button>
        <button onClick={()=> setResponse('state3')}>State3</button>
        <h1>{response}</h1>
    </div>
  )
}

export default Effect