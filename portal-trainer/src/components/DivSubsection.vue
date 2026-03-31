<template>
  <div class="div-subsection">
    <div class="simule-seu-cr-di">Simule seu Crédito</div>
    <p class="descubra-valores">
      Descubra valores, prazos e condicoes de
      <br />
      financiamento de forma rápida e segura.
    </p>
    <button class="button-2">
      <div class="background-15" />
      <div class="acessar-simulado">Acessar Simulador</div>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

const divSubsectionProps = {} as Record<string, PropType<never>>;

export default defineComponent({
  name: "DivSubsection",
  props: divSubsectionProps,
});
</script>

<style>
.div-subsection {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background: #f9f9f9;
  border-radius: 16px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 12px 32px rgba(7, 31, 63, 0.08);
}

.simule-seu-cr-di {
  font-size: 24px;
  font-weight: 600;
  color: #0b1a2b;
  letter-spacing: 0.01em;
  margin: 0;
}

.descubra-valores {
  margin: 0;
  font-size: 14px;
  color: #3b475d;
  line-height: 1.5;
}

.button-2 {
  border: none;
  border-radius: 24px;
  background: linear-gradient(135deg, #0061ff, #33a1ff);
  padding: 12px 24px;
  color: white;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  transition: transform 0.2s ease;
}

.button-2:hover {
  transform: translateY(-1px);
}

.background-15 {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
}

.acessar-simulado {
  font-size: 16px;
  font-weight: 600;
}
</style>