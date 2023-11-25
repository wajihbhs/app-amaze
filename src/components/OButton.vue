<template>
  <span @click="$emit('on:click')" class="btn">{{ $t(title) }}</span>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";
import {Prop} from "vue-property-decorator";

export default class OButton extends Vue {
  @Prop(String) readonly title!: string;
}
</script>
