<template>
  <div class="day-contain mx-3">
    <div class="d-flex justify-content-between">
      <div class="ms-3 mt-2">
        <h5 class="fw-bold">Saturday</h5>
        <h6 class="date">February 5</h6>
        <div class="d-flex mt-2">
          <div class="blue-line">
          </div>
          <h6 class="ms-2 date mb-0 mt-1" style="color: #2354e9">Plan</h6>
        </div>
      </div>
      <div class="progress yellow">
        <span class="progress-left">
          <span class="progress-bar"></span>
        </span>
        <span class="progress-right">
          <span class="progress-bar"></span>
        </span>
        <div class="progress-value">33%</div>
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
.add-task {
  width: 189px;
  height: 35px;
  border-radius: 9px;
  background: #fca3a9;
  border: none;
  color: white;
}
</style>
