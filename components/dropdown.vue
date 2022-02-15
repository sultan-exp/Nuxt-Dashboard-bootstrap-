<template>
  <div>
    <div class="d-flex mt-5">
      <div class="me-2">
        <img src="../assets/dropdown.png" alt="work" />
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
export default {
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {},
  methods: {},
};
</script>
<style>
ul {
  list-style-type: none;
}
</style>
