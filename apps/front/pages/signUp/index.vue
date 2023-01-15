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
          :validator="v$.form.name"
          #default="{ errorMessages }"
        >
          <VTextField
            v-model="form.name"
            label="Имя"
            :errorMessages="errorMessages"
            :loading="pending"
            :disabled="pending"
            type="text"
            required
            placeholder="Иванов Иван"
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
            placeholder="********"
          />
        </VuelidateWrapper>

        <VuelidateWrapper
          :validator="v$.form.confirmPassword"
          #default="{ errorMessages }"
        >
          <VTextField
            v-model="form.confirmPassword"
            label="Повторите пароль"
            :errorMessages="errorMessages"
            :loading="pending"
            :disabled="pending"
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
          :loading="pending"
          text
          outlined
        >
          Зарегистрироваться
        </VBtn>

        <VBtn
          color="secondary"
          to="/signIn"
          :loading="pending"
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
