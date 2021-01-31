import types from 'types'
// Add and Update Item required .then feature so made them promise
// "a" at the beginning of function name represent as "action"

export const aAddItem = data => dispatch =>
  new Promise(resolve => {
    dispatch({
      type: types.ADD_ITEM,
      data,
    })
    return resolve()
  })

export const aUpdateItem = data => dispatch =>
  new Promise(resolve => {
    dispatch({
      type: types.UPDATE_ITEM,
      data,
    })
    return resolve()
  })

export const aDeleteItem = id => dispatch =>
  dispatch({
    type: types.DELETE_ITEM,
    id,
  })

export const aSwitchTheme = () => dispatch =>
  dispatch({
    type: types.SELECT_THEME,
  })
