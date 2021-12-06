import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div class="h-16">
      <h1 class="text-4xl"> Follow me</h1>
      <div class="h-12 flex flex-row gap-4 justify-center">
        <a href="http://www.instagram.com">
          {" "}
          <FaInstagram class="text-2xl" />{" "}
        </a>
        <a href="http://www.facebook.com">
          {" "}
          <FaFacebook class="text-2xl" />{" "}
        </a>
      </div>
    </div>
  );
}

export default Footer;
