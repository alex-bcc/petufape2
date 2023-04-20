<template>
  <img
    class="pet-logo"
    alt="Pet Logo"
    src="/pet-logo.png"
  >
</template>

<style>
.pet-logo {
  height: 180px;
  width: 180px;
  border: 0px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 100;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
