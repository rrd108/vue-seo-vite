import axios from 'axios'

export { onBeforeRender }

async function onBeforeRender(pageContext) {
  // `.page.server.js` files always run in Node.js; we could use SQL/ORM queries here.
  const res = await axios.get('https://hur.webmania.cc/products.json')
  const products = res.data.products

  // We make `products` available as `pageContext.pageProps.products`
  const pageProps = { products }
  return {
    pageContext: {
      pageProps,
    },
  }
}

export const passToClient = ['pageProps']
