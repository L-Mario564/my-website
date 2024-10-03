<script lang="ts">
  import X from 'lucide-svelte/icons/x';
  import ChevronLeft from 'lucide-svelte/icons/chevron-left';
  import ChevronRight from 'lucide-svelte/icons/chevron-right';
  import LoaderCircle from 'lucide-svelte/icons/loader-circle';
  import { portal } from 'svelte-portal';
  import { fly, fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { focusTrap } from '../utils/focus-trap';

  export let alt: string;
  export let startingSrc: string;
  export let previousSrc: () => string;
  export let nextSrc: () => string;
  export let close: () => void;
  export let currentNumber: number;
  export let total: number;
  let currentSrc = startingSrc;
  let loading = true;
  let animateImg = false;

  onMount(() => {
    document.body.style.overflowY = 'hidden';
    return () => (document.body.style.overflowY = 'auto');
  });

  function previousImage() {
    setTimeout(() => {
      currentSrc = previousSrc();
    }, 150);

    animateImg = true;
  }

  function nextImage() {
    setTimeout(() => {
      currentSrc = nextSrc();
    }, 150);

    animateImg = true;
  }

  function onImgLoad() {
    animateImg = false;
    loading = false;
  }
</script>

<div
  use:portal
  use:focusTrap={true}
  transition:fly={{ duration: 300, y: 100 }}
  class="fixed w-screen h-screen max-w-full max-h-full top-0 left-0 z-[60] bg-woodsmoke-950/75 flex justify-center items-center overflow-hidden p-8 pb-[4.5rem]"
>
  <div role="presentation" on:click={close} class="absolute w-full h-full top-0 left-0 z-[1]" />
  <img
    src={currentSrc}
    {alt}
    class={`w-auto h-auto max-w-full max-h-full z-[2] rounded-md ${animateImg ? 'animate-slideshow-img-out' : 'animate-slideshow-img-in'}`}
    on:load={onImgLoad}
  />
  {#if loading}
    <div transition:fade={{ duration: 300 }} class="absolute z-[3]">
      <LoaderCircle size={64} class="stroke-white animate-spin" />
    </div>
  {/if}
  <div class="flex justify-center absolute bottom-4 left-0 w-full gap-4 z-[3]">
    <div class="bg-woodsmoke-900/75 rounded-full flex justify-center items-center w-10 h-10">
      <button
        class="rounded-full duration-300 w-8 h-8 flex justify-center items-center hover:bg-white/15"
        on:click={close}
      >
        <X size={20} class="stroke-white" />
      </button>
    </div>
    <div class="bg-woodsmoke-900/75 rounded-full flex items-center h-10 p-1 gap-2">
      <button
        class="rounded-full duration-300 w-8 h-8 flex justify-center items-center hover:bg-white/15"
        on:click={previousImage}
      >
        <ChevronLeft size={20} class="stroke-white" />
      </button>
      <span class="inline-block">{currentNumber} / {total}</span>
      <button
        class="rounded-full duration-300 w-8 h-8 flex justify-center items-center hover:bg-white/15"
        on:click={nextImage}
      >
        <ChevronRight size={20} class="stroke-white" />
      </button>
    </div>
  </div>
</div>
