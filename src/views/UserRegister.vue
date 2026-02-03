<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/base/Button.vue'
import UnloggedHeader from '@/components/layout/UnloggedHeader.vue'
import { UserRegister } from '@/services/user/UserRegister'

const username = ref('')
const password = ref('')
</script>

<template>
  <UnloggedHeader></UnloggedHeader>
  <div class="register">
    <div class="registerHeader">
      <h2>Register</h2>
    </div>
    <div class="registerContent">
      <div></div>
      <input v-model="username" type="text" required placeholder="Username" />
      <input v-modal="password" type="password" required placeholder="Password" />
    </div>
    <div class="registerFooter">
      <Button text="Confirm" v-on:click="UserRegister.submitRegister(username, password)"></Button>
    </div>
  </div>
</template>

<style scoped>
.register {
  border: 1px solid var(--color-border);
  border-radius: 10px;
  padding: 10px;
  column-gap: 10px;
}

.registerHeader {
  display: flex;
  justify-content: center;
  align-items: center;
}

.registerContent {
  display: flex;
  flex-direction: column;
}

.registerFooter {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
