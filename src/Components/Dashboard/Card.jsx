import React from 'react'
import './Card.css';
import cardimg from '../../Asserts/Images/cardgroup.svg'

export default function Card() {

  return (
    <>
    <div className='card' >
     <div className='had'>
<div className='ch2'>
UI UX Project
</div>
<div className='ch3'>
...
</div>

     </div>

<div className='wire'>Wireframing Mobile App</div>
<div className='team'>Team</div>
<div className='images'>
<img src={cardimg}/>

</div>
<div className='dis'>
<div className='pl1'>Completed</div>
<div className='pl2'>High Priority</div>
</div>

<div className='dis2'>
<div className='pla'>5 Days Ago</div>
<div className='ple'><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 22 22" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.71823 2.63212C10.1317 2.09338 10.6428 1.64018 11.3656 1.64018C12.0883 1.64018 12.5994 2.09338 13.0129 2.63212C13.4192 3.16148 13.8501 3.93266 14.3767 4.87517L14.6877 5.43193C15.0283 6.04139 15.1154 6.17086 15.2246 6.25361C15.3298 6.33327 15.4655 6.3777 16.1278 6.52719L16.735 6.66428C17.7549 6.89446 18.5951 7.08409 19.207 7.32468C19.8422 7.57441 20.398 7.94249 20.612 8.62902C20.8237 9.30847 20.5857 9.93357 20.2179 10.5165C19.8605 11.083 19.2896 11.749 18.5923 12.5625L18.1807 13.0427C17.7322 13.5659 17.6385 13.694 17.5944 13.8353C17.5495 13.9793 17.5538 14.1458 17.6215 14.8434L17.6836 15.4822C17.7892 16.5693 17.8753 17.4558 17.8451 18.1309C17.8145 18.8181 17.658 19.478 17.0896 19.9086C16.5105 20.3471 15.8368 20.2977 15.1863 20.1118C14.5557 19.9315 13.7694 19.5703 12.8147 19.1317L12.2459 18.8704C11.6236 18.5845 11.4904 18.5387 11.3656 18.5387C11.2407 18.5387 11.1075 18.5845 10.4852 18.8704L9.91641 19.1317C8.9617 19.5703 8.17546 19.9315 7.54479 20.1118C6.89436 20.2977 6.2206 20.3471 5.64154 19.9086C5.07309 19.478 4.91665 18.8181 4.88597 18.1309C4.85582 17.4558 4.94194 16.5693 5.04755 15.4822L5.1096 14.8434C5.17736 14.1458 5.18158 13.9793 5.13668 13.8353C5.09264 13.694 4.99895 13.5659 4.55045 13.0427L4.13883 12.5625C3.4415 11.749 2.87062 11.083 2.51322 10.5166C2.14537 9.93357 1.90737 9.30847 2.11915 8.62902C2.33313 7.94249 2.88896 7.57441 3.52413 7.32468C4.13603 7.08409 4.97622 6.89446 5.99608 6.66427L6.05131 6.65181L6.60334 6.52719C7.26561 6.3777 7.40129 6.33327 7.50647 6.25361C7.61574 6.17086 7.70285 6.04139 8.04338 5.43194L8.35446 4.87516C8.88105 3.93265 9.3119 3.16147 9.71823 2.63212Z" fill="#252525"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.71823 2.63212C10.1317 2.09338 10.6428 1.64018 11.3656 1.64018C12.0883 1.64018 12.5994 2.09338 13.0129 2.63212C13.4192 3.16148 13.8501 3.93266 14.3767 4.87517L14.6877 5.43193C15.0283 6.04139 15.1154 6.17086 15.2246 6.25361C15.3298 6.33327 15.4655 6.3777 16.1278 6.52719L16.735 6.66428C17.7549 6.89446 18.5951 7.08409 19.207 7.32468C19.8422 7.57441 20.398 7.94249 20.612 8.62902C20.8237 9.30847 20.5857 9.93357 20.2179 10.5165C19.8605 11.083 19.2896 11.749 18.5923 12.5625L18.1807 13.0427C17.7322 13.5659 17.6385 13.694 17.5944 13.8353C17.5495 13.9793 17.5538 14.1458 17.6215 14.8434L17.6836 15.4822C17.7892 16.5693 17.8753 17.4558 17.8451 18.1309C17.8145 18.8181 17.658 19.478 17.0896 19.9086C16.5105 20.3471 15.8368 20.2977 15.1863 20.1118C14.5557 19.9315 13.7694 19.5703 12.8147 19.1317L12.2459 18.8704C11.6236 18.5845 11.4904 18.5387 11.3656 18.5387C11.2407 18.5387 11.1075 18.5845 10.4852 18.8704L9.91641 19.1317C8.9617 19.5703 8.17546 19.9315 7.54479 20.1118C6.89436 20.2977 6.2206 20.3471 5.64154 19.9086C5.07309 19.478 4.91665 18.8181 4.88597 18.1309C4.85582 17.4558 4.94194 16.5693 5.04755 15.4822L5.1096 14.8434C5.17736 14.1458 5.18158 13.9793 5.13668 13.8353C5.09264 13.694 4.99895 13.5659 4.55045 13.0427L4.13883 12.5625C3.4415 11.749 2.87062 11.083 2.51322 10.5166C2.14537 9.93357 1.90737 9.30847 2.11915 8.62902C2.33313 7.94249 2.88896 7.57441 3.52413 7.32468C4.13603 7.08409 4.97622 6.89446 5.99608 6.66427L6.05131 6.65181L6.60334 6.52719C7.26561 6.3777 7.40129 6.33327 7.50647 6.25361C7.61574 6.17086 7.70285 6.04139 8.04338 5.43194L8.35446 4.87516C8.88105 3.93265 9.3119 3.16147 9.71823 2.63212Z" fill="#FFC107"/>
</svg></div>
</div>

    </div>
    </>
  )
}

