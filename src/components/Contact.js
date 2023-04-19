import emailjs from "emailjs-com";
import sendMessage from "./sendMessage";
import { useState } from "react";
const Contact = () => {



  
  return (
    <section
      id="contactus"
      data-nav-tooltip="Contact Me"
      className="pp-section pp-scrollable section dark-bg"
    >

{/* ’ */}
      <div className="container">
        <div className="title">
          <h3>Get in touch.</h3>
        </div>
        <div className="row">
          <div className="col-lg-5 col-xl-4 m-15px-tb">
            <div className="contact-info">
              <h4>Get in contact!</h4>
              <p>
                Feel free to contact me here and I'll be sure to reply asap!
              </p>
              <ul>
                <li className="media">
                  <i className="ti-map" />
                  <span className="media-body">
                    Leeds, United Kingdom
                  </span>
                </li>
                {/* <li className="media">
                  <i className="ti-email" />
                  <span className="media-body">tpprogrammingcontact@gmail.com</span>
                </li>
                <li className="media">
                  <i className="ti-mobile" />
                  <span className="media-body">+044 9696 9696 3636</span>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="col-lg-7 col-xl-8 m-15px-tb">
            <div className="contact-form">
              <h4></h4>
              <form id="contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="name"
                        
                    
                        id="name"
                        placeholder="Name *"
                        className={`form-control`}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="email"
                        
                        
                        id="email"
                        placeholder="Email *"
                        className={`form-control`}
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        name="subject"
                        
                        
                        id="subject"
                        placeholder="Subject *"
                        className={`form-control`}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        
                        id="message"
                        placeholder="Your message *"
                        rows={5}
                        className={`form-control`}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="send">
                      <button
                        className="px-btn px-btn-theme"
                        type="button"
                        value="Send"
                        onClick={()=>{sendMessage()}}
                        
                      >
                        {" "}
                        send message
                      </button>
                      {/* <input
                        className="px-btn px-btn-theme"
                        type="submit"
                        value="send message"
                        onClick={()=>{sendMessage()}}
                      /> */}
                    </div>
                    
                
                  
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <div className="col-12">
            <div className="google-map">
              <div className="embed-responsive embed-responsive-21by9">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3151.840107317064!2d144.955925!3d-37.817214!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1520156366883"
                  allowFullScreen=""
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default Contact;
