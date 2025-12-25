import { createClient } from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'b5wniyr4', // I added your specific ID from your logs
  dataset: 'production',
  useCdn: false, // true = faster response, false = latest data
  apiVersion: '2023-05-03',
});

// This is the updated way to handle images
const builder = createImageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};