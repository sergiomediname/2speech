<template>
  <textarea
    class="input-control"
    @input="updateValue($event.target.value)"
    :value="modelValue"
  ></textarea>
</template>

<script setup>
defineProps({
  modelValue: Number,
});

const emit = defineEmits(["update:modelValue"]);

const updateValue = (value) => {
  emit("update:modelValue", value);
};
</script>
