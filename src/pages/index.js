import React from "react";
import Link from "gatsby-link";
import Script from "react-load-script";
import graphql from "graphql";
import masako from "../img/masako.jpg";
import logo from "../img/Lesmains_logo_transparent.gif";
import counseling from "../img/shop_2.jpg";
import space from "../img/shop_1.jpg";
import title from "../img/レマンズ.gif";
import logologo from "../img/logo.gif";

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
            <h2 className="title has-text-centered">≪INFORMATION≫</h2>
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
            <h2 className="title has-text-centered">≪SALON CONCEPT≫</h2>
            <div className="greeting__main">
              <p className="is-size-5 has-text-centered greeting__text">
                レ・マンズ・M (エム)では、<br/>
                ・東洋医学より、経絡・経穴（ツボ）<br/>
                ・西洋医学より、リンパドレナージュ<br/>
                ・インド伝承医学より、アーユルヴェーダ。<br/>
                それぞれの施術を融合し<br/>
                「レ・マンズ・M・オリジナルトリートメントメゾット」<br/>
                を、つくりあげました。<br/>
                この「体の中から不要な老廃物などを排出し、キレイになる特別なメソット」<br/>
                で、あなたの美しさにさらなる磨きをかけるお手伝いをいたします。
              </p>
              <div className="container greeting__concept">
                <div className="is-flex-desktop">
                  <figure>
                    <img
                      className="greeting__image"
                      src={logologo}
                      alt="logologo"
                      style={{ width: "200px" }}
                    />
                  </figure>
                  <div className="greeting__text--first">
                    <h4 className="is-size-5">Consept1　優しさの溢れる手</h4>
                    <p className="is-size-6">
                      「レ・マンス(Les Mains)」とは、<br/>
                      フランス語で「両手」を意味します。<br/>
                      暖かく、ふくよかな手で包まれた時の<br/>
                      あの優しい感覚をトリートメントとサロンに活かしています。<br/>
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
                    <h4 className="is-size-5">Concept2　お客様と丁寧に向き合う</h4>
                    <p className="is-size-6">
                      2006年11月のオープン以来、もっとも大切にしているのは、<br/>
                      「お客様一人ひとりの体質や体調、ご希望に合わせた最適なトリートメントの提供」。<br/>
                      自らの体験を通して「これ！」と思う技術を習得し、<br/>
                      磨き続けた中から生まれたオリジナルのメソットで、<br/>
                      お客様の美と健康の目的に合わせてサポートいたします。<br/>
                    </p>
                  </div>
                </div>
                <div className="is-flex-desktop">
                  <figure>
                    <img
                      className="greeting__image"
                      src={counseling}
                      alt="counseling"
                      style={{ width: "200px" }}
                    />
                  </figure>
                  <div className="greeting__text--third">
                    <h4 className="is-size-5">Concept3　心と体がゆったりする時空間づくり</h4>
                    <p className="is-size-6">
                      オリジナルのメソッドによるトリートメントは、ゆったりとした時間の流れの中で、<br />
                      優しい音楽や照明の灯り、心が柔らかくなる香りなど、<br />
                      五感に心地よい心と体への癒しの空間にて体感いただけます。<br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="introduction is-fullheight">
            <h2 className="has-text-centered title">≪INTRODUCTION≫</h2>
            <div className="container">
              <div className="introduction__contents is-flex-desktop">
                <figure>
                  <img className="introduction__masako" src={masako} alt="masako" />
                </figure>
                <div className="introduction__masako-info">
                  <div className="introduction__name">
                    <p className="is-size-3 has-text-centered">長岡 末佐子</p>
                    <p className="is-size-4 has-text-centered">(ながおか まさこ)</p>
                  </div>
                  <table className="introduction__masako--text has-text-centered is-size-5">
                    <tbody>
                      <tr className="introduction__masako--sell">
                        <th className="introduction__masako--title">2005年 5月</th>
                        <td className="introduction__masako--contents">予防医学健康美協会</td>
                        <td className="introduction__masako--contents">リンパケアアドバイザーの資格取得</td>
                      </tr>
                      <tr className="introduction__masako--sell">
                        <th className="introduction__masako--title" rowSpan="2">2005年10月</th>
                        <td className="introduction__masako--contents" colSpan="2">日本ナチュラルカラーリストスクール</td>
                      </tr>
                      <tr>
                        <td className="introduction__masako--contents introduction__next--text" colSpan="2">センセーション・カラーセラピーセラピスト取得</td>
                      </tr>
                      <tr className="introduction__masako--sell">
                        <th className="introduction__masako--title" rowSpan="2">2006年 4月</th>
                        <td className="introduction__masako--contents" rowSpan="2">予防医学健康美協会</td>
                        <td className="introduction__masako--contents">リンパケアマネージャーの資格取得後</td>
                      </tr>
                      <tr>
                        <td className="introduction__masako--contents introduction__next--text">スクール講師になる</td>
                      </tr>
                      <tr className="introduction__masako--sell">
                        <th className="introduction__masako--title">2006年11月</th>
                        <td className="introduction__masako--contents">身心療術師協会</td>
                        <td className="introduction__masako--contents">経絡セラピスト中級コース取得</td>
                      </tr>
                      <tr>
                        <th className="introduction__masako--title">2010年 5月</th>
                        <td className="introduction__masako--contents">レ・マンズ・M</td>
                        <td className="introduction__masako--contents">中医リンパケア技術認定スクール　代表</td>
                      </tr>
                      <tr>
                        <th className="introduction__masako--title">2010年10月</th>
                        <td className="introduction__masako--contents">マユーラ企画（(株)）</td>
                        <td className="introduction__masako--contents">アーユルヴェーダ　ヘッドアビアンガ取得</td>
                      </tr>
                      <tr>
                        <th className="introduction__masako--title">2010年11月</th>
                        <td className="introduction__masako--contents introduction__next--text" colSpan="2">ボディアビアンガ取得</td>
                      </tr>
                      <tr>
                        <th className="introduction__masako--title">2013年 4月</th>
                        <td className="introduction__masako--contents" colSpan="2">(社)1:29:300日本予防医学アカデミー技術講師兼務</td>
                      </tr>
                      <tr>
                        <th className="introduction__masako--title" rowSpan="2">2015年 8月</th>
                        <td className="introduction__masako--contents" colSpan="2">(社)インターナショナルスーパーフード協会</td>
                      </tr>
                      <tr>
                        <td className="introduction__masako--contents introduction__next--text" colSpan="2">スーパーフードアドバイザー　取得</td>
                      </tr>
                      <tr>
                        <th className="introduction__masako--title">2017年 3月</th>
                        <td className="introduction__masako--contents">レ・マンズ・M</td>
                        <td className="introduction__masako--contents">中医学ボディコーディネートスクール　代表</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <section className="concept back is-fullheight">
            <h2 className="title has-text-centered">≪SCHOOL CONCEPT≫</h2>
            <div className="container">
              <div className="concept__main has-text-centered">
                <p className="concept__text">
                  カラーセラピーで見る、<span>レ・マンズ・M</span>のコンセプト！<br/>
                  レ・マンズ・Mのスクールコンセプトは、<br/>
                  レ・マンズ・Mのロゴの中にすべて表されています。<br/>
                  確かな知識と技術で、お客様に施術を行い、ボディケアはもちろんの事、<br/>
                  暖かさや、心の癒しを、感じて頂けるサロンであり、施術者でありたいという思いを基本に、<br/>
                  このロゴが出来上がりました。
                </p>
              </div>
              <div className="concept__color">
                <h3><strong><span>ローズマゼンダ（❤の色）</span>「成熟」と「収穫」第8チャクラ</strong></h3>
                <p>
                  レッドの情熱とブルーの視野の広さを持っています。<br/>
                  「今を生きる」レッドは、先の報酬に囚われることなく、今の情熱のままに「種まき（能動的アクション）」を起こします。<br/>
                  逆の質を持つブルーは短絡的にならず、その「種を育て」「収穫を待つ」事が出来ます。<br/>
                  受け取った収穫はまた「種」になります。<br/>
                  こうして、一見バラバラな行為を「自分から差し出すこと」で「自分で繋ぎ」<br/>
                  「より多くの成熟（成果）を得る事ができる」のがローズマゼンダの「成熟」「収穫」なのです。
                </p>
              </div>{/*concept__color*/}
              <div className="concept__colorOther">
                <h3 className="has-text-centered is-size-4">レ・マンズ　＝　両手（❤の下の5色）</h3>
                <div className="concept__colorOther--top is-flex-desktop">
                  <div className="concept__colorOther--red">
                    <h4><strong><span>❤レッド</span>「火」の色　第1チャクラ</strong></h4>
                    <p>
                      「火が赤々と燃えるさま」を表しています。<br/>
                      人間の文明は「火により始まる」と言われています。<br/>
                      「火」は古くから「エネルギー」「パワー」「生命力」を表し、<br/>
                      「人類の進歩（前進）」の礎だったのです。
                    </p>
                  </div>{/*concept__colorOther--red*/}
                  <div className="concept__colorOther--orange">
                    <h4><strong><span>❤オレンジ</span>「燃え盛る(焚火)」の色　第2チャクラ(五感刺激)</strong></h4>
                    <p>
                      人々は「焚火」の周囲に集い、古代も今も、人々は、<br/>
                      火を囲んで語らい、<br/>
                      簡素な暮らしの中の僅かな時間を楽しみました。<br/>
                      「刺激的」「楽しい」「社交的」<br/>
                      「美味しいもの」を食べる「綺麗なもの」を見る<br/>
                      新しい分野（人間関係や経験など）を「開拓」するなど、<br/>
                      「いつもと違うことをしている自分」を楽しむ色です。
                    </p>
                  </div>{/*concept__colorOther--orange*/}
                </div>{/*concept__colorOther--top*/}
                <div className="concept__colorOther--middle is-flex-desktop">
                  <div className="concept__colorOther--yellow">
                    <h4><strong><span>❤イエロー</span>「太陽」の色　第3チャクラ(精神的刺激)</strong></h4>
                    <p>
                      「知性」「知識」を意味します。<br/>
                      「知識を探究する」「好奇心をみたす」<br/>
                      ことは黄色の「喜び」を生み出します。<br/>
                      何かを学んだり、知識を増やしたりするのに向いています。<br/>
                      太陽が放出する「光」は、「知性」も表します。<br/>
                      「黄」の語源は火のついた矢！<br/>
                      黄色の「知性」は、その光の矢で後世までを照らします。
                    </p>
                  </div>{/*concept__colorOther--yellow*/}
                  <div className="concept__colorOther--green">
                    <h4><strong><span>❤グリーン</span>「調和」の色　第4チャクラ(ハート)</strong></h4>
                    <p>
                      緑は「群居性」のある「植物」の色。「心のまま」に「自由」に<br />
                      「変化・成長」を遂げながら周囲の人とも「調和」が取れていれば<br/>
                      「リラックス」の中で「自己成長」を感じます。<br/>
                      緑色は「対人関係と自己の調和」をサポートしてくれる色です。
                    </p>
                  </div>{/*concept__colorOther--green*/}
                </div>{/*concept__colorOter--middle*/}
                <div className="concept__colorOther--blue">
                  <h4><strong><span>❤ブルー</span>「受容性」の色　第5チャクラ(精神性・哲学)</strong></h4>
                  <p>
                    青は「言葉による自己表現」「受け入れて手放す」青のエネルギーは<br/>
                    「自分の想いを語る」ための内外のサポートをしてくれます。<br/>
                    青の大きなテーマ。「女性性・包み込む事・受け入れる」<br/>
                    青の2つの象徴的側面「女性性の需要」「男性性の権威」<br/>
                    一見相反する2つの意味はどちらも等しく青の側面なのです。
                  </p>
                </div>{/*concept__colorOther--blue*/}
              </div>{/*concept__colorOther*/}
            </div>
          </section>
          <section className="school is-fullheight">
            <h2 className="title has-text-centered">≪SCHOOL≫</h2>
            <div className="school__main container">
              
            </div>{/*school*/}
          </section>
          <section className="menu is-fullheight">
            <h2 className="title has-text-centered">≪MENU≫</h2>
            <div className="container">
              <div className="menu__main">
                <div className="menu__contents--back">
                  <table className="menu__contents">
                    <tbody>
                      <tr>
                        <th className="menu__title"colSpan="3" rowSpan="3"><strong>経絡リンパケアトリートメント</strong></th>
                        <td className="menu__price">40分</td>
                        <td className="menu__price">4,500円</td>
                      </tr>
                      <tr>
                        <td className="menu__price">60分</td>
                        <td className="menu__price">5,500円</td>
                      </tr>
                      <tr>
                        <td className="menu__price">80分</td>
                        <td className="menu__price">7,500円</td>
                      </tr>
                      <tr className="menu__contents">
                        <th className="menu__title"rowSpan="4">痩身</th> 
                        <th className="menu__title"rowSpan="2">上半身 or 下半身</th>
                        <th className="menu__title">（ 1回）</th>
                        <td className="menu__price" colSpan="2">5,000円</td>
                      </tr>
                      <tr>
                        <th className="menu__title">（12回）</th>
                        <td className="menu__price" colSpan="2">45,000円</td>
                      </tr>
                      <tr>
                        <th className="menu__title"rowSpan="2">全身</th>
                        <th className="menu__title">（ 1回）</th>
                        <td className="menu__price" colSpan="2">9,000円</td>
                      </tr>
                      <tr>
                        <th className="menu__title">（12回）</th>
                        <td className="menu__price" colSpan="2">75,000円</td>
                      </tr>
                      <tr>
                        <th className="menu__title"colSpan="3">フェイス（超音波付）</th>
                        <td className="menu__price" colSpan="2">3,000円</td>
                      </tr>
                      <tr>
                        <td className="menu__price" colSpan="3">プラスパック</td>
                        <td className="menu__price" colSpan="2">500円</td>
                      </tr>
                      <tr>
                        <th className="menu__title"colSpan="3">超音波（セルフ）</th>
                        <td className="menu__price" colSpan="2">500円</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="privilege is-size-4 has-text-centered">
                  <h3 className="is-size-3"><strong>≪特典≫</strong></h3>
                  <div className="menu__contents--back is-flex-desktop has-text-centered">
                    <div className="privilege__first">
                      <h4><strong>☆ポイントカード</strong></h4>
                      <p>
                        1,000円で1P<br/>
                        30P 1,000円割引<br/>
                        50P 2,000円割引<br/>
                      </p>
                    </div>{/*privilege__first*/}
                    <div className="privilege__second">
                      <h4><strong>☆ご来店割引券</strong></h4>
                      <p>
                        ご来店1回に付き<br />
                        200円券<br />
                      </p>
                    </div>{/*privilege__second*/}
                    <div className="privilege__third">
                      <h4><strong>☆ご紹介割引券</strong></h4>
                      <p>
                        お一人ご紹介で<br />
                        500円券<br />
                      </p>
                    </div>{/*privilege__third*/}
                  </div>{/*is-flex-desktop*/}
                </div>{/*privilege*/}
              </div>{/*menu__main*/}
            </div>{/*container*/}
          </section>

          <section className="tel back">
            <h2 className="title has-text-centered">≪CONTACT≫</h2>
            <p className="tel-number is-size-3 has-text-centered">090-8245-3516</p>
          </section>


          <section className="access is-fullheight">
            <h2 className="has-text-centered title">≪ACCESS≫</h2>
            <div className="container access__address">
              <p className="is-size-4-desktop is-size-5-touch">
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
