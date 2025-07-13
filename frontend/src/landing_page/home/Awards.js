import React from "react";

function Awards() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src="Media/largestBroker.svg" />
        </div>
        <div className="col-6">
          <h1>Largest stock broker in India</h1>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures & Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
