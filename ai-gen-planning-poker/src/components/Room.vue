<template>
  <div>
    <h1>Room: {{ roomId }}</h1>
    <div class="cards">
      <Card v-for="card in cards" :key="card" :value="card" @card-selected="handleCardSelection" />
    </div>
    <Chat />
  </div>
</template>

<script>
import Card from './Card.vue'
import Chat from './Chat.vue'

export default {
  components: { Card, Chat },
  data() {
    return {
      roomId: this.$route.params.id,
      cards: [1, 2, 3, 5, 8, 13, 21],
    }
  },
  methods: {
    handleCardSelection(selectedCard) {
      console.log(`Card selected: ${selectedCard}`)
      // Handle the card selection logic
    },
  },
}
</script>

<style scoped>
.cards {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
</style>
