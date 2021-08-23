import { groq, createClient, createImageUrlBuilder, createPreviewSubscriptionHook } from 'next-sanity'

const config = {
  dataset: 'production',
  projectId: '8dvxacm0',
  useCdn: process.env.NODE_ENV === 'production',
}

export const imageBuilder = (source) => createImageUrlBuilder(config).image(source)
export const usePreviewSubscription = createPreviewSubscriptionHook(config)
export const client = createClient(config)
export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

export const getClient = (usePreview) => (usePreview ? previewClient : client)
export default client
