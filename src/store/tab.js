export default {
  state: {
    menu: [],
    currentMenu: null
  },
  mutations: {

  },
  actions: {
    selectMenu(state, val) {
      val.name === 'home' ? state.currentMenu = null : state.currentMenu = val
      // 多级菜单使用递归的形式，页面显示改为v-for
    }
  }
}
