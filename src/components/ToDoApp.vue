<template>
  <div>
    <div class="container">
      <h2 class="text-center mt-5">To Do List</h2>

      <!--Input box for a new task-->
      <div class="d-flex">
        <input
          v-model="task"
          type="text"
          placeholder="Enter task"
          class="form-control"
        />
        <button
          @click="submitTask"
          class="btn btn-info rounded-0"
          style="background-color: white"
        >
          Submit
        </button>
      </div>
      <!--Task table -->
      <table class="table table-bordered mt-5" style="background-color: white">
        <thead>
          <tr>
            <th scope="col">Task</th>
            <th scope="col">Status</th>
            <th scope="col" class="text-center">Edit</th>
            <th scope="col" class="text-center">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(task, index) in tasks" :key="index">
            <th>
              <span :class="{ completed: task.status === 'completed' }">{{
                task.name
              }}</span>
            </th>
            <td style="max-width: 50px">
              <span @click="changeStatus(index)" role="button">{{
                task.status
              }}</span>
            </td>
            <td>
              <div class="text-center" @click="editTask(index)">
                <span class="fa fa-pen"></span>
              </div>
            </td>
            <td>
              <div class="text-center" @click="deleteTask(index)">
                <span class="fa fa-trash"></span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "To-do",
  props: {
    msg: String,
  },

  data() {
    return {
      task: "",
      editedTask: null,
      availableStatuses: ["To-do", "In progress", "completed"],
      tasks: [
        {
          name: "Pressure wash the car",
          status: "To-do",
        },
        {
          name: "Mow the lawn",
          status: "In progress",
        },
      ],
    };
  },
  methods: {
    submitTask() {
      if (this.task.length === 0) return;

      if (this.editedTask === null) {
        this.tasks.push({
          name: this.task,
          status: "To-do",
        });
      } else {
        this.tasks[this.editedTask].name = this.task;
        this.editedTask = null;
      }
      this.task = "";
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    editTask(index) {
      this.task = this.tasks[index].name;
      this.editedTask = index;
    },
    changeStatus(index) {
      let newIndex = this.availableStatuses.indexOf(this.tasks[index].status);
      if (++newIndex > 2) newIndex = 0;
      this.tasks[index].status = this.availableStatuses[newIndex];
    },
  },
};
</script>

<style scoped>
.completed {
  text-decoration-line: line-through;
  color: green;
}
</style>
