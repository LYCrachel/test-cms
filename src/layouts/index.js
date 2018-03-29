import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Navbar from "../components/Navbar";

import "./all.sass";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="レ・マンズ・M">
      {/* <html className="has-navbar-fixed-top" /> */}
      <meta name = "keyword" content = "レマンズM, les, le, レ・マンズ・M, リンパマッサージ, 福山, 手城町" />
      <meta name = "description" content = "優しい温もりに癒されるリラクゼーションスペース　レ・マンズ・M" />
    </Helmet>
    <Navbar />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
