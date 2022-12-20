import type { IGlobalSettings } from 'types/store'

import { defineStore } from 'pinia'

export const useGlobalSettingStore = defineStore({
  id: 'globalSettings',
  state: (): IGlobalSettings => ({
    isShowMenu: false,
  }),
  getters: {

  },
  actions: {

  },
})
