import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Navbar from "../components/Navbar";

import "./all.sass";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="レ・マンズ・M">
      <meta name = "keyword" content = "レマンズM, les, le, レ・マンズ・M, リンパマッサージ, 福山, 手城町" />
      <meta name = "description" content = "優しい温もりに癒されるリラクゼーションスペース　レ・マンズ・M" />
      {/* < script src=" https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/TweenMax.min.js " /> */}
    </Helmet>
    <Navbar />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
