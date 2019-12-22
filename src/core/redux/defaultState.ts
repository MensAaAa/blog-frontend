
export interface GlobalStateAppType {
  user: any,
}

export default {
  user: {
    currentUser: null,
    isFetching: false,
    error: null,
  },
}