import React,{ useState } from 'react'
import './services.css';

const Services = () => {
    const [toggleState,setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    };
  return (
    <section className="services section" id ="service">
        <h2 className='section__title'>Services</h2>
        <span className='section__subtitle'>What i offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className='services__title'>Visual<br/> Designer</h3>
                </div>
              <span className="services__button" onClick={() => toggleTab(1)}>
                View More
                <i className="uil uil-arrow-right services__button-icon"></i>
              </span>  

              <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">Visual<br/> Designer</h3>
                    <p className="services__modal-description">
                        Freelancing for more than 3 years,Providing quality work to clients and compaines.
                    </p>
                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle"></i>
                            <p className="services__modal-info">
                                Develop UI|UX with trending Technologies.
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle"></i>
                            <p className="services__modal-info">
                                Design and mockups with Figma and Adobe XD.
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle"></i>
                            <p className="services__modal-info">
                                Great photography and editing with Lightroom.
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle"></i>
                            <p className="services__modal-info">
                                Great graphic design with Photoshop and Canva.
                            </p>
                        </li>

                       
                    </ul>
                </div>
              </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className='services__title'>UI|UX <br /> Designer</h3>
                </div>
              <span className="services__button" onClick={() => toggleTab(2)}>
                View More
                <i className="uil uil-arrow-right services__button-icon"></i>
              </span>  

              <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">UI|UX <br /> Designer</h3>
                    <p className="services__modal-description">
                        Providing great UI | UX experience with popular technologies.
                    </p>
                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle"></i>
                            <p className="services__modal-info">
                                Frontend UI development with React.js 
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle"></i>
                            <p className="services__modal-info">
                                Well versed in HTML5,CSS3,Javscript and Bootstrap
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle"></i>
                            <p className="services__modal-info">
                                UI|UX with Redux,Next.js and tailwind CSS
                            </p>
                        </li>

                       
                    </ul>
                </div>
              </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-brackets-curly services__icon"></i>
                    <h3 className='services__title'>Backend <br /> Devloper</h3>
                </div>
              <span className="services__button" onClick={() => toggleTab(3)}>
                View More
                <i className="uil uil-arrow-right services__button-icon"></i>
              </span>  

              <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">Backend <br /> Devloper</h3>
                    <p className="services__modal-description">
                        Fullstack web-devlopment using the popular frameworks
                    </p>
                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle"></i>
                            <p className="services__modal-info">
                                Fullstack web development with Node.js.
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle"></i>
                            <p className="services__modal-info">
                                Fullstack web development with Django.
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle"></i>
                            <p className="services__modal-info">
                                Backend database with Mysql.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle"></i>
                            <p className="services__modal-info">
                                Backend database with no sql, Firebase.
                            </p>
                        </li>
                    </ul>
                </div>
              </div>
            </div>
        </div>
    </section>
    
  )
}

export default Services
