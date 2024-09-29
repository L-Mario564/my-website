<script lang="ts">
  import Osu from './icons/Osu.svelte';
  import Users from 'lucide-svelte/icons/users';
  import Trophy from 'lucide-svelte/icons/trophy';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { createToggle } from '../utils/stores';
  import type { TournamentPlayed, TournamentStaffed, Simplify } from '../utils/types';

  export let tournament: Simplify<TournamentPlayed & { type: 'played' }> | Simplify<(TournamentStaffed & { type: 'staffed' })>;
  let tournamentContainer: HTMLDivElement | undefined;
  const showDetails = createToggle(false);
  const showViewTooltip = createToggle(false);
  const viewTeams = createToggle(false);

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
</script>

<div role="presentation" class="relative w-[23.5rem] h-max opacity-0" on:mouseenter={showDetails.toTrue} on:mouseleave={showDetails.toFalse} bind:this={tournamentContainer}>
  <div class="absolute w-full h-full top-0 left-0 z-[12] p-4">
    <div class="relative h-[28px]">
      {#if $viewTeams && tournament.type === 'played'}
        <strong class="text-white font-bold text-xl absolute top-0 left-0" transition:fade={{ duration: 150 }}>Team: {tournament.team?.name}</strong>
      {:else}
        <strong class="text-white font-bold text-xl absolute top-0 left-0" transition:fade={{ duration: 150 }}>{tournament.name}</strong>
      {/if}
    </div>
    <div class="w-full h-[2px] rounded-full bg-gradient-to-r from-purple-500 to-orange-500 mt-1 mb-2" />
    <div class="relative">
      {#if $viewTeams && tournament.type === 'played'}
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
          {/if}
          {#if tournament.type === 'played'}
          <span class="font-bold bg-white rounded-md text-black py-1 px-3 absolute top-0 right-0">
            {tournament.placement.final === 1 ? '1st' : tournament.placement.final === 2 ? '2nd' : tournament.placement.final === 3 ? '3rd' : `Top ${tournament.placement.final}`}
          </span>
          <p class="text-sm flex items-center relative">
            {#if tournament.placement.seed}
            Seed #{tournament.placement.seed.toString()} —
            {/if}
            {tournament.participantCount.toString()} {tournament.team ? 'teams' : 'players'}
          </p>
          {/if}
        </div>
      {/if}
    </div>
    {#if $showDetails}
      <div transition:fade={{ duration: 300 }} class="absolute bottom-0 left-0 p-4 flex flex-col gap-1">
        {#if tournament.forumPostId}
          {@const forumPostUrl = `https://osu.ppy.sh/community/forums/topics/${tournament.forumPostId}`}
          <div class="flex text-sm items-center gap-2">
            <Osu w={16} h={16} class="stroke-white" />
            <a href={forumPostUrl} target="_blank" class="hover:underline w-max">Forum Post</a>
          </div>
        {/if}
      </div>
    {/if}
    {#if $showDetails && tournament.type === 'played' && tournament.team}
      <div transition:fade={{ duration: 300 }} class="absolute bottom-0 right-0 p-4">
        {#if $showViewTooltip}
          <div class={`tooltip -top-[26px] z-[2] ${$viewTeams ? '-right-[40px]' : '-left-[3px]'}`} transition:fade={{ duration: 75 }}>
            <div class="tooltip-caret" />
            {$viewTeams ? 'View tournament details' : 'View team'}
          </div>
        {/if}
        <button class="btn-icon btn-gradient" on:click={viewTeams.toggle} on:mouseenter={showViewTooltip.toTrue} on:mouseleave={showViewTooltip.toFalse}>
          {#if $viewTeams}
            <Trophy size={18} class="stroke-black" />
          {:else}
            <Users size={18} class="stroke-black" />
          {/if}
        </button>
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