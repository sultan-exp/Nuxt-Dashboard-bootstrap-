<template>
  <div class="day-contain me-3" style="border-left: 10px solid #2354e9">
    <div class="d-flex justify-content-between">
      <div class="ms-3 mt-2">
        <h5 class="fw-bold">Friday</h5>
        <h6 class="date">February 4</h6>
        <div class="d-flex mt-2">
          <div>
            <img src="../assets/red.png" alt="" />
          </div>
          <h6 class="ms-2 date mb-0 mt-1" style="color: red">Shutdown</h6>
        </div>
      </div>
      <div
        class="round mt-2 me-3 d-flex justify-content-center align-items-center"
      >
        <img src="../assets/crown.png" alt="" />
      </div>
    </div>
    <div class="d-flex justify-content-center mt-3">
      <button class="add-task">Add a Task</button>
    </div>
    <div class="mt-5 rounded-3 task-box">
      <h6 class="description">Record yourself talking about the day</h6>
      <div class="d-flex justify-content-between mt-3 align-items-center">
        <h6># <span style="color: #fca3a9">youtube</span></h6>
        <div>
          <label class="main">
            <input type="checkbox" />
            <span class="geekmark"></span>
          </label>
        </div>
      </div>
    </div>
    <div class="rounded-3 task-box mt-4">
      <h6 class="description">Promote YT video</h6>
      <div class="d-flex justify-content-between mt-3 align-items-center">
        <h6># <span style="color: #fca3a9">youtube</span></h6>
        <div>
          <label class="main">
            <input type="checkbox" />
            <span class="geekmark"></span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  computed: {},
  methods: {},
};
</script>
<style scoped>
.day-contain {
  width: 255px;
  height: 158px;
  background: #f9f9f9;
  border-radius: 10px;
}
.task-box {
  padding: 17px;
  background: #f9f9f9;
  border-radius: 8.8913px;
}
.date {
  font-size: 14px;
  color: gray;
}
.round {
  width: 64px;
  height: 64px;
  border-radius: 100px;
  border: 8px solid #2354e9;
}
.add-task {
  width: 189px;
  height: 35px;
  border-radius: 9px;
  background: #2354e9;
  border: none;
  color: white;
}
.description {
  font-size: 14px;
}
</style>
