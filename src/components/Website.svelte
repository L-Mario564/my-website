<script lang="ts">
  import Globe from 'lucide-svelte/icons/globe';
  import Image from 'lucide-svelte/icons/image';
  import X from 'lucide-svelte/icons/x';
  import ChevronLeft from 'lucide-svelte/icons/chevron-left';
  import ChevronRight from 'lucide-svelte/icons/chevron-right';
  import Github from './icons/Github.svelte';
  import { portal } from 'svelte-portal';
  import { fly, fade } from 'svelte/transition';
  import type { Website } from '../utils/types';

  export let website: Website;
  let showDetails = false;
  let showImgTooltip = false;
  let showImages = true;
  let currentImage = 1;
  let animateImg = false;

  function toggleDetails() {
    showDetails = !showDetails;
  }

  function toggleImgsBtnTooltip() {
    showImgTooltip = !showImgTooltip;
  }

  function toggleImages() {
    showImages = !showImages;
  }

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

  $: {
    if (animateImg) {
      setTimeout(() => {
        animateImg = false;
      }, 150);
    }
  }
</script>

{#if showImages}
  <div use:portal transition:fly={{ duration: 300, y: 100 }} class="fixed w-screen h-screen max-w-full max-h-full top-0 left-0 z-[60] bg-woodsmoke-950/75 flex justify-center items-center overflow-hidden p-8 pb-[4.5rem]">
    <div role="presentation" on:click={toggleImages} class="absolute w-full h-full top-0 left-0 z-[1]" />
    <img
      src={`/websites/${website.img.folder}/${currentImage}.png`}
      alt={`website screenshot ${currentImage}`}
      class={`w-auto h-auto max-w-full max-h-full z-[2] rounded-md ${animateImg ? 'animate-slideshow-img-out' : 'animate-slideshow-img-in'}`}
    />
    <div class="flex justify-center absolute bottom-4 left-0 w-full gap-4 z-[3]">
      <div class="bg-woodsmoke-900/75 rounded-full flex justify-center items-center w-10 h-10">
        <button class="rounded-full duration-300 w-8 h-8 flex justify-center items-center hover:bg-white/15" on:click={toggleImages}>
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
{/if}
<div role="presentation" class="relative w-96" on:mouseenter={toggleDetails} on:mouseleave={toggleDetails}>
  {#if showDetails}
    <div transition:fade={{ duration: 300 }} class="absolute h-full top-0 left-0 z-[12] p-4">
      <strong class="text-white font-bold text-xl">{website.name}</strong>
      <div class="w-full h-[2px] rounded-full bg-gradient-to-r from-purple-500 to-orange-500 mt-1 mb-2" />
      <p>{website.description}</p>
      <div class="absolute bottom-0 left-0 p-4">
        <div class="flex text-sm items-center gap-2">
          <Globe size={16} class="stroke-white" />
          <a href={website.url} target="_blank" class="hover:underline">{new URL(website.url).hostname}</a>
        </div>
        {#if website.repo}
          <div class="flex text-sm items-center gap-2 mt-1">
            <Github w={16} h={16} class="fill-white" />
            <a href={website.repo} target="_blank" class="hover:underline">{new URL(website.repo).pathname.slice(1)}</a>
          </div>
        {/if}
      </div>
      <div class="absolute bottom-0 right-0 p-4">
        {#if showImgTooltip}
          <div class="tooltip -top-[26px] -left-9" transition:fade={{ duration: 75 }}>
            <div class="tooltip-caret" />
            View more screenshots
          </div>
        {/if}
        <button class="btn-icon btn-gradient" on:click={toggleImages} on:mouseenter={toggleImgsBtnTooltip} on:mouseleave={toggleImgsBtnTooltip}>
          <Image size={18} class="stroke-black" />
        </button>
      </div>
    </div>
  {/if}
  <div class="w-full h-full bg-gradient-to-t from-woodsmoke-950 to-[33%] absolute z-[11] left-0 bottom-0 pointer-events-none" />
  <img
    src={`/websites/${website.img.folder}/1.png`}
    alt="website screenshot"
    class={`aspect-[16/9] w-full rounded-md duration-300  ${showDetails ? 'opacity-15': 'opacity-100'}`}
  />
</div>
