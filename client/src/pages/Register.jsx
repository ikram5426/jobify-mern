import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage.js";
import { useAppContext } from "../context/appContext";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  // showAlert:false
};

const Register = () => {
  const navigate = useNavigate();
  const { user, showAlert, isLoading, displayAlert, registerUser } =
    useAppContext();

  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, name, password, isMember } = values;
    if (!name || !email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }

    const currentUser = { name, email, password };

    if (isMember) {
      console.log("Already member");
    } else {
      registerUser(currentUser);
    }
  };

  const toggleMember = (e) => {
    setValues({ ...values, isMember: !values.isMember });
  };

  useEffect(() => {
    setTimeout(() => {
      if(user){
        navigate('/')
      }
    }, 2000);
  }, [user,navigate]);

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"} </h3>
        {showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            name='name'
            type='text'
            value={values.name}
            handleChange={handleChange}
          />
        )}

        <FormRow
          name='email'
          type='email'
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          name='password'
          type='password'
          value={values.password}
          handleChange={handleChange}
        />
        <button type='submit' className='btn btn-block' disabled={isLoading}>
          Submit
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Member already"}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? "Register" : "Log"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
