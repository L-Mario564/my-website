<script lang="ts">
  import Slideshow from './Slideshow.svelte';
  import { tournamentBanners, tournamentBannerIds } from '../content/tournaments';
  import type { TournamentBanner } from '../utils/types';

  export let currentBanner: TournamentBanner;
  export let close: () => void;
  let current = tournamentBannerIds.indexOf(currentBanner.id) + 1;

  function buildSrc(image: string) {
    return `/banners/${image}`;
  }

  function previousImage() {
    current = current < tournamentBannerIds.length ? current + 1 : 1;
    return buildSrc(tournamentBanners[current - 1].img);
  }

  function nextImage() {
    current = current > 1 ? current - 1 : tournamentBannerIds.length;
    return buildSrc(tournamentBanners[current - 1].img);
  }
</script>

<Slideshow
  alt={`touranment banner #${current.toString()}`}
  startingSrc={buildSrc(currentBanner.img)}
  previousSrc={previousImage}
  nextSrc={nextImage}
  {close}
  currentNumber={tournamentBannerIds.length - current + 1}
  total={tournamentBannerIds.length}
/>
