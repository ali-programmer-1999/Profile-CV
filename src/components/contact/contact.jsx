/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import './contact_style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Contact(){
    return (
        <div id='contact' className='contact container'>
            <h1 className="project-logo">Contact</h1>

            <div className="contact-box">

                <a href='https://www.whatsapp.com/' target='_blank' className="contact-item">
                    <i class="fa-brands fa-whatsapp"></i>
                    <div className="text-link">
                        <p>WhatsApp</p>
                        <p>09379534460</p>
                    </div>
                </a>

                <a href='https://www.instagram.com/accounts/login/' target='_blank' className="contact-item">
                    <i class="fa-brands fa-instagram"></i>
                    <div className="text-link">
                        <p>Instagram</p>
                        <p>ali.r.g1999</p>
                    </div>
                </a>

                <a href="https://github.com/ali-programmer-1999?tab=repositories" target='_blank' className="contact-item">
                    <i class="fa-brands fa-github-alt"></i>
                    <div className="text-link">
                        <p>Github</p>
                        <p>ali.programmer.1999</p>
                    </div>
                </a>

                <a href='https://twitter.com/i/flow/login' target='_blank' className="contact-item">
                    <i class="fa-brands fa-twitter"></i>
                    <div className="text-link">
                        <p>Twitter</p>
                        <p>G1378R</p>
                    </div>
                </a>

            </div>
        </div>
    )
}
const shower_project =document.querySelector('.contact');

window.addEventListener('scroll' , ()=>{
  if(document.documentElement.scrollTop > 2300){
    document.querySelector('.contact').classList.add('contact-show');
  }
  else{
    document.querySelector('.contact').classList.remove('contact-show');
  }
  
})

export default Contact;