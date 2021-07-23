<template>
  <VDialog
    v-model="compOpened"
    width="400"
  >
    <template #activator="options">
      <slot v-bind="options" />
    </template>

    <BreedGroupForm
      ref="form"
      :value="value"
      @submit="onSubmit"
      @cancel="onCancel"
    />
    </VCard>
  </VDialog>
</template>

<script
  src="./index.ts"
  lang="typescript"
></script>
