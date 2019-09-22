<template>
  <div>
    <div class="add">
      <form @submit="onSubmit">
        <input 
          type="text" 
          v-model="title" 
          placeholder="Add Todo ..">
        <input 
          type="submit" 
          value="submit">
      </form>
    </div>
  </div>
</template>

<script>
import{mapActions} from "vuex";
/**
   * @module Addto-do
   * @desc Addtodo input, used to contain the add todo input field 
   * @vue-data {string} title - Current input field text 
   * @vue-event {string} title - add todo to store
*/
export default {
    
name:"AddTodo",
data(){
    return{
        title:''
    }
},
 methods: {
        ...mapActions(['addTodo']),
          /**
       * send new todo to Ajax to be added in the store 
       * @param {Object} event - New Todo string
       */
        onSubmit(e){
            e.preventDefault();
            this.addTodo(this.title);
             this.title=''
        }
    },
}
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
  background-color: white;
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>