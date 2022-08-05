import React from 'react';
import './style.css';

const course = (props) => {
    // console.log(props.courses.price);
    return (
        <div >
        <div className='course'>
            <div>
            {/* <img src={props.courses.img_link} alt='I am the boss'></img>
            </div>
            <div className='CourseData'>
            <h1>{props.courses.name}</h1>
            <p>{props.courses.description}</p>
            <h3>$ {props.courses.price}</h3>
            <button>Enroll Now</button> */}

            <div class="card courses">
                <img src={props.courses.img_link} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">{props.courses.name}</h5>
                    <p class="card-text">{props.courses.description}</p>
                    <p class="card-text price">$ {props.courses.price}</p>
                    <button onClick={()=>props.addCourses(props.courses)} class="btn btn-primary">Enroll Now</button>
                </div>
                </div>
            </div>

            
        </div>
        </div>

        
    );
};

export default course;