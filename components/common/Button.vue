<template>
  <button
    class="inline-flex gap-2 bg-zinc-300 text-neutral-800 font-bold py-4 px-8 rounded-md disabled:bg-zinc-700"
  >
    <slot name="icon"></slot>
    <span><slot></slot></span>
  </button>
</template>
