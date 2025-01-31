<template>
  <div>
    <div class="messages">
      <div v-for="message in messages" :key="message.id">{{ message.text }}</div>
    </div>
    <input v-model="newMessage" @keyup.enter="sendMessage" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      newMessage: '',
    }
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim()) {
        this.messages.push({ id: Date.now(), text: this.newMessage })
        this.newMessage = ''
      }
    },
  },
}
</script>

<style scoped>
.messages {
  max-height: 200px;
  overflow-y: auto;
}
</style>
