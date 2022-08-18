import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const AllWaitLists = ({ updateMyWaitlist, user, theatres}) => {

  const[toggleButton, setToggleButton] = useState(true)


  console.log(theatres)

let tempLineCount = []
theatres.forEach((t) => {
  tempLineCount[t.id] = 0
})
console.log(tempLineCount)
const[lineCount, setLineCount] = useState({}) //this is an object, the key is theatre_id and the value is an integer that is the current number of people in line

console.log(lineCount)


function handleUpdateButton(index) {
  fetch('/my-waitlists', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((r) => r.json())
    .then((obj) => {
      console.log(obj)
      // (obj.id === theatres.id) ? setToggleButton(!toggleButton) : toggleButton
    })

}



  

  function handleAddToWaitlist (t) {
    const updateWaitlistObj = {
      theatre_id: t.id,
      user_id: user.id,
    };
    
    
    handleUpdateButton()


    fetch('/my-waitlists', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateWaitlistObj),
    })
      .then((r) => r.json())
      .then((t) => updateMyWaitlist(t))
  }
  
  console.log()

  function handleLineCountRefresh() {
    fetch('/waitlists', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((obj) => {
        let tempLineCount = []
        for (const [key, value] of Object.entries(obj)) {
          tempLineCount[key] = value
        }
        setLineCount(tempLineCount)
        console.log(lineCount, tempLineCount)
      })
  }
// setInterval(() => {handleLineCountRefresh()}, 15000);
const displayedTheatres = theatres.map((t, index) => 
    (<Card>
    <Card.Header>{t.theatre_name}</Card.Header>
    <Card.Body>
      <Card.Title>{t.show_name}</Card.Title>
      <Card.Text>
        Current Number of People in Line: {lineCount[t.id]? lineCount[t.id] : 0}
      </Card.Text>
      <Card.Text>
       Current Waittime: {t.wait_time/60} minutes
      </Card.Text>
      <Button 
      variant="primary"
      key={index} 
      onClick={()=> handleAddToWaitlist(t)}>{"add me to the waitlist"}
      </Button>
    </Card.Body>
    </Card>
    )
  );
    return (
        <>
        <h1>Theatres</h1>
        <button onClick={()=> {handleLineCountRefresh()}}>click</button>
       <div>
        {displayedTheatres}
       </div>

    
        </>
    )
}
export default AllWaitLists