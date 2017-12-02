<template>
    <div>
        <mt-cell title='vuex'></mt-cell>
        <mt-button type="primary" size='small' @click='welcomeSB'>{{welcome}}</mt-button>
        <section>
            <mt-button type="primary" size='small'>{{count}}</mt-button>
            <mt-button type="primary" size='small' @click='add'>add</mt-button>
            <mt-button type="danger" size='small' @click='reduce'>reduce</mt-button>
        </section>
    </div>
</template>
<script>
    import { mapState, mapActions } from 'vuex';
    export default {
        data () {
            return {};
        },
        computed: {
            ...mapState({
                welcome: state => state.welcome,
                count: 'count'
            })
        },
        methods: {
            ...mapActions({
                dowelcome: 'dowelcome',
                add: 'add',
                reduce: 'reduce'
            }),
            welcomeSB () {
                this.dowelcome('好好学习,天天向上');
            }
        }
    };
</script>
<style scoped lang='scss'> 
    section {
        margin-top:  10px;
    }
</style>