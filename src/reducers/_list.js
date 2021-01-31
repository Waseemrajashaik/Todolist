import types from 'types'
import shortid from 'shortid'

const initialState = {
  list: [],
  theme_button: true,
}

const list = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ITEM:
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: shortid.generate(),
            text: action.data.text,
          },
        ],
      }
    case types.UPDATE_ITEM:
      return {
        ...state,
        list: state.list.map(item => {
          if (item.id === action.data.id) {
            return {
              ...item,
              text: action.data.text,
            }
          }
          return item
        }),
      }
    case types.DELETE_ITEM:
      return {
        ...state,
        list: state.list.filter(item => {
          if (item.id !== action.id) {
            return true
          }
          return false
        }),
      }
    case types.SELECT_THEME:
      return {
        ...state,
        theme_button: !state.theme_button,
      }
    default:
      return state
  }
}

export default list
