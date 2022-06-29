import type { Meta, StoryFn } from '@storybook/vue3'
import { GGood } from '.'

const meta: Meta = {
  title: 'UI/GGood',
  component: GGood,
  args: {
    image:
      'https://gymbeam.ua/media/catalog/product/cache/de8b8a861a2cc4c74face61b51a3ecba/m/o/moxy_power__wild_berries_330_ml_gymbeam_1.png',
    title: 'MOXY power+Energy Drink 300 мл Gymbeam',
    rating: 95,
    commentsCount: 83,
    price: 45,
  },
}

export default meta

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
export const Default: StoryFn = (props) => <GGood {...props} />
