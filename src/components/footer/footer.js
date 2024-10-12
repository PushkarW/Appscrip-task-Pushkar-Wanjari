import React from "react";
import Styles from "./footer.module.css";
import { IoLogoInstagram } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import Image from "next/image";

const footer = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.containerTop}>
        <div className={Styles.boxOne}>
          <div>
            <h4>Be the first to know</h4>
          </div>
          <div>
            <p>sign up for updates from metta muse</p>
          </div>
          <div>
            <input type="text" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className={Styles.boxTwo}>
          <h4>Contact Us</h4>
          <p>+91 9876543210</p>
          <p>customercare@mettamuse.com</p>
          <h4>Currency</h4>
          <p>USD</p>
          <h6>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </h6>
        </div>
      </div>
      <div className={Styles.containerDown}>
        <div>
          <h4>metta muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Bouiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/ Login as a seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <div className={Styles.socialIcons}>
            <div className={Styles.circleSocial}>
              <IoLogoInstagram className={Styles.icons} />
            </div>
            <div className={Styles.circleSocial}>
              <CiLinkedin className={Styles.icons} />
            </div>
          </div>
          <div>
            <h4>metta muse ACCEPTS</h4>
            <div className={Styles.cardFlex}>
              <div className={Styles.rectangle}>
                <Image
                  src="/Mastercard.png"
                  alt="image1"
                  width={60}
                  height={30}
                />
              </div>
              <div className={Styles.rectangle}></div>
              <div className={Styles.rectangle}></div>
              <div className={Styles.rectangle}></div>
              <div className={Styles.rectangle}></div>
              <div className={Styles.rectangle}></div>
            </div>
          </div>
        </div>
      </div>
      <h6 className={Styles.copyright}>
        Copyright © 2023 mettamuse. All rights reserved.
      </h6>
    </div>
  );
};

export default footer;
