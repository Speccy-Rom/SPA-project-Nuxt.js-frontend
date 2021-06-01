export const state = () => ({
  posts: [],
  total: [],
  next: [],
  previous: [],
  current_page: 0
})

export const mutations = {
  SET_POSTS (state, posts) {
    state.posts = posts
  },
  SET_TOTAL (state, total) {
    state.total = total
  },
  SET_NEXT (state, next) {
    state.next = next
  },
  SET_PREVIOUS (state, previous) {
    state.previous = previous
  },
  SET_CURRENT_PAGE (state, current_page) {
    state.current_page = current_page
  },
}


export const actions = {
  async loadAllPosts() {

  }
}
