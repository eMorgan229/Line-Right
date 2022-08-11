import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const AllWaitLists = () => {

const[waitlist, setWaitlist] = useState([]);

useEffect(() => {
    fetch('/waitlists')
        .then((r) => r.json())
        .then((waitlist) => {setWaitlist(waitlist)})
}, [])

 console.log(waitlist)

const displayedWaitLists = waitlist.map((waitlist) => 
    (<Card>
    <Card.Header>{waitlist.theatre_name}</Card.Header>
    <Card.Body>
      <Card.Title>{waitlist.show_name}</Card.Title>
      <Card.Text>
        Current Number of People in Line: {waitlist.line_count}
      </Card.Text>
      <Card.Text>
       Current Waittime: {waitlist.wait_time/60} minutes
      </Card.Text>
      <Button variant="primary">add me to the waitlist</Button>
    </Card.Body>
    </Card>
    )
  );
    
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