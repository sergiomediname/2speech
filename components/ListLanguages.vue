<template>
  <select
    name=""
    id=""
    @change="selectVoice($event.target.value)"
    class="input-control"
  >
    <option v-for="(voice, index) in voices" :value="index">
      {{ voice.name }} - {{ voice.lang }}
    </option>
  </select>
</template>

<script setup>
import { useVoicesStore } from "@/stores/voices.js";
import { storeToRefs } from "pinia";

const useVoices = useVoicesStore();

const { getVoices, selectVoice } = useVoices;
const { voices } = storeToRefs(useVoices);

onMounted(() => {
  speechSynthesis.addEventListener("voiceschanged", getVoices);
});
</script>
