import { createApp } from './app'
import { useClientRouter } from 'vite-plugin-ssr/client/router' // https://vite-plugin-ssr.com/useClientRouter

let app
const { hydrationPromise } = useClientRouter({
  render(pageContext) {
    if (!app) {
      app = createApp(pageContext)
      app.mount('#app')
    } else {
      app.changePage(pageContext)
    }
  },
  // Vue needs the first render to be a hydration
  ensureHydration: true,
  prefetchLinks: true,
  onTransitionStart,
  onTransitionEnd,
})

hydrationPromise.then(() => {
  console.log('Hydration finished; page is now interactive.')
})

function onTransitionStart() {
  console.log('Page transition start')
  document.querySelector('.content').classList.add('page-transition')
}
function onTransitionEnd() {
  console.log('Page transition end')
  document.querySelector('.content').classList.remove('page-transition')
}
