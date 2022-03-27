import React, { useEffect, useState } from "react";
import style from "./OpenSource.module.scss";

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
    <div className={style.repositories}>
      {repositories.map((repo) => (
        <a
          className={style.repo}
          key={repo.title}
          href={`https://discordapp.com/invite/${repo.inviteCode}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={style.logo}
            src={`https://cdn.jsdelivr.net/gh/discordapp/discord-open-source/logos/${repo.logo}`}
            alt={repo.title}
          />
          {repo.title}
        </a>
      ))}
    </div>
  );
}
