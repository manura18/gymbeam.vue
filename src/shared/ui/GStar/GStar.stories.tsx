import type { Meta, StoryFn } from '@storybook/vue3'
import { GStar } from '.'

const meta: Meta = {
  title: 'UI/GStar',
  component: GStar,
  args: {
    isActive: false,
  },
}

export default meta

export const Default: StoryFn = (props) => <GStar {...props} />

export const isActive = Default.bind({})
isActive.args = { isActive: true }
