<template>
  <div class="day-contain mx-3">
    <div class="d-flex justify-content-between">
      <div class="ms-3 mt-2">
        <h5 class="fw-bold">{{ data.title }}</h5>
        <h6 class="date">
          {{ month[data.date.getMonth()] }} {{ data.date.getUTCDate() }}
        </h6>
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
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {},
  methods: {},
  data() {
    return {
      startDate: new Date(),
      endDate: new Date(),
      columns: [],
      month: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      weekday: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
    };
  },
};
</script>
