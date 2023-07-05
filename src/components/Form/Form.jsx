import React from "react";
import './Form.css'

const Form = ({setFilterCity}) => {

  const handleSubmit = (event)=> {
    event.preventDefault();

    setFilterCity(event.target.filterCity.value);
  }

  return (
    <section className="section-container">
        <form className="form-container" onSubmit={handleSubmit} >
          <input type="text" name="city" placeholder="Madrid"/>
          <button type="submit">Search</button>
        </form>
    </section>
  );
};

export default Form