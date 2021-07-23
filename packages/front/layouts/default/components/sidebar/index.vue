<template>
  <VNavigationDrawer
    app
    v-bind="$attrs"
    v-on="$listeners"
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

    <VList flat>
      <VListItem
        to="/"
        router
        exact
      >
        <VListItemAction />

        <VListItemContent>
          Главная
        </VListItemContent>
      </VListItem>

      <template v-if="isAdmin">
        <VSubheader>
          Админ
        </VSubheader>

        <VListGroup
          v-if="isAdmin"
          prepend-icon="fa-paw"
        >
          <template #activator>
            <VListItemTitle>
              Породы
            </VListItemTitle>
          </template>

          <VListItem
            to="/admin/breed-groups"
            router
            exact
          >
            <VListItemAction />

            <VListItemContent>
              Группы пород
            </VListItemContent>
          </VListItem>

          <VListItem
            to="/admin/breeds"
            router
            exact
          >
            <VListItemAction />

            <VListItemContent>
              Породы
            </VListItemContent>
          </VListItem>
        </VListGroup>
      </template>
    </VList>
  </VNavigationDrawer>
</template>

<script
  src="./index.ts"
  lang="typescript"
></script>
