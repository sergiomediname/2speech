import { defineStore } from "pinia";

export const useVoicesStore = defineStore("voices", () => {
  const voices = ref([])
  const activeVoice = ref(null)

  const getVoices = () => {
    voices.value = speechSynthesis.getVoices();

    activeVoice.value = voices.value.find((voice) => voice.default === true)
  };

  const selectVoice = (indexVoice) => {
    if (voices.value.length === 0) {
      getVoices()
    }

    activeVoice.value = voices.value[indexVoice]
  }

  return {
    voices,
    activeVoice,
    getVoices,
    selectVoice
  }
})
