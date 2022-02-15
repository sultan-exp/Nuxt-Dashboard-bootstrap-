<template>
  <div class="bg-white shadow rounded px-3 pt-3 pb-5 border border-white" @click="showAlert()">
    <div class="flex justify-between">
      <p class="text-gray-700 font-semibold font-sans tracking-wide text-sm">{{task.title}}</p>
    </div>
    <div class="flex mt-4 justify-between items-center">
      <span class="text-sm text-gray-600">{{task.date}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    task: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
  },
  methods: {
      showAlert() {
          alert("Kom nu")
      }
  }
};
</script>
