<template>
  <VCard>
    <VCardTitle>
      Породные группы
    </VCardTitle>

    <VCardSubtitle>
      <VBreadcrumbs
        :items="breadcrumbs"
        class="px-0"
      />
    </VCardSubtitle>

    <VDataTable
      :items="breedGroups"
      :headers="headers"
      :loading="pending"
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

    <VCardActions>
      <BreedGroupEditModal
        :opened.sync="addModalOpened"
        :pending="pending"
        #default="{ on, attrs }"
        @add="onAddBreedGroup"
      >
        <VBtn
          color="primary"
          v-bind="attrs"
          v-on="on"
        >
          Добавить группу
        </VBtn>
      </BreedGroupEditModal>
    </VCardActions>
  </VCard>
</template>

<script
  src="./index.ts"
  lang="typescript"
></script>
