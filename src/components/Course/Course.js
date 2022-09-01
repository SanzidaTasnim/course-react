import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import CourseInfo from '../CourseInfo/CourseInfo';
import data from './../../course/course.json';
import './Course.css';

const Course = () => {
   
   const [course,setCourse] = useState([]);

   useEffect(() => {
      setCourse(data);
   },[]);

   const [cart , setCart] = useState([]);

   const handleClick = (item) => {
      const newCart = [...cart,item];
      setCart(newCart);
   }

   return (
      <div className="course-container">
         <div className="course-info">
            {
               course.map(item => <CourseInfo item={item} key= {item._id} handleClick = {handleClick} />)
            }
         </div>
         <div className="course-cart">
            <Cart cart= {cart}></Cart>
         </div>
      </div>
   );
};

export default Course;