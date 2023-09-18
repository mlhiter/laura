import { div } from '../framework/element'
import { onClick } from '../framework/event'
import { createComponent } from '../framework'

// initial state of the User component
const initialState = { firstName: 'Marvin', lastName: 'Frachet' }

// state mutating actions
const methods = {
  changeName: (state, firstName) => ({ ...state, firstName }),
}
// component template
const template = ({ firstName, lastName, methods }) =>
  div`${onClick(() =>
    methods.changeName('Thomas')
  )} Hello ${firstName} ${lastName}`

// create a real world component
export const User = createComponent({ template, methods, initialState })
