<script setup>
import { contact } from '@/data/site'
import { useContactForm } from '@/composables/useContactForm'
import FormField from '@/components/ui/FormField.vue'
import StatusMessage from '@/components/ui/StatusMessage.vue'
import AppIcon from '@/components/ui/AppIcon.vue'

const { form, errors, status, submit } = useContactForm()
</script>

<template>
  <section class="contact page-section">
    <div class="contact__grid">
      <!-- Info -->
      <div class="contact__info">
        <h1>Get in Touch</h1>
        <p>{{ contact.intro }}</p>

        <div class="info-box">
          <span class="info-box__icon" aria-hidden="true">
            <AppIcon name="mail" :size="22" />
          </span>
          <div>
            <h3>Email</h3>
            <p>
              <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
            </p>
          </div>
        </div>

        <div class="info-box">
          <span class="info-box__icon" aria-hidden="true">
            <AppIcon name="phone" :size="22" />
          </span>
          <div>
            <h3>Phone</h3>
            <p v-for="phone in contact.phones" :key="phone.value">
              {{ phone.label }}: {{ phone.value }}
            </p>
          </div>
        </div>

        <div class="info-box">
          <span class="info-box__icon" aria-hidden="true">
            <AppIcon name="map-pin" :size="22" />
          </span>
          <div>
            <h3>Location</h3>
            <p>{{ contact.location }}</p>
          </div>
        </div>
      </div>

      <!-- Form -->
      <div class="contact__form">
        <h2>Send Message</h2>

        <StatusMessage
          v-if="status"
          :variant="status.variant"
          :message="status.message"
        />

        <form novalidate @submit.prevent="submit">
          <FormField
            id="contact-name"
            v-model="form.name"
            label="Name"
            placeholder="Your name"
            autocomplete="name"
            required
            :error="errors.name"
          />
          <FormField
            id="contact-email"
            v-model="form.email"
            label="Email"
            type="email"
            placeholder="Your email"
            autocomplete="email"
            required
            :error="errors.email"
          />
          <FormField
            id="contact-subject"
            v-model="form.subject"
            label="Subject"
            placeholder="Subject"
            required
            :error="errors.subject"
          />
          <FormField
            id="contact-message"
            v-model="form.message"
            label="Message"
            textarea
            :rows="6"
            placeholder="Write your message..."
            required
            :error="errors.message"
          />

          <button type="submit" class="contact__submit">Send Message</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  max-width: var(--layout-max-width);
  margin: 0 auto;
  width: 100%;
}

.contact__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8);
  background: var(--color-surface);
  padding: var(--space-8);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(var(--color-primary-rgb), 0.08);
}

.contact__info h1 {
  color: var(--color-primary-dark);
  margin-bottom: var(--space-4);
  font-size: var(--font-size-2xl);
}

.contact__info > p {
  margin-bottom: var(--space-5);
  color: var(--color-text-muted);
}

.info-box {
  display: flex;
  gap: var(--space-4);
  background: var(--color-primary-tint);
  padding: var(--space-4);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-4);
}

.info-box__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--color-surface);
  color: var(--color-primary-dark);
}

.info-box h3 {
  color: var(--color-primary-dark);
  margin-bottom: 0.25rem;
  font-size: var(--font-size-base);
}

.info-box p {
  color: var(--color-text-subtle);
  font-size: var(--font-size-sm);
}

.info-box a {
  color: var(--color-primary-dark);
  font-weight: 600;
}

.contact__form h2 {
  color: var(--color-primary-dark);
  margin-bottom: var(--space-5);
  font-size: var(--font-size-xl);
}

.contact__submit {
  width: 100%;
  padding: 0.9rem;
  background: var(--color-primary);
  color: #fff;
  border: none;
  border-radius: var(--radius-sm);
  font-weight: 700;
  font-size: var(--font-size-base);
  cursor: pointer;
  transition: background var(--transition-base), transform var(--transition-base);
}

.contact__submit:hover {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
}

@media (max-width: 900px) {
  .contact__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .contact__grid {
    padding: var(--space-5);
  }
}
</style>
