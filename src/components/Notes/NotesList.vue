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

<script>
import NotesData from "../../data/json/notes.json";
export default {
  components: {},
  data() {
    return {
      notes: NotesData,
      selectedNoteId: null,
    };
  },
  methods: {
    selectedReadMoreNoteHandler(noteId) {
      if (noteId === this.selectedNoteId) {
        this.selectedNoteId = null;
      } else {
        this.selectedNoteId = noteId;
      }
    },
    descriptionsHandler(desctiptions, noteId) {
      console.log("calculate");
      if (noteId === this.selectedNoteId) {
        return desctiptions;
      }
      return desctiptions.slice(0, 5);
    },
    buttonLabelHandler(noteId) {
      if (noteId === this.selectedNoteId) {
        return "read less";
      }
      return "read more";
    },
  },
};
</script>
