import React from "react";

function Step({ step, formData, handleInputChange, nextStep, prevStep, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>

      {step === 1 && (
        <>
          <label>First Name:</label>
          <input
            id="first_name"
            value={formData.first_name}
            onChange={handleInputChange}
            required
          />
          <br />

          <label>Last Name:</label>
          <input
            id="last_name"
            value={formData.last_name}
            onChange={handleInputChange}
            required
          />
        </>
      )}
      {step === 2 && (
        <>
          <label>Car Model:</label>
          <input
            id="model"
            value={formData.model}
            onChange={handleInputChange}
            required
          />
          <br />

          <label>Car Price:</label>
          <input
            id="car_price"
            type="number"
            value={formData.car_price}
            onChange={handleInputChange}
            required
          />
        </>
      )}
      {step === 3 && (
        <>
          <label>Card Info:</label>
          <input
            id="card_info"
            value={formData.card_info}
            onChange={handleInputChange}
            required
          />
          <br />

          <label>Expiry Date:</label>
          <input
            id="expiry_date"
            type="month"
            value={formData.expiry_date}
            onChange={handleInputChange}
            required
          />
        </>
      )}

      <div style={{ marginTop: "20px" }}>
        {step > 1 && <button type="button" onClick={prevStep}>Previous</button>}
        {step < 3 && <button type="button" onClick={nextStep}>Next</button>}
        {step === 3 && <button type="submit">Submit</button>}
      </div>
    </form>
  );
}

export default Step;
