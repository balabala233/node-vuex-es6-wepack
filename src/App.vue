<template>
  <div id="app">
    <mt-header fixed :title="title">
       <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <mt-navbar v-model="selected" class='nav'>
        <mt-tab-item id="1">
            <router-link to='/testRoot'>跳转路由</router-link>
        </mt-tab-item>
        <mt-tab-item id="2">
            <router-link to='/testRoot/hello'>带参跳转路由</router-link>
        </mt-tab-item>
        <mt-tab-item id="3">
            <router-link to='/multipleRoot'>路由嵌套</router-link>
        </mt-tab-item>
    </mt-navbar>
    <div class='subpage'>
        <router-view/>
    </div>
    <!-- 自定义组建使用 -->
    <!-- <textCom :hello='""'></textCom> -->
    <!-- <img src="./assets/image/logo.png"> -->
  </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                title: this.$t('message.home'),
                value: '',
                searchList: [],
                selected: null
            };
        },
        computed: {},
        watch: {
            $route (msg) {
                if (msg.fullPath === '/') {
                this.title = this.$t('message.home');
                } else {
                this.title = msg.fullPath;
                }
            },
            value () {
                let num = Math.round(10 * Math.random());
                let list = Object.assign([], this.searchList);
                let temp = [];
                for (let i = 0; i < num; i++) {
                temp.push(i +'');
                }
                this.searchList.splice(0, list.length, ...temp);
            },
            selected (msg) {
                console.info(msg);
            }
        },
        method: {}
    };
</script>

<style lang='scss'>
/*加载mint自定义样式，覆盖原有样式*/
@import './assets/sass/reset.scss';
@import './assets/sass/mintUI.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #efe
}
.tooltip {
      display: block !important;
      padding: 4px;
      z-index: 10000;

      .tooltip-inner {
          color: rgba(255, 255, 255, 0.87);
          background-color:red;
          border-radius: 4px;
          padding: 2px 8px 2px;
      }
      .tooltip-arrow {
          display: none;
      }
      &[aria-hidden='true'] {
          visibility: hidden;
          opacity: 0;
          transition: opacity .15s, visibility .15s;
      }

      &[aria-hidden='false'] {
          visibility: visible;
          opacity: 1;
          transition: opacity .15s;
      }
}
.nav {
    margin-top: 40px;
}
.subpage{
    margin-top: 3px;
    width: 100%;
    height: auto;
    background: #efe;

}
</style>

