import React, { useState } from 'react'
import './Workspace.css'
import logo from '../../Asserts/Images/logo.svg'
import workspace from '../../Asserts/Images/workspace.svg'
import axios from 'axios'

function Workspace() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState();
  const [emails, setEmails] = useState([]);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && email.trim() !== '') {
      // Add the email to the list when Enter is pressed
      setEmails([...emails, email]);
      setEmail(''); // Clear the input field
    }
  };

  const removeEmail = (index) => {
    // Remove an email from the list
    const updatedEmails = emails.filter((_, i) => i !== index);
    setEmails(updatedEmails);
  };

  const conpanydata = {
    name,
    emails,
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/login", handleSubmit).then((res) => {
      alert('success')
    }).catch((err) => {
      alert("error" + err)
    })

    setEmails([]);
    setName("")
  };

  return (
    <>
      <div className="workmain">

        <div className="workleft">

          <img className='worklogo' src={logo} alt="" />

          <div><img src={workspace} alt="" /></div>

        </div>

        <div className="workright">

          <div className='formcontain'>
            <div>Create your Workspace!</div>
            <div>Enter Details About your organization</div>

            <form >
              <label>Company Name*</label><br />
              <input type="text" placeholder='Enter Name'
                value={name}
                onChange={(e) => { setName(e.target.value) }}
              /><br />


              <label>Members Email*</label><br />
              <input
                type="text"
                placeholder="Enter email and press Enter"
                maxLength="30"
                value={email}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />

            </form>
            <div className='emails'>
              {emails.map((email, index) => (
                <div id='emailsdiv' key={index}>
                  {email}
                
                  <svg onClick={() => removeEmail(index)} xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                    <path d="M10.1655 1.25739L5.92282 5.50004M5.92282 5.50004L1.68018 9.74268M5.92282 5.50004L1.68014 1.25736M5.92282 5.50004L10.1654 9.74264" stroke="#2BAC76" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </div>
              ))}
            </div>

            <div><button disabled={!name || emails.length === 0} onClick={handleSubmit}>Let’s Go</button></div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Workspace;