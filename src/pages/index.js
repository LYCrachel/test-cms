import React from "react";
import Link from "gatsby-link";
import Script from "react-load-script";
import graphql from "graphql";
import Navbar from '../components/Navbar';


export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (typeof window !== `undefined` && window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <section className="section">
        <div className="title">
          {/* <figure className="image">
            <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
          </figure> */}
          <p className="titleText">優しい温もりに心癒されるリラクゼーションスペース</p>
          <h1 className="has-text-weight-bold is-size-2">レ・マンズ・M</h1>
        </div>
        <Navbar />
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={() => this.handleScriptLoad()}
        />
        <div className="container">
          <div className="main_content">
            {posts
              .filter(post => post.node.frontmatter.templateKey === "blog-post")
              .map(({ node: post }) => (
                <div
                  className="content"
                  style={{ border: "1px solid #eaecee", padding: "2em 4em" }}
                  key={post.id}
                >
                  <p>
                    <Link className="has-text-primary" to={post.frontmatter.path}>
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button is-small" to={post.frontmatter.path}>
                      Keep Reading →
                    </Link>
                  </p>
                </div>
              ))}
          </div>
          <div className="sidebar">
            <div className="tel">
              <p className="tel-text">お問い合わせはこちら</p>
              <p className="tel-number">090-0000-0000</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
