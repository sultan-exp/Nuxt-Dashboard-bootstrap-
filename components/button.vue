<template>
  <button :class="buttonClass ? buttonClass : 'btn btn-primary btn-block'" type="button" :disabled="loading ? true : false">
    <span v-if="!loading">
      <i v-if="icon" :class="icon" />
      {{text}}
    </span>
    <span v-if="loading" class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
    <span v-if="loading" class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
    <span v-if="loading" class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  </button>
</template>

<script>
export default {
  props: ["loading", "text", "buttonClass", "icon"]
};
</script>