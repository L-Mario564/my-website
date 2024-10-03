<script lang="ts">
  import Globe from 'lucide-svelte/icons/globe';
  import Users from 'lucide-svelte/icons/users';
  import Trophy from 'lucide-svelte/icons/trophy';
  import Image from 'lucide-svelte/icons/image';
  import Table2 from 'lucide-svelte/icons/table-2';
  import Osu from './icons/Osu.svelte';
  import BannerSlideshow from './BannerSlideshow.svelte';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { createToggle, showGlow } from '../utils/stores';
  import { websites } from '../content/projects';
  import type { TournamentBanner } from '../utils/types';

  export let banner: TournamentBanner;
  let bannerContainer: HTMLDivElement | undefined;
  let btn: HTMLButtonElement | undefined;
  let usedSpaceToOpenSlideshow = false;
  const showDetails = createToggle(false);
  const showBannerSlideshow = createToggle(false);

  onMount(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || !bannerContainer) return;
      bannerContainer.classList.add('animate-project');
    }, {
      threshold: banner.tall ? 0.5 : 1,
      rootMargin: '0px 0px 0px 0px'
    });

    if (bannerContainer) {
      observer.observe(bannerContainer);
    }

    return () => observer.disconnect();
  });

  function onBtnKeydown(e: KeyboardEvent) {
    setTimeout(() => {
      usedSpaceToOpenSlideshow = e.key === ' ';
    }, 100);
  }

  function showSlideshow() {
    showGlow.set(false);
    showBannerSlideshow.toTrue();
    usedSpaceToOpenSlideshow = false;
  }

  function onSlideshowClose() {
    showGlow.set(true);
    showBannerSlideshow.toFalse();

    if (usedSpaceToOpenSlideshow) {
      btn?.focus();
    }
  }
</script>

{#if $showBannerSlideshow}
  <BannerSlideshow currentBanner={banner} close={onSlideshowClose} />
{/if}
<div role="presentation" class="relative z-[1] w-[19rem] xs:w-[21.75rem] opacity-0 border-2 border-transparent rounded-md before:absolute before:inset-0 before:-z-[1] before:-m-[2px] before:rounded-[inherit] before:bg-gradient-to-tr before:from-purple-500 before:to-orange-500" on:mouseenter={showDetails.toTrue} on:mouseleave={showDetails.toFalse} bind:this={bannerContainer}>
  <div class="w-full h-full absolute top-0 left-0 flex items-center justify-center">
    <button class="w-0 h-0 pointer-events-none" on:focus={showDetails.toTrue} on:click={showSlideshow} on:keydown={onBtnKeydown} on:blur={showDetails.toFalse} bind:this={btn} />
  </div>
  {#if $showDetails}
    <button transition:fade={{ duration: 300 }} tabindex="-1" class="absolute z-[3] w-full h-full rounded-md duration-300" on:click={showSlideshow}>
      <div>
        <strong class={`text-white font-bold text-xl ${banner.tournament.length > 28 ? ' tracking-tight' : ''}`}>{banner.tournament}</strong>
        <span class="block bg-gradient-to-r font-bold text-lg from-purple-500 to-orange-500 text-transparent bg-clip-text">{banner.type === 'player' ? 'Player' : 'Staff'} Banner</span>
      </div>
    </button>
  {/if}
  <div class="absolute w-full h-full top-0 left-0 z-[1] bg-woodsmoke-950 rounded-md pointer-events-none" />
  <img
    src={`/banners/${banner.img}`}
    alt="tournament banner"
    class={`w-full h-full rounded-md relative z-[2] duration-300 ${$showDetails ? 'opacity-10' : 'opacity-100'}`}
  />
</div>