import type { Meta, StoryFn } from '@storybook/vue3'
import { GHeader } from '@/ui/GHeader'

const meta: Meta = {
  title: 'UI/Header',
  component: GHeader,
  parameters: { layout: 'fullscreen' },
}

export default meta

export const Header: StoryFn = (props) => <GHeader {...props} />
