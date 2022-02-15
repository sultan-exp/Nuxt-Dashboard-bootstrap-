<template>
  <div>
    <div class="d-flex mt-5">
      <div class="me-2">
        <chevron-down-icon size="0.8x" class="custom-class"></chevron-down-icon>
      </div>
      <h4 class="fw-bold fs-5 mb-0">{{ data.title }}</h4>
    </div>
    <ul class="ps-0">
      <li v-for="item in data.lists" :key="item.text">
        <h5 class="fs-6 ms-3 mt-3">
          <span class="me-2" v-bind:style="{ color: item.color }">#</span> {{item.text}}
        </h5>
      </li>
    </ul>
  </div>
</template>
<script>
import { ChevronDownIcon } from 'vue-feather-icons'
export default {
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    ChevronDownIcon
  },
  methods: {},
};
</script>
