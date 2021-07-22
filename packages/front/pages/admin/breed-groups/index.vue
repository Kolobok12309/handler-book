<template>
  <VCard>
    <VDataTable
      :items="breedGroups"
      :headers="headers"
    >
      <template #item.actions="{ item }">
        <VRow
          class="flex-nowrap"
          no-gutters
          justify="center"
        >
          <VCol class="col-auto">
            <VBtn icon>
              <VIcon small>
                fa-pencil-alt
              </VIcon>
            </VBtn>
          </VCol>

          <VCol class="col-auto">
            <VBtn icon>
              <VIcon small>
                fa-trash
              </VIcon>
            </VBtn>
          </VCol>
        </VRow>
      </template>
    </VDataTable>
  </VCard>
</template>

<script
  src="./index.ts"
  lang="typescript"
></script>

<style
  src="./index.styl"
  lang="stylus"
  scoped
></style>
