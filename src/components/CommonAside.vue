<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="#33eaf0"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-submenu v-for="item in hasChildren" :key="item.path" :index="item.path">
      <template slot="title">
        <i :class="'el-icon-' + item.icon" />
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item v-for="subItem in item.children" :key="subItem.path" :index="subItem.path" @click="clickMenu(subItem)">
          <i :class="'el-icon-' + subItem.icon" />
          <span slot="title">{{ subItem.label }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-menu-item v-for="item in noChildren" :key="item.path" :index="item.path" @click="clickMenu(item)">
      <i :class="'el-icon-' + item.icon" />
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
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
          icon: 'home'
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
      return this.asideMenu.filter(item => !item.children)
    },
    hasChildren() {
      return this.asideMenu.filter(item => item.children)
    }
  },
  methods: {
    clickMenu(item) {
    //   this.$router.push({ name: item.name })
      this.$store.commit('selectMenu', item)
    }
  }
}
</script>

<style lang="scss" scoped>
    .el-menu{
        height: 100%;
        border: none;
    }
</style>
