import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div class="footer">
      <h1 class="text-4xl"> Follow me</h1>
      <div class="h-12 flex flex-row gap-4 justify-center">
        <a href="https://www.instagram.com/keisha_writenow_allen/">
          {" "}
          <FaInstagram class="text-2xl" />{" "}
        </a>
        <a href="https://www.facebook.com/KeishaWriteNowAllen">
          {" "}
          <FaFacebook class="text-2xl" />{" "}
        </a>
        <div>
          <p className="sub-title">
            built by <a href="http://www.systemley.com">Systemley Media</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
