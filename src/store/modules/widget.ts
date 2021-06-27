export interface LoadingConfig {
  show?: boolean,
  fullscreen?: boolean,
  lock?: boolean,
  text?: string,
  spinner?: string,
  background?: string,
}

export interface MessageConfig {
  show?: boolean,
  type: 'info' | 'success' | 'warning' | 'error',
  message: string,
  showClose?: boolean,
  duration?: number,
}

export interface State {
  loading: LoadingConfig,
  message: MessageConfig
}

const state: State = {
  loading: {
    show: false,
    text: '',
  },

  message: {
    show: false,
    type: 'info',
    duration: 3000,
    showClose: false,
    message: '',
  }
}

const mutations = {
  SHOW_LOADING(state: State) {
    state.loading.show = true
  },

  HIDE_LOADING(state: State) {
    state.loading.show = false
  },

  SHOW_MESSAGE(state: State, config: MessageConfig) {
    state.message = {
      ...state.message,
      show: true,
      ...config
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
