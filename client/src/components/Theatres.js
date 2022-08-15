import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const AllWaitLists = ({ updateMyWaitlist, user, theatres }) => {




const displayedTheatres = theatres.map((t) => 
    (<Card>
    <Card.Header>{t.theatre_name}</Card.Header>
    <Card.Body>
      <Card.Title>{t.show_name}</Card.Title>
      <Card.Text>
        Current Number of People in Line: this value is hardcoded to 1
      </Card.Text>
      <Card.Text>
       Current Waittime: {t.wait_time/60} minutes
      </Card.Text>
      <Button variant="primary" onClick={()=> handleAddToWaitlist(t)}>add me to the waitlist</Button>
    </Card.Body>
    </Card>
    )
  );

  function handleAddToWaitlist (t) {
    const updateWaitlistObj = {
      theatre_id: t.id,
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
      .then((t) => updateMyWaitlist(t))
  }
  
  console.log()
    
    return (
        <>
        <h1>All Waitlists</h1>
       <div>
        {displayedTheatres}
       </div>

    
        </>
    )
}
export default AllWaitLists