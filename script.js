/*Vue component registration*/ 
Vue.component("card-exchange-1",{
  template:"#card-template-1",
  data:function(){
    return {
      component_1_message:`Vue component first message:`,
      component_11_message:`Vue component second message:`,
    }
  },
  props:[],
  methods: {
    send: function(){
       this.$emit('event', this.component_1_message, this.component_11_message)
    }
  },
})
Vue.component("card-exchange-2",{
  template:"#card-template-2",
  data:function(){
    return {
      component_2_message:`Vue component 2: ${this.prop_data}`,

    }
  },
  props:['prop_data'],
  methods: {
    
  },
})

/*Vue instance 1*/ 
let vm1 = new Vue({
  el:"#app",
  data(){
    return {
      instance_message:"Vue instance message just get linked with prop",
      vue_instance_data_1:"waiting for data sent from component input 1",
      vue_instance_data_2:"waiting for data sent from component input 2"
    }
  },
  methods: {
    allocate: function(v1, v2){
      this.vue_instance_data_1 = v1;
      this.vue_instance_data_2 = v2;
    }
  },
  computed:{
    
  }
})

/*Vue instance 2*/ 
let vm2 = new Vue({
  el: "#local_app",
  props:[],
  methods: {

  },
  /*local component declaration*/ 
  components:{
    /*local component name*/ 
    card_exchange_local:{
      template:"#card-template-3",
      data:function(){
        return {
          component_2_message:"Vue component local message",
          message:"My parent instance has direct access to me: testing accomplished"
        }
      },
      
    }
  }
})

