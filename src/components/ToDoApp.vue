<template>
  <div class="container">
    <h2 class="text-center mt-5">To Do List</h2>

    <!--Input-->
    <div class="d-flex">
      <input type="text" placeholder="Enter task" class="form-control" />
      <button class="btn btn-warning rounded-0">Submit</button>
    </div>
    <!--Task table -->
    <table class="table table-bordered mt-5">
      <thead>
        <tr>
          <th scope="col">Task</th>
          <th scope="col">Status</th>
          <th scope="col" class="text-center">#</th>
          <th scope="col" class="text-center">#</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Pressure wash the car</th>
          <td>To-Do</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped></style>
