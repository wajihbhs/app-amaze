<template>
  <header class="navbar">
    <div class="logo">
      <img :src="require('@/assets/logo.svg')" alt="Logo">
    </div>
    <nav class="menu">
      <ul>
        <li
            v-for="(li, index) of list"
            :key="`li-key${index}`"
        >
          <a @click="onChange(li)" href="#">
            {{ $t(li) }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
  <router-view/>
</template>
<script lang="ts">
import {Vue} from 'vue-class-component';
import {Prop} from 'vue-property-decorator';
import {switchLanguage} from "@/plugins/i18n";

export default class NavBar extends Vue {
  @Prop(Array) readonly list!: string[];

  onChange(li: string): void {
    this.$i18n.locale = li;
  }
}
</script>
<style lang="scss" src="@/assets/components/_nav-bar.scss" scoped/>

