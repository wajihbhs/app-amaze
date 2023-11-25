<template>
  <nav-bar :list="list"/>
  <div class="section-flex">
    <section-frame
        v-for="(frame, key) of frames"
        :key="`frame-key${key}`"
        :frame="frame"
    />
  </div>
  <div>
    <description-frame/>
  </div>
</template>
<script lang="ts">
import store from '@/store';
import NavBar from "@/components/NavBar.vue";
import {Options, Vue} from 'vue-class-component';
import {FRAMES, LOCALES} from "@/constants/config";
import {ShowInterface} from "@/models/ShowInterface";
import {ShowsService} from "@/services/shows.service";
import SectionFrame from "@/components/SectionFrame.vue";
import DescriptionFrame from "@/components/DescriptionFrame.vue";

@Options({
  components: {
    NavBar,
    SectionFrame,
    DescriptionFrame,
  },
})

export default class App extends Vue {
  private list = LOCALES.length ? LOCALES : [];
  private frames = FRAMES.length ? FRAMES : [];

  async mounted() {
    ShowsService.getMovies()
        .then((response: ShowInterface[]) => {
          store.commit('saveList', response);
        })
    ;
  }
}
</script>
<style lang="scss" scoped>
body {
  display: block;
  margin: 0;
  background-color: #f8f8f8;
}

.section-flex {
  display: flex;
  flex-direction: row;

  @include mobile {
    flex-direction: column;
  }
}
</style>
