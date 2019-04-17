// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/Users/Pablo/Downloads/k8tape/gatsby-starter-photon/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/Pablo/Downloads/k8tape/gatsby-starter-photon/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/Pablo/Downloads/k8tape/gatsby-starter-photon/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/Pablo/Downloads/k8tape/gatsby-starter-photon/.cache/data.json")

