import type { Meta, StoryFn } from '@storybook/vue3'
import { GFooter } from '@/ui/GFooter'

const meta: Meta = {
  title: 'UI/Footer',
  component: GFooter,
}

export default meta

export const Footer: StoryFn = (props) => <GFooter {...props} />
