<script lang="ts">
  import X from './icons/X.svelte';
  import Discord from './icons/Discord.svelte';
  import Github from './icons/Github.svelte';
  import { fade } from 'svelte/transition';

  let showDiscordTooltip = false;
  let discordCopied = false;

  function toggleDiscordTooltip() {
    showDiscordTooltip = !showDiscordTooltip;
  }

  async function copyDiscord() {
    await navigator.clipboard.writeText('mario564');
    discordCopied = true;
  }

  $: {
    if (discordCopied) {
      setTimeout(() => {
        discordCopied = false;
      }, 1200);
    }
  }
</script>

<footer class="border-t border-white/25 py-8 px-content flex justify-center">
  <div class="max-w-[1000px] w-full flex max-xs:flex-col-reverse xs:grid xs:grid-cols-[max-content_1fr] max-xs:justify-center items-center">
    <span class="text-zinc-500 flex justify-center h-full">Copyright © {new Date().getFullYear()} Mario564</span>
    <div class="flex mb-4 xs:mt-0 justify-center xs:justify-end gap-4">
      <button
        class="relative"
        on:click={copyDiscord}
        on:mouseenter={toggleDiscordTooltip}
        on:mouseleave={toggleDiscordTooltip}
      >
        {#if showDiscordTooltip}
          <div class="tooltip flex -top-[42px] -left-14 min-w-[137px] justify-center" transition:fade={{ duration: 75 }}>
            <div class="tooltip-caret" />
            {#if discordCopied}
              <span class="text-emerald-800">Copied to clipboard</span>
            {:else}
              Click to copy username
            {/if}
          </div>
        {/if}
        <Discord w={24} h={24} class="fill-white scale-100 hover:scale-110 duration-300" />
      </button>
      <a href="https://twitter.com/L_Mario564">
        <X w={24} h={24} class="fill-white scale-100 hover:scale-110 duration-300" />
      </a>
      <a href="https://github.com/L-Mario564">
        <Github w={24} h={24} class="fill-white scale-100 hover:scale-110 duration-300" />
      </a>
    </div>
  </div>
</footer>