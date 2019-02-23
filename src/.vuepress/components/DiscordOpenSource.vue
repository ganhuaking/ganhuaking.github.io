<template lang="pug">
  .repos(v-if="repos")
    a.repo(
      v-for="repo in repos"
      :key="repo.title"
      :href="`https://discordapp.com/invite/${repo.inviteCode}`"
      target="_blank"
      rel="noopener noreferrer"
    )
      img.logo(
        :src="`https://cdn.jsdelivr.net/gh/discordapp/discord-open-source/logos/${repo.logo}`"
        :alt="repo.title"
      )
      | {{repo.title}}
</template>

<script>
export default {
  name: "DiscordOpenSource",
  data() {
    return {
      repos: null
    };
  },
  async mounted() {
    const res = await fetch(
      "https://cdn.jsdelivr.net/gh/discordapp/discord-open-source/communities.json"
    );
    this.repos = (await res.json()).data.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }
};
</script>

<style lang="sass" scoped>
.repos
  display: flex
  flex-wrap: wrap
.repo
  display: flex
  flex-direction: row
  justify-content: center
  align-items: center
  margin: 8px
.logo
  filter: grayscale(100%) brightness(0%)
  --size: 24px
  height: var(--size)
  width: var(--size)
  margin-right: 8px
</style>
