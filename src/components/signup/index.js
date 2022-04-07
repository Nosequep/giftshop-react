import React from 'react'
import { useState } from 'react';

const Signup = () => {
  const initialValues = {email: "", password: "", confirmPassword: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!values.email){
      errors.email = "Email is required";
    }else if(!values.email.match(emailRegex)){
      errors.email = "This email is invalid";
    }

    if(!values.password){
      errors.password = "Password is required";
    }else if(values.password.length < 4){
      errors.password = "Password cannot have less than 4 characters"
    }

    if(!values.confirmPassword){
      errors.confirmPassword = "Password confirmation is required";
    }

    if(values.password !== values.confirmPassword){
      errors.password = "Password and password confirmation do not match";
    }

    return errors;
  }

  return (
    <div className="border bg-light rounded px-4 col-sm-12 col-md-7 col-xl-6 mx-auto text-left">
      <h2>Sign up</h2>
      {Object.keys(formErrors).length === 0 && isSubmit ?
        (<div className="alert alert-success text-justify">
          <p>User registered successfully</p>
        </div>) 
        :
        ""
      }
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label >Email</label>
          <input type="text" className="form-control" name="email"  value={formValues.email} onChange={handleChange} />
          <small className="text-danger" >{formErrors.email}</small>
        </div>
        <div className="form-group">
          <label >Password</label>
          <input type="password" className="form-control" name="password" value={formValues.password} onChange={handleChange}/>
          <small className="text-danger">{formErrors.password}</small>
        </div>
        <div className="form-group">
          <label >Confirm Password</label>
          <input type="password"className="form-control" name="confirmPassword" value={formValues.confirmPasword} onChange={handleChange}/>
          <small className="text-danger">{formErrors.confirmPassword}</small>
        </div>
        <div className="form-group">
          <input type="submit" className="btn btn-success" value="Register"/>
          <a className="link-primary ml-2" ><small>Do you already have an account?</small></a>
        </div>
      </form>
    </div>
  );
}

export default Signup;