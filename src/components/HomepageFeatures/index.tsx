import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "幹話開講",
    description: (
      <>
        {
          "技術群不再嚴肅，聊天吹水也是可以的！多個頻道可以選擇，再也不怕歪樓歪到太平洋去啦～"
        }
      </>
    ),
  },
  {
    title: "專業推坑",
    description: (
      <>
        {
          "開發路上滿坑滿谷，無論軟體硬體、技術坑、遊戲坑、3C坑⋯⋯找同好？獨樂樂不如眾樂樂，您不必再寂寞！"
        }
      </>
    ),
  },
  {
    title: "樂於分享",
    description: (
      <>
        {
          "強大陣容呼朋引伴，無論是實體研討會或是線上讀書會，技術分享到轉貼文章，熱愛分享的人通通在這裡！"
        }
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      {Svg && (
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
      )}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
