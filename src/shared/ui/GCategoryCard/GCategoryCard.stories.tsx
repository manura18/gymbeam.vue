import type { Meta, StoryFn } from '@storybook/vue3'
import { GCategoryCard } from '.'

const meta: Meta = {
  title: 'UI/GCategoryCard ',
  component: GCategoryCard,
}

export default meta

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
export const Default: StoryFn = (props) => <GCategoryCard {...props} />
