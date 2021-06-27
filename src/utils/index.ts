import store from '@/store'
import { MessageConfig } from '@/store/modules/widget'

export const showLoading = () => store.commit('widget/SHOW_LOADING')

export const hideLoading = () => store.commit('widget/HIDE_LOADING')

export const showMessage = (config: MessageConfig) => store.commit('widget/SHOW_MESSAGE', config)
