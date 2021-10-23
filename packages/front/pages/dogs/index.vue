<template>
  <VCard>
    <VCardTitle>
      Список собак
    </VCardTitle>

    <VCardSubtitle>
      <VBreadcrumbs
        :items="breadcrumbs"
        class="px-0"
      />
    </VCardSubtitle>

    <VDataTable
      :items="dogs"
      :headers="headers"
      :loading="pending"
      :item-class="itemClass"
      @click:row="onDogClick"
    />
  </VCard>
</template>

<script
  src="./index.ts"
  lang="typescript"
></script>

<style
  src="./index.styl"
  lang="stylus"
></style>

