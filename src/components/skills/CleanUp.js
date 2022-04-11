import React, {useState, useEffect} from 'react'

function CleanUp() {
    
    const [pos, setPos] = useState([0, 0]);

    const logMousePosition = (e) => {
      console.log(e.clientX + "X", e.clientY + "Y");
  
      let arrPos = [];
      arrPos[0] = e.clientX;
      arrPos[1] = e.clientY;
  
      setPos(arrPos);
    };
  
    useEffect(() => {
      console.log("event on");
      window.addEventListener("mousemove", logMousePosition);
  
      // clean up function
      return () => {
        console.log("cleaning");
        window.removeEventListener("mousemove", logMousePosition);
      };
    }, []);
    
    return (
      <>
        <h2>Hello from CleanUp</h2>
      </>
    );
}

export default CleanUp