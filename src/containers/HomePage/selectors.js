import { createSelector } from 'reselect'

const selectHome = (state) => state.home

const makeSelectCurrentPlace = () => createSelector(
  selectHome,
  (homeState) => homeState.currentPlace
)

const makeSelectLoading = () => createSelector(
  selectHome,
  (homeState) => homeState.loading
)

export {
  selectHome,
  makeSelectCurrentPlace,
  makeSelectLoading
}
