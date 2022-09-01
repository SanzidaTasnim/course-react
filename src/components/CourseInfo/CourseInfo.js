import React from 'react';
import './CourseInfo.css';


const CourseInfo = (props) => {
   const {title , price , image , trainer , about , user , rating} = props.item;
   const handleClick = props.handleClick;
   return (
      <div className="courseItem-info">
         <div className="course-info-img">
            <img src={image} alt="course" />
         </div>
         <div className="course-info-data">
            <h3>{title}</h3>
            <p>{about}</p>
            <small>{trainer}</small>
            <p className='rating'>{rating} Star Ratings by <small>({user})</small></p>
            <h4>Price: ${price}</h4>
            <button onClick={() => handleClick(props.item)}>Buy Now</button>
         </div>
         
      </div>
   );
};

export default CourseInfo;