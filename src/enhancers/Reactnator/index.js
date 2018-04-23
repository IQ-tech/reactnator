import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import handlers from './handlers'

export default compose(
  setDisplayName('src/enhancers/Reactnator/index.js'),
  handlers
)
