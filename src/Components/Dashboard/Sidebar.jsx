import React from 'react'
import './Side.css'
import { NavLink } from 'react-router-dom'
export default function Sidebar() {

  // const navigate = useNavigate();
// const showsetting = ()=>{
//   navigate("/dashboard/file")
// }

  return (
    <>
    <div className='sbar'>
     <div className='simg'>
     <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 27 27" fill="none">
  <g clip-path="url(#clip0_1_1649)">
    <path d="M13.2501 26.3558C6.04979 26.3558 0.269287 20.495 0.269287 13.3751C0.269287 6.17481 6.04979 0.394318 13.2501 0.394318C20.4503 0.394318 26.2308 6.17481 26.2308 13.3751C26.2308 20.495 20.4503 26.3558 13.2501 26.3558ZM13.2501 2.57509C7.30486 2.57509 2.44519 7.42989 2.44519 13.3759C2.44519 19.3219 7.30486 24.1808 13.2501 24.1808C19.1952 24.1808 24.0549 19.3211 24.0549 13.3759C24.0549 7.4307 19.1952 2.57509 13.2501 2.57509ZM19.6179 14.6302H10.2369C10.0381 14.6312 9.84702 14.5536 9.70533 14.4142C9.56364 14.2748 9.48291 14.085 9.48077 13.8862V12.7918C9.48077 12.3691 9.81421 12.0356 10.2369 12.0356H19.6974C20.1161 12.0356 20.4495 12.3739 20.4495 12.7918V13.8781C20.3692 14.2967 20.0309 14.6302 19.6171 14.6302H19.6179ZM17.1881 10.4422H7.72268C7.52379 10.4438 7.33243 10.3662 7.19065 10.2267C7.04887 10.0873 6.96827 9.89717 6.96655 9.69828V8.60384C6.96655 8.26553 7.30486 7.93209 7.72268 7.93209H17.1832C17.5215 7.93209 17.855 8.2704 17.855 8.60384V9.69017C17.855 10.1088 17.5215 10.4422 17.1873 10.4422H17.1881ZM7.72349 16.3079H17.1889C17.6075 16.3079 17.941 16.6414 17.941 17.06V18.1463C17.9418 18.3457 17.8636 18.5373 17.7233 18.6791C17.5831 18.8208 17.3924 18.9012 17.193 18.9025H7.72349C7.30486 18.8181 6.97142 18.4838 6.97142 18.066V16.9756C6.96736 16.6422 7.30486 16.3079 7.72349 16.3079Z" fill="#2BAC76"/>
  </g>
  <defs>
    <clipPath id="clip0_1_1649">
      <rect width="25.9615" height="25.9615" fill="white" transform="translate(0.269287 0.394318)"/>
    </clipPath>
  </defs>
</svg></div>

     <div> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 27 27" fill="none">
  <path d="M21.1653 18.6149C20.5307 17.9798 19.7892 17.4614 18.9748 17.0836C20.1233 16.1531 20.856 14.7333 20.856 13.1412C20.856 10.332 18.5133 8.02745 15.7042 8.07055C12.9382 8.11365 10.7097 10.3675 10.7097 13.1412C10.7097 14.7333 11.4449 16.1531 12.5909 17.0836C11.7763 17.4611 11.0348 17.9795 10.4004 18.6149C9.01609 20.0017 8.23015 21.8322 8.17944 23.7844C8.17876 23.8114 8.18351 23.8384 8.1934 23.8636C8.20329 23.8887 8.21812 23.9117 8.23702 23.9311C8.25593 23.9505 8.27851 23.9659 8.30346 23.9764C8.3284 23.9869 8.3552 23.9923 8.38227 23.9923H9.80204C9.91106 23.9923 10.0023 23.9061 10.0049 23.7971C10.053 22.3266 10.6488 20.9499 11.6959 19.9054C12.2317 19.3667 12.869 18.9397 13.571 18.649C14.273 18.3582 15.0256 18.2097 15.7854 18.2118C17.3294 18.2118 18.7821 18.8126 19.8748 19.9054C20.9194 20.9499 21.5152 22.3266 21.5659 23.7971C21.5684 23.9061 21.6597 23.9923 21.7687 23.9923H23.1885C23.2155 23.9923 23.2423 23.9869 23.2673 23.9764C23.2922 23.9659 23.3148 23.9505 23.3337 23.9311C23.3526 23.9117 23.3674 23.8887 23.3773 23.8636C23.3872 23.8384 23.392 23.8114 23.3913 23.7844C23.3406 21.8322 22.5546 20.0017 21.1653 18.6149ZM15.7854 16.3864C14.9183 16.3864 14.1019 16.0492 13.4909 15.4356C13.1843 15.1314 12.9421 14.7685 12.7787 14.3687C12.6154 13.9688 12.5342 13.5401 12.5402 13.1082C12.5478 12.2766 12.8799 11.4729 13.4605 10.8771C14.069 10.2534 14.8828 9.90611 15.7524 9.89597C16.6119 9.88836 17.446 10.223 18.0595 10.8239C18.6883 11.44 19.0331 12.2639 19.0331 13.1412C19.0331 14.0082 18.6959 14.8221 18.0823 15.4356C17.7813 15.7381 17.4233 15.9778 17.0291 16.141C16.6348 16.3042 16.2121 16.3876 15.7854 16.3864ZM9.43442 13.8105C9.4116 13.5899 9.39892 13.3668 9.39892 13.1412C9.39892 12.738 9.43695 12.3451 9.50794 11.9622C9.52569 11.871 9.47752 11.7772 9.39385 11.7391C9.04905 11.5845 8.73214 11.3715 8.45832 11.1028C8.13568 10.7899 7.88179 10.4133 7.71286 9.99683C7.54392 9.58039 7.46365 9.1333 7.47716 8.68409C7.49998 7.87026 7.82703 7.09699 8.39748 6.51387C9.0237 5.87244 9.86542 5.52257 10.7604 5.53271C11.5691 5.54031 12.35 5.85216 12.9407 6.40485C13.141 6.59247 13.3134 6.80036 13.4579 7.02347C13.5087 7.10206 13.6075 7.13502 13.6937 7.1046C14.1399 6.94994 14.6115 6.84093 15.0958 6.79022C15.2377 6.77501 15.3189 6.62289 15.2555 6.49612C14.4315 4.86592 12.7481 3.74025 10.8009 3.70982C7.98929 3.66672 5.64667 5.97132 5.64667 8.7779C5.64667 10.3701 6.37937 11.7898 7.52787 12.7203C6.72164 13.093 5.9788 13.6077 5.33483 14.2516C3.94548 15.6384 3.15953 17.4689 3.10883 19.4236C3.10815 19.4507 3.1129 19.4776 3.12279 19.5028C3.13268 19.528 3.14751 19.551 3.16641 19.5704C3.18531 19.5897 3.2079 19.6051 3.23285 19.6156C3.25779 19.6261 3.28459 19.6316 3.31165 19.6315H4.73396C4.84298 19.6315 4.93425 19.5453 4.93678 19.4363C4.98496 17.9658 5.58075 16.5892 6.62783 15.5446C7.37321 14.7993 8.28592 14.282 9.2823 14.0311C9.38118 14.0057 9.44709 13.9119 9.43442 13.8105Z" fill="#FF6059"/>
</svg></div>
     <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 27 27" fill="none">
  <path d="M3.84333 6.97938C4.05697 6.01835 4.59194 5.1589 5.35993 4.54294C6.12792 3.92698 7.083 3.59132 8.06749 3.5914H18.4326C19.4171 3.59132 20.3722 3.92698 21.1402 4.54294C21.9082 5.1589 22.4432 6.01835 22.6568 6.97938L22.8158 7.69549C23.6401 11.4046 23.6401 15.2494 22.8158 18.9585L22.6568 19.6746C22.4432 20.6356 21.9082 21.495 21.1402 22.111C20.3722 22.727 19.4171 23.0626 18.4326 23.0625H8.06858C7.08409 23.0626 6.129 22.727 5.36101 22.111C4.59302 21.495 4.05805 20.6356 3.84442 19.6746L3.6854 18.9585C2.86121 15.2494 2.86121 11.4046 3.6854 7.69549L3.84442 6.97938H3.84333Z" stroke="#0582CA" stroke-width="2.16346" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.97363 14.4087H9.82964C9.82964 15.4904 10.8822 17.6539 13.5129 17.6539C16.1448 17.6539 17.1973 15.4904 17.1973 14.4087H23.5265" stroke="#0582CA" stroke-width="2.16346" stroke-linejoin="round"/>
</svg></div>
     <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 27 27" fill="none">
  <path d="M3.84333 6.97938C4.05697 6.01835 4.59194 5.1589 5.35993 4.54294C6.12792 3.92698 7.083 3.59132 8.06749 3.5914H18.4326C19.4171 3.59132 20.3722 3.92698 21.1402 4.54294C21.9082 5.1589 22.4432 6.01835 22.6568 6.97938L22.8158 7.69549C23.6401 11.4046 23.6401 15.2494 22.8158 18.9585L22.6568 19.6746C22.4432 20.6356 21.9082 21.495 21.1402 22.111C20.3722 22.727 19.4171 23.0626 18.4326 23.0625H8.06858C7.08409 23.0626 6.129 22.727 5.36101 22.111C4.59302 21.495 4.05805 20.6356 3.84442 19.6746L3.6854 18.9585C2.86121 15.2494 2.86121 11.4046 3.6854 7.69549L3.84442 6.97938H3.84333Z" stroke="#0582CA" stroke-width="2.16346" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.97363 14.4087H9.82964C9.82964 15.4904 10.8822 17.6539 13.5129 17.6539C16.1448 17.6539 17.1973 15.4904 17.1973 14.4087H23.5265" stroke="#0582CA" stroke-width="2.16346" stroke-linejoin="round"/>
</svg></div>
    </div>
    <div className='bimg'>
<NavLink to="/dashboard/file">
   <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 34 34" fill="none">
  <circle cx="17.0625" cy="17" r="4.21875" stroke="#252525" stroke-width="2.10938"/>
  <path d="M5.33611 15.0863C6.00062 15.5039 6.4282 16.2151 6.42819 16.9999C6.42819 17.7847 6.00062 18.496 5.33611 18.9135C4.88392 19.1976 4.59257 19.4247 4.38528 19.6948C3.93119 20.2866 3.73079 21.0345 3.82815 21.7741C3.90117 22.3287 4.22879 22.8962 4.88402 24.0311C5.53925 25.166 5.86686 25.7334 6.3107 26.074C6.90248 26.5281 7.6504 26.7285 8.38994 26.6311C8.7275 26.5867 9.06979 26.4479 9.54183 26.1985C10.2358 25.8317 11.0657 25.817 11.7454 26.2095C12.4251 26.602 12.8273 27.328 12.8566 28.1122C12.8766 28.6459 12.9275 29.0117 13.0579 29.3263C13.3433 30.0154 13.8908 30.563 14.58 30.8484C15.0968 31.0625 15.7521 31.0625 17.0625 31.0625C18.373 31.0625 19.0282 31.0625 19.5451 30.8484C20.2342 30.563 20.7817 30.0154 21.0672 29.3263C21.1975 29.0117 21.2485 28.6459 21.2684 28.1123C21.2978 27.328 21.7 26.602 22.3797 26.2096C23.0594 25.8172 23.8892 25.8318 24.5831 26.1986C25.0552 26.4481 25.3975 26.5868 25.7351 26.6313C26.4746 26.7286 27.2225 26.5282 27.8143 26.0742C28.2582 25.7336 28.5858 25.1661 29.241 24.0312C29.5327 23.526 29.7595 23.1332 29.9278 22.8039M28.7889 18.9136C28.1244 18.4961 27.6968 17.7849 27.6967 17.0001C27.6967 16.2153 28.1243 15.5039 28.7889 15.0863C29.241 14.8023 29.5323 14.5752 29.7396 14.3051C30.1937 13.7133 30.3941 12.9654 30.2967 12.2258C30.2237 11.6712 29.8961 11.1037 29.2408 9.96882C28.5856 8.83393 28.258 8.26648 27.8142 7.92591C27.2224 7.47183 26.4745 7.27142 25.7349 7.36878C25.3973 7.41323 25.055 7.55197 24.5829 7.80149C23.889 8.16824 23.0592 8.18288 22.3795 7.79041C21.6999 7.39799 21.2978 6.67208 21.2684 5.88785C21.2485 5.35417 21.1975 4.9883 21.0672 4.6737C20.7817 3.98456 20.2342 3.43704 19.5451 3.15159C19.0282 2.9375 18.373 2.9375 17.0625 2.9375C15.7521 2.9375 15.0968 2.9375 14.58 3.15159C13.8908 3.43704 13.3433 3.98456 13.0579 4.6737C12.9276 4.98828 12.8766 5.35411 12.8566 5.88773C12.8273 6.67202 12.4251 7.39799 11.7454 7.79042C11.0657 8.18284 10.2358 8.16818 9.54196 7.80143C9.06985 7.55191 8.72754 7.41316 8.38996 7.36871C7.65042 7.27135 6.90249 7.47176 6.31071 7.92584C5.86688 8.26641 5.53926 8.83386 4.88403 9.96875C4.59233 10.474 4.36556 10.8668 4.19727 11.196" stroke="#252525" stroke-width="2.10938" stroke-linecap="round"/>
</svg></div>
</NavLink>
<div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 34 34" fill="none">
  <path d="M17.0625 4.63281C17.645 4.63281 18.1172 5.10501 18.1172 5.6875C18.1172 6.26999 17.645 6.74219 17.0625 6.74219C11.4318 6.74219 6.86719 11.3068 6.86719 16.9375C6.86719 22.5682 11.4318 27.1328 17.0625 27.1328C17.645 27.1328 18.1172 27.605 18.1172 28.1875C18.1172 28.77 17.645 29.2422 17.0625 29.2422C10.2668 29.2422 4.75781 23.7332 4.75781 16.9375C4.75781 10.1418 10.2668 4.63281 17.0625 4.63281Z" fill="#252525"/>
  <path d="M23.348 13.4645C22.9361 13.0526 22.9361 12.3849 23.348 11.973C23.7599 11.5611 24.4276 11.5611 24.8395 11.973L29.0583 16.1917C29.4702 16.6036 29.4702 17.2714 29.0583 17.6833L24.8395 21.902C24.4276 22.3139 23.7599 22.3139 23.348 21.902C22.9361 21.4901 22.9361 20.8224 23.348 20.4105L25.7663 17.9922H14.25C13.6675 17.9922 13.1953 17.52 13.1953 16.9375C13.1953 16.355 13.6675 15.8828 14.25 15.8828H25.7663L23.348 13.4645Z" fill="#252525"/>
</svg></div>
    </div>

    </div>
    </>
  )
}

// import React, { useState } from "react";
// import "./Side.css";

// const ToggleSidebar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleSidebar = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div className="container-fluid mt-3">
//           <div className='sbar'>
//      <div className='simg'>
//       <img src='p2.png'/>
//      <img src='p3.svg'/>
//      <img src='p4.png'/>
//       <img src='p5.png'/>

//       </div>

//      <div className='bimg'>
//     <img src='Settings.png'/>
//      <img src='Logout.png'/>
//     </div>


//     </div>
//             <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
//                     <div className="form-inline ml-auto">
//                         <div className="btn btn-primary" onClick={toggleSidebar}>
//                             {/* <i className="fa fa-bars"></i> */}
                        
//                             ///
//                     </div>
//                 </div>
//             </nav>
//             <div className={`sidebar ${isOpen ? 'active' : ''}`}>
//                 <div className="sd-header">
//                     <div className="btn btn-primary" onClick={toggleSidebar}>
//                         {/* <i className="fa fa-times"></i> */}
//                     x
//                     </div>
//                 </div>
//                 <div className="sd-body">
//                 <div className='jsbare'>
//      <div className='simg'>
//       <img src='p2.png'/>
//      <img src='p3.svg'/>
//      <img src='p4.png'/>
//       <img src='p5.png'/>

//       </div>

//      <div className='bimg'>
//     <img src='Settings.png'/>
//      <img src='Logout.png'/>
//     </div>


//     </div>
//                 </div>
//             </div>
//             <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>
//         </div>
//     );
// };

// export default ToggleSidebar;
