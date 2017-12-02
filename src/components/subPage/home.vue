<template>
<div>
    <mt-cell title='反向代理' class='home'></mt-cell>  
	<!-- 测试使用代理 -->
    <section>
        <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <mt-button type="primary" size='small' @click='pullData'>注册用户</mt-button>
        <mt-cell v-if='status!=""'>status:{{status | findout}}</mt-cell>
    </section>
 </div>
</template>
<script>
    import { mapState, mapActions } from 'vuex';
    import { Toast } from 'mint-ui';
	export default {
		data () {
    		let urls = {
    			folder: this.$projectName + 'userinfo.php'
    		}
    		return {
    			urls,
    			rangeValue: 0,
                status: '',
                username: '',
                password: ''
    		}
    	},
    	methods: {
    		pullData () {
                //验证密码
                let {username, password} = this;
                if (username && password) {
        			this.$http({
        				url: this.urls.folder,
        				params: {
        					status: 'register',
        					userID: this.username,
        					password: this.password
        				},
        				method: 'post'
        			}).then((res) => {
                        this.status = res.data;
        			}).catch((err) => {
                        this.status = err;
        			})
                } else {
                    let instance = Toast('用户名或密码不能为空');
                    setTimeout(() => {
                      instance.close();
                    }, 1000);
                }
    		}
    	},
        filters: {
            findout (v) {
                let str = '';
                switch(v) {
                    case '':
                        str = '';
                        break;
                    case 0:
                        str = '已经被注册'
                        break;
                    case 1:
                        str = '注册成功';  
                    case 2:
                        str = '数据库报错'
                        break;
                    default:;   
                }
                return str;
            }
        }
	}
</script>
<style scoped lang='scss'>
</style>