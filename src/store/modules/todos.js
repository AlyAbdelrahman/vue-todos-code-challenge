import axios from 'axios';

const state = {
  todos: [],
  loader:false
};

const getters = {
  allTodos: state => state.todos
};

const actions = {
/**
   * @param {object} commit
   */
  async fetchTodos({ commit }) {
      
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    );
    document.getElementById('overlay').style.display="none";
    commit('setTodos', response.data);
    
  },
  /**
   * @param {object} commit
   * @param {string} title
   */
  async addTodo({ commit }, title) {
    document.getElementById('overlay').style.display="block";
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/todos',
      { title, completed: false }
    );

    commit('newTodo', response.data);
    document.getElementById('overlay').style.display="none";
  },

    /**
   * @param {object} commit
   * @param {Number} id
   */
  async deleteTodo({ commit }, id) {
    document.getElementById('overlay').style.display="block";

    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

    commit('removeTodo', id);
    document.getElementById('overlay').style.display="none";

  },
    /**
   * @param {object} commit
   * @param {Event} e
   */
  async filterTodos({ commit }, e) {
    document.getElementById('overlay').style.display="block";
    // Get selected number
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    );

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    );

    commit('setTodos', response.data);
    document.getElementById('overlay').style.display="none";

  },
    /**
   * @param {object} commit
   * @param {object} updTodo
   */
  async updateTodo({ commit }, updTodo) {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,
      updTodo
    );

   

    commit('updateTodo', response.data);
  }
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter(todo => todo.id !== id)),
  updateTodo: (state, updTodo) => {
    const index = state.todos.findIndex(todo => todo.id === updTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, updTodo);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};