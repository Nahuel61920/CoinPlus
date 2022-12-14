import React from "react";
import Nav from "../../components/Nav/Nav";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import ScrollTop from "../../components/ScrollTop/ScrollTop";

function LandingPage() {
  return (
    <div className="bg-global">
      <Nav />
      <ScrollTop />
      <Main />
      <Footer />
    </div>
  );
}

export default LandingPage;
