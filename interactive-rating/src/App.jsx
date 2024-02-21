
import { useState } from 'react'
import './App.css'



function App() {
  
  const [active,setActive] = useState(false)
  const [submit,setSubmit] = useState (false)
  const [rating,setRating] = useState(null)
  
  const handleClick = (number) =>{
    setActive(true);
    setRating(number)
  };
   
  const handleSubmitclick = () => {
    const thankYou = document.querySelector(".thank-you");
    const container = document.querySelector(".container");
    
    if(active){
    container.style.display = "none"
    thankYou.style.display = "flex"
    setSubmit(!submit)
  }
   
  } 
  
   return (
    
  <main> 
   <div className='container'>
  
    <div className='back-img'>
      <div className='img'>
        <img src='icon-star.svg'></img>
      </div>
    </div>
    <span>
      <h1>How did we do?</h1>
      <p> Please let us know how we did with your support 
        request. All feedback is appreciated to help us improve our offering! </p>
    </span>
    <div className="buttons" >
      {[1,2,3,4,5].map((number) =>(
        <button key={number} onClick = {() => handleClick(number)}>
        {number}
        </button>
      ))}
    </div>
    <button className='submit' onClick={handleSubmitclick}>SUBMIT</button>
    </div>
  
    
    <div className='thank-you' style={{display:"none"}} >
      <img src='illustration-thank-you.svg'></img>
      <p className='rating'>You selected {rating} out of 5</p>
      <span>
      <h1>Thank you!</h1>
      <p>We appreciate you taking the time to give a rating. If you ever need
      more support, don’t hesitate to get in touch!</p>
    </span>
    </div>
     
  </main>
  ) 
}

export default App
