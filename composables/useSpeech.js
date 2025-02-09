export const useSpeech = () => {
  const REGEX_LIST_WORDS = /^[^,]+(,[^,]+)*$/; // Permite una o varias palabras separadas por comas
  const isSpeeching = ref(false);
  const speech = ref(null);
  let stopRequested = false;

  const setSpeechSynthesis = () => {
    speech.value = window.speechSynthesis;
  };

  const speechWords = async ({ words, voice, interval }) => {
    if (isSpeeching.value) return;

    if (interval <= 0) {
      alert("Por favor ingresa un intervalo mayor a 0.")
      return;
    }

    if (!REGEX_LIST_WORDS.test(words)) {
      alert("Por favor ingresa una lista de palabras separadas por una coma ( , ).");
      return;
    }

    if (!speech.value) setSpeechSynthesis();

    isSpeeching.value = true;
    stopRequested = false;

    const wordsList = words.split(",").map((w) => w.trim());

    for (const word of wordsList) {
      if (stopRequested) break;

      const message = new SpeechSynthesisUtterance(word);
      message.voice = voice;

      await new Promise((resolve) => {
        message.onend = resolve;
        message.onerror = (err) => {
          console.error(err);
          stopRequested = true;
          resolve();
        };

        speech.value.speak(message);
      });

      // ⏳ Esperar intervalo ANTES de leer la siguiente palabra
      if (!stopRequested) {
        await new Promise((res) => setTimeout(res, interval));
      }
    }

    isSpeeching.value = false;
  };

  const stopSpeech = () => {
    stopRequested = true;
    if (speech.value) speech.value.cancel();
    isSpeeching.value = false;
  };

  return {
    setSpeechSynthesis,
    isSpeeching,
    speechWords,
    stopSpeech,
  };
};
