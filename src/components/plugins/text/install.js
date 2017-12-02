import text from './text.vue';

const textCom = {};
textCom.install = function (Vue) {
    if (textCom.installed) {
        return;
    }
    textCom.install.installed = true;

    Vue.component('textCom', text);
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(textCom);
}
export default textCom;
