<template>
    <div>
        <!-- 切换列表路由的写法 -->
        <mt-cell title="一级路由"></mt-cell>
        <ul>
            <li v-for='(v, i) in list' v-tooltip='"choose" + v'>
                <mt-button type="primary" size='small'> 
                    <router-link :to='baseUrl.detail + v'>{{$t('message.country.' + v)}}</router-link>
                </mt-button>
            </li>
        </ul>
        <mt-cell title='二级路由'></mt-cell> 
        <!-- id跳转 -->
        <nav>
            <router-link to='/home'>
                <mt-button type="primary" size='small'>
                    反向代理
                </mt-button>
            </router-link>
            <router-link to='/car?hello=world'>
                <mt-button type="primary" size='small'> vuex </mt-button>
            </router-link>
        </nav>
        <!--带参数跳转 -->
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data () {
            const baseUrl = {
                detail: '/detail/'
            };
            return {
                baseUrl,
                id: 110011
            };
        },
        computed: {
            detail () {
                return this.baseUrl.detail + this.id;
            },
            list () {
                let arr = ['china', 'England', 'franch', 'spanish'];
                return arr;
            }
        }
    };
</script>
<style scoped lang='scss'>
ul{
    text-align: center;
    li {
        display: inline-block;
        margin: 0 3px;
    }
}
</style>