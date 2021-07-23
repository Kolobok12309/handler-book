<template>
  <VCard>
    <VCardTitle>
      #{{ breedGroup.fci }} {{ breedGroup.name }}
    </VCardTitle>

    <VCardSubtitle>
      <VBreadcrumbs
        :items="breadcrumbs"
        class="px-0"
      />
    </VCardSubtitle>

    <VCardText>
      <VSubheader>
        Породы
      </VSubheader>
    </VCardText>

    <BreedTable
      :breeds="breedGroup.breeds"
      @edit="onBreedEdit"
      @delete="onBreedDelete"
    />

    <VCardActions class="flex-wrap">
      <VBtn
        color="secondary"
        @click="onBreedAdd"
      >
        Добавить породу
      </VBtn>

      <VBtn
        color="primary"
        @click="onGroupEdit"
      >
        Изменить
      </VBtn>

      <VBtn
        color="red"
        dark
        @click="onGroupDelete"
      >
        Удалить группу
      </VBtn>
    </VCardActions>
  </VCard>
</template>

<script
  src="./index.ts"
  lang="typescript"
></script>
