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
          :validator="v$.email"
          #default="{ errorMessages }"
        >
          <VTextField
            v-model="email"
            label="Имя пользователя или email"
            :errorMessages="errorMessages"
            type="text"
            required
            placeholder="name@example.com"
          />
        </VuelidateWrapper>

        <VuelidateWrapper
          :validator="v$.password"
          #default="{ errorMessages }"
        >
          <VTextField
            v-model="password"
            label="Пароль"
            :errorMessages="errorMessages"
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
          text
          outlined
        >
          Войти
        </VBtn>

        <VBtn
          color="secondary"
          to="/signUp"
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

<style
  src="./index.styl"
  lang="stylus"
  scoped
></style>
