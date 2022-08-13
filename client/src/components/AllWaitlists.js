import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const AllWaitLists = ({ updateMyWaitlist, user }) => {

const[waitlist, setWaitlist] = useState([]);

console.log(waitlist)

useEffect(() => {
    fetch('/waitlists')
        .then((r) => r.json())
        .then((waitlist) => {setWaitlist(waitlist)})
}, [])

 console.log(waitlist)

const displayedWaitLists = waitlist.map((singleWaitlist) => 
    (<Card>
    <Card.Header>{singleWaitlist.theatre_name}</Card.Header>
    <Card.Body>
      <Card.Title>{singleWaitlist.show_name}</Card.Title>
      <Card.Text>
        Current Number of People in Line: {singleWaitlist.line_count}
      </Card.Text>
      <Card.Text>
       Current Waittime: {singleWaitlist.wait_time/60} minutes
      </Card.Text>
      <Button variant="primary" onClick={()=> handleAddToWaitList(singleWaitlist)}>add me to the waitlist</Button>
    </Card.Body>
    </Card>
    )
  );

  function handleAddToWaitList (newWaitlist) {
    const updateWaitlistObj = {
      waitlist_id: newWaitlist.id,
      user_id: user.id, //session[:user_id] hard coded to "Em" but need to update to reflect current session
      //user created_at to get the start time instead of time_in
    };

    fetch('/my-waitlists', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateWaitlistObj),
    })
      .then((r) => r.json())
      .then(() => updateMyWaitlist())
  }
  
    
    return (
        <>
        <h1>All Waitlists</h1>
       <div>
        {displayedWaitLists}
       </div>

    
        </>
    )
}
export default AllWaitLists