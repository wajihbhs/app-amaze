<template>
  <div
      class="show-container"
      :frame="frame.title"
  >
    <div
        v-for="(item, key) of items"
        :key="`item-${key}`"
        class="row mb-1"
    >
      <div col-value="60" class="col d-flex">
        <item-content
          :item="item"
          :summary-enabled="false"
        />
      </div>
      <div col-value="40" class="col action">
        <Component
            :is="componentName"
            :item="item"
            title="add-to-my-list"
            @on:click="addToList(item)"
            @on:check="onCheck($event, item)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import store from '@/store';
import {capitalize} from "@/utils/string";
import {Prop} from "vue-property-decorator";
import OButton from '@/components/OButton.vue';
import CheckBox from '@/components/CheckBox.vue';
import {Options, Vue} from "vue-class-component";
import {ShowInterface} from "@/models/ShowInterface";
import ItemContent from '@/components/ItemContent.vue';
import {FrameInterface} from "@/models/FrameInterface";

@Options({
  components: {
    OButton,
    CheckBox,
    ItemContent
  },
  computed: {
    search(): string {
      return store
          .getters[`getSearch`]
          ;
    },
    items(): ShowInterface {
      const list = store.getters[`get${capitalize(this.frame.title)}`];

      return this.componentName === 'CheckBox' ? list :
          list.filter((item: ShowInterface) => item.name.toLowerCase().includes(this.search.toLowerCase()))
          ;
    },
    componentName(): string {
      return this.frame.title === 'list' ? 'OButton' : 'CheckBox';
    }
  }
})

export default class ItemFrame extends Vue {
  @Prop(Object) readonly frame!: FrameInterface;

  addToList(item: ShowInterface) {
    store.commit('addToMyList', item);
  }
  onCheck(mutation: string, show: ShowInterface) {
    store.commit(mutation, show);
  }
}
</script>

<style lang="scss" scoped>
.show-container {
  &[frame= 'list'] {
    height: 350px;
  }
  &[frame= 'myList'] {
    height: 400px;
  }
  overflow-x: hidden;
  overflow-y: scroll;
}

.action {
  @extend .d-flex;
  @extend .d-flex-content-end;
  @extend .d-flex-content-center;
  @extend .margin-auto;
}

.img-show {
  max-width: 90px;
  min-width: 90px;
  min-height: 140px;
  max-height: 140px;
}
</style>
