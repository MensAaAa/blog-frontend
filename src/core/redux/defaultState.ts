
export interface GlobalStateAppType {
  user: any,
}

export default {
  user: {
    currentUser: { token: '' },
    isFetching: false,
    error: null,
  },
}