<template>
  <input
      v-model="model"
      v-bind="{ ...$attrs }"
      type="text"
      class="text-input"
  />
</template>
<script lang="ts">
import {Vue} from 'vue-class-component';
import { Prop } from 'vue-property-decorator';


export default class TextField extends Vue {
  @Prop (String) model: string | undefined;
}

</script>
<style scoped lang="scss">
.text-input {
  text-align: left;
  font: normal normal 900 28px Avenir;
  letter-spacing: 0;
  color: #3b3737;
  opacity: 1;
  border-top: none;
  border-left: none;
  border-right: none;
}

.text-input:focus {
  border-bottom: solid 2px #092772;
  color: #092772;
}

input[type="text"]:focus {
  outline: none;
}
</style>
