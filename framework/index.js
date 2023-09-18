import * as snabbdom from 'snabbdom'
const patch = snabbdom.init([snabbdom.eventListenersModule])

export const init = (selector, component) => {
  const app = document.querySelector(selector)
  patch(app, component.template)
}

let state = {}

// Add the line concerning methods and initialState
export const createComponent = ({
  template,
  methods = {},
  initialState = {},
}) => {
  state = initialState
  let previous

  const mappedMethods = (props) =>
    Object.keys(methods).reduce(
      (acc, key) => ({
        ...acc,
        [key]: (...args) => {
          state = methods[key](state, ...args)
          const nextNode = template({
            ...props,
            ...state,
            methods: mappedMethods(props),
          })
          patch(previous.template, nextNode.template)
          previous = nextNode // this prints "Thomas" as firstName :D
          return state
        },
      }),
      {}
    )

  return (props) => {
    previous = template({ ...props, ...state, methods: mappedMethods(props) })
    return previous
  }
}
