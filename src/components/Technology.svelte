<script lang="ts">
  import Star from 'lucide-svelte/icons/star';
  import Circle from 'lucide-svelte/icons/circle';
  import { fade } from 'svelte/transition';
  import type { Technology } from '../utils/types';

  export let technology: Technology;
  let showTechName = false;
  let showExperience = false;

  function onImageMouseEnter() {
    showTechName = true;
  }

  function onImageMouseLeave() {
    showTechName = false;
  }

  function onExpLevelMouseEnter() {
    showExperience = true;
  }

  function onExpLevelMouseLeave() {
    showExperience = false;
  }
</script>

<div class="flex flex-col items-center relative bg-clip-padding border-2 p-4 border-transparent rounded-md bg-woodsmoke-950 before:absolute before:inset-0 before:-z-[1] before:-m-[2px] before:rounded-[inherit] before:bg-gradient-to-tr before:from-purple-500 before:to-orange-500">
  {#if showTechName}
    <div class="tooltip -top-7" transition:fade={{ duration: 75 }}>
      <div class="tooltip-caret" />
      {technology.name}
    </div>
  {/if}
  <a href={technology.website} target="_blank">
    <img
      src={`/tech-logos/${technology.imgName}.png`}
      alt={technology.name}
      width={48}
      height={48}
      class="scale-90 hover:scale-100 duration-300"
      on:mouseenter={onImageMouseEnter}
      on:mouseleave={onImageMouseLeave}
    />
  </a>
  <div role="presentation" class="flex justify-center gap-1 items-center mt-2" on:mouseenter={onExpLevelMouseEnter} on:mouseleave={onExpLevelMouseLeave}>
    {#if showExperience}
      <div class="tooltip top-3" transition:fade={{ duration: 75 }}>
        <div class="tooltip-caret" />
        {#if technology.experience === 5}
          <strong>Very High Exp.:</strong> Have used this tool extensively.
        {:else if technology.experience === 4}
          <strong>High Exp.:</strong> May need to learn more advanced concepts.
        {:else if technology.experience === 3}
          <strong>Intermediate Exp.:</strong> Know the fundamentals.
        {:else if technology.experience === 2}
          <strong>Low Exp.:</strong> Have used it a few times.
        {:else if technology.experience === 1}
          <strong>Very Low Exp.:</strong> Know the bare basics.
        {/if}
      </div>
    {/if}
    {#each new Array(technology.experience) as  _}
      <Star class="fill-white stroke-white stroke-2 w-3 h-3" />
    {/each}
    {#each new Array(5 - technology.experience) as  _}
      <Circle class="fill-white stroke-white opacity-25 stroke-2 w-1 h-1 m-1" />
    {/each}
  </div>
</div>