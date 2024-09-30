<script lang="ts">
  import { onMount } from 'svelte';

  let animated = false;

  onMount(() => {
    animated = window !== undefined && navigator.hardwareConcurrency > 6;
  });
</script>

<div class="absolute flex flex-col -z-[1] w-full !max-w-full items-center justify-center bg-transparent transition-bg overflow-hidden h-[60vh] top-0 pointer-events-none opacity-30">
  <div class={`glow absolute opacity-60 ${animated ? 'glow-animated' : 'glow-static'}`} />
</div>

<style scoped>
  .glow-animated {
    --switch-duration: 1.5s;
    --switch-name: scale;
  }

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
    contain: strict;
    contain-intrinsic-size: 100vw 40vh;
    background-image: var(--stripes), var(--rainbow);
    background-size: 300%, 200%;
    background-position: 50% 50%, 50% 50%;
    height: inherit;
    filter: opacity(50%) saturate(200%);
    mask-image: radial-gradient(ellipse at 75% 0%, black 40%, transparent 70%);
    pointer-events: none;
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
    content: '';
    position: absolute;
    inset: 0;
    background-image: var(--stripes), var(--rainbow);
    background-size: 200%, 100%;
    mix-blend-mode: difference;
  }

  @keyframes glow {
    from {
      background-position: 50% 50%, 50% 50%;
    }
    to {
      background-position: 350% 50%, 350% 50%;
    }
  }

  .glow-animated.glow::after {
    animation: glow 90s linear infinite;
  }

  .glow-static.glow::after {
    animation: unset !important;
  }

  @keyframes scale {
    0% {
      mask-size: 0;
    }
    10% {
      mask-size: 50vmax;
    }
    90% {
      mask-size: 50vmax;
    }
    100% {
      mask-size: 2000vmax;
    }
  }
</style>