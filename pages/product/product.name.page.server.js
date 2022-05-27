export async function onBeforeRender(pageContext) {
  // The route parameter of `/product/:name` is available at `pageContext.routeParams`
  const { productName } = pageContext.routeParams

  // Our render and hydrate functions we defined earlier pass `pageContext.pageProps` to
  // the root Vue component `Page`; this is where we define `pageProps`.
  const pageProps = { productName }

  // We make `pageProps` available as `pageContext.pageProps`
  return {
    pageContext: {
      pageProps,
    },
  }
}

// By default `pageContext.*` are available only on the server. But our hydrate function
// we defined earlier runs in the browser and needs `pageContext.pageProps`; we use
// `passToClient` to tell `vite-plugin-ssr` to serialize and make `pageContext.pageProps`
// available to the browser.
export const passToClient = ['pageProps']
