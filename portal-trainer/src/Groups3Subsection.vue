<template>
  <div class="groups-3-subsection">
    <img class="image-24" alt="Image" :src="image16" />
    <div class="acceso-a-informa">Acceso a informacio</div>
    <img class="background-33" alt="Background" :src="background9" />
    <div class="text-wrapper-42">Noticias</div>
    <img class="background-33" alt="Background" :src="background10" />
    <div class="text-wrapper-43">Institucional</div>
    <img class="background-34" alt="Background" :src="background11" />
    <div class="linhas-de-credit-2">Linhas de credito</div>
    <div class="background-35" />
    <img class="logo" alt="Logo" :src="logo1" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import background9 from "./background-9.png";
import background10 from "./background-10.png";
import background11 from "./background-11.png";
import image16 from "./image-16.png";
import logo1 from "./logo-1.png";

export default defineComponent({
  name: "Groups3Subsection",
  setup() {
    return {
      background9,
      background10,
      background11,
      image16,
      logo1,
    };
  },
});
</script>

<style>
.groups-3-subsection {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  padding: 32px;
  border-radius: 28px;
  background: linear-gradient(180deg, #fefefe 0%, #f1f4ff 100%);
  align-items: center;
  justify-items: center;
}

.image-24 {
  width: 120px;
  height: auto;
  grid-column: 1 / -1;
}

.acceso-a-informa {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #10243b;
  grid-column: 1 / -1;
  text-align: center;
}

.background-33,
.background-34 {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 18px;
  box-shadow: 0 12px 24px rgba(16, 36, 59, 0.12);
}

.text-wrapper-42,
.text-wrapper-43,
.linhas-de-credit-2 {
  font-size: 18px;
  font-weight: 600;
  color: #10243b;
  margin-top: 10px;
  text-align: center;
}

.background-35 {
  width: 100%;
  height: 90px;
  border-radius: 16px;
  background: linear-gradient(90deg, rgba(0, 147, 121, 0.2), rgba(1, 109, 90, 0.5));
  backdrop-filter: blur(8px);
  grid-column: 1 / -1;
  margin-top: 8px;
}

.logo {
  width: 140px;
  height: auto;
  margin-top: 12px;
  grid-column: 1 / -1;
}
</style>
