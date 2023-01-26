import React,{useState} from 'react'
import './qualification.css';
const Qualification = () => {
    const [toggleState,setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="qualification section" id="qua">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My journey</span>

        <div className='qualification__container container'>
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button"} onClick={()=>toggleTab(1)}>
                    <i className="uil uil-graduation-cap"></i> Education
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button"} onClick={()=>toggleTab(2)}>
                    <i className="uil uil-briefcase-alt"></i> Experience
                </div>
            </div>

            <div className="qualification__sections">
                
                
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>

                   <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">University</h3>
                            <span className="qualification__subtitle">
                                Gyalposhing College of IT
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender"></i>2020 - 2023
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    
                    <div className="qualification__data">
                      
                      <div>
                          
                      </div>
                      <div>
                          <span className="qualification__rounder"></span>
                          <span className="qualification__line"></span>
                      </div>
                      <div>
                          <h3 className="qualification__title">High School</h3>
                          <span className="qualification__subtitle">
                            Ugyen Academy
                          </span>
                          <div className="qualification__calender">
                              <i className="uil uil-calender"></i>2018 - 2019
                          </div>
                      </div>
                      
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Middle School</h3>
                            <span className="qualification__subtitle">
                                Phuentsholing HSS
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender"></i>2017 - 2018 
                            </div>
                        </div>
                        <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>


                    <div className="qualification__data">
                      
                      <div>

                      </div>
                      <div>
                          <span className="qualification__rounder"></span>
                          <span className="qualification__line"></span>
                      </div>
                      <div>
                          <h3 className="qualification__title">Python Developer</h3>
                          <span className="qualification__subtitle">
                              Kattis | Leetcode
                          </span>
                          <div className="qualification__calender">
                              <i className="uil uil-calender"></i>2021 - Present
                          </div>
                      </div>
                      
                    </div>

  

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">FreeLancing</h3>
                            <span className="qualification__subtitle">
                                Fiver | Upwork
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender"></i>2021 - Present
                            </div>
                        </div>
                        <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                        </div>
                    </div>


                    <div className="qualification__data">
                      
                      <div>

                      </div>
                      <div>
                          <span className="qualification__rounder"></span>
                          <span className="qualification__line"></span>
                      </div>
                      <div>
                          <h3 className="qualification__title">MERN Developer</h3>
                          <span className="qualification__subtitle">
                              Not recruited yet
                          </span>
                          <div className="qualification__calender">
                              <i className="uil uil-calender"></i>2022 - Present
                          </div>
                      </div>
                      
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification