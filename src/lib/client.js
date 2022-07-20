import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '9umh32q5',
    dataset: 'production',
    apiVersion: '2022-07-14',
    useCdn: 'true',
    token: 'skRdycOHtMm2Mp66l16Fr635Xr3L6TQuBLj8XmdGZisaueRUcmUqVkzBqk9p3c1xMLDpHHhzF5AiwoeZjcGAANd0TysehRXKfk8y1mWQkXredsFBxtIEyHzVG9PTSg8wgeI8iqMRhQMnEu1w6N63Y2FALA56XiVABPpdEl5M47Wd3fCX185r',
},
console.log("connected"),
)



const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);