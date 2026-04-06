<template>
  <div class="groups-wrapper-subsection">
    <div class="groups-5">
      <div class="background-2"></div>
      <button class="button">
        <div class="background-3"></div>
        <div class="text-wrapper-6">in</div>
      </button>
      <img class="image" alt="Image" :src="image17" />
      <img class="img" alt="Image" :src="image18" />
      <div class="groups-6">
        <img class="image-2" alt="Image" :src="image19" />
        <img class="background-4" alt="Background" :src="background15" />
        <div class="groups-7">
          <div class="text-wrapper-7">Ouvldoria</div>
        </div>
        <img class="background-4" alt="Background" :src="background16" />
        <div class="groups-8">
          <div class="text-wrapper-8">Trampordinda</div>
        </div>
        <img class="background-5" alt="Background" :src="background17" />
        <div class="linhas-de-credit-wrapper">
          <div class="linhas-de-credit">Linhas de Credito</div>
        </div>
        <img class="background-6" alt="Background" :src="background18" />
        <div class="text-wrapper-9">Institucional</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import background15 from "./background-15.png";
import background16 from "./background-16.png";
import background17 from "./background-17.png";
import background18 from "./background-18.png";
import image17 from "./image-17.png";
import image18 from "./image-18.png";
import image19 from "./image-19.png";

const propDefinitions: Record<string, PropType<never>> = {};

export default defineComponent({
  name: "GroupsWrapperSubsection",
  props: propDefinitions,
});
</script>

<style scoped>
.groups-wrapper-subsection {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 24px;
  background: linear-gradient(180deg, #eef3fb, #ffffff);
}
.groups-5 {
  width: 100%;
  max-width: 1240px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  padding: 48px;
  border-radius: 40px;
  background-color: #ffffff;
  box-shadow: 0 30px 60px rgba(15, 37, 57, 0.18);
  overflow: hidden;
}
.background-2 {
  position: absolute;
  inset: 0;
  border-radius: 40px;
  background: radial-gradient(circle at 20% 20%, rgba(57, 161, 255, 0.25), transparent 55%), radial-gradient(circle at 80% 0%, rgba(255, 134, 90, 0.35), transparent 60%);
  z-index: 0;
}
.button {
  position: relative;
  width: 120px;
  height: 46px;
  border: none;
  border-radius: 16px;
  padding: 0;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.button .background-3 {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  background: linear-gradient(135deg, #05a7ff, #0047b3);
  box-shadow: 0 15px 30px rgba(7, 26, 68, 0.45);
  z-index: 0;
}
.button .text-wrapper-6 {
  position: relative;
  z-index: 1;
  font-family: "Poppins", "Helvetica Neue", sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
}
.image,
.img,
.image-2,
.background-4,
.background-5,
.background-6 {
  width: 100%;
  min-height: 240px;
  max-height: 280px;
  border-radius: 30px;
  object-fit: cover;
  box-shadow: 0 24px 45px rgba(15, 37, 57, 0.18);
}
.groups-6 {
  position: relative;
  z-index: 1;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
  align-items: stretch;
}
.groups-7,
.groups-8,
.linhas-de-credit-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  padding: 18px 24px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 18px 35px rgba(15, 37, 57, 0.2);
}
.text-wrapper-7,
.text-wrapper-8,
.linhas-de-credit,
.text-wrapper-9 {
  font-family: "Poppins", "Helvetica Neue", sans-serif;
  font-weight: 700;
  color: #0f2b4a;
  font-size: 20px;
  text-align: center;
  letter-spacing: 0.04em;
}
.text-wrapper-9 {
  grid-column: 1 / -1;
  padding: 22px;
  background: #f5f7fb;
  box-shadow: 0 20px 40px rgba(15, 37, 57, 0.25);
  border-radius: 36px;
}
</style>