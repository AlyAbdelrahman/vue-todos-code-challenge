<template>
  <div id="app">
    <Loader />
    <div class="container">
      <div class="cont_todo_list_top">
        <div class="cont_titulo_cont">
          <h3>THINGS TO DO</h3>
        </div>
      </div>
      <AddTodo />
      <FilterTodos />
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from "./components/Todos.vue";
import AddTodo from "./components/AddTodo.vue";
import FilterTodos from "./components/FilterTodos.vue";
import Loader from "./components/Loader.vue";

export default {
  name: "App",
  components: {
    Todos,
    AddTodo,
    FilterTodos,
    Loader
  }
};
</script>

<style >
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
.cont_centrar {
  position: relative;
}

.cont_todo_list_top {
  position: relative;
  margin-bottom: 10px;
  width: 100%;
  height: 60px;
  margin-top: 20px;
  box-shadow: 1px 15px 25px -5px rgba(0, 0, 0, 0.3);
}

.cont_titulo_cont > h3 {
  text-align: left;
  margin-left: 25px;
  letter-spacing: 7px;
  font-size: 12px;
  color: #fff;
  font-weight: 400;
  margin-top: 23px;
}

.cont_titulo_cont {
  position: relative;
  float: left;
  width: 100%;
  height: 60px;
  background: rgb(42, 72, 107);
  background: -moz-linear-gradient(
    left,
    rgba(42, 72, 107, 1) 0%,
    rgba(80, 122, 167, 1) 100%
  );
  background: -webkit-linear-gradient(
    left,
    rgba(42, 72, 107, 1) 0%,
    rgba(80, 122, 167, 1) 100%
  );
  background: linear-gradient(
    to right,
    rgba(42, 72, 107, 1) 0%,
    rgba(80, 122, 167, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2a486b', endColorstr='#507aa7',GradientType=1 );
  font-family: "Open Sans", sans-serif;
}

.cont_add_titulo_cont {
  position: relative;
  float: left;
  width: 70px;
  height: 60px;
  background: rgb(42, 72, 107);
  background: -moz-linear-gradient(
    left,
    rgba(42, 72, 107, 1) 0%,
    rgba(80, 122, 167, 1) 100%
  );
  background: -webkit-linear-gradient(
    left,
    rgba(42, 72, 107, 1) 0%,
    rgba(80, 122, 167, 1) 100%
  );
  background: linear-gradient(
    to right,
    rgba(42, 72, 107, 1) 0%,
    rgba(80, 122, 167, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2a486b', endColorstr='#507aa7',GradientType=1 );
}
</style>
