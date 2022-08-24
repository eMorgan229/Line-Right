import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const AllWaitLists = ({ user, theatres, myWaitlist, updateWaitlists}) => {
const [waitTime, setWaitTime] = useState(0)

  console.log(myWaitlist)

  function theatreInWaitlist(theatreId) {
    console.log(myWaitlist)
    for(const index in myWaitlist) {
      console.log(myWaitlist[index].id)
      if (myWaitlist[index].id === theatreId)
        return true
    }
    return false
  }

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
      .then((t) => updateWaitlists(t))
  }
  
  console.log()

  useEffect(() => {
    
    handleLineCountRefresh()  
    handleWaitTimeRefresh()
    
}, []) 

  function handleLineCountRefresh() {
    fetch('/line_count', {
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

  function handleWaitTimeRefresh() {
    fetch('/full_waitime', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((obj) => {
        setWaitTime(obj)
         
        
        // setWaitTime(tempWaitTime)
        // console.log(tempWaitTime)
      })

  }
  console.log(waitTime)
 setInterval(() => {handleLineCountRefresh()}, 15000);
 setInterval(() => {handleWaitTimeRefresh()}, 15000);

let displayedTheatres = theatres.map((t, index) => 

   {
    console.log(waitTime[`${t.id}`])
      let addToLineButton;
      if (theatreInWaitlist(t.id)){
        addToLineButton = <div className="added">You've been added!</div>
      }
      else {
        addToLineButton = 
        <Button 
        variant="primary"
        key={index} 
        onClick={()=> handleAddToWaitlist(t)}>{"add me to the waitlist"}
        </Button>
      }
      return (<Card className="card">
    <Card.Header className="card-name">{t.theatre_name}</Card.Header>
    <Card.Body>
      <Card.Title className="card-name">{t.show_name}</Card.Title>
      <Card.Text>
        Current Number of People in Line: {lineCount[t.id]? lineCount[t.id] : 0}
      </Card.Text>
      <Card.Text>
       Current Waittime:  {waitTime[`${t.id}`]? `approximatley ${waitTime[`${t.id}`]["full_est_wait_time"]} minutes` : <>approximately 0 minutes</> }

      </Card.Text>
        {addToLineButton}
    </Card.Body>
    </Card>
    )}
  );
    return (
        <>
      <div className="area" >
                <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                </ul>
        <h1 className="page-title">Theatres</h1>
        <button onClick={()=> {handleLineCountRefresh()}}>click</button>

       <div className="theatre-cards">
        {displayedTheatres}
       </div>

    </div>
        </>
    )
}
export default AllWaitLists