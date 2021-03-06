import React from "react";

function Footer(props) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col col-sm-4 text-center">
            {/* <h5>Social</h5> */}
            {/* <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '} */}
            <a
              className="btn btn-social-icon btn-facebook"
              href="http://www.facebook.com/"
            >
              <i className="fa fa-facebook" />
            </a>{" "}
            {/* <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a>  */}
          </div>
          <div className="col col-sm-4 text-center">
            <a role="button" className="btn btn-link" href="tel:+17632329360">
              <i className="fa fa-lg fa-phone" /> 1-763-232-9360
            </a>
            <br />
          </div>
          <div className="col col-sm-4 text-center">
            <a
              role="button"
              className="btn btn-link"
              href="mailto:notreal@notreal.co"
            >
              <i className="fa fa-lg fa-envelope-o" /> info@renewal-homes.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
