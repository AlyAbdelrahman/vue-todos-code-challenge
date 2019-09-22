<template>
  <div>
    Filter Todos:
    <select @change="filterTodos($event)">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FilterTodos",
    /**
       * get new todos list  
       * @param {Number} todosNumber - New Todos list Number needed
       */
  methods: mapActions(["filterTodos"])
};
</script>

<style>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
  background-color: white;
}
</style>