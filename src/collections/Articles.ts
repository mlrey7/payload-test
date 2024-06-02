import SampleTailwindAlert from '@/components/SampleTailwindAlert'
import type { CollectionConfig } from 'payload/types'

export const Articles: CollectionConfig = {
  slug: 'articles',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Content',
      required: true,
    },
    {
      name: 'alert',
      type: 'ui',
      admin: {
        components: {
          Field: SampleTailwindAlert,
        },
      },
    },
  ],
}
