import { InjectionKey } from 'vue'
import { createStore, createLogger, Store, useStore as baseUseStore } from 'vuex'

import widget, { State as WidgetState } from './modules/widget'
export interface State {
  count: number,
  widget: WidgetState
}

const store = createStore<State>({
  modules: {
    widget
  },
  strict: import.meta.env.DEV,
  plugins: import.meta.env.PROD ? [createLogger()] : []
})

export const key: InjectionKey<Store<State>> = Symbol()

export function useStore() {
  return baseUseStore(key)
}

export default store
