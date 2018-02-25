import React from "react";
import Link from "gatsby-link";
import Script from "react-load-script";
import graphql from "graphql";
import masako from "../img/masako.jpg";
import logo from "../img/Lesmains_logo_transparent.gif";
import counseling from "../img/shop6.jpg";
import space from "../img/shop5.jpg";
import title from "../img/レマンズ.gif";

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
      <div>
        <div className="hero is-fullheight">
          <div className="hero-body yuba">
            <div className="hero-body yuba2">
              <div className="container has-text-centered">
                <figure className="image-masako-logo">
                  <img src={logo} alt="logo" width="200" />
                </figure>
                <figure className="image-masako-title">
                  <img src={title} alt="レマンズ" width="500" />
                </figure>
                <p className="titleText">
                  優しい温もりに心癒されるリラクゼーションスペース
                </p>
              </div>
            </div>
          </div>
        </div>
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={() => this.handleScriptLoad()}
        />
        <div className="">
          <section className="information">
            <h2 className="title has-text-centered">INFORMATION</h2>
            <div className="information__contents">
              {posts
                .filter(
                  post => post.node.frontmatter.templateKey === "blog-post"
                )
                .map(({ node: post }) => (
                  <div className="information__item" key={post.id}>
                    <Link
                      className="information__item--contents"
                      to={post.frontmatter.path}
                    >
                      {post.frontmatter.title}
                      <small className="information-date">
                        {post.frontmatter.date}
                      </small>
                    </Link>
                  </div>
                ))}
            </div>
          </section>

          <section className="greeting back is-fullheight">
            <h2 className="title has-text-centered">GREETING</h2>
            <div className="greeting__main">
              <p className="is-size-6 has-text-centered greeting__text">
                ご訪問ありがとうございます<br/>
                今年1月に南手城町にリニューアルオープンしました<br/>
                美しさと健康に導く「手」のある癒しの空間<br/>
                <strong className="is-size-4">レ・マンズ・M (エム)</strong>です。
              </p>
              <div className="container">
                <div className="is-flex-desktop">
                  <figure>
                    <img
                      className="greeting__image"
                      src={counseling}
                      alt="counseling"
                      style={{ width: "200px" }}
                    />
                  </figure>
                  <div className="greeting__text--first">
                    <p className="is-size-5">
                      サロンスペースでは、<br/>
                      お客様へのカウンセリングを行ったり<br/>
                      施術後にオススメのお茶で寛いで頂いており<br/>
                      <span>「ゆったりできる」</span>と評判です。
                    </p>
                  </div>
                </div>
                <div className="is-flex-desktop">
                  <figure>
                    <img
                      className="greeting__image"
                      src={space}
                      alt="space"
                      style={{ width: "200px" }}
                    />
                  </figure>
                  <div className="greeting__text--second">
                    <p className="is-size-5">
                      <span>「ついつい寝てしまいます」</span><br/>
                      と、お声を頂く施術スペースでは<br/>
                      お一人お一人の体質・体調に合わせた<br/>
                      <strong>レ・マンズ・M (エム)オリジナルトリートメントメソッド</strong>で<br/>
                      フェイシャル、ヘッドスパ<br/>
                      そして全身にわたりリンパマッサージを行い<br/>
                      お客様の美と健康に磨きをかけるお手伝いを<br/>
                      させていただいています。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="introduction is-fullheight">
            <h2 className="has-text-centered title">INTRODUCTION</h2>
            <div className="container">
              <div className="introduction__contents is-flex-desktop">
                <figure>
                  <img className="introduction__masako" src={masako} alt="masako" style={{ width: "200px" }} />
                </figure>
                <div className="masako-info">
                  <div className="name">
                    <p className="is-size-3 has-text-centered">長岡 末佐子</p>
                    <p className="is-size-4 has-text-centered">(ながおか まさこ)</p>
                  </div>
                  <p className="masako-text has-text-centered is-size-5">
                    レ・マンズ・Ｍ技術認定スクール代表<br />
                    (社)日本予防医学アカデミー認定校<br />
                    予防医学健康美協会リンパケアマネジャー<br />
                    心身痩術協会　美容整体師<br />
                    AYURVADA(アユルベーダ)セラピスト
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="school back is-fullheight">
            <h2 className="title has-text-centered">SCHOOL</h2>
            <div className="container">

            </div>
          </section>

          <section className="tel">
            <h2 className="title has-text-centered">CONTACT</h2>
            <p className="tel-number is-size-3 has-text-centered">090-8245-3516</p>
          </section>


          <section className="access back is-fullheight">
            <h2 className="has-text-centered title">ACCESS</h2>
            <div className="container">
              <p className="is-size-5">
                〒 721-0963<br/>
                広島県福山市南手城町3丁目7番9号
              </p>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.7487104581096!2d133.39406931462378!3d34.483898502307376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35511142c48dc3d5%3A0x330fb0bb6803506!2z44CSNzIxLTA5NjMg5bqD5bO255yM56aP5bGx5biC5Y2X5omL5Z-O55S677yT5LiB55uu77yX4oiS77yZ!5e0!3m2!1sja!2sjp!4v1518140441835"
                style={{
                  border: "0",
                  width: "100%",
                  height: "500px",
                  frameborder: "0"
                }}
              />
            </div>
          </section>
        </div>
        <footer className="footer">

        </footer>
      </div>
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
