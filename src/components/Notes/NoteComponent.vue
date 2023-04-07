<template>
  <div>
    <p>{{ note.date }}</p>
    <ul>
      <li v-for="description in desciptions" :key="description">
        <note-description :description="description"></note-description>
      </li>
    </ul>
    <button @click="onReadHandler" v-if="isReadMoreActive">read less</button>
    <button @click="onReadHandler" v-else>read more</button>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";

import NoteDescription from "./NoteDescription.vue";

import { Note } from "../../types/note";

export default defineComponent({
  components: {
    NoteDescription,
  },
  props: {
    note: { required: true, type: Object as PropType<Note> },
    selectedNoteId: {
      required: true,
      type: Number as PropType<number | null>,
    },
  },
  emits: ["onReadMore"],
  computed: {
    desciptions(): ReadonlyArray<string> {
      if (this.isReadMoreActive) {
        return this.note.description;
      } else {
        return this.note.description.slice(0, 5);
      }
    },
    isReadMoreActive(): boolean {
      return this.note.id === this.selectedNoteId;
    },
  },
  methods: {
    onReadHandler(): void {
      this.$emit(
        "onReadMore",
        this.isReadMoreActive ? null : this.selectedNoteId
      );
    },
  },
});
</script>
