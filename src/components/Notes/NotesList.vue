<template>
  <div v-for="note in notes" :key="note.id">
    <p>
      {{ note.date }}
    </p>
    <ul>
      <li
        v-for="(description, index) in note.description"
        :key="index"
        v-show="selectedNoteId === note.id || index < 5"
      >
        {{ description }}
      </li>
    </ul>
    <button @click="selectedReadMoreNoteHandler(note.id)">
      {{ buttonLabelHandler(note.id) }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import NotesData from "../../data/json/notes.json";

import { Note } from "../../types/note";

export default defineComponent({
  data() {
    return {
      notes: NotesData as ReadonlyArray<Note>,
      selectedNoteId: null as number | null,
    };
  },
  methods: {
    selectedReadMoreNoteHandler(noteId: null | number): void {
      if (noteId === this.selectedNoteId) {
        this.selectedNoteId = null;
      } else {
        this.selectedNoteId = noteId;
      }
    },
    descriptionsHandler(
      desctiptions: string[],
      noteId: number | null
    ): string[] {
      if (noteId === this.selectedNoteId) {
        return desctiptions;
      }
      return desctiptions.slice(0, 5);
    },
    buttonLabelHandler(noteId: number | null): "read less" | "read more" {
      if (noteId === this.selectedNoteId) {
        return "read less";
      }
      return "read more";
    },
  },
});
</script>
