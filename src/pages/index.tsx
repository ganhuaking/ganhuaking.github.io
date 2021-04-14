import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { css, cx } from "@emotion/css";
import Layout from "@theme/Layout";
import React, { ReactNode } from "react";

const cssHeroBanner = css`
  label: HeroBanner;
  padding: 4rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 966px) {
    padding: 2rem;
  }
`;

const cssButtons = css`
  label: Buttons;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const cssFeatures = css`
  label: Features;
  display: flex;
  align-items: center;
  padding: 2rem 0;
  width: 100%;
`;

const cssFeatureImage = css`
  label: FeatureImage;
  height: 200px;
  width: 200px;
`;

const cssIframeContainer = css`
  label: IframeContainer;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-evenly;
  padding-bottom: 16px;
  --gap: 16px;
  margin: calc(0 - (var(--gap) / 2));
  & > * {
    margin: calc(var(--gap) / 2);
  }
`;

const features = [
  {
    title: "幹話開講",
    description: (
      <>
        技術群不再嚴肅，聊天吹水也是可以的！多個頻道可以選擇，再也不怕歪樓歪到太平洋去啦～
      </>
    ),
  },
  {
    title: "專業推坑",
    description: (
      <>
        開發路上滿坑滿谷，無論軟體硬體、技術坑、遊戲坑、3C
        坑⋯⋯找同好？獨樂樂不如眾樂樂，您不必再寂寞！
      </>
    ),
  },
  {
    title: "樂於分享",
    description: (
      <>
        強大陣容呼朋引伴，無論是實體研討會或是線上讀書會，技術分享到轉貼文章，熱愛分享的人通通在這裡！
      </>
    ),
  },
];

function Feature({
  imageUrl,
  title,
  description,
}: {
  imageUrl?: string;
  title: string;
  description: ReactNode;
}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className="col col--4">
      {imgUrl && (
        <div className="text--center">
          <img className={cssFeatureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title="蔣幹話軟體官方網站"
      description="台灣開發者的綜合型 Discord Server"
    >
      <header className={cx("hero hero--primary", cssHeroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={cssButtons}>
            <Link
              className="button button--outline button--lg"
              to={useBaseUrl("docs/")}
            >
              社群介紹
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={cssFeatures}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <div className={cssIframeContainer}>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGanHuaKingSoftware%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="340"
            height="500"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
          <iframe
            src="https://discordapp.com/widget?id=546392426122575874&theme=dark"
            width="340"
            height="500"
            // typescript can't recognize allowtransparency and react can't recognize allowTransparency
            /* @ts-ignore */
            allowtransparency="true"
            frameBorder="0"
          ></iframe>
        </div>
      </main>
    </Layout>
  );
}
