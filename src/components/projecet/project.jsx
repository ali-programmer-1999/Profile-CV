/* eslint-disable no-cond-assign */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable no-unused-vars */
import "./project_style.css";
import project_1 from "../../image/project-1.PNG";
import project_2 from "../../image/project-2.PNG";
import project_3 from "../../image/project-3.PNG";
import project_4 from "../../image/project-4.PNG";
import project_5 from "../../image/project-5.PNG";

// link
// import webnews from "../../image/code/webnews.zip"

function Project() {
  return (
    <div id="project" className="project container">
      <h1 className="project-logo">Project</h1>
      <div className="content">
        <div className="contant-item">
          <img className="image-project" src={project_1} alt="" />

          <div className="text-box">
            <h2 className="text-logo">Web application SHOSHK</h2>
            <p className="text-discription">
              The program in the form of social communication such as Twitter
              and Instagram with advantages such as faster speed and
              communication with a better graphical interface ......
            </p>
            <a href="" target='_blank'>Source Code</a>
          </div>
        </div>
        <div className="contant-item">
          <img className="image-project" src={project_2} alt="" />

          <div className="text-box">
            <h2 className="text-logo">Travel WebSite</h2>
            <p className="text-discription">
            Tourist website for tourism companies with a simple user interface and beautiful appearance ......
            </p>
            <a href="" target='_blank'>Source Code</a>
          </div>
        </div>
        <div className="contant-item">
          <img className="image-project" src={project_3} alt="" />

          <div className="text-box">
            <h2 className="text-logo">Watch Shop</h2>
            <p className="text-discription">
            Sales sites with the simplest possible form and very good responsiveness on a variety of devices ......
            </p>
            <a href="https://github.com/ali-programmer-1999/WATCH-SHOP-SITE.git" target='_blank'>Source Code</a>
          </div>
        </div>
        <div className="contant-item">
          <img className="image-project" src={project_4} alt="" />

          <div className="text-box">
            <h2 className="text-logo">Leather online store</h2>
            <p className="text-discription">
            Sales sites with the simplest possible form and very good responsiveness on a variety of devices ......
            </p>
            <a href="https://github.com/ali-programmer-1999/online-shop-leather.git" target='_blank'>Source Code</a>
          </div>
        </div>
        <div className="contant-item">
          <img className="image-project" src={project_5} alt="" />

          <div className="text-box">
            <h2 className="text-logo">Web News</h2>
            <p className="text-discription">
            The best news for the fastest possible time with the best user interface in the hands of all users with different devices with the best ......
            </p>
            <a href="https://github.com/mehdiy-ir/-Web-Site--News.git" target='_blank'>Source Code</a>
          </div>
        </div>
      </div>
    </div>
  );
}
const shower_project =document.querySelector('.project');

window.addEventListener('scroll' , ()=>{
  if(document.documentElement.scrollTop > 700){
    document.querySelector('.project').classList.add('project-show');
  }
  else{
    document.querySelector('.project').classList.remove('project-show');
  }
  
})

export default Project;
