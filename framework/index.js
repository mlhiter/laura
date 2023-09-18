import * as snabbdom from 'snabbdom'
const patch = snabbdom.init([snabbdom.eventListenersModule])

export const init = (selector, component) => {
  const app = document.querySelector(selector)
  patch(app, component.template)
}
