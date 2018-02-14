import React from "react";
import Link from "gatsby-link";
import Script from "react-load-script";
import graphql from "graphql";
import masako from "../img/masako.jpg";
import logo from "../img/logo.gif";

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
          <figure className="image-masako">
            <img src={logo} alt="logo" style={{ width: '200px' }} />
          </figure>
          <p className="titleText">優しい温もりに心癒されるリラクゼーションスペース</p>
          <h1 className="mainTitle">レ・マンズ・M</h1>
        </div>
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
            <div className="masako">
              <figure className="image-masako">
                <img src={masako} alt="masako" style={{ width: '200px'}} />
              </figure>
              <p className="name">長岡 未佐子</p>
              <p className="name">(ながおか まさこ)</p>
              <div className="masako-info">
                <p className="masako-text">レ・マンズ・Ｍ技術認定スクール代表</p>
                <p className="masako-text">(社)日本予防医学アカデミー認定校</p>
                <p className="masako-text">予防医学健康美協会リンパケアマネジャー</p>
                <p className="masako-text">心身痩術協会　美容整体師</p>
                <p className="masako-text">AYURVADA(アユルベーダ)セラピスト</p>
              </div>
            </div>
            <div className="accessMap">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.7487104581096!2d133.39406931462378!3d34.483898502307376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35511142c48dc3d5%3A0x330fb0bb6803506!2z44CSNzIxLTA5NjMg5bqD5bO255yM56aP5bGx5biC5Y2X5omL5Z-O55S677yT5LiB55uu77yX4oiS77yZ!5e0!3m2!1sja!2sjp!4v1518140441835"
                style={{ border: "0", width: "210", height: "200", frameborder: "0"}}
                allowfullscreen>
              </iframe>
              <div className="address">
                <p className="addressNumber">〒 721-0963</p>
                <p className="address-text">広島県福山市南手城町3丁目7番9号</p>
              </div>
            </div>
            <div className="tel">
              <p className="tel-text">お問い合わせはこちら</p>
              <p className="tel-number">090-8245-3516</p>
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
