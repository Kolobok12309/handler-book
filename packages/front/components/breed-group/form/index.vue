<template>
  <VCard>
    <VCardTitle>
      {{ title }}
    </VCardTitle>

    <VForm @submit.prevent="onSubmit">
      <VCardText>
        <VuelidateWrapper
          :validator="v$.form.name"
          #default="{ errorMessages }"
        >
          <VTextField
            v-model="form.name"
            label="Название группы"
            :errorMessages="errorMessages"
            type="text"
            required
            placeholder="Название"
          />
        </VuelidateWrapper>

        <VuelidateWrapper
          :validator="v$.form.fci"
          #default="{ errorMessages }"
        >
          <VTextField
            v-model="form.fci"
            label="FCI"
            :errorMessages="errorMessages"
            type="number"
            placeholder="#"
          />
        </VuelidateWrapper>
      </VCardText>

      <VDivider />

      <VCardActions>
        <VBtn
          color="green"
          type="submit"
          dark
        >
          {{ submitBtnText }}
        </VBtn>

        <VBtn
          color="secondary"
          @click="onCancel"
        >
          Отменить
        </VBtn>
      </VCardActions>
    </VForm>
  </VCard>
</template>

<script
  src="./index.ts"
  lang="typescript"
></script>
