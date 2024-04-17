<script lang="ts">
  import Discord from '../components/icons/Discord.svelte';
  import Mail from 'lucide-svelte/icons/mail';
  import { fade } from 'svelte/transition';

  let discordCopied = false;

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

<div class="relative flex justify-center">
  {#if discordCopied}
    <div class="tooltip flex -top-[42px]" transition:fade={{ duration: 75 }}>
      <div class="tooltip-caret" />
      <span class="text-emerald-800">Copied username to clipboard</span>
    </div>
  {/if}
  <button class="btn btn-gradient w-full" on:click={copyDiscord}>
    <Discord w={18} h={18} class="fill-black mr-2" /> Discord
  </button>
</div>
<a href="mailto:ka.mario564@gmail.com" class="btn btn-gradient w-full">
  <Mail size={18} class="stroke-black mr-2" /> Email
</a>