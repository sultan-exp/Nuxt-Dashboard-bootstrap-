<template>
  <div class="container-fluid">
    <div class="d-flex justify-content-between header">
      <div class="d-flex align-items-center">
        <img src="../assets/logo.png" class="logo" alt="Logo" />
        <h5 class="fs-5 mb-0 ms-3 fw-bold">Company Name</h5>
      </div>
      <div class="d-flex align-items-center">
        <img src="../assets/user.png" alt="" />
        <h6 class="ms-2 mb-0">Andreu Jordgen</h6>
        <bell-icon size="1.5x" class="custom-class ms-5"></bell-icon>
        <hexagon-icon size="1.5x" class="custom-class ms-3"></hexagon-icon>
      </div>
    </div>
    <div class="row">
      <div class="col-2">
        <div class="d-flex flex-column align-items-center">
          <VCalendar is-expanded :attributes="attrs" />
          <div class="channel pt-4 mt-4">
            <h4 class="fw-bold fs-5">Channels</h4>
            <h5 class="fs-6 ms-3 mt-3">
              <span class="allColor me-2">#</span> All
            </h5>
            <DropDown :data="workList" />
            <DropDown :data="youtube" />
            <DropDown :data="website" />
            <div class="d-flex">
              <button
                class="plus ms-2 d-flex justify-content-center align-items-center"
              >
                +
              </button>
              <h5 class="fs-6 ms-2">Manage Channel</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="col-7 task-row" id="task-row">
        <div class="d-flex align-items-center justify-content-between">
          <h5 class="fw-bold">Tasks(4 Feb - 7 Feb)</h5>
          <div
            class="task-calendar d-flex align-items-center justify-content-between"
          >
            <button class="ms-1 rounded-3 btn-task fw-bold">Task</button>
            <h5 class="mb-0 me-4">Calendar</h5>
          </div>
        </div>
        <div class="d-flex mt-4">
          <div
            v-for="(column, index) in columns"
            :key="index"
            class="task-column"
          >
            <div class="day-contain mx-3">
              <div class="d-flex justify-content-between">
                <div class="ms-3 mt-2">
                  <h5 class="fw-bold">{{ column.title }}</h5>
                  <h6 class="date">
                    {{ month[column.date.getMonth()] }}
                    {{ column.date.getUTCDate() }}
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
              <Task
                v-for="task in tasks.filter(
                  filterDateTasks.bind(
                    this,
                    column.date.getFullYear() +
                      '-' +
                      column.date.getMonth() +
                      '-' +
                      column.date.getUTCDate()
                  )
                )"
                :key="task.id"
                :task="task"
                :id="task.id"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-3 d-flex">
        <div class="schedule me-3">
          <h5 class="fw-bold py-3 ps-3 border-bottom mb-0">Schedule</h5>
          <div class="d-flex">
            <div class="p-4 border-end">+</div>
            <h4 class="p-4 mb-0">4 jan 2022</h4>
          </div>
          <div
            class="d-flex align-items-center"
            v-for="item in schedule"
            :key="item"
          >
            <div class="schedule-item text-center border-end py-3">
              {{ item }}
            </div>
            <div class="border-bottom w-75"></div>
          </div>
        </div>
        <div class="contact">
          <div
            class="red-gradient d-flex justify-content-center align-items-center px-0 py-3"
          >
            <div>
              <img src="../assets/arrow.png" alt="" />
            </div>
            <div>
              <img src="../assets/colordot.png" alt="" />
            </div>
          </div>
          <div
            class="d-flex blue-gradient flex-column align-items-center justify-content-center mt-5"
          >
            <div>
              <img src="../assets/meet.png" class="p-3" alt="" />
            </div>
            <div>
              <img src="../assets/docs.png" class="p-3" alt="" />
            </div>
            <div>
              <img src="../assets/gmail.png" class="p-3" alt="" />
            </div>
            <div>
              <img src="../assets/calendar.png" class="p-3" alt="" />
            </div>
            <div>
              <img src="../assets/drive.png" class="p-3" alt="" />
            </div>
            <div class="p-4">
              <target-icon size="1.5x" class="custom-class"></target-icon>
            </div>
            <div class="p-4">
              <archive-icon size="1.5x" class="custom-class"></archive-icon>
            </div>
            <div class="p-4">
              <save-icon size="1.5x" class="custom-class"></save-icon>
            </div>
            <div class="p-4">
              <search-icon size="1.5x" class="custom-class"></search-icon>
            </div>
          </div>
          <div
            class="d-flex red-gradient flex-column align-items-center justify-content-center mt-5"
          >
            <div class="p-4">
              <plus-icon size="1.5x" class="custom-class"></plus-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import TaskCard from "../components/task-card";
import DropDown from "../components/dropdown.vue";
import Task from "../components/task.vue";
import { Calendar as VCalendar } from "v-calendar";
import {
  BellIcon,
  HexagonIcon,
  PlusIcon,
  SearchIcon,
  TargetIcon,
  ArchiveIcon,
  SaveIcon,
} from "vue-feather-icons";
import "../assets/style.css";

export default {
  auth: true,
  components: {
    TaskCard,
    draggable,
    DropDown,
    VCalendar,
    Task,
    BellIcon,
    HexagonIcon,
    PlusIcon,
    SearchIcon,
    TargetIcon,
    ArchiveIcon,
    SaveIcon,
  },
  computed: {
    tasks() {
      return this.$store.state.task.tasks;
    },
  },
  data() {
    return {
      attrs: [
        {
          highlight: {
            start: { fillMode: "light" },
            base: { fillMode: "light" },
            end: { fillMode: "light" },
          },
          dates: { start: new Date(2022, 1, 4), end: new Date(2022, 1, 7) },
        },
      ],
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
      startDate: new Date(),
      endDate: new Date(),
      columns: [],
      workList: {
        title: "WORK",
        lists: [
          {
            color: "red",
            text: "clubhouse",
          },
          {
            color: "#39cb5c",
            text: "dkr-webinar",
          },
          {
            color: "#f6ac6d",
            text: "english",
          },
          {
            color: "blue",
            text: "job-posting",
          },
          {
            color: "#a3a832",
            text: "talks",
          },
          {
            color: "blue",
            text: "uxui_design",
          },
        ],
      },
      youtube: {
        title: "YOUTUBE",
        lists: [
          {
            color: "#39cb5c",
            text: "All",
          },
        ],
      },
      website: {
        title: "WEBSITE",
        lists: [
          {
            color: "#a3a832",
            text: "clubhouse",
          },
          {
            color: "#f6ac6d",
            text: "dkr-webinar",
          },
        ],
      },
      schedule: [
        "1 AM",
        "2 AM",
        "3 AM",
        "4 AM",
        "5 AM",
        "6 AM",
        "7 AM",
        "8 AM",
        "9 AM",
        "10 AM",
        "11 AM",
        "12 AM",
        "1 AM",
      ],
    };
  },
  destroyed() {
    document
      .getElementById("task-row")
      .removeEventListener("scroll", this.checkDates);
  },
  async beforeMount() {
    this.startDate.setDate(this.startDate.getUTCDate() - 7);
    this.endDate.setDate(this.endDate.getUTCDate() + 7);
    for (
      var d = this.startDate;
      d <= this.endDate;
      d.setDate(d.getUTCDate() + 1)
    ) {
      this.columns.push({
        title: this.weekday[d.getDay()],
        date: new Date(d),
      });
    }
    this.startDate.setDate(this.startDate.getUTCDate() - 15);
    await this.$store.dispatch("task/getTasks", {
      startDate: this.startDate,
      endDate: this.endDate,
    });
  },
  mounted() {
    document
      .getElementById("task-row")
      .addEventListener("scroll", this.checkDates);
    document.getElementById("task-row").scrollLeft = 2310;
  },
  methods: {
    updateTaskDrop(event) {
      this.$store.dispatch("task/update", {
        task: this.tasks.find((task) => task.id == event.item.id),
        newDate: event.to.id,
      });
    },
    filterDateTasks(columnDate, task) {
      var splitColumnDate = columnDate.split("-");
      var newColumnDate =
        splitColumnDate[0] +
        "-" +
        (parseInt(splitColumnDate[1]) + 1 < 10 ? "0" : "") +
        (parseInt(splitColumnDate[1]) + 1) +
        "-" +
        (splitColumnDate[2] < 10 ? "0" : "") +
        splitColumnDate[2];

      return task.date.substr(0, 10) == newColumnDate;
    },
    async signOut() {
      await this.$auth.logout();
    },
    checkDates(event) {
      if (document.getElementById("task-row").scrollLeft == 0) {
        console.log("Load 7 old days");
      } else if (
        document.getElementById("task-row").scrollLeft +
          document.getElementById("task-row").offsetWidth ==
        document.getElementById("task-row").scrollWidth
      ) {
        console.log("Load 7 new days");
      }
    },
  },
};
</script>
