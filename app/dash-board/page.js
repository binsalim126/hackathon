import React from "react";
import styles from "./dashboard.module.css";
import Form from "../../components/form/page";


export default function Profile() {
  
  return (
    <div className={styles.container}>
      

      {/* Profile Section */}
      <div className={styles.profileWrapper}>
        {/* Left Section */}
        <div className={styles.projectCard}>
          <div className={styles.s}>
            <img src="/asset/yahya.png" alt="Avatar" />
          </div>
          <h2 className={styles.userName}>John Doe</h2>
          <p className={styles.designation}>Full Stack Developer</p>
          <p className={styles.location}>Bay Area, San Francisco, CA</p>
          
        </div>
        <div className={styles.info}>

        <Form input={false}  />
        </div>

      </div>

      
      {/* Project Status */}
      <div className={styles.projectSection}>
        <div className={styles.projectCard}>
          <h3><em>assignment</em> Project Status</h3>
         
        </div>
      </div>
    </div>
  );
}
