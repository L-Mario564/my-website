<script lang="ts">
  import Globe from 'lucide-svelte/icons/globe';
  import Image from 'lucide-svelte/icons/image';
  import Github from './icons/Github.svelte';
  import WebsiteSlideshow from './WebsiteSlideshow.svelte';
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { createToggle, showGlow } from '../utils/stores';
  import type { Website } from '../utils/types';

  export let website: Website;
  let websiteContainer: HTMLDivElement | undefined;
  let btn: HTMLButtonElement | undefined;
  let usingTab = false;
  let usedSpaceToOpenSlideshow = false;
  const showImgTooltip = createToggle(false);
  const showDetails = createToggle(false);
  const showScreenshots = createToggle(false);

  onMount(() => {
    if (window === undefined) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || !websiteContainer) return;
      websiteContainer.classList.add('animate-project');
    }, {
      threshold: 1,
      rootMargin: '0px 0px 0px 0px'
    });

    if (websiteContainer) {
      observer.observe(websiteContainer);
    }

    return () => observer.disconnect();
  });

  function onBtnBlur() {
    setTimeout(() => {
      if (!usingTab) {
        showDetails.toFalse();
      }
    }, 50);
  }

  function onBtnKeydown(e: KeyboardEvent) {
    if (e.key !== 'Tab') return;
    usingTab = !e.shiftKey;
  }

  function onScreenshotsClickBtn() {
    showGlow.set(false);
    showScreenshots.toTrue();
    usedSpaceToOpenSlideshow = false;
  }

  function onScreenshotsBtnKeydown(e: KeyboardEvent) {
    setTimeout(() => {
      usedSpaceToOpenSlideshow = e.key === ' ';
    }, 100);
  }

  function onSlideshowClose() {
    showGlow.set(true);
    showScreenshots.toFalse();

    if (usedSpaceToOpenSlideshow) {
      btn?.focus();
    }
  }
</script>

{#if $showScreenshots}
  <WebsiteSlideshow website={website} close={onSlideshowClose} />
{/if}
<div role="presentation" class="relative w-[27rem] opacity-0" on:mouseenter={showDetails.toTrue} on:mouseleave={showDetails.toFalse} bind:this={websiteContainer}>
  <button class="w-full h-0 pointer-events-none absolute bottom-0 left-0" on:focus={showDetails.toTrue} on:keydown={onBtnKeydown} on:blur={onBtnBlur} bind:this={btn} />
  {#if $showDetails}
    <div transition:fade={{ duration: 300 }} class="absolute w-full h-full top-0 left-0 z-[12] p-4">
      <strong class="text-white font-bold text-xl">{website.name}</strong>
      <div class="w-full h-[2px] rounded-full bg-gradient-to-r from-purple-500 to-orange-500 mt-1 mb-2" />
      <p class="text-sm">{website.description}</p>
      <div class="absolute bottom-0 left-0 p-4 flex flex-col gap-1">
        {#if website.url}
          <div class="flex text-sm items-center gap-2">
            <Globe size={16} class="stroke-white" />
            <a href={website.url} target="_blank" class="hover:underline">{new URL(website.url).hostname}</a>
          </div>
        {/if}
        {#if website.repo}
          <div class="flex text-sm items-center gap-2">
            <Github w={16} h={16} class="fill-white" />
            <a href={website.repo} target="_blank" class="hover:underline">{new URL(website.repo).pathname.slice(1)}</a>
          </div>
        {/if}
      </div>
      <div class="absolute bottom-0 right-0 p-4">
        {#if $showImgTooltip}
          <div class="tooltip -top-[26px] -left-[21px] z-[2]" transition:fade={{ duration: 75 }}>
            <div class="tooltip-caret" />
            View screenshots
          </div>
        {/if}
        <button class="btn-icon btn-gradient" on:click={onScreenshotsClickBtn} on:mouseenter={showImgTooltip.toTrue} on:mouseleave={showImgTooltip.toFalse} on:blur={showDetails.toFalse} on:keydown={onScreenshotsBtnKeydown}>
          <Image size={18} class="stroke-black" />
        </button>
      </div>
    </div>
  {/if}
  <div class="w-full h-full bg-gradient-to-t from-woodsmoke-950 to-[33%] absolute z-[11] left-0 bottom-0 pointer-events-none" />
  <img
    src={`/websites/${website.img.folder}/1.jpg`}
    alt="website screenshot"
    class={`aspect-[16/9] w-full rounded-md duration-300  ${$showDetails ? 'opacity-15': 'opacity-100'}`}
  />
</div>
