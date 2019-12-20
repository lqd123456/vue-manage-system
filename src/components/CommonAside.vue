<template>
  <el-menu
    :collapse="isCollapse"
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <h3 v-show="isCollapse">淘宝</h3>
    <h3 v-show="!isCollapse">淘宝后台管理系统</h3>
    <el-menu-item v-for="item in noChildren" :key="item.path" :index="item.path" @click="clickMenu(item)">
      <i :class="'el-icon-' + item.icon" />
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu v-for="(item, index) in hasChildren" :key="index" :index="item.label">
      <template slot="title">
        <i :class="'el-icon-' + item.icon" />
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item v-for="(subItem, subIndex) in item.children" :key="subIndex" :index="subItem.path" @click="clickMenu(subItem)">
          <i :class="'el-icon-' + subItem.icon" />
          <span slot="title">{{ subItem.label }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      asideMenu: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home'
        },
        {
          path: '/video',
          name: 'video',
          label: '视频管理',
          icon: 'video-play'
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user'
        },
        {
          label: '其他',
          icon: 'user',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '页面1',
              icon: 'setting'
            },
            {
              path: '/page2',
              name: 'page2',
              label: '页面2',
              icon: 'setting'
            }
          ]
        }
      ]
    }
  },
  computed: {
    noChildren() {
      return this.menu.filter(item => !item.children)
    },
    hasChildren() {
      return this.menu.filter(item => item.children)
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse
    },
    menu() {
      return this.$store.state.tab.menu
    }
  },
  methods: {
    clickMenu(item) {
      this.$router.push({ name: item.name })
      this.$store.commit('selectMenu', item)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
  border: none;
  h3 {
    color: #ffffff;
    text-align: center;
    line-height: 48px;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
