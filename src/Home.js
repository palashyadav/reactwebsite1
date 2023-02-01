import React, { useState } from 'react';
import './Nav.css';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    
        <div className='intro'>
           <p className='introtext'> We break the stereotype ‘healthy eating is boring”. Reach your weight, health and workout goals with deliciously healthy food. We have various diet plans customised to suit your specific health and weight requirements. With a new changing menu every week, we bring to you food from various cuisines, with a healthy twist. We make healthy eating fun and effortless!</p>
        </div>
        <div className='body'>
          <div className='card'>
            <img src='https://cosmosgroup.sgp1.cdn.digitaloceanspaces.com/news/3185405_Weight%20Gain%20natural%20ways.png' width='280px' height='180px'/>
            <h3>Muscle Building diet</h3>
            <p>High protein foods are very important for gaining muscle, but carbohydrates and fats are also necessary sources of energy.If your goal is to gain lean muscle, you should focus on exercising regularly and eating more calories each day from muscle building foods.</p>
            <a><Link to='/Muscle'style={{color:'white',padding:'5px',backgroundColor:'maroon'}}>Muscle</Link></a>
          </div>
          <div className='card'>
            <img src='https://i.pinimg.com/736x/89/a8/d2/89a8d29943ab6ad8f222262fbab90efb.jpg'width='270px' height='180px'/>
            <h3>Fat Loss diet</h3>
            <p>Too much belly fat can increase your risk of certain chronic conditions. Drinking less alcohol, eating more protein, and lifting weights are just a few steps you can take to lose belly fat.</p>
            <a><Link to='/Fatloss'style={{color:'white',padding:'5px',backgroundColor:'maroon'}}>Fatloss</Link></a>
          </div>
          <div className='card'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuIXJXNzcOi3YYkyN_5mVms-x7tgmj8buds57C2-fRQC8qrmA8ZpRTdx6UV50zjgzTAt0&usqp=CAU'
            width='230px' height='180px' />
            <h3>Maintenence diet</h3>
            <p>Diet to maintain your existing body type.Though it differs depending on age and activity level, adult males generally require 2,000-3000 calories per day to maintain weight while adult females need around 1,600-2,400 </p>
            <a><Link to='/Maintain'style={{color:'white',padding:'5px',backgroundColor:'maroon'}}>Maintainence diet</Link></a>
          </div>
          <div className='card'>
            <img src='https://goqii.com/blog/wp-content/uploads/shutterstock_1616831191-1024x1024.jpg'
            width='230px' height='180px'/>
            <h3>Detox diet</h3>
            <p>Detoxification (detox) diets are more popular than ever.These diets claim to clean your blood and eliminate harmful toxins from your body.However, it is not entirely clear how they do this, what specific compounds they’re supposed to eliminate, and if they even work.</p>
            <a><Link to='/Detox' style={{color:'white',padding:'5px',backgroundColor:'maroon'}}>Detox diet</Link></a>
          </div>
          <div className='card'>
            <img src='https://thumbs.dreamstime.com/b/little-girl-sick-high-fever-small-pox-vector-illustration-67722369.jpg' width='230px' height='180px'/>
            <h3>Fever diet</h3>
            <p>The right foods to eat when you’re sick can do so much more than give you energy. They can help you feel better, get better faster, or stay hydrated as you recover.When you’re under the weather, eating may be one of the last things on your mind. However,These can support your recovery.</p>
            <a><Link to='/Feverdiet' style={{color:'white',padding:'5px',backgroundColor:'maroon'}}>Feverdiet</Link></a>
            </div>
            <div className='card'>
            <img src='https://media.istockphoto.com/id/1326000545/vector/cute-little-baby-boy-eat-porridge-in-bowl-with-spoon.jpg?s=612x612&w=0&k=20&c=dt8UxYQEP6_-Tj0A28yGpQX9I7SyCf6bAkk1y1wLh9g=' width='230px' height='180px'/>
            <h3>Infant diet</h3>
            <p>In addition to breast milk or baby formula, here are the solid foods you can introduce to your baby’s diet at each stage of development - or if your baby is ready. But remember, you can exclusively breastfeed your baby for the first 6 months.</p>
            <a><Link to='/Infant' style={{color:'white',padding:'5px',backgroundColor:'maroon'}}>Infant Diet</Link></a>
          </div>

          <div className='card'>
            <img src='https://media.istockphoto.com/id/1341635008/vector/healthy-nutrition-of-a-pregnant-woman-a-pregnant-girl-practices-yoga-and-chooses-between.jpg?s=612x612&w=0&k=20&c=UIHbEw3qaNP_nRGCK7QyDQQA8JGYNziEcNx1RAQgaSk=' width='230px' height='180px'/>
            <h3>Diet in Pregnency</h3>
            <p>During pregnancy, the basic principles of healthy eating remain the same — get plenty of fruits, vegetables, whole grains, lean protein and healthy fats. However, a few nutrients in a pregnancy diet deserve special attention.</p>
            <a><Link to='/pregnent' style={{color:'white',padding:'5px',backgroundColor:'maroon'}}>Pregnency Diet</Link></a>
          </div>

          <div className='card'>
            <img src='https://lh3.googleusercontent.com/-tqW4RV_9Sdw/YIMKNNLj2_I/AAAAAAAAJZI/EKFhjrO1Vs0FNv8D8cnxHKlYz4bUbk4uwCLcBGAsYHQ/s1600/1619200561358870-0.png' width='230px' height='180px'/>
            <h3>Foods To Avoid</h3>
            <p>Unhealthy food are the food items which have little or no nutritional value to the foods with nutritional value. Unhealthy foods undoubtedly taste good but one should keep a control over it.</p>
            <a><Link to='/avoid' style={{color:'white',padding:'5px',backgroundColor:'maroon'}}>Foods to Avoid</Link></a>
          </div>

      </div>
      

    </>
  )
}

export default Home
