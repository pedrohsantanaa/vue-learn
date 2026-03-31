<template>
  <div class="div-wrapper-subsection">
    <div class="groups-wrapper">
      <div class="groups-9">
        <div class="groups-10">
          <div class="groups-11">
            <div class="background-7" />
            <img class="image-3" alt="Image" :src="image20" />
            <img class="image-4" alt="Image" :src="image21" />
            <div class="text-wrapper-10">Leia mais</div>
            <div class="credito-aspocial">
              Credito aspocial para mulheres
              <br />
              emprecuitos.
            </div>
            <div class="programa-mulhere">
              Programa Mulheres Empremdedoras
            </div>
          </div>
        </div>
        <div class="groups-12">
          <img class="background-8" alt="Background" :src="background19" />
          <img class="background-8" alt="Background" :src="background20" />
          <img class="background-9" alt="Background" :src="background21" />
          <img class="background-8" alt="Background" :src="background22" />
          <div class="groups-13">
            <div class="background-10" />
            <img class="image-5" alt="Image" :src="image23" />
            <img class="image-6" alt="Image" :src="image24" />
            <div class="text-wrapper-11">Leia mais</div>
            <p class="programa-de-inse">
              Programa de insentivo de empreendedo&lt;6 ho
              <br />
              bosal.
            </p>
            <div class="fomento-apoia-pe">
              Fomento Apoia Pequenos Negocios
            </div>
          </div>
          <img
            class="background-11"
            alt="Background"
            :src="background23"
          />
          <div class="text-wrapper-12">Notícias</div>
          <div class="text-wrapper-13">Ultimas</div>
        </div>
        <div class="groups-14">
          <div class="background-12" />
          <img class="image-7" alt="Image" :src="image26" />
          <img class="image-8" alt="Image" :src="image27" />
          <div class="text-wrapper-14">Leia mais</div>
          <p class="nova-lina-noamen">
            Nova lina noamento para produtores
            <br />
            agrecbia de Tocantins.
          </p>
          <p class="nova-linha-de-cr">Nova Linha de Credito Rural</p>
        </div>
      </div>
    </div>
    <div class="groups-15">
      <div class="background-13" />
      <img class="image-9" alt="Image" :src="image28" />
      <img class="image-10" alt="Image" :src="image29" />
      <img class="image-11" alt="Image" :src="image30" />
      <img class="image-12" alt="Image" :src="image31" />
      <img class="image-13" alt="Image" :src="image32" />
      <img class="image-14" alt="Image" :src="image33" />
      <div class="text-wrapper-15">BNDES</div>
      <div class="text-wrapper-16">Banco Do Brasil</div>
      <div class="text-wrapper-17">A</div>
      <div class="text-wrapper-18">CAI</div>
      <div class="text-wrapper-19">TOCANTINS</div>
      <div class="text-wrapper-20">GOVNOMA DO</div>
    </div>
    <img class="background-14" alt="Background" :src="background24" />
    <div class="text-wrapper-21">Parceiros</div>
    <div class="text-wrapper-22">Nossos</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import background19 from "./background-19.png";
import background20 from "./background-20.png";
import background21 from "./background-21.png";
import background22 from "./background-22.png";
import background23 from "./background-23.png";
import background24 from "./background-24.png";
import image20 from "./image-20.png";
import image21 from "./image-21.png";
import image23 from "./image-23.png";
import image24 from "./image-24.png";
import image26 from "./image-26.png";
import image27 from "./image-27.png";
import image28 from "./image-28.png";
import image29 from "./image-29.png";
import image30 from "./image-30.png";
import image31 from "./image-31.png";
import image32 from "./image-32.png";
import image33 from "./image-33.png";

const propsDefinition: Record<string, PropType<never>> = {};

export default defineComponent({
  name: "DivWrapperSubsection",
  props: propsDefinition,
  setup() {
    return {
      background19,
      background20,
      background21,
      background22,
      background23,
      background24,
      image20,
      image21,
      image23,
      image24,
      image26,
      image27,
      image28,
      image29,
      image30,
      image31,
      image32,
      image33,
    };
  },
});
</script>

<style scoped>
</style>