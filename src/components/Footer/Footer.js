import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        color: "#F05454",
        textAlign: "center",
      }}
    >
      Developed &copy;
      <span
        style={{
          color: "#F1D00A",
        }}
      >
        {" "}
        Amir Hossein{" "}
      </span>
      SOHEILY
    </footer>
  );
};

export default Footer;
