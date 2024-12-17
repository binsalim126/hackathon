"use client";
import { useEffect, useState } from "react";
import "./help.css";

export default function ChatBox() {
  const [openFAQ, setOpenFAQ] = useState(null); // Track the currently opened FAQ answer

  // Toggle function to handle the opening and closing of FAQ answers
//   const toggleAnswer = (index) => {
//     setOpenFAQ((prevIndex) => (prevIndex === index ? null : index));
//     // Toggle open/close of clicked answer
// };
const toggleAnswer = (index) => {
    if (openFAQ === index) {
      setOpenFAQ(null); // Close if already open
    } else {
      setOpenFAQ(index); // Open the clicked FAQ
    }
  };
  console.log(openFAQ);
  

  return (
    <div className="main2">
      
      <div className="board">

        <div className="container">
          <h2 className="faq-title">
            <b>People Also Ask</b>
          </h2>

          {/* FAQ Item 1 */}
          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(0)}>
              What is Edu Quick?
              <span className="arrow">{openFAQ === 0 ? "▲" : "▼"}</span>
            </div>
            <div className={`faq-answer ${openFAQ === 0 ? "open" : ""}`}>
            <b>EDU QUICK</b> is a website that facilitates the coordination of
            volunteer-driven initiatives aimed at fostering education for Indian
            Muslims under the patronage of <b>HIDAYA</b>.

            </div>
            
          </div>

          {/* FAQ Item 2 */}
          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(1)}>
              What are the key features of Edu Quick?
              <span className="arrow">{openFAQ == 1 ? "▲" : "▼"}</span>
            </div>
            <div className={`faq-answer ${openFAQ === 1 ? "open" : ""}`}>
                <b>Dashboard</b>
                <br />
                &gt; Enables users to track their progress, set personal goals, and
                conveniently access educational and community resources.
                <br />
                <b>Chatbot Support</b>
                <br />
                &gt; Provides a direct channel to connect with Islamic scholars for
                personalized guidance on educational, social, or spiritual matters.
                <br />
                <b>Event Calendar</b>
                <br />
                &gt; Keeps users informed about local and virtual Islamic events,
                helping them stay engaged with their community and religious practices.
              </div>
            
          </div>

          {/* FAQ Item 3 */}
          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(2)}>
              How can students track their progress?
              <span className="arrow">{openFAQ === 2 ? "▲" : "▼"}</span>
            </div>
            <div className={`faq-answer ${openFAQ === 2 ? "open" : ""}`}>
                <b>Login:</b>
                <br />
                &gt; Use your registered email and password to log in to the platform.
                <br />
                &gt; Fill the Form.
                <br />
                &gt; Complete the form with the required details about your current
                educational status and goals. This form needs to be updated annually to
                ensure accurate progress tracking.
                <br />
                &gt; Access the Dashboard.
                <br />
                &gt; Click the <b>&quot;Dashboard&quot;</b> button to view your personalized
                progress-tracking tools.
                <br />
                &gt; View Current Status.
                <br />
                &gt; Click on the <b>&quot;Current Graph&quot;</b> section within the dashboard to
                see a visual representation of your current progress.
                <br />
                &gt; Use Improvement Navigator.
                <br />
                &gt; Access the <b>&quot;Improvement Navigator&quot;</b> feature to receive tailored
                strategies and guidelines for achieving your educational goals and
                addressing areas for improvement.
              </div>
           
          </div>

          {/* FAQ Item 4 */}
          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(3)}>
              How to use the Chatbot?
              <span className="arrow">{openFAQ === 3 ? "▲" : "▼"}</span>
            </div>
            <div className={`faq-answer ${openFAQ === 3 ? "open" : ""}`}>
                <b>Locate the Chatbot Button:</b>
                <br />
                &gt; Find the &quot;Chatbot&quot; button, positioned at the bottom-left of the
                platform interface.
                <br />
                &gt; Enter Your Location:
                <br />
                &gt; Type in your current location to allow the system to tailor its
                responses.
                <br />
                &gt; Receive Scholar Details:
                <br />
                &gt; A list of available Islamic scholars in your area or virtually
                accessible will appear, providing their details for guidance.
                <br />
                &gt; Connect with a Scholar:
                <br />
                &gt; Select a scholar from the list to initiate a conversation and seek
                guidance directly.
              </div>
           
          </div>

          {/* FAQ Item 5 */}
          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(4)}>
              What is the status of the Event Calendar?
              <span className="arrow">{openFAQ === 4 ? "▲" : "▼"}</span>
            </div>
            <div className={`faq-answer ${openFAQ === 4 ? "open" : ""}`}>
                <b>Personalized Notifications:</b>
                <br />
                &gt; Based on the areas of interest you selected when filling out your
                initial profile, the Event Bar will notify you about relevant events.
                These notifications include both virtual events and events happening nearby.
                <br />
                &gt; Search Option:
                <br />
                &gt; Students can actively search for specific events using the search
                icon in the Event Calendar. This allows them to explore a wider range of
                opportunities beyond their predefined interests.
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
