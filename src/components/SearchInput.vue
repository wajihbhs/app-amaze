<template>
  <div class="search-input">
    <input
        v-model="search"
        type="text"
        @keyup="onSearch"
    />
    <span class="search-icon">
      <i class="fa fa-search"></i>
    </span>
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";
import store from '@/store';

export default class SearchInput extends Vue {
  private search = '';

  onSearch() {
    store.commit('setSearch', this.search);
  }
}
</script>

<style lang="scss" scoped>
/* Basic styling */
.search-input {
  width: 100%;
  position: relative;
  display: inline-block;

  input {
    width: calc(100% - 10px);
    border: 1px solid #ccc;
    color: $secondary;
    outline: none;
    background-color: #ffffff;
    height: 50px;
    padding: 5px;
  }

  .search-icon {
    position: absolute;
    color: #3b3737;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
    pointer-events: none;
    i {
      font-size: 16px;
      color: #888;
    }
  }

}

</style>
