"use client";
import "./style.css";
import { auth } from "@/lib/auth";
import { signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState(null);
  const [isActive, setIsActive] = useState(false);

  // Function to handle sign-in with GitHub
  const handleSignIn = async (e) => {
    // Prevent form submission
    const provider = await new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  };

  return (
    <div className="">
      <section className="first">
       

        <div className="left">
          <div className="logo-carier">
            <img src="asset/logo.png" alt="" width={100} height={100} />
            <br />
          </div>
          <h1>EDU QUICK</h1>
          <p> HIDAYA E-LEARNING</p>
        </div>

        <div className="right">
          
          <div className="together">
            <div className="index-content">
              <h1>
                TOGETHER <br />
                WE MAKE YOU BETTER{" "}
              </h1>
              <br />
              <p className="content">
                EDU QUICK is dedicated to empowering rural india through
                accessible,quality education under HIDAYA.Our platform provides
                innovative learning solutions,bridging the gap between the rural
                muslim communities and educational opportunities,to inspire
                growth,skill development,and self-reliance.{" "}
              </p>
              <a href="#about-us">
                <button className="about-more"> About </button>
              </a>
            </div>
            <img src="asset/student.png" alt="" className="student" />
          </div>
        </div>
      </section>
      <section id="about-us">
        <div className="about-us">
          <div className="text">
            <h1>ABOUT US</h1>
            <p className="p-about">
              EduQuick is an innovative online platform designed to provide
              comprehensive education for students . The program offers a
              personalized dashboard for students to track their progress, along
              with tools for life navigation, combining both academic and
              religious learning. In addition to its extensive educational
              resources, EduQuick provides access to tutor support, a chatbot
              for resolving doubts related to Islamic matters, and a system for
              connecting students with nearby scholars for guidance. The
              platform also features an event notification system to keep
              students informed of relevant educational activities. This
              volunteer-driven initiative operates under the patronage of
              AL-HIDAYA, with a focus on fostering educational innovation and
              empowerment, particularly for Indian Muslims. Through EduQuick, we
              aim to make quality education and spiritual growth accessible to
              students globally.
            </p>
            
          </div>
          <div className="left2">
            <div className="logo-carier2">
              <img src="asset/logo.png" alt="" />
              <br />
            </div>
            <h1>EDU QUICK</h1>
            <p> HIDAYA E-LEARNING</p>
          </div>
        </div>
      </section>
      <footer></footer>
    </div>
  );
}
