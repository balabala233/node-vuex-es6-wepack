<template>
    <div contenteditable="true">
        {{hello || 'this is a joke'}}
    </div>
</template>
<script>
    export default {
        name: 'text',
        // props: ['hello']
        props: {
            hello: {
                type: String, // String Number Object
                required: true
            }
        }
    };
</script>
<style lang='scss' scoped>
    div{
        width: 100%;
        height: 40px;
        border: 1px solid green;
    }
</style>
