Vue.createApp({
  data() {
    return {
      message: '',
      picked: '',
      newmessage: ''
    }
  },
  methods: {
    modificar() {
      this.newmessage = this.message.replace(/ /g, '_').toLowerCase();
    }
  }
}).mount('#app')