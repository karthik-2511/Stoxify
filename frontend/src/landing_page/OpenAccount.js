import React from "react";
import {Link} from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container">
      <div className="row p-5 text-center">
        <h1 className="mt-5">Open a Stoxify account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          <Link className="nav-link active" to="/signup">Signup Now</Link>
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
