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

<script>
import NoteDescription from "./NoteDescription.vue";
export default {
  components: {
    NoteDescription,
  },
  props: ["note", "selectedNoteId"],
  emits: ["onReadMore"],
  computed: {
    desciptions() {
      if (this.isReadMoreActive) {
        return this.note.description;
      } else {
        return this.note.description.slice(0, 5);
      }
    },
    isReadMoreActive() {
      return this.note.id === this.selectedNoteId;
    },
  },
  methods: {
    onReadHandler() {
      this.$emit(
        "onReadMore",
        this.isReadMoreActive ? null : this.selectedNoteId
      );
    },
  },
};
</script>
