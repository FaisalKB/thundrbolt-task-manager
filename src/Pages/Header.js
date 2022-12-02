import React from "react";
import "../App.css";

export default function Header() {
  return (
    <>
      <div className="mb-3 app-header">
        <header className="jumbotron bg-transparent">
          <div className="container text-light justify-content-center">
            <h1 className="display-4">
              {
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="65"
                  height="65"
                  fill="currentColor"
                  class="bi bi-lightning-charge"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z" />
                </svg>
              }
              ThundrBolt
            </h1>
            <p className="lead">
              No accounts. No subscriptions. Free & simple task management done
              lightning quick.{" "}
            </p>
          </div>
          <div></div>
        </header>
      </div>
    </>
  );
}
