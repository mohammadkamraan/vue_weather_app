<template>
  <Teleport to="body">
    <transition>
      <div class="backdrop">
        <div @click.stop class="alert">
          <p>{{ message }}</p>
          <div class="buttons-wrapper">
            <button
              v-for="button in buttons"
              :key="button.text"
              @click="button.handler"
              :class="['button', button.type]"
            >
              {{ button.text }}
            </button>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script>
export default {
  props: ["message", "buttons"],
};
</script>

<style scoped>
.button {
  padding: 1rem 3rem;
  border-radius: 5px;
  color: white;
  transition: all 300ms;
  transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
  font-size: small;
}
.warning {
  background-color: rgb(247, 179, 9);
}
.warning:hover {
  background-color: yellow;
}
.danger {
  background-color: red;
}
.danger:hover {
  background-color: tomato;
}
.success {
  background-color: green;
}
.success:hover {
  background-color: aquamarine;
}
.info {
  background-color: blue;
}
.info:hover {
  background-color: aqua;
}
.buttons-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
}
</style>
