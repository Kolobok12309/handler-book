<template>
  <VDivider v-if="canSee && item.isDivider" />

  <VListGroup
    v-else-if="canSee && item.items"
    :prepend-icon="item.icon"
  >
    <template #activator>
      <VListItemTitle>
        {{ item.title }}
      </VListItemTitle>
    </template>

    <SidebarItem
      v-for="(subItem, index) in item.items"
      :key="index"
      :item="subItem"
    />
  </VListGroup>

  <VListItem
    v-else-if="canSee"
    :to="item.to"
    router
    exact
  >
    <VListItemAction>
      <VIcon v-if="item.icon">
        {{ item.icon }}
      </VIcon>
    </VListItemAction>

    <VListItemContent v-text="item.title" />
  </VListItem>
</template>

<script
  src="./index.ts"
  lang="typescript"
></script>
