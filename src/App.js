import React from 'react';
import './App.css';
import Form from './components/Form';
import Goal from './components/Goal';

function App() {
  const [formData, setFormData] = React.useState(
    {
        firstName: "",
        age: "",
        weight: "",
        height: "",
        gender: ""
    })
    const [goalMessage, setGoalMessage] = React.useState(false)
    
  return (
    
    <div>
    <header>
          <h1>My Healthy App </h1>
      </header>
       <Form 
       formData={formData}
       setFormData={setFormData}
       goalMessage={goalMessage}
       setGoalMessage={setGoalMessage}
       />
       <Goal 
          name={formData.firstName}
          age={formData.age}
          weight={formData.weight}
          height={formData.height}
          gender={formData.gender}
          activity={formData.activity}
          goalMessage={goalMessage}
       />
     
       
       </div>
  )
  }

export default App;




