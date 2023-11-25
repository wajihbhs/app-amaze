<template>
  <div class="section-title">
    <label class="title"> {{ $t(label) }} </label>
    <div class="border"/>
  </div>
</template>
<script lang="ts">
import {Vue} from 'vue-class-component';
import {Prop} from 'vue-property-decorator';

export default class TextField extends Vue {
  @Prop(String) label: string | undefined;
}

</script>
<style scoped lang="scss">
.section-title {
  .title {
    text-align: left;
    font: normal normal 22px normal;
    color: $secondary;
    opacity: 1;
    border-top: none;
    border-left: none;
    border-right: none;
  }

  .border {
    width: 100%;
    margin-top: 0.7em;
    border-bottom: 1px solid #b3b2b2;
  }
}
</style>
