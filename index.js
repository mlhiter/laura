import { init } from './framework'
import { div } from './framework/element'

const firstName = 'Marvin'
const lastName = 'Frachet'

init('#app', div`Hello ${firstName} ${lastName}`)
// init("#app", p`Hello ${firstName} ${lastName}`); works as simply as moving div to p
