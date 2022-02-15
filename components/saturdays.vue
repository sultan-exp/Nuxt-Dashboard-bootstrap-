<template>
  <div class="day-contain mx-3">
    <div class="d-flex justify-content-between">
      <div class="ms-3 mt-2">
        <h5 class="fw-bold">Saturday</h5>
        <h6 class="date">February 5</h6>
        <div class="d-flex mt-2">
          <div>
            <img src="../assets/blue.png" alt="" />
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
.day-contain {
  width: 255px;
  height: 158px;
}
.date {
  font-size: 14px;
  color: gray;
}
.round {
  width: 64px;
  height: 64px;
  border-radius: 100px;
  border: 8px solid #e5e5e5;
}
.add-task {
  width: 189px;
  height: 35px;
  border-radius: 9px;
  background: #fca3a9;
  border: none;
  color: white;
}
.description {
  font-size: 14px;
}
.custom-checkbox {
  width: 20px;
  height: 20px;
  background: #dfdfdf;
  border-radius: 6px;
  border: none;
}
.task-box {
  padding: 17px;
  background: #f9f9f9;
  border-radius: 8.8913px;
}
.progress {
  width: 64px;
  height: 64px !important;
  float: left;
  line-height: 64px;
  background: none;
  margin: 5px 20px 20px 20px;
  box-shadow: none;
  position: relative;
}

.progress:after {
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 8px solid #e5e5e5;
  position: absolute;
  top: 0;
  left: 0;
}

.progress > span {
  width: 50%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: 1;
}

.progress .progress-left {
  left: 0;
}

.progress .progress-bar {
  width: 100%;
  height: 100%;
  background: none;
  border-width: 8px;
  border-style: solid;
  position: absolute;
  top: 0;
}

.progress .progress-left .progress-bar {
  left: 100%;
  border-top-right-radius: 80px;
  border-bottom-right-radius: 80px;
  border-left: 0;
  -webkit-transform-origin: center left;
  transform-origin: center left;
}

.progress .progress-right {
  right: 0;
}

.progress .progress-right .progress-bar {
  left: -100%;
  border-top-left-radius: 80px;
  border-bottom-left-radius: 80px;
  border-right: 0;
  -webkit-transform-origin: center right;
  transform-origin: center right;
  animation: loading-1 1.8s linear forwards;
}

.progress .progress-value {
  width: 90%;
  height: 90%;
  border-radius: 50%;
  background: white;
  font-size: 14px;
  color: black;
  line-height: 135px;
  text-align: center;
  position: absolute;
  margin-top: -40px;
  top: 5%;
  left: 5%;
}

.progress.yellow .progress-bar {
  border-color: #fca3a9;
}

.progress.yellow .progress-right .progress-bar {
  animation: loading-3 1.8s linear forwards;
}

.progress.yellow .progress-left .progress-bar {
  animation: none;
}

@keyframes loading-1 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
}

@keyframes loading-2 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(144deg);
    transform: rotate(144deg);
  }
}

@keyframes loading-3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(115deg);
    transform: rotate(115deg);
  }
}
</style>
