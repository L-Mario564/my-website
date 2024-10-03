<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { showGlow } from '../utils/stores';

  let animate = false;

  onMount(() => {
    animate = window !== undefined && navigator.hardwareConcurrency > 6;
    setTimeout(() => showGlow.set(true), 150);

    return () => showGlow.set(false);
  });
</script>

{#if $showGlow}
  <div
    in:fade={{ duration: 300, delay: 50 }}
    out:fade={{ duration: 50 }}
    class="absolute flex flex-col -z-[1] w-full !max-w-full items-center justify-center bg-transparent transition-bg overflow-hidden h-[60vh] top-0 pointer-events-none opacity-30"
  >
    <div
      class={`glow h-[inherit] pointer-events-none contain-strict absolute opacity-60 after:absolute after:inset-0 after:mix-blend-difference ${animate && $showGlow ? 'glow-animated' : 'glow-static'}`}
    />
  </div>
{/if}

<style scoped>
  .glow {
    --stripes: repeating-linear-gradient(
      100deg,
      #000 0%,
      #000 7%,
      transparent 10%,
      transparent 12%,
      #000 16%
    );
    --rainbow: repeating-linear-gradient(
      100deg,
      #a78bfa 10%,
      #9b5eea 16%,
      #f9a179 22%,
      #a78bfa 30%
    );
    contain-intrinsic-size: 100vw 40vh;
    background-image: var(--stripes), var(--rainbow);
    background-size: 300%, 200%;
    background-position:
      50% 50%,
      50% 50%;
    filter: opacity(50%) saturate(200%);
    mask-image: radial-gradient(ellipse at 75% 0%, black 40%, transparent 70%);
    /* Webkit GPU acceleration hack for some reason */
    /* https://stackoverflow.com/a/21364496 */
    /* eslint-disable-next-line */
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
    perspective: 1000;
    -webkit-perspective: 1000;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }

  .glow::after {
    background-image: var(--stripes), var(--rainbow);
    background-size: 200%, 100%;
  }

  .glow-animated.glow::after {
    animation: glow 90s linear infinite;
  }

  .glow-static.glow::after {
    animation: unset !important;
  }

  @keyframes glow {
    from {
      background-position:
        50% 50%,
        50% 50%;
    }
    to {
      background-position:
        350% 50%,
        350% 50%;
    }
  }
</style>
