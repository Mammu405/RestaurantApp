import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
function Restreview({rev}) {
    const [open, setOpen] = useState(false);
    console.log(rev);
  return (
    <div>
         <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Review
      </Button>
      <Collapse in={open}>
      <div id="example-collapse-text">
        {
            rev?.map((item)=>(
                <div>
                    <h1>{item.name}</h1>
                    <h3>{item.date}</h3>
                    <h3>{item.rating}</h3>
                </div>
            ))
        }
      </div>



        {/* <div id="example-collapse-text">
            <div>
<h6>Name : {rev[0]?.name}</h6>
          <h6>Rating : {rev[0]?.rating}</h6>
          <h6> {rev[0]?.comments}</h6>
<hr />
            </div>
            <div>
<h6>Name : {rev[1]?.name}</h6>
          <h6>Rating : {rev[1]?.rating}</h6>
          <h6> {rev[1]?.comments}</h6>

            </div>
            <hr />
            <div>
<h6>Name : {rev[2]?.name}</h6>
          <h6>Rating : {rev[2]?.rating}</h6>
          <h6> {rev[2]?.comments}</h6>

            </div>
        </div> */}
      </Collapse>
    </div>
  )
}

export default Restreview