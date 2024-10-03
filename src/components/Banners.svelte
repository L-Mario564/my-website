<script lang="ts">
  import Banner from './Banner.svelte';
  import { tournamentBanners } from '../content/tournaments';
  import { onMount } from 'svelte';
  import type { TournamentBanner } from '../utils/types';

  let columns = 1;
  let bannerColumns: TournamentBanner[][] = [];
  // Left is minimum window width, right is the column count in the masonry
  const responsive: [number, number][] = [
    [1400, 3],
    [860, 2],
    [0, 1]
  ];

  onMount(() => {
    updateMasonryColumns();
    window.addEventListener('resize', updateMasonryColumns);
    return () => window.removeEventListener('resize', updateMasonryColumns);
  });

  function splitBanners(banners: TournamentBanner[], parts: number): TournamentBanner[][] {
    const columns: TournamentBanner[][] = Array.from({ length: parts }, () => []);
    const colWeights = Array.from({ length: parts }, () => 0);

    for (const banner of banners) {
      const lightest = colWeights.indexOf(Math.min(...colWeights));
      columns[lightest].push(banner);
      colWeights[lightest] += banner.weight ?? 1;
    }

    return columns;
  }

  function updateMasonryColumns() {
    const currentWindowWidth = window.innerWidth;

    for (const [minWindowWidth, value] of responsive) {
      if (currentWindowWidth >= minWindowWidth) {
        columns = value;
        break;
      }
    }
  }

  $: bannerColumns = splitBanners(tournamentBanners, columns);
  $: console.log(bannerColumns, tournamentBanners);
</script>

<div class="w-full flex justify-center mt-8">
  <div class="w-min flex flex-row gap-6">
    {#each bannerColumns as bannerColumn}
      <div class="flex flex-col gap-6">
        {#each bannerColumn as banner}
          <Banner {banner} />
        {/each}
      </div>
    {/each}
  </div>
</div>
