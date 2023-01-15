<template>
  <VCard
    class="sign-in-form mx-auto"
    max-width="340px"
  >
    <VCardTitle>
      Вход
    </VCardTitle>

    <VForm @submit.prevent="onSubmit">
      <VCardText>
        <VuelidateWrapper
          :validator="v$.form.email"
          #default="{ errorMessages }"
        >
          <VTextField
            v-model="form.email"
            label="Email"
            :errorMessages="errorMessages"
            :loading="pending"
            :disabled="pending"
            type="text"
            required
            placeholder="name@example.com"
          />
        </VuelidateWrapper>

        <VuelidateWrapper
          :validator="v$.form.password"
          #default="{ errorMessages }"
        >
          <VTextField
            v-model="form.password"
            label="Пароль"
            :errorMessages="errorMessages"
            :loading="pending"
            :disabled="pending"
            type="password"
            required
            placeholder="qwerty"
          />
        </VuelidateWrapper>
      </VCardText>

      <VCardActions>
        <VBtn
          color="primary"
          type="submit"
          :loading="pending"
          text
          outlined
        >
          Войти
        </VBtn>

        <VBtn
          color="secondary"
          to="/signUp"
          :loading="pending"
          text
        >
          Регистрация
        </VBtn>
      </VCardActions>
    </VForm>
  </VCard>
</template>

<script
  src="./index.ts"
  lang="typescript"
></script>
