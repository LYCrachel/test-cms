import React from "react";
import Link from "gatsby-link";
import Script from "react-load-script";
import graphql from "graphql";
import masako from "../img/masako.jpg";
import logo from "../img/Lesmains_logo_transparent.gif";
import counseling from "../img/shop6.jpg";
import space from "../img/shop5.jpg";

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
          <div className="yuba">
            <figure className="image-masako-logo">
              <img src={logo} alt="logo" style={{ width: '200px' }} />
            </figure>
            <p className="titleText">優しい温もりに心癒されるリラクゼーションスペース</p>
            <h1 className="mainTitle">レ・マンズ・M</h1>
          </div>
        </div>
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={() => this.handleScriptLoad()}
        />
        <div className="container">
          <div className="main_content">
            <div className="greeting">
              <div className="greeting-head">
                <p className="greeting-1">ご訪問ありがとうございます</p>
                <p className="greeting-2">今年1月に南手城町にリニューアルオープンしました</p>
                <p className="greeting-3">美しさと健康に導く「手」のある癒しの空間</p>
                <h2 className="greeting-4"><span>レ・マンズ・M (エム)</span>です。</h2>
              </div>
              <div className="greeting-middle">
                <div className="space">
                  <figure className="space-img">
                    <img src={counseling} alt="counseling" style={{ width: '200px' }} />
                  </figure>
                </div>
                <div className="text-area">
                  <p className="text-top">サロンスペースでは、</p>
                  <p classNam="text-contents">お客様へのカウンセリングを行ったり</p>
                  <p classNam="text-contents">施術後にオススメのお茶で寛いで頂いており</p>
                  <p classNam="text-contents"><span>「ゆったりできる」と評判です。</span></p>
                </div>
              </div>
              <div className="greeting-bottom">
                <div className="text-area2">
                  <p className="text2-top">「ついつい寝てしまいます」</p>
                  <p className="text2-contents">と、お声を頂く施術スペースでは</p>
                  <p className="text2-contents">お一人お一人の体質・体調に合わせた</p>
                  <p className="text2-contents"><span>レ・マンズ・M (エム)オリジナルトリートメントメソッド</span>で</p>
                  <p className="text2-contents">フェイシャル、ヘッドスパ、そして全身にわたり</p>
                  <p className="text2-contents">リンパマッサージを行い</p>
                  <p className="text2-contents">お客様の美と健康に磨きをかけるお手伝いを</p>
                  <p className="text2-contents">させていただいています。</p>
                </div>
                <div className="space">
                  <figure className="space-img">
                    <img src={space} alt="space" style={{ width: '200px' }}/>
                  </figure>
                </div>
              </div>
            </div>
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
              <p className="name">長岡 末佐子</p>
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
