<script lang="ts">
  import X from 'lucide-svelte/icons/x';
  import ChevronLeft from 'lucide-svelte/icons/chevron-left';
  import ChevronRight from 'lucide-svelte/icons/chevron-right';
  import { portal } from 'svelte-portal';
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import type { Website } from '../utils/types';

  export let website: Website;
  export let close: () => void;
  let currentImage = 1;
  let animateImg = false;

  onMount(() => {
    document.body.style.overflowY = 'hidden';
    return () => document.body.style.overflowY = 'auto';
  });

  function previousImage() {
    setTimeout(() => {      
      currentImage = currentImage > 1 ? currentImage - 1 : website.img.count;
    }, 150);

    animateImg = true;
  }

  function nextImage() {
    setTimeout(() => {      
      currentImage = currentImage < website.img.count ? currentImage + 1 : 1;
    }, 150);

    animateImg = true;
  }

  function onImgLoad() {
    animateImg = false;
  }
</script>

<div use:portal transition:fly={{ duration: 300, y: 100 }} class="fixed w-screen h-screen max-w-full max-h-full top-0 left-0 z-[60] bg-woodsmoke-950/75 flex justify-center items-center overflow-hidden p-8 pb-[4.5rem]">
  <div role="presentation" on:click={close} class="absolute w-full h-full top-0 left-0 z-[1]" />
  <img
    src={`/websites/${website.img.folder}/${currentImage}.jpg`}
    alt={`website screenshot ${currentImage}`}
    class={`w-auto h-auto max-w-full max-h-full z-[2] rounded-md ${animateImg ? 'animate-slideshow-img-out' : 'animate-slideshow-img-in'}`}
    on:load={onImgLoad}
  />
  <div class="flex justify-center absolute bottom-4 left-0 w-full gap-4 z-[3]">
    <div class="bg-woodsmoke-900/75 rounded-full flex justify-center items-center w-10 h-10">
      <button class="rounded-full duration-300 w-8 h-8 flex justify-center items-center hover:bg-white/15" on:click={close}>
        <X size={20} class="stroke-white" />
      </button>
    </div>
    <div class="bg-woodsmoke-900/75 rounded-full flex items-center h-10 p-1 gap-2">
      <button class="rounded-full duration-300 w-8 h-8 flex justify-center items-center hover:bg-white/15" on:click={previousImage}>
        <ChevronLeft size={20} class="stroke-white" />
      </button>
      <span class="inline-block">{currentImage} / {website.img.count}</span>
      <button class="rounded-full duration-300 w-8 h-8 flex justify-center items-center hover:bg-white/15" on:click={nextImage}>
        <ChevronRight size={20} class="stroke-white" />
      </button>
    </div>
  </div>
</div>