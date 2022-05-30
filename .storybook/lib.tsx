import { type Component } from 'vue'
import App from '@/App.vue'

export const appDecorator = (Story: () => Component) => ({
  components: { App, story: Story() },
  setup: () => {
    return () => (
      <App>
        <story />
      </App>
    )
  },
})
