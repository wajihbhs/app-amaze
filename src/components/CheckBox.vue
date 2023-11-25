<template>
  <div
      :checked="checked"
      class="icon-box"
      @click="onCheck"
  >
    <i
        v-if="checked"
        :checked="checked"
        class="fa fa-check"
    />
  </div>
</template>
<script lang="ts">
import {Vue} from 'vue-class-component';

export default class TextField extends Vue {
  private checked = false;
  onCheck() {
    this.checked = !this.checked;
    this.$emit('on:check', this.checked ? 'onCheck' : 'onUnCheck');
  }
}

</script>
<style scoped lang="scss">
.icon-box {
  width: 25px;
  height: 25px;
  border: 2px solid $primary;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;

  &[checked = true] {
    background-color: $primary;
  }

  .fa {
    visibility: hidden;

    &[checked = true] {
      visibility: visible;
      color: $white;
    }
  }
}
</style>
