import React, { useEffect, useState } from 'react'
import './App.css';
import Data from './components/data/DATA.json'
import Course from './components/data/course/course'

function App() {
  const [myCourses , cartCourses] = useState([])
  const [courses , setCourses] =useState([])
  useEffect(()=>{
    setCourses(Data)
  },[])
  function addCourses (courses){
    const allCourses = [...myCourses, courses]
    cartCourses(allCourses)
  }
  let totalprice = 0;
  for (let i = 0; i < myCourses.length; i++) {
    const coursePrice = myCourses[i];
    totalprice = totalprice + coursePrice.price;
    
  }
  let tax = totalprice/10
  let finalTotal = totalprice +tax
  const first8Courses =courses.slice(0,8)
  const last7Courses =courses.slice(8,15)
  return (
    <div className=''>
    <div className='  d-flex coueses'>
      <div className='col-sm-4 '>
        {
          first8Courses.map(courses => <Course addCourses={addCourses} courses ={courses}></Course> )
        }
    </div>
      <div className='col-sm-4 '>
        {
          last7Courses.map(courses => <Course addCourses={addCourses} courses ={courses}></Course> )
        }
    </div>
      <div className='col-sm-3 cart'>
      <div className='CartSection  sticky-top'>
        <h2>Cart:</h2>
        <h5>Total Courses:{myCourses.length}</h5>
        <h5>Total Price $:{totalprice}</h5>
        <h5 style={{borderBottom:'2px solid grey', paddingBottom:'10px'}}>Tex/vat $:{tax}</h5>
        <h5>Final toral $:{finalTotal}</h5>
        <p>A small project By <a href='https://jubayerrahman.github.io/JubayerCompletePortfolio/' target="_blanl">Jubayer Rahman</a></p>
        </div>
    </div>

    </div>
    </div>
  );
}

export default App;
