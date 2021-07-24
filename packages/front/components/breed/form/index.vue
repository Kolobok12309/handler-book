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
            label="Название породы"
            :errorMessages="errorMessages"
            :loading="pending"
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
            v-model.number="form.fci"
            label="FCI"
            :errorMessages="errorMessages"
            :loading="pending"
            type="number"
            placeholder="#"
          />
        </VuelidateWrapper>

        <VCombobox
          v-model="form.subgroups"
          :items="subBreedNames"
          :loading="pending"
          label="Подгруппы"
          multiple
          chips
        />
      </VCardText>

      <VDivider />

      <VCardActions>
        <VBtn
          color="green"
          type="submit"
          dark
          :loading="pending"
        >
          {{ submitBtnText }}
        </VBtn>

        <VBtn
          color="secondary"
          :loading="pending"
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
