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
            <VBtn
              icon
              :to="`/admin/breed-groups/${item.id}`"
            >
              <VIcon small>
                fa-link
              </VIcon>
            </VBtn>
          </VCol>

          <VCol class="col-auto">
            <VBtn
              icon
              :to="`/admin/breed-groups/${item.id}#edit`"
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
  </VCard>
</template>

<script
  src="./index.ts"
  lang="typescript"
></script>
