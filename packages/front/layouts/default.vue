<template>
  <VApp dark>
    <VNavigationDrawer
      permanent
      app
    >
      <VListItem>
        <VListItemContent>
          <VListItemTitle class="text-h6">
            Handler-book
          </VListItemTitle>

          <VListItemSubtitle>
            Помощник хендлеру
          </VListItemSubtitle>
        </VListItemContent>
      </VListItem>

      <VDivider />

      <VList>
        <SidebarItem
          v-for="(item, index) in sidebar"
          :key="index"
          :item="item"
        />
      </VList>
    </VNavigationDrawer>

    <VAppBar fixed app>
      <VSpacer />

      <VBtn
        v-if="isGuest"
        icon
        to="/signIn"
      >
        <VIcon>fa-sign-in-alt</VIcon>
      </VBtn>

      <VBtn
        v-else
        icon
        to="/quit"
      >
        <VIcon>fa-sign-out-alt</VIcon>
      </VBtn>
    </VAppBar>
    <VMain>
      <VContainer>
        <VRow
          align="center"
          justify="center"
        >
          <VCol
            cols="12"
            sm="8"
            md="6"
            class="py-5"
          >
            <Nuxt />
          </VCol>
        </VRow>
      </VContainer>
    </VMain>
  </VApp>
</template>

<script
  src="./default/index.ts"
  lang="typescript"
></script>

<style
  src="./default/index.styl"
  lang="stylus"
  scoped
></style>
