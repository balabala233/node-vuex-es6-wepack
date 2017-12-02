<template>
    <div>
        Use {{this.$route.params.id}}
    </div>
</template>
<script>
    export default {
        name: 'test',
        data () {
            return {
                id: ''
            };
        },
        watch: {
            $route (to, from) {
                console.info(to, from);
            }
        },
        created () {
            this.id = this.$route.params.id;
        },
        mounted () {
            console.info('拉取id为｛' + this.id + '｝的数据');
        }
    };
</script>