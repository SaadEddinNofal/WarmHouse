<script setup>
import { RouterLink } from 'vue-router'
import { useAuthForm } from '@/composables/useAuthForm'
import AuthShell from '@/components/layout/AuthShell.vue'
import FormField from '@/components/ui/FormField.vue'
import StatusMessage from '@/components/ui/StatusMessage.vue'
import AppButton from '@/components/ui/AppButton.vue'

const { form, errors, status, submit } = useAuthForm('login')
</script>

<template>
  <AuthShell
    title="Welcome Back"
    subtitle="Login to continue exploring pets and supplies."
  >
    <StatusMessage
      v-if="status"
      :variant="status.variant"
      :message="status.message"
    />

    <form novalidate @submit.prevent="submit">
      <FormField
        id="login-email"
        v-model="form.email"
        label="Email Address"
        type="email"
        placeholder="Enter your email"
        autocomplete="email"
        required
        :error="errors.email"
      />
      <FormField
        id="login-password"
        v-model="form.password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        autocomplete="current-password"
        required
        :error="errors.password"
      />

      <AppButton type="submit" block>Login</AppButton>
    </form>

    <template #footer>
      Don't have an account?
      <RouterLink class="auth-link" :to="{ name: 'register' }">Register Now</RouterLink>
    </template>
  </AuthShell>
</template>
