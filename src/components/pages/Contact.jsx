import React from "react";
import Header from "./Header";

export default function Contact() {
  return (
    <div>
      <Header />
      <section className="contact-section">
        <h1>
          Contact <span className="styled">Me</span>
        </h1>
        <p>This is how you can reach me...</p>

        <div className="contact-div">
          <div className="contact">
            <p>
              <span className="styled">Email:</span> wakpomeyoma@gmial.com
            </p>
          </div>
          <div className="contact">
            <p>
              <span className="styled">Phone:</span> (+234) 810 798 2845
            </p>
          </div>
          <div className="contact">
            <p>
              <span className="styled">Address:</span> No. 38 Jasmine Street,
              Kpansia, Yenagoa, Bayelsa State.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
