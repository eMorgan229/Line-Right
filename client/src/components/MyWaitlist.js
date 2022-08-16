import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Timer from './Timer'

const MyWaitlist = ({ myWaitlist }) => {


  function handleDeleteFromWaitlist(singleWaitlist) {

    console.log(singleWaitlist.id)
    fetch(`/remove-from-line/${singleWaitlist.id}`, {
      method: "PATCH"
      // headers: {
      //   "Content-Type": "application/json",
      // },
      // body: JSON.stringify({

      // }),
    })

  }

  
    console.log(myWaitlist)

    const displayedMyWaitLists = myWaitlist.map((singleWaitlist) =>
    (<Card>
    <Card.Header>{singleWaitlist.waitlist_id}</Card.Header>
    <Card.Body>
      <Card.Title>{singleWaitlist.show_name}</Card.Title>
      <Card.Text>
       Current Waittime: {singleWaitlist.wait_time/60} minutes
      </Card.Text>
      <Button
      variant="primary"
      key={singleWaitlist.id}
      onClick={()=> handleDeleteFromWaitlist(singleWaitlist)}>{"delete"}
      </Button>
    </Card.Body>
    </Card>
    )
  );
    return(
        <>
            <h1>My Waitlists</h1>
            <div>
              <Timer myWaitlist={myWaitlist}/>
            </div>
            <div>
                {displayedMyWaitLists}
            </div>
        </>
    )
}
export default MyWaitlist