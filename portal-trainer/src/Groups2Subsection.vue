<template>
  <div class="groups-2-subsection">
    <div class="groups-23">
      <div class="text-wrapper-35">Crédito para</div>
      <div class="text-wrapper-36">desenvolver o</div>
      <div class="text-wrapper-37">Tocantins</div>
      <div class="financlamento-pa">
        Financlamento para empremdedores e
        <br />
        empresas.
      </div>
      <button type="button" class="button-8">
        <div class="background-27" />
        <div class="text-wrapper-38">Simular Credito</div>
      </button>
      <img class="background-28" alt="Background" :src="background8" />
    </div>

    <div class="groups-24">
      <img class="image-22" alt="Image" :src="image14" />
      <img class="background-29" alt="Background" :src="background5" />
      <img class="background-30" alt="Background" :src="background6" />
      <img class="background-31" alt="Background" :src="background7" />
      <button type="button" class="button-9">
        <div class="background-32" />
        <img class="image-23" alt="Image" :src="image15" />
        <div class="text-wrapper-39">Saiba Mais</div>
      </button>
      <div class="text-wrapper-40">para Produtores</div>
      <div class="text-wrapper-41">Crédito Rural</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import background5 from "./background-5.png";
import background6 from "./background-6.png";
import background7 from "./background-7.png";
import background8 from "./background-8.png";
import image14 from "./image-14.png";
import image15 from "./image-15.png";

const propsDefinition: Record<string, PropType<unknown>> = {};

export default defineComponent({
  name: "Groups2Subsection",
  props: propsDefinition,
  setup() {
    return {
      background5,
      background6,
      background7,
      background8,
      image14,
      image15,
    };
  },
});
</script>

<style>
.groups-2-subsection {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 3rem 1.5rem;
  box-sizing: border-box;
}
.groups-23,
.groups-24 {
  flex: 1;
  min-width: 320px;
  max-width: 540px;
  position: relative;
  border-radius: 32px;
  padding: 2.75rem 2.25rem;
  overflow: hidden;
}
.groups-23 {
  background: linear-gradient(180deg, #002c8c 0%, #0042a8 100%);
  color: #ffffff;
  box-shadow: 0 35px 80px rgba(0, 20, 70, 0.35);
}
.groups-24 {
  background: linear-gradient(180deg, #fdf9f4 0%, #f4f2ef 100%);
  color: #0c203f;
  box-shadow: 0 35px 80px rgba(15, 28, 61, 0.25);
}
.text-wrapper-35,
.text-wrapper-36,
.text-wrapper-37,
.text-wrapper-40,
.text-wrapper-41 {
  font-family: "Poppins", "Inter", sans-serif;
  font-weight: 700;
  letter-spacing: 0.08em;
  margin: 0;
}
.text-wrapper-35 {
  font-size: 1.2rem;
  text-transform: uppercase;
  opacity: 0.9;
}
.text-wrapper-36,
.text-wrapper-40 {
  font-size: 1.3rem;
}
.text-wrapper-37,
.text-wrapper-41 {
  font-size: 2.4rem;
  margin-bottom: 0.5rem;
}
.financlamento-pa {
  font-size: 1rem;
  line-height: 1.6;
  margin: 1.25rem 0 2rem;
  max-width: 280px;
}
.button-8,
.button-9 {
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  position: relative;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-width: 220px;
  height: 50px;
  overflow: hidden;
}
.button-9 {
  margin-top: 2rem;
}
.background-27,
.background-32 {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #fcb045 0%, #fd1d1d 50%, #833ab4 100%);
  transition: transform 0.3s ease;
}
.button-8:hover .background-27,
.button-9:hover .background-32 {
  transform: scale(1.05);
}
.text-wrapper-38,
.text-wrapper-39 {
  position: relative;
  z-index: 1;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
}
.groups-24 .text-wrapper-39 {
  color: #ffffff;
}
.image-22,
.image-23,
.background-28,
.background-29,
.background-30,
.background-31 {
  position: absolute;
}
.image-22 {
  top: 1rem;
  left: 1rem;
  width: 160px;
}
.background-28 {
  bottom: -20px;
  right: -20px;
  width: 200px;
  opacity: 0.7;
}
.background-29 {
  top: 0;
  right: 0;
  width: 130px;
  opacity: 0.6;
}
.background-30 {
  top: 40%;
  left: -10%;
  width: 160px;
  opacity: 0.5;
}
.background-31 {
  bottom: 10%;
  left: 5%;
  width: 140px;
  opacity: 0.4;
}
.button-9 .image-23 {
  width: 36px;
}
</style>