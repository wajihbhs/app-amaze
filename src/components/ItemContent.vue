<template>
  <div class="d-flex">
    <img
        :src="item.image.medium"
        col-size="40"
        class="img-show"
    />
    <div col-size="60" class="ml-4 mt-2">
      <span class="title" custom-size="large"> {{ item.name }}</span>
      <span class="title row" custom-size="medium"> {{ `${item.averageRuntime} ${$t('min')}` }}</span>
      <span class="title row" custom-size="medium"> {{ item.rating.average }}</span>
      <span class="title row" custom-size="small"> {{ year }}</span>
      <p
          v-if="summaryEnabled"
          v-html="item.summary"
          class="mt-1 title row"
          custom-size="small"
      />
    </div>
  </div>
</template>
<script lang="ts">
import {Prop} from "vue-property-decorator";
import {Options, Vue} from "vue-class-component";
import {ShowInterface} from "@/models/ShowInterface";

@Options({
  computed: {
    year() {
      return new Date(this.item.premiered).getFullYear();
    }
  }
})
export default class ItemContent extends Vue {
  @Prop(Object) readonly item!: ShowInterface;
  @Prop(Boolean) readonly summaryEnabled!: false;
}
</script>

<style scoped lang="scss">
.img-show {
  max-width: 90px;
  min-width: 90px;
  min-height: 140px;
  max-height: 140px;
}
</style>
