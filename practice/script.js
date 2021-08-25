/*component section*/ 
let cm = Vue.component('card_exchange',{
  template: '#card-template-1',
  data: function(){
    return {
      component_msg: "message from component",
      incoming_msg: `data received from vue instance: ${this.prop_data}`,
      sent_msg: 'I am sent by component'
    }
  },
  props: ['prop_data'],
  methods: {
    sent: function(){
      this.$emit('msg_trigger', this.sent_msg)
    }
  },
})

/*vue instance section*/ 
let vm = new Vue({
  el: '#app',
  data(){
    return {
      message: "message in vue instance",
      received_msg: `Waiting for message sent by component`
    }
  },
  methods: {
    allocate: function(data){
      return this.received_msg = data;
    }
  },
  computed: {

  }
})