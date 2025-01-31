<template>
  <div class="card" @click="selectCard">
    {{ value }}
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    selectCard() {
      this.$emit('card-selected', this.value);
    }
  }
}
</script>

<style scoped>
.card {
  width: 60px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.card:hover {
  background-color: #f0f0f0;
}
</style>
