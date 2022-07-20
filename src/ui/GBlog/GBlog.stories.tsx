import type { Meta, StoryFn } from '@storybook/vue3'
import { GBlog } from '@/ui/GBlog'
import drinks from '@/assets/picture.png'

const meta: Meta = {
  title: 'UI/GBlog',
  component: GBlog,
  args: {
    image: drinks,
    title:
      '4 рецепта освежающих безалкогольных напитков: Мимоза, Мохито, Пина колада и Сангрия',
    text: 'Лето не может проходить без освежающих напитков, которые имеют восхитительный вкус и помогут вам освежиться. Сегодня мы приготовили рецепты коктейлей Мохито, Пина Колада, Мимоза и Сангрия.',
  },
}

export default meta

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const Blog: StoryFn = (props) => <GBlog {...props} />
