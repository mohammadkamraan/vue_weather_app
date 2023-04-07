<template>
  <notes-list></notes-list>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NotesList from "./components/Notes/NotesList.vue";

@Options({
  components: {
    NotesList,
  },
})
export default class App extends Vue {}
</script>
