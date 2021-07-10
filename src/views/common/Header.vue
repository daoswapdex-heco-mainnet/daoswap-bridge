<template>
  <div class="header">
    <CLink class="brand" :to="{ name: 'home' }">
      <img class="brand-logo" src="@/assets/svg/logo.svg" />
    </CLink>
    <Menu />
    <CFlexSpan />
    <Wallets />
    <!-- <Networks /> -->
  </div>
</template>

<script>
import Wallets from './Wallets';
// import Networks from './Networks';
import Menu from './Menu';

export default {
  name: 'Header',
  components: {
    Wallets,
    // Networks,
    Menu,
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  @include child-margin-h(20px);
}

.brand {
  display: flex;
  align-items: center;
  @include child-margin-h(12px);
}

.brand-name {
  font-size: 20px;
}
</style>
