<template>
  <div>
    <div class="mb-20">
      <h1 class="text-2xl font-bold text-center">
        ¡Mejora tu escritura y pronunciación fácilmente!
      </h1>
      <p class="mt-4 text-center px-8">
        Configura tu lista, elige el idioma y escucha las palabras al ritmo que
        prefieras.
      </p>
    </div>

    <form
      @submit.prevent="speechWords({ words, voice: activeVoice, interval })"
      class="flex flex-col gap-6"
    >
      <div class="flex flex-col gap-2">
        <label for="">Selecciona una voz</label>
        <ListLanguages :disabled="isSpeeching" />
      </div>

      <div class="flex flex-col gap-2">
        <label for="">Intervalo (milisegundos)</label>
        <CommonInput
          type="number"
          name=""
          id=""
          v-model="interval"
          :disabled="isSpeeching"
        />
      </div>

      <div class="flex flex-col gap-2">
        <label for="">Palabras</label>
        <CommonTextarea
          name=""
          id=""
          v-model="words"
          :disabled="isSpeeching"
          placeholder="Palabras, separadas, por una, coma"
        />
        <p class="text-zinc-500 text-[14px] italic">
          Agrega tus palabaras separadas por una coma ( , ).
        </p>
      </div>

      <div class="flex gap-2">
        <CommonButton type="submit" :disabled="isSpeeching">
          <template #icon>
            <IconPlayerPlayFilled />
          </template>
          Speech
        </CommonButton>

        <CommonButton :disabled="!isSpeeching" @click.stop="stopSpeech">
          <template #icon>
            <IconPlayerStopFilled />
          </template>
        </CommonButton>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useVoicesStore } from "@/stores/voices.js";
import { storeToRefs } from "pinia";

import { IconPlayerPlayFilled, IconPlayerStopFilled } from "@tabler/icons-vue";

const useVoices = useVoicesStore();

const { activeVoice } = storeToRefs(useVoices);

const words = ref("");
const interval = ref(5000);

// Composable
const { speech, isSpeeching, speechWords, stopSpeech, setSpeechSynthesis } =
  useSpeech();

onMounted(() => {
  setSpeechSynthesis();
});
</script>
