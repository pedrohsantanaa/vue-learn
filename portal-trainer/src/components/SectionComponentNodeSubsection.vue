<template>
  <div class="section-component-node-subsection">
    <div class="groups-16">
      <div class="como-solicitar-c">Como Solicitar Crédito</div>
      <img class="background-16" alt="Background" :src="image" />
    </div>

    <div class="groups-17">
      <img class="background-17" alt="Background" :src="background4" />

      <div class="groups-18">
        <div class="groups-19">
          <div class="background-18" />

          <button class="button-3">
            <div class="background-19" />

            <img class="image-15" alt="Image" :src="image8" />

            <div class="text-wrapper-23">Saiba Mais</div>
          </button>

          <img class="image-16" alt="Image" :src="image9" />

          <div class="para-pequenos-ne">
            Para pequenos
            <br />
            negocios
          </div>

          <div class="text-wrapper-24">Microcredito</div>
        </div>

        <div class="groups-20">
          <img class="background-20" alt="Background" :src="background3" />

          <button class="button-4">
            <div class="background-21" />

            <img class="image-15" alt="Image" :src="image6" />

            <div class="text-wrapper-25">Saiba Mais</div>
          </button>

          <img class="image-17" alt="Image" :src="image7" />

          <div class="expenado-e-inves">
            Expenado
            <br />e investimento
          </div>

          <div class="text-wrapper-26">Empresas</div>
        </div>

        <div class="groups-21">
          <img class="background-22" alt="Background" :src="background2" />

          <button class="button-5">
            <div class="background-23" />

            <img class="image-15" alt="Image" :src="image4" />

            <div class="text-wrapper-27">Saiba Mais</div>
          </button>

          <img class="image-18" alt="Image" :src="image5" />

          <div class="text-wrapper-28">Producao Rural</div>

          <div class="text-wrapper-29">Agronegocio</div>
        </div>

        <div class="groups-22">
          <div class="background-24" />

          <button class="button-6">
            <div class="background-25" />

            <img class="image-15" alt="Image" :src="image2" />

            <div class="text-wrapper-30">Saiba Mais</div>
          </button>

          <img class="image-19" alt="Image" :src="image3" />

          <div class="empreendimentos">
            Empreendimentos
            <br />
            Turisticos
          </div>

          <div class="text-wrapper-31">Turismo</div>
        </div>
      </div>
    </div>

    <div class="linhas-de-cr-dit">Linhas de Crédito</div>

    <div class="text-wrapper-32">Nossas</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import background2 from "./background-2.png";
import background3 from "./background-3.png";
import background4 from "./background-4.png";
import image2 from "./image-2.png";
import image3 from "./image-3.png";
import image4 from "./image-4.png";
import image5 from "./image-5.png";
import image6 from "./image-6.png";
import image7 from "./image-7.png";
import image8 from "./image-8.png";
import image9 from "./image-9.png";
import image from "./image.png";

const props = {} as Record<string, PropType<never>>;

export default defineComponent({
  name: "SectionComponentNodeSubsection",
  props,
});
</script>

<style scoped>
</style>