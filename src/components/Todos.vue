<template>
  <div>
    <h3>Todos</h3>
    <div class="legend">
      <span>Double click to mark as complete</span>
      <span>
        <span class="incomplete-box"/>= Incomplete
      </span>
      <span>
        <span class="complete-box"/>= Complete
      </span>
    </div>
    <div class="todos">
      <div
        @dblclick="onDblClick(todo)"
        v-for="todo in allTodos"
        :key="todo.id"
        class="todo"
        :class="{'is-complete':todo.completed}"
      >
        {{ todo.title }}
        <i 
          @click="deleteTodo(todo.id)" 
          class="fas fa-trash-alt"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
/**
   * @module todos-page-container
   * @desc todos container, used to contain the add todo / filter / todos components
   * @vue-computed {Array} allTodos - A list of todos
   * @vue-event {} fetchTodos - get all data from Ajax
   * @vue-event {Number} deleteTodo - delete Todo by id
   * @vue-event {object} update - update Todo 
*/
export default {
  name: "Todos",
  methods: {
    
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),

     /**
       * Update state of todo 
       * @param {Object} todo - New Todo state
       */
    onDblClick(todo) {
      
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      };
      this.updateTodo(updTodo);
    }
  },
  computed: mapGetters(["allTodos"]),
   /**
     * Todos.vue `created` hook.
     */
  created() {
    this.fetchTodos();
  }
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>