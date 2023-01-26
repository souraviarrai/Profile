import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">My Top Projects</h1>
            <ul className="footer__list">
                <li>
                    <a href="#raindate" className="footer__link">Raindate</a>
                </li>
                <li>
                    <a href="#geekyblog" className="footer__link">GeekyBlog</a>
                </li>
                <li>
                    <a href="#bigbasket" className="footer__link">BigBasket</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.instagram.com/lekickass/" rel="noreferrer" className='footer__social-link' target="_blank">
            <i className='bx bxl-instagram'></i>
             </a>
            <a href="https://www.facebook.com/sawrez.rai/" rel="noreferrer" className='footer__social-link' target="_blank">
            <i className='bx bxl-facebook'></i>
            </a>
            <a href="https://www.linkedin.com/in/sourav-rai-54a925260/" rel="noreferrer" className='footer__social-link' target="_blank">
            <i className='bx bxl-linkedin'></i>
            </a>
            </div>

        <span className='footer__copy'>&#169; Sourav Dungbung. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer
