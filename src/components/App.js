
import React, {useState} from "react";
import './../styles/App.css';
import Step from "./Step.js"

const App = () => {
  const [currStep, setCurrStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    model: "",
    car_price: "",
    card_info: "",
    expiry_date: ""
  });

  const handleInputChange = (e)=>{
    const {id, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]:value,
    }))
  }

  const nextStep = ()=>{
    setCurrStep((prev) => prev+1);
  }
  const prevStep = ()=>{
    setCurrStep((prev) => prev-1);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted ✅", formData);
  };

  return (
    <div>
        <main>
        <h1>Multi-Step Form</h1>
        <Step
          step={currStep}
          formData={formData}
          handleInputChange={handleInputChange}
          nextStep={nextStep}
          prevStep={prevStep}
          handleSubmit={handleSubmit}
      />
    </main>
    </div>
  )
}

export default App
