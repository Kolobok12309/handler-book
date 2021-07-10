<template>
  <VCard
    class="sign-in-form mx-auto"
    max-width="340px"
  >
    <VCardTitle>
      Регистрация
    </VCardTitle>

    <VForm @submit.prevent="onSubmit">
      <VCardText>
        <VuelidateWrapper
          :validator="v$.email"
          #default="{ errorMessages }"
        >
          <VTextField
            v-model="email"
            label="Email"
            :errorMessages="errorMessages"
            type="text"
            required
            placeholder="name@example.com"
          />
        </VuelidateWrapper>

        <VuelidateWrapper
          :validator="v$.name"
          #default="{ errorMessages }"
        >
          <VTextField
            v-model="name"
            label="Имя"
            :errorMessages="errorMessages"
            type="text"
            required
            placeholder="Иванов Иван"
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
            placeholder="********"
          />
        </VuelidateWrapper>

        <VuelidateWrapper
          :validator="v$.confirmPassword"
          #default="{ errorMessages }"
        >
          <VTextField
            v-model="confirmPassword"
            label="Повторите пароль"
            :errorMessages="errorMessages"
            type="password"
            required
            placeholder="********"
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
          Зарегистрироваться
        </VBtn>

        <VBtn
          color="secondary"
          to="/signIn"
          text
        >
          Вход
        </VBtn>
      </VCardActions>
    </VForm>
  </VCard>
</template>

<script
  src="./index.ts"
  lang="typescript"
></script>
