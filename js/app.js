new Vue({
    el: '#app',
    data: {
        message: '',
        picked: '',
        newmessage: ''
    },
    methods: {
        modificar() {
            this.newmessage = this.message.replace(/ /g, '_');
            this.newmessage = this.newmessage.toLowerCase();
        }
    }
})