<script setup>
import { RouterLink } from 'vue-router'
import { useAuthForm } from '@/composables/useAuthForm'
import AuthShell from '@/components/layout/AuthShell.vue'
import FormField from '@/components/ui/FormField.vue'
import StatusMessage from '@/components/ui/StatusMessage.vue'
import AppButton from '@/components/ui/AppButton.vue'

const { form, errors, status, submit } = useAuthForm('register')
</script>

<template>
  <AuthShell
    title="Create Account"
    subtitle="Join our community and help animals find a loving home."
  >
    <StatusMessage
      v-if="status"
      :variant="status.variant"
      :message="status.message"
    />

    <form novalidate @submit.prevent="submit">
      <FormField
        id="register-name"
        v-model="form.fullName"
        label="Full Name"
        placeholder="Enter your full name"
        autocomplete="name"
        required
        :error="errors.fullName"
      />
      <FormField
        id="register-email"
        v-model="form.email"
        label="Email Address"
        type="email"
        placeholder="Enter your email"
        autocomplete="email"
        required
        :error="errors.email"
      />
      <FormField
        id="register-password"
        v-model="form.password"
        label="Password"
        type="password"
        placeholder="Create password"
        autocomplete="new-password"
        required
        :error="errors.password"
      />
      <FormField
        id="register-confirm"
        v-model="form.confirmPassword"
        label="Confirm Password"
        type="password"
        placeholder="Confirm password"
        autocomplete="new-password"
        required
        :error="errors.confirmPassword"
      />

      <AppButton type="submit" block>Register</AppButton>
    </form>

    <template #footer>
      Already have an account?
      <RouterLink class="auth-link" :to="{ name: 'login' }">Login</RouterLink>
    </template>
  </AuthShell>
</template>
