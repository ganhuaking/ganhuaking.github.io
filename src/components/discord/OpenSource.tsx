import { css } from "@emotion/css";
import React, { useEffect, useState } from "react";

const cssRepositories = css`
  label: Repositories;
  display: flex;
  flex-wrap: wrap;
`;

const cssRepo = css`
  label: Repo;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 8px;
`;

const cssLogo = css`
  label: Logo;
  filter: grayscale(100%) brightness(0%);
  --size: 24px;
  height: var(--size);
  width: var(--size);
  margin-right: 8px;
  html[data-theme="dark"] & {
    filter: grayscale(100%) brightness(100%);
  }
`;

export default function OpenSource() {
  const [repositories, setRepositories] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://cdn.jsdelivr.net/gh/discordapp/discord-open-source/communities.json"
      );
      setRepositories(
        (await res.json()).data.sort((a, b) => a.title.localeCompare(b.title))
      );
    })();
  }, []);
  if (!repositories) return null;
  return (
    <div className={cssRepositories}>
      {" "}
      {repositories.map((repo) => (
        <a
          className={cssRepo}
          key={repo.title}
          href={`https://discordapp.com/invite/${repo.inviteCode}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={cssLogo}
            src={`https://cdn.jsdelivr.net/gh/discordapp/discord-open-source/logos/${repo.logo}`}
            alt={repo.title}
          />
          {repo.title}
        </a>
      ))}
    </div>
  );
}
