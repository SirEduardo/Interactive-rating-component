/*eslint-disable react/prop-types*/
import React, { useState } from 'react'
import './App.css'



function App() {
  
  const [selectedRating,setSelectedRating] = useState(false)
  const [submit,setSubmit] = useState (false)
   
  const submitRating = () =>{
    setSubmit(true);
  };

  const RatingButton = ({ rating }) => {
  return (
    <button
    className = {selectedRating === rating ? 'selected' : ""}
    onClick = {() => setSelectedRating(rating)}
    >
    {rating}
    </button>
  );
   
  };
  
   return (
    
   <div className='container' >
    {!submit ? (
      <React.Fragment>
    <div className='back-img'>
      <div className='img'>
        <img src='icon-star.svg' alt='Icon Star'></img>
      </div>
    </div>
    <span>
      <h1>How did we do?</h1>
      <p> Please let us know how we did with your support 
        request. All feedback is appreciated to help us improve our offering! </p>
    </span>
    <div className="buttons" >
      {[1,2,3,4,5].map((rating) =>(
       <RatingButton key={rating} rating={rating}>
       </RatingButton>
      ))}
    </div>
    <button className='submit' disabled= {!selectedRating} onClick={submitRating}>SUBMIT</button>
    </React.Fragment>
  
    ) : (
    <div className='thank-you'>
      <img src='illustration-thank-you.svg' alt='Illustration Than You'></img>
      <p className='rating'>You selected {selectedRating} out of 5</p>
      <span>
      <h1>Thank you!</h1>
      <p>We appreciate you taking the time to give a rating. If you ever need
      more support, don’t hesitate to get in touch!</p>
    </span>
    </div>
    )}
    </div>
  
  ) 
}

export default App
