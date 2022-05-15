/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import "./home_style.css";
import img from "../../image/home.jpeg";
import cv from "../../image/cv.pdf"

function Home() {
  return (
    <div id="home" className="container home-container">
      <div className="logo-photo">
        <div onMouseOver={min_img} className="min-img">
            <span className="circle"><p className="present">90%</p></span>
            <span className="circle"><p className="present">90%</p></span>
            <span className="circle"><p className="present">80%</p></span>
            <span className="circle"><p className="present">70%</p></span>
            <span className="circle"><p className="present">70%</p></span>
            <span className="circle"><p className="present">???</p></span>
        </div>
        <img className="main-photo" src={ img } alt='my-photo'/>
      </div>
        <div id="about" className="about">
            <h2 className="about-text"> About Me </h2>
            <p className="discription">Hello, my name is Ali. 23 years old from Iran, Mazandaran. I am a novice web designer and I am trying to achieve my goal of     becoming a professional web designer. I moved to the front site of the site less than a year ago, and I am very, very happy to be  training in this basin. I have very big goals.
                I am studying in university in the field of accounting and in the future I am going to study computer science.
            </p>
              <a href={ cv } target='_blank' className="btn-about">Download CV pdf</a>
        </div>
    </div>
  );
}

// snip img
function min_img() {
  document.querySelector('.min-img').classList.add('active');
  remove_active_about();
}

function remove_active_about() {
  let remover_about = document.querySelector('.min-img');
  remover_about.addEventListener('mouseout' , ()=>{
    remover_about.classList.remove('active')
  })
}

// =================
const shower =document.querySelector('.about');

window.addEventListener('scroll' , ()=>{
  if(document.documentElement.scrollTop > 150){
    document.querySelector('.about').classList.add('show');
  }
  else{
    document.querySelector('.about').classList.remove('show');
  }
  
})



export default Home;
