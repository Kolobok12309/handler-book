<template>
  <VDataTable
    :items="breeds"
    :headers="headers"
  >
    <template #item.actions="{ item }">
      <VRow
        class="flex-nowrap"
        no-gutters
        justify="center"
      >
        <VCol class="col-auto">
          <VBtn
            icon
            @click="onEdit(item)"
          >
            <VIcon small>
              fa-pencil-alt
            </VIcon>
          </VBtn>
        </VCol>

        <VCol class="col-auto">
          <VBtn
            icon
            @click="onDelete(item)"
          >
            <VIcon small>
              fa-trash
            </VIcon>
          </VBtn>
        </VCol>
      </VRow>
    </template>
  </VDataTable>
</template>

<script
  src="./index.ts"
  lang="typescript"
></script>
