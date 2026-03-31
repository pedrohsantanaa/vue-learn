<template>
  <div class="design-portal">
    <div class="root">
      <img class="image-25" alt="Image" :src="image22" />
      <img class="image-26" alt="Image" :src="image25" />
      <GroupsSubsection />
      <img class="background-36" alt="Background" :src="background13" />
      <img class="background-37" alt="Background" :src="background14" />
      <div class="groups-25">
        <GroupsWrapperSubsection />
        <DivWrapperSubsection />
        <DivSubsection />
        <SectionComponentNodeSubsection />
        <img class="image-27" alt="Image" :src="image10" />
        <Groups1Subsection />
        <img class="image-28" alt="Image" :src="image13" />
        <Groups2Subsection />
      </div>
      <div class="background-38" />
      <Groups3Subsection />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { DivSubsection } from "./DivSubsection";
import { DivWrapperSubsection } from "./DivWrapperSubsection";
import { Groups1Subsection } from "./Groups1Subsection";
import { Groups2Subsection } from "./Groups2Subsection";
import { Groups3Subsection } from "./Groups3Subsection";
import { GroupsSubsection } from "./GroupsSubsection";
import { GroupsWrapperSubsection } from "./GroupsWrapperSubsection";
import { SectionComponentNodeSubsection } from "./SectionComponentNodeSubsection";
import background13 from "./background-13.png";
import background14 from "./background-14.png";
import image10 from "./image-10.png";
import image13 from "./image-13.png";
import image22 from "./image-22.png";
import image25 from "./image-25.png";

const designPortalProps: Record<string, PropType<never>> = {};

export default defineComponent({
  name: "DesignPortal",
  components: {
    DivSubsection,
    DivWrapperSubsection,
    Groups1Subsection,
    Groups2Subsection,
    Groups3Subsection,
    GroupsSubsection,
    GroupsWrapperSubsection,
    SectionComponentNodeSubsection,
  },
  props: designPortalProps,
  setup() {
    return {
      background13,
      background14,
      image10,
      image13,
      image22,
      image25,
    };
  },
});
</script>

<style>
.design-portal {
  display: flex;
  min-height: 1440px;
  min-width: 960px;
  width: 100%;
}
.design-portal .root {
  flex: 1;
  height: 1440px;
  position: relative;
}
.design-portal .image-25 {
  bottom: 0;
  height: 81px;
  object-fit: cover;
  position: absolute;
  right: 0;
  width: 960px;
}
.design-portal .image-26 {
  bottom: 0;
  height: 57px;
  object-fit: cover;
  position: absolute;
  right: 0;
  width: 960px;
}
.design-portal .background-36 {
  bottom: 0;
  height: 519px;
  object-fit: cover;
  position: absolute;
  right: 0;
  width: 960px;
}
.design-portal .background-37 {
  bottom: 0;
  height: 58px;
  object-fit: cover;
  position: absolute;
  right: 0;
  width: 960px;
}
.design-portal .groups-25 {
  bottom: 0;
  height: 1440px;
  position: absolute;
  right: 0;
  width: 960px;
}
.design-portal .image-27 {
  bottom: 0;
  height: 308px;
  object-fit: cover;
  position: absolute;
  right: 0;
  width: 960px;
}
.design-portal .image-28 {
  bottom: 0;
  height: 306px;
  object-fit: cover;
  position: absolute;
  right: 0;
  width: 312px;
}
.design-portal .background-38 {
  background-color: #f5f3f7;
  bottom: 1360px;
  height: 3px;
  position: absolute;
  right: 0;
  width: 960px;
}
</style>