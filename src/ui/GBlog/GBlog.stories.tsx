import type { Meta, StoryFn } from '@storybook/vue3'
import { GBlog } from '@/ui/GBlog'

const meta: Meta = {
  title: 'UI/GBlog',
  component: GBlog,
}

export default meta

export const Blog: StoryFn = (props) => <GBlog {...props} />
