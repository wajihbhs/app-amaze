<template>
  <div class="frame width-inherit">
    <div class="description-flex width-100">
      <div
          class="random-watch mb-1"
          align="middle"
      >
        <o-button
            title="random-watch"
            @on:click="randomize()"
        />
      </div>
      <div
          class="random-watch"
          align="left"
      >
        <div
            v-if="isReadyToShow"
            class="row"
        >
          <item-content
              :item="randomShow"
              :summary-enabled="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import store from '@/store';
import OButton from "@/components/OButton.vue";
import {Vue, Options} from "vue-class-component";
import {ShowInterface} from "@/models/ShowInterface";
import ItemContent from '@/components/ItemContent.vue';

@Options({
  components: {
    OButton,
    ItemContent
  },
})
export default class DescriptionFrame extends Vue {
  private isReadyToShow = false;
  private randomShow: ShowInterface | undefined;

  randomize() {
    this.isReadyToShow = false;

    const checkedList = store.getters['getCheckedList'];

    if (checkedList.length === 0) {
      return null;
    }

    const randomIndex = Math.floor(Math.random() * checkedList.length);

    this.randomShow = checkedList[randomIndex];

    this.isReadyToShow = true;
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/components/_frame.scss";

.description-flex {
  display: flex;
  flex-direction: row;

  .random-watch {
    &[align='middle'] {
      @extend .margin-auto;
      justify-content: center;
      align-items: center;
    }

    justify-content: left;

    flex: 0 0 50%;
    max-width: 50%;

    @include mobile {
      flex: 0 0 100%;
      max-width: 100%;
      margin-top: 1.2em;
    }
  }

  @include mobile {
    flex-direction: column;
  }
}
</style>
