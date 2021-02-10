# Debounce and Redux Thunk

[Visit page](https://marlrus.github.io/debounceApiUsingReduxThunk/)

## Summary

This spike uses the omdbapi to search for movies by title. There is no search button implemented becuase the API makes the call once the input is filled for a seamless user experience. To avoid excessive API calls the API Call is debounced, meaning that the call is only made once the input has settled for a set time. In this example, that delay is 1s.

## Stack

Create React App, Axios for fetching, Redux for state management, and Redux-Thunk for async actions.
