import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Timer from './Timer'

const MyWaitlist = ({ myWaitlist }) => {
  const [waitTime, setWaitTime] = useState(0)
const [lineCount, setLineCount] = useState([])

  function handleWaitTimeRefresh() {
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

  useEffect(() => {
    
    handleRefresh()      
}, []) 


function handleRefresh() {
  fetch('/place_in_line', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((r) => r.json())
    .then((obj) => {
      let tempPlaceInLine = []
      for (const [key, value] of Object.entries(obj)) {
        tempPlaceInLine[key] = value
      }
      setLineCount(tempPlaceInLine)
      console.log(lineCount, tempPlaceInLine)
    })

}
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
        
     (<Card 
        className={lineCount.length === 0 ? "card" : (lineCount[singleWaitlist.id]["est_wait_time"] === 5 ? "card2" : "card")}     
     >
    <Card.Header>{singleWaitlist.waitlist_id}</Card.Header>
    <Card.Body>
      <Card.Title className="card-name">{singleWaitlist.show_name}</Card.Title>
      <Card.Text>
       Current Waittime: 
       { lineCount.length === 0 ? <></> : ` approximatley ${lineCount[singleWaitlist.id]["est_wait_time"]} minutes`} 
      </Card.Text>
      <Card.Text>
        {console.log(singleWaitlist.id)}
      Number of People ahead of You: {lineCount.length === 0 ? 'Loading...' : lineCount[singleWaitlist.id]["place_in_line"] - 1 }
       {/* Number of People in front of you:  */}
       {/* {lineCount[singleWaitlist.theatre_id]["place_in_line"]} */}
       
      </Card.Text>
      {/* <Button
      variant="primary"
      key={singleWaitlist.id}
      onClick={()=> handleDeleteFromWaitlist(singleWaitlist)}>{"delete"}
      </Button> */}
    </Card.Body>
    </Card>
    )
  );
    return(
        <div className="main-div">
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
            <h1 className="page-title">My Waitlists</h1>
            {/* <Timer handleRefresh={handleRefresh}/> */}
            {/* <button onClick={handleRefresh}>click to refresh</button> */}
            <div className="theatre-cards">
                {displayedMyWaitLists}
            </div>
          </div>
        </div>
    )
}
export default MyWaitlist