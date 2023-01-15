<template>
  <VApp dark>
    <Sidebar v-model="drawer" />

    <VAppBar fixed app>
      <VAppBarNavIcon @click.stop="drawer = !drawer" />

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
            sm="12"
            md="10"
            lg="8"
            class="pa-9"
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
