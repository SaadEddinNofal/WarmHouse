import { onBeforeUnmount, onMounted, ref } from 'vue'

// Tracks which section is currently in view so navigation can highlight the
// active item. Gracefully degrades when IntersectionObserver is unavailable.
export function useScrollSpy(ids) {
  const activeId = ref(ids[0] ?? '')
  let observer

  onMounted(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const visible = new Set()
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        })
        const firstVisible = ids.find((id) => visible.has(id))
        if (firstVisible) activeId.value = firstVisible
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
  })

  onBeforeUnmount(() => observer?.disconnect())

  return { activeId }
}
