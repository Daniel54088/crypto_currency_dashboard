import React from 'react';

const ContactUs = ({match}) => {

  return (
    <div className="animated slideInUpTiny animation-duration-3">

      <div className="row">
        <div className="col-lg-9 col-md-8 col-sm-7 col-12">
          <form action="" className="contact-form jr-card">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label form="firstName">Name</label>
                  <input className="form-control form-control-lg" id="firstName" type="text"
                         placeholder="Daniel"/>
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label htmlFor="lastName">&nbsp;</label>
                  <input className="form-control form-control-lg" id="lastName" type="text"
                         placeholder="Wang"/>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input className="form-control form-control-lg" id="email" type="email"
                         placeholder="s981743@gmail.com"/>
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input className="form-control form-control-lg" id="phoneNumber" type="tel"
                         placeholder="Phone"/>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="webSite">Website</label>
                  <input className="form-control form-control-lg" id="webSite" type="text"
                         placeholder="Website"/>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <label>How can we help you?</label>
                  <textarea className="form-control form-control-lg" rows="6"/>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="form-group mb-0">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-5 col-12">
          <div className="contact-block jr-card py-5 px-4">
            <ul className="contact-info vertical">
              <li>
                <i className="zmdi zmdi-pin zmdi-hc-fw"/>
                <div className="contact-body">
                  <h4 className="text-uppercase">ADDRESS</h4>
                  <address className="mb-0">
                    Strathfield
                    <br/>
                    Sydney 2135
                    <br/>
                    Australia 300
                  </address>
                </div>
              </li>

              <li>
                <i className="zmdi zmdi-phone zmdi-hc-fw"/>
                <div className="contact-body">
                  <h4 className="text-uppercase">Phone</h4>
                  <div><span className="jr-link text-primary disable-link">0410 276 820</span>
                  </div>
                  <div><span className="jr-link text-primary disable-link">0410 276 820</span>
                  </div>
                </div>
              </li>

              <li>
                <i className="zmdi zmdi-email zmdi-hc-fw"/>
                <div className="contact-body">
                  <h4 className="text-uppercase">E-mail</h4>
                  <div><span className="text-primary jr-link">s981743@gmail.com</span>
                  </div>
                  <div className="icons-wrapper">

                    <span className="icon twitter-icon jr-link">
                      <i className="zmdi zmdi-github"/>
                    </span>

                    <span className="icon google-icon jr-link">
                      <i className="zmdi zmdi-medium"/>
                    </span>

                    <span className="icon linkedin-icon jr-link">
                      <i className="zmdi zmdi-linkedin"/>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;


