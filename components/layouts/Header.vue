<template>
  <header class="max-w-[800px] mx-auto px-4 mb-12">
    <div
      class="flex items-center justify-between bg-neutral-950/20 backdrop-blur-2xl px-6 py-3 rounded-lg border border-zinc-300/20 text-[14px]"
    >
      <div class="font-bold flex items-center gap-2">
        <div class="flex items-center gap-1">
          <img src="/public/images/2speech-logo.svg" alt="" />
          <span>2speech</span>
        </div>
        <span
          class="bg-neutral-900 font-normal border border-zinc-500 opacity-65 px-[10px] py-[3px] rounded-full text-[10px]"
          >beta</span
        >
      </div>
      <div>
        <div><IconBrandGithub class="w-5 h-5" /></div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { IconBrandGithub } from "@tabler/icons-vue";
</script>
