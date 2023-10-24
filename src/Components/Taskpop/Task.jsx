// import React from 'react'
// import './Task.css'

// function Task() {
//   return (
// <>
// <div className="taskmain">
//   <div className="taskall">
// <div>Start Task</div>
// <div>1/2</div>

// <label >Project Title</label>
// <input type="text" placeholder='Project Title'/>
// <div>  
//     <div>Description</div>
//     <div>Don’t Worry It’s Optional</div>
// </div>
// <textarea name="" id="" cols="30" rows="5" placeholder='Add Description'></textarea>
// <button>Next</button>
//   </div>
// </div>

// </>
//   )
// }

// export default Task;



import React, { useState } from 'react';
import './Task.css';
import user from '../../Asserts/Images/cardimg.svg'

function Task() {
  const [section, setSection] = useState(1);
  const [projectTitle, setProjectTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleNext = () => {
    if (section < 2) {
      setSection(section + 1);
    }
  };

  const handlePrevious = () => {
    if (section > 1) {
      setSection(section - 1);
    }
  };

  return (
    <>
      <div className="taskmain">
          {section === 1 && (
            <>
             <div className="taskall">
          <div>Start Task</div>
          <div>{section}/2</div>
         <label >Project Title</label>
         <input
                type="text"
                placeholder="Project Title"
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
              />
         <div>  
             <div>Description</div>
             <div>Don’t Worry It’s Optional</div>
         </div>
         <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="Add Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <button onClick={handleNext}>Next</button>
              </div>
              </>
          )}

          {section === 2 && (
             <>
             <div className="taskall">
          <div>Assign Task</div>
          <div>{section}/2</div>
        
        <div>
            <input type="serch" placeholder='Search here' />
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path d="M15.25 15.75L18.25 18.75" stroke="#252525" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.5 16.75C14.1234 16.75 16.25 14.6234 16.25 12C16.25 9.37665 14.1234 7.25 11.5 7.25C8.87665 7.25 6.75 9.37665 6.75 12C6.75 14.6234 8.87665 16.75 11.5 16.75Z" stroke="#252525" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>

<div className="usershow">

<div className="userdiv">
<input type="checkbox" /> <img src={user} alt="" /> <div id='username'>Daniyal Khan (You) <br /> <span>UI UX Designer</span></div>
</div>

<div className="userdiv">
<input type="checkbox" /> <img src={user} alt="" /> <div id='username'>Daniyal Khan (You) <br /> <span>UI UX Designer</span></div>
</div>

<div className="userdiv">
<input type="checkbox" /> <img src={user} alt="" /> <div id='username'>Daniyal Khan (You) <br /> <span>UI UX Designer</span></div>
</div>

<div className="userdiv">
<input type="checkbox" /> <img src={user} alt="" /> <div id='username'>Daniyal Khan (You) <br /> <span>UI UX Designer</span></div>
</div>
</div>

              <button onClick={handlePrevious}>Previous</button>
              <button>Assign Task</button>
            </div>
            </>
         ) }
        </div>
    </>
  );
}

export default Task;
