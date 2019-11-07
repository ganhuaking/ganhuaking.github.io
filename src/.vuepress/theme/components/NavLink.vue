<template>
  <router-link
    class="nav-link"
    :to="link"
    v-if="!isExternal(link)"
    :exact="exact"
    >{{ item.text }}</router-link
  >
  <a
    class="nav-link external"
    v-else=""
    :href="link"
    :target="isMailto(link) || isTel(link) ? null : '_blank'"
    :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'"
  >
    <template v-if="icons[item.text]">
      <img class="my-icon" :alt="item.text" :src="icons[item.text]" />
    </template>
    {{ item.text }}
    <OutboundLink />
  </a>
</template>

<script>
import {
  isExternal,
  isMailto,
  isTel,
  ensureExt,
} from '@vuepress/theme-default/util';
import trophyIcon from '@fortawesome/fontawesome-free/svgs/solid/trophy.svg';
import discordIcon from '@fortawesome/fontawesome-free/svgs/brands/discord.svg';
import githubIcon from '@fortawesome/fontawesome-free/svgs/brands/github.svg';

export default {
  data() {
    return {
      icons: {
        風雲榜: trophyIcon,
        Discord: discordIcon,
        GitHub: githubIcon,
      },
    };
  },
  props: {
    item: {
      required: true,
    },
  },

  computed: {
    link() {
      return ensureExt(this.item.link);
    },

    exact() {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(
          rootLink => rootLink === this.link
        );
      }
      return this.link === '/';
    },
  },

  methods: {
    isExternal,
    isMailto,
    isTel,
  },
};
</script>

<style lang="less" scoped>
.my-icon {
  width: 1em;
  transform: scale(1.5);
  margin: 0 0.5em;
}

.nav-link {
  display: inline-flex;
  align-items: center;
}
</style>
