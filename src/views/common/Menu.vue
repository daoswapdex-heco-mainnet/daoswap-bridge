<template>
  <div>
    <div class="menu" v-if="!isMobile">
      <CLink :href="mainWebSiteUrl + '/#/swap'" class="item" target="_self">
        {{ $t('common.menu.swap') }}
      </CLink>
      <CLink :href="mainWebSiteUrl + '/#/pool'" class="item" target="_self">
        {{ $t('common.menu.pool') }}
      </CLink>
      <CLink :href="mainWebSiteUrl + '/#/dao'" class="item" target="_self">
        {{ $t('common.menu.dao') }}
      </CLink>
      <CLink :href="mainWebSiteUrl + '/#/governace'" class="item" target="_self">
        {{ $t('common.menu.governace') }}
      </CLink>
      <CLink
        :to="{ name: 'home' }"
        :class="$route.name == 'home' || $route.name == 'transactions' ? 'active item' : 'item'"
        target="_self"
      >
        {{ $t('common.menu.token') }}
      </CLink>
      <!-- <CLink
      :to="{ name: 'nft' }"
      :class="$route.name == 'nft' ? 'active item' : 'item'"
      target="_self"
    >
      {{ $t('common.menu.nft') }}
    </CLink> -->
    </div>
    <div class="menu" v-else>
      <img class="brand-logo" src="@/assets/toggle.png" @click="openMenu()" />

      <CDrawer :visible.sync="visible" class="menu-div">
        <div class="menu-drawer">
          <div class="menu-list">
            <CLink :href="mainWebSiteUrl + '/#/swap'" class="item" target="_self">
              {{ $t('common.menu.swap') }}
            </CLink>
          </div>
          <div class="menu-list">
            <CLink :href="mainWebSiteUrl + '/#/pool'" class="item" target="_self">
              {{ $t('common.menu.pool') }}
            </CLink>
          </div>
          <div class="menu-list">
            <CLink :href="mainWebSiteUrl + '/#/dao'" class="item" target="_self">
              {{ $t('common.menu.dao') }}
            </CLink>
          </div>
          <div class="menu-list">
            <CLink :href="mainWebSiteUrl + '/#/governace'" class="item" target="_self">
              {{ $t('common.menu.governace') }}
            </CLink>
          </div>
          <div class="menu-list">
            <CLink
              :to="{ name: 'home' }"
              :class="
                $route.name == 'home' || $route.name == 'transactions' ? 'active item' : 'item'
              "
              target="_self"
            >
              {{ $t('common.menu.token') }}
            </CLink>
          </div>
        </div>
      </CDrawer>
    </div>
  </div>
</template>

<script>
import { TARGET_MAINNET } from '@/utils/env';

export default {
  name: 'Menu',
  data() {
    return {
      mainnet: TARGET_MAINNET,
      mainWebSiteUrl: 'https://app.heco.daoswap.cc',
      isMobile: true,
      visible: false,
    };
  },
  mounted() {
    this.isMobile = this.$device.mobile;
  },
  methods: {
    openMenu() {
      this.visible = true;
    },
  },
};
</script>
<style scoped lang="scss">
.menu {
  display: flex;
  .item {
    font-size: 14px;
    font-family: PingFangTC-Medium, PingFangTC;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.6);
    line-height: 20px;
    padding: 0 40px 0 0;
    transition: all ease 0.3s;
  }
  .item:hover {
    color: rgba(255, 255, 255, 1);
    transition: all ease 0.3s;
  }
  .active {
    color: rgba(255, 255, 255, 1) !important;
  }
}
.menu-div {
  ::v-deep .c-drawer {
    width: 60%;
  }
}

.menu-drawer {
  height: 100vh;
  background: rgba(#000000, 0.5);
}

.menu-list {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  padding: 20px 40px;
  transition: all 0.3s;
  @include child-margin-h(16px);

  &:hover {
    background: rgba(#000000, 0.3);
    opacity: 0.8;
  }
}
</style>
