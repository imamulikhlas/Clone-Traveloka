import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import nav from './nav'
import contactsReducer from '../contacts/reducers'
import productsReducer from '../products/reducers'
import hotelsReducer from '../hotels/reducers'
import homepagesReducer from '../homepage/reducers'
const appReducer = combineReducers({
  nav,
  form,
  contactsReducer,
  productsReducer,
  hotelsReducer,
  homepagesReducer
})

export default appReducer
