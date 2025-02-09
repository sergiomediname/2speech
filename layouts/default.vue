<template>
  <div class="_layout">
    <LayoutsHeader />
    <main>
      <div class="max-w-[800px] mx-auto px-4">
        <slot />
      </div>
    </main>
    <LayoutsFooter />
  </div>
</template>
