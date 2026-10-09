<script setup>
import { computed } from 'vue'

const props = defineProps({
  id: { type: String, required: true },
  label: { type: String, required: true },
  modelValue: { type: String, default: '' },
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: '' },
  autocomplete: { type: String, default: 'off' },
  required: { type: Boolean, default: false },
  error: { type: String, default: '' },
  textarea: { type: Boolean, default: false },
  rows: { type: Number, default: 6 },
})

const emit = defineEmits(['update:modelValue', 'blur'])

const describedBy = computed(() => (props.error ? `${props.id}-error` : undefined))

function onInput(event) {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <div class="form-field" :class="{ 'form-field--invalid': error }">
    <label class="form-field__label" :for="id">
      {{ label }}
      <span v-if="required" class="form-field__required" aria-hidden="true">*</span>
    </label>

    <textarea
      v-if="textarea"
      :id="id"
      class="form-field__control"
      :value="modelValue"
      :placeholder="placeholder"
      :rows="rows"
      :required="required"
      :aria-invalid="error ? 'true' : undefined"
      :aria-describedby="describedBy"
      @input="onInput"
      @blur="emit('blur')"
    />
    <input
      v-else
      :id="id"
      class="form-field__control"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :required="required"
      :aria-invalid="error ? 'true' : undefined"
      :aria-describedby="describedBy"
      @input="onInput"
      @blur="emit('blur')"
    />

    <p v-if="error" :id="`${id}-error`" class="form-field__error" role="alert">
      {{ error }}
    </p>
  </div>
</template>

<style scoped>
.form-field {
  margin-bottom: var(--space-4);
}

.form-field__label {
  display: block;
  margin-bottom: 0.4rem;
  font-weight: 600;
  color: var(--color-text);
  font-size: var(--font-size-sm);
}

.form-field__required {
  color: var(--color-error);
}

.form-field__control {
  width: 100%;
  padding: 0.8rem 0.9rem;
  border: 2px solid var(--color-border);
  border-radius: var(--radius-sm);
  outline: none;
  background: var(--color-surface);
  color: var(--color-text);
  font-size: var(--font-size-base);
  font-family: inherit;
  transition: border-color var(--transition-base), box-shadow var(--transition-base);
  resize: vertical;
}

.form-field__control::placeholder {
  color: #a99;
}

.form-field__control:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(215, 111, 111, 0.18);
}

.form-field--invalid .form-field__control {
  border-color: var(--color-error);
}

.form-field__error {
  margin-top: 0.35rem;
  color: var(--color-error);
  font-size: var(--font-size-xs);
  font-weight: 600;
}
</style>
