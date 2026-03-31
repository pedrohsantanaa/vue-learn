<template>
  <div class="groups-subsection">
    <div class="groups">
      <div class="div">
        <div class="text-wrapper">Credito</div>
        <img class="background" alt="Background" :src="background12" />
      </div>
      <div class="div-wrapper">
        <div class="text-wrapper-2">Simulador</div>
      </div>
      <div class="groups-2">
        <div class="text-wrapper-3">Institucional</div>
      </div>
      <div class="groups-3">
        <div class="text-wrapper-4">Noticias</div>
      </div>
      <div class="groups-4">
        <div class="text-wrapper-5">Contato</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import background12 from "./background-12.png";

export default defineComponent({
  name: "GroupsSubsection",
  setup() {
    return {
      background12,
    };
  },
});
</script>

<style scoped>
.groups-subsection {
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  padding: 32px 16px;
  width: 100%;
}

.groups {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  width: 100%;
}

.div,
.div-wrapper,
.groups-2,
.groups-3,
.groups-4 {
  align-items: center;
  background-color: #f8f8f8;
  border-radius: 16px;
  display: flex;
  height: 120px;
  justify-content: center;
  padding: 16px;
  position: relative;
  width: 160px;
}

.div .text-wrapper,
.div-wrapper .text-wrapper-2,
.groups-2 .text-wrapper-3,
.groups-3 .text-wrapper-4,
.groups-4 .text-wrapper-5 {
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 24px;
  margin: 0;
  text-align: center;
  width: 100%;
}

.background {
  border-radius: 16px;
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 0;
}

.div .text-wrapper,
.div-wrapper .text-wrapper-2,
.groups-2 .text-wrapper-3,
.groups-3 .text-wrapper-4,
.groups-4 .text-wrapper-5 {
  z-index: 1;
}

.div-wrapper,
.groups-2,
.groups-3,
.groups-4 {
  background-color: #f0f0f0;
}
</style>