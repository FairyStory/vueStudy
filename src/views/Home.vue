<template>
   <div class="">
        <el-container>
            <el-aside class="module_left">
                <el-menu :default-active="$route.path" class="el-menu-vertical-demo" text-color="#fff"  unique-opened router >
                    <template v-for="(item,index) in $router.options.routes" v-if="item.hidden">
                        <el-menu-item :index="child.path" v-for="child in item.children" :key="child.path">
                            <span slot="title" v-text="child.name"></span>
                        </el-menu-item>
                    </template>
                </el-menu>
            </el-aside>
            <el-container  class="module_right">
                <router-view></router-view>
            </el-container>
      </el-container>

   </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  data() {
    return {};
  },
  created() {
    console.log(this.$router.options.routes);
  },
  components: {},
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleselect: function(a, b) {}
  }
};
</script>

<style >
.el-menu {
  background: #324157 !important;
  height: 100%;
}
.el-menu-item:focus,
.el-menu-item:hover {
  background: #263445 !important;
}
.module_left {
  width: 14% !important;
  height: 100vh;
}
.module_right {
  width: 86% !important;
  height: 100vh;
}
</style>
