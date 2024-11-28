export const redirects = JSON.parse("{\"/Algorithm/Divide&Conquer.html\":\"/Algorithm/Divide_Conquer.html\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/datasets/addice-blogs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Welcome!"} }],
  ["/Algorithm/Divide_Conquer.html", { loader: () => import(/* webpackChunkName: "Algorithm_Divide_Conquer.html" */"D:/datasets/addice-blogs/docs/.vuepress/.temp/pages/Algorithm/Divide_Conquer.html.js"), meta: {"title":"分治算法"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/datasets/addice-blogs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
