<template>
  <VDialog
    v-model="compOpened"
    width="400"
  >
    <template #activator="options">
      <slot v-bind="options" />
    </template>

    <BreedForm
      ref="form"
      :value="value"
      :pending="pending"
      @submit="onSubmit"
      @cancel="onCancel"
    />
  </VDialog>
</template>

<script
  src="./index.ts"
  lang="typescript"
></script>
