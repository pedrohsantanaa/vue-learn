<template>
  <div class="groups-1-subsection">
    <img class="image-20" alt="Image" :src="image11" />
    <button class="button-7">
      <div class="background-26"></div>
      <img class="image-21" alt="Image" :src="image12" />
      <div class="text-wrapper-33">Saiba Mais</div>
    </button>
    <div class="mulheres-empreen">Mulheres Empreendedoras</div>
    <div class="text-wrapper-34">Programa</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import image11 from "./image-11.png";
import image12 from "./image-12.png";

const propsDefinition: Record<string, PropType<unknown>> = {};

export default defineComponent({
  name: "Groups1Subsection",
  props: propsDefinition,
  setup() {
    return {
      image11,
      image12,
    };
  },
});
</script>

<style>
</style>