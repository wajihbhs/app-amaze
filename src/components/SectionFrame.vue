<template>
  <div class="frame">
    <section-title
        :label="frame.title"
    />
    <search-input
        v-if="false === hasSearchSection"
        class="mt-5"
    />
    <item-frame
        class="mt-2"
        :frame="frame"
    />
  </div>
</template>

<script lang="ts">
import {Prop} from "vue-property-decorator";
import {Vue, Options} from 'vue-class-component';
import ItemFrame from '@/components/ItemFrame.vue';
import SearchInput from '@/components/SearchInput.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import {FrameInterface} from "@/models/FrameInterface";

@Options({
  components: {
    SectionTitle,
    SearchInput,
    ItemFrame,
  },
  computed: {
    hasSearchSection(): boolean {
      return this.frame.title === 'myList';
    }
  }
})

export default class NavBar extends Vue {
  @Prop(Object) readonly frame!: FrameInterface;
}
</script>
<style scoped lang="scss">
@import "@/assets/components/_frame.scss";
</style>
