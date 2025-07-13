import React from 'react';

function Footer() {
    return ( 
        <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-3 mb-3">
        <div className="row mt-5">
          <div className="col">
            <img src="Media/logo.png" style={{ width: "50%" }} />
            <p>
              &copy; 2010 - 2025. All rights reserved.
            </p>
          </div>
          <div className="col">
            <p>Company</p>
            <a href="">About</a>
            <br />
            <a href="">Products</a>
            <br />
            <a href="">Pricing</a>
            <br />
            <a href="">Referral programme</a>
            <br />
            <a href="">Careers</a>
            <br />
            <a href="">Stoxify.tech</a>
            <br />
            <a href="">Press & media</a>
            <br />
            <a href="">Stoxify cares (CSR)</a>
            <br />
          </div>
          <div className="col">
            <p>Support</p>
            <a href="">Contact</a>
            <br />
            <a href="">Support portal</a>
            <br />
            <a href="">S-Connect blog</a>
            <br />
            <a href="">List of charges</a>
            <br />
            <a href="">Downloads & resources</a>
            <br />
          </div>
          <div className="col">
            <p>Account</p>
            <a href="">Open an account</a>
            <br />
            <a href="">Fund transfer</a>
            <br />
            <a href="">60 day challenge</a>
            <br />
          </div>
        </div>
      </div>
    </footer>
     );
}

export default Footer;