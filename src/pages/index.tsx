import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";
import styles from "./index.module.scss";
import clsx from "clsx";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link to="/docs">
            <img
              alt="Logo"
              width="360"
              src="https://ganhuaking.tw/asset-2022/03-27-brand/ganhuaking2022.svg"
            />
          </Link>
          <Link className="button button--secondary button--lg" to="/docs">
            {"社群介紹"}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="蔣幹話軟體官方網站"
      description="台灣開發者的綜合型 Discord Server"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <div className={styles.iframeContainer}>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGanHuaKingSoftware%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width={340}
            height={500}
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder={0}
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
          <iframe
            src="https://discordapp.com/widget?id=546392426122575874&theme=dark"
            width={340}
            height={500}
            allowTransparency
            frameBorder={0}
          ></iframe>
        </div>
      </main>
    </Layout>
  );
}
