import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MyWaitlist = ({ myWaitlist }) => {


    

    console.log(myWaitlist)

    const displayedMyWaitLists = myWaitlist.map((singleWaitlist) => 
    (<Card>
    <Card.Header>{singleWaitlist.waitlist_id}</Card.Header>
    <Card.Body>
      <Card.Title>{singleWaitlist.show_name}</Card.Title>
      <Card.Text>
       Current Waittime: {singleWaitlist.wait_time/60} minutes
      </Card.Text>
      <Button variant="primary">add me to the waitlist</Button>
    </Card.Body>
    </Card>
    )
  );
    return(
        <>
            <h1>My Waitlists</h1>
            <div>
                {displayedMyWaitLists}
            </div>
        </>
    )
}
export default MyWaitlist