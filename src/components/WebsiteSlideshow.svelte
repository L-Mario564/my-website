<script lang="ts">
  import Slideshow from './Slideshow.svelte';
  import type { Website } from '../utils/types';

  export let website: Website;
  export let close: () => void;
  let current = 1;

  function buildSrc(image: number) {
    return `/websites/${website.img.folder}/${image}.jpg`;
  }

  function previousImage() {
    current = current > 1 ? current - 1 : website.img.count;
    return buildSrc(current);
  }

  function nextImage() {
    current = current < website.img.count ? current + 1 : 1;
    return buildSrc(current);
  }
</script>

<Slideshow
  alt={`website screenshot #${current.toString()}`}
  startingSrc={buildSrc(current)}
  previousSrc={previousImage}
  nextSrc={nextImage}
  close={close}
  currentNumber={current}
  total={website.img.count}
/>
