import type { Meta, StoryFn } from '@storybook/vue3'
import { GSwiper } from '.'

const meta: Meta = {
  title: 'UI/GSwiper',
  component: GSwiper,
}

export default meta

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
export const Default: StoryFn = (props) => <GSwiper {...props} />
