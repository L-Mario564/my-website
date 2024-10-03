<script lang="ts">
  import Globe from 'lucide-svelte/icons/globe';
  import Users from 'lucide-svelte/icons/users';
  import Trophy from 'lucide-svelte/icons/trophy';
  import Image from 'lucide-svelte/icons/image';
  import Table2 from 'lucide-svelte/icons/table-2';
  import Osu from './icons/Osu.svelte';
  import WebsiteSlideshow from './WebsiteSlideshow.svelte';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { createToggle, showGlow } from '../utils/stores';
  import { websites } from '../content/projects';
  import type { TournamentPlayed, TournamentStaffed, Simplify } from '../utils/types';

  export let tournament: Simplify<TournamentPlayed & { type: 'played' }> | Simplify<(TournamentStaffed & { type: 'staffed' })>;
  let tournamentContainer: HTMLDivElement | undefined;
  let btn: HTMLButtonElement | undefined;
  let usingTab = false;
  let usedSpaceToOpenSlideshow = false;
  const showDetails = createToggle(false);
  const showViewTooltip = createToggle(false);
  const showTeams = createToggle(false);
  const showWebsiteScreenshots = createToggle(false);

  onMount(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || !tournamentContainer) return;
      tournamentContainer.classList.add('animate-project');
    }, {
      threshold: 1,
      rootMargin: '0px 0px 0px 0px'
    });

    if (tournamentContainer) {
      observer.observe(tournamentContainer);
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

  function onScreenshotsKeydown(e: KeyboardEvent) {
    setTimeout(() => {
      usedSpaceToOpenSlideshow = e.key === ' ';
    }, 100);
  }

  function onScreenshotsClickBtn() {
    showGlow.set(false);
    showWebsiteScreenshots.toTrue();
    usedSpaceToOpenSlideshow = false;
  }

  function onSlideshowClose() {
    showGlow.set(true);
    showWebsiteScreenshots.toFalse();

    if (usedSpaceToOpenSlideshow) {
      btn?.focus();
    }
  }

  $: hasTeam = tournament.type === 'played' && tournament.team;
  $: hasWebsite = tournament.type === 'staffed' && tournament.websiteId;
</script>

{#if $showWebsiteScreenshots && tournament.type === 'staffed'}
  <WebsiteSlideshow website={websites.find((website) => website.id === tournament.websiteId) ?? websites[0]} close={onSlideshowClose} />
{/if}
<div role="presentation" class="relative w-[21.75rem] h-max opacity-0" on:mouseenter={showDetails.toTrue} on:mouseleave={showDetails.toFalse} bind:this={tournamentContainer}>
  <button class="w-full h-0 pointer-events-none absolute bottom-0 left-0" on:focus={showDetails.toTrue} on:keydown={onBtnKeydown} on:blur={onBtnBlur} bind:this={btn} />
  <div class="absolute w-full h-full top-0 left-0 z-[12] p-4">
    <div class="relative h-[28px]">
      {#if $showTeams && tournament.type === 'played'}
        <strong class="text-white font-bold text-xl absolute top-0 left-0" transition:fade={{ duration: 150 }}>{tournament.team?.name}</strong>
      {:else}
        <strong class={`text-white font-bold text-xl absolute top-0 left-0${tournament.name.length > 28 ? ' tracking-tight' : ''}`} transition:fade={{ duration: 150 }}>{tournament.name}</strong>
      {/if}
    </div>
    <div class="w-full h-[2px] rounded-full bg-gradient-to-r from-purple-500 to-orange-500 mt-1 mb-2" />
    <div class="relative">
      {#if $showTeams && tournament.type === 'played'}
        <div transition:fade={{ duration: 150 }} class="absolute w-full text-sm top-0 grid grid-cols-[50%_50%] gap-1">
          {#each tournament.team?.players ?? [] as player}
            {@const osuUserId = player.osuUserId.toString()}
            <div class="flex items-center gap-2">
              <img src={`https://s.ppy.sh/a/${osuUserId}`} alt="pfp" width={24} height={24} class="rounded-md w-6 h-6">
              <a href={`https://osu.ppy.sh/u/${osuUserId}`} class="inline-block hover:underline">{player.username}</a>
            </div>
          {/each}
        </div>
      {:else}
        <div transition:fade={{ duration: 150 }} class="absolute w-full text-sm top-0">
          <p>{tournament.date}</p>
          {#if tournament.type === 'played'}
            <p>
              {tournament.format} [{tournament.rankRange === 'open' ? 'Open Rank' : `${tournament.rankRange[0]} - ${tournament.rankRange[1]}`}]
            </p>
            <p class="text-sm flex items-center relative">
              {#if tournament.placement.seed}
              Seed #{tournament.placement.seed.toString()} —
              {/if}
              {tournament.participantCount.toString()} {tournament.team ? 'teams' : 'players'}
            </p>
            <span class="font-bold bg-white rounded-md text-black py-1 px-3 absolute top-0 right-0">
              {tournament.placement.final === 1 ? '1st' : tournament.placement.final === 2 ? '2nd' : tournament.placement.final === 3 ? '3rd' : `Top ${tournament.placement.final}`}
            </span>
          {:else}
            <div class="flex flex-col gap-1 absolute top-0 right-0">
              {#each tournament.roles as role}
                <span class="font-bold bg-white rounded-md text-black py-1 px-3 text-center">{role}</span>
              {/each}
            </div>
          {/if}
        </div>
      {/if}
    </div>
    {#if $showDetails}
      <div transition:fade={{ duration: 300 }} class="absolute bottom-0 left-0 p-4 flex flex-col gap-1">
        {#if tournament.type === 'staffed' && tournament.websiteId}
          {@const website = websites.find((website) => website.id === tournament.websiteId) ?? websites[0]}
          <div class="flex text-sm items-center gap-2">
            <Globe size={16} class="stroke-white" />
            <a href={website.url} target="_blank" class="hover:underline w-max">Website</a>
          </div>
        {/if}
        {#if tournament.forumPostId && !$showTeams}
          {@const forumPostUrl = `https://osu.ppy.sh/community/forums/topics/${tournament.forumPostId}`}
          <div transition:fade={{ duration: 150 }} class="flex text-sm items-center gap-2">
            <Osu w={16} h={16} class="stroke-white" />
            <a href={forumPostUrl} target="_blank" class="hover:underline w-max" on:blur={(tournament.type === 'staffed' && tournament.spreadsheetId) || hasTeam || hasWebsite ? undefined : showDetails.toFalse}>Forum Post</a>
          </div>
        {/if}
      </div>
    {/if}
    {#if $showDetails && (hasTeam || tournament.type === 'staffed')}
      <div transition:fade={{ duration: 300 }} class="absolute bottom-0 right-0 p-4">
        {#if $showViewTooltip}
          <div class={`tooltip -top-[26px] z-[2] ${
            tournament.type === 'played'
              ? $showTeams ? '-right-[40px]' : '-left-[3px]'
              : tournament.websiteId ? '-right-[43px]' : '-left-[16px]'
          }`} transition:fade={{ duration: 75 }}>
            <div class="tooltip-caret" />
            {#if tournament.type === 'played'}
              {$showTeams ? 'View tournament details' : 'View team'}
            {:else}
              {tournament.websiteId ? 'View website screenshots' : 'Visit main sheet'}
            {/if}
          </div>
        {/if}
        {#if tournament.type === 'staffed' && tournament.spreadsheetId}
          {@const spreadsheetUrl = `https://docs.google.com/spreadsheets/d/${tournament.spreadsheetId}`}
          <a href={spreadsheetUrl} target="_blank" class="block btn-icon btn-gradient" on:mouseenter={showViewTooltip.toTrue} on:mouseleave={showViewTooltip.toFalse} on:blur={showDetails.toFalse}>
            <Table2 size={18} class="stroke-black" />
          </a>
        {:else if hasTeam || hasWebsite}
          <button class="btn-icon btn-gradient" on:click={tournament.type === 'played' ? showTeams.toggle : onScreenshotsClickBtn} on:mouseenter={showViewTooltip.toTrue} on:mouseleave={showViewTooltip.toFalse} on:keydown={onScreenshotsKeydown} on:blur={showDetails.toFalse}>
            {#if tournament.type === 'played'}
              {#if $showTeams}
                <Trophy size={18} class="stroke-black" />
              {:else}
                <Users size={18} class="stroke-black" />
              {/if}
            {:else}
              <Image size={18} class="stroke-black" />
            {/if}
          </button>
        {/if}
      </div>
    {/if}
  </div>
  <div class="w-full h-full bg-gradient-to-t from-woodsmoke-950 to-[33%] absolute z-[11] left-0 bottom-0 pointer-events-none" />
  <img
    src={`/tournaments/${tournament.img}.jpg`}
    alt="tournament banner"
    class={`aspect-[16/9] w-full rounded-md duration-300 opacity-15`}
  />
</div>