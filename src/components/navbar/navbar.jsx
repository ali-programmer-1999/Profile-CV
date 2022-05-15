/* eslint-disable no-unused-vars */
import './navbar-style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar() {
    return(
     <div className='navigation'>
         <a className='icon' href="#home"><i className="active fa-solid fa-house"></i></a>
         <a className='icon' href="#about"><i class="fa-solid fa-address-card"></i></a>
         <a className='icon' href="#project"><i className="fa-solid fa-code"></i></a>
         <a className='icon' href="#assist"><i className="fa-solid fa-users"></i></a>
         <a className='icon' href="#contact"><i className="fa-solid fa-comments"></i></a>
     </div>
    )
}

// icon_active
let active_nav = document.querySelectorAll('.icon');
active_nav.forEach(item => {
    item.addEventListener('click' , ()=>{
        remove_frime();
        item.classList.add('active');
    })
});

function remove_frime(){
    active_nav.forEach(icon=>{
        icon.classList.remove('active')
    })
}
// icon_active


export default Navbar;

