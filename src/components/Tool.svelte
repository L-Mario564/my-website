<script lang="ts">
  import Globe from 'lucide-svelte/icons/globe';
  import GitPullRequest from 'lucide-svelte/icons/git-pull-request';
  import Github from './icons/Github.svelte';
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import type { Tool, OSSProject } from '../utils/types';

  export let tool: Tool | OSSProject;
  let showContributionsTooltip = false;
  let toolContainer: HTMLDivElement | undefined;

  onMount(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || !toolContainer) return;
      toolContainer.classList.add('animate-project');
    }, {
      threshold: 1,
      rootMargin: '0px 0px 0px 0px'
    });

    if (toolContainer) {
      observer.observe(toolContainer);
    }

    return () => observer.disconnect();
  });

  function isOSSProject(tool: Tool | OSSProject): tool is OSSProject {
    return !!(tool as OSSProject).contributions;
  }

  function toggleContributionsTooltip() {
    showContributionsTooltip = !showContributionsTooltip;
  }
</script>

<div class="relative w-96 h-48 bg-gradient-to-tr from-purple-500/10 via-woodsmoke-900/10 via-[50%] to-orange-500/10 p-4 rounded-md opacity-0" bind:this={toolContainer}>
  <strong class="text-white font-bold text-xl w-full block">{tool.name}</strong>
  <div class="w-full h-[2px] rounded-full bg-gradient-to-r from-purple-500 to-orange-500 mt-1 mb-2" />
  <p class="text-sm">{tool.description}</p>
  <div class="absolute bottom-4 left-4 flex gap-2">
    {#if tool.url}
      <a href={tool.url} class="block duration-300 hover:opacity-75">
        <Globe size={32} class="stroke-white" />
      </a>
    {/if}
    <a href={tool.repo} class="block duration-300 hover:opacity-75">
      <Github w={32} h={32} class="fill-white" />
    </a>
  </div>
  {#if isOSSProject(tool)}
    {#if showContributionsTooltip}
      <div class="tooltip bottom-[58px] right-8" transition:fade={{ duration: 75 }}>
        <div class="tooltip-caret" />
        View pull requests
      </div>
    {/if}
    <a
      href={`${tool.repo}/pulls?q=is%3Amerged+is%3Apr+author%3AL-Mario564`}
      target="_blank"
      class="absolute bottom-4 right-4 flex items-center gap-2 btn btn-gradient text-sm py-[6px] px-3"
      on:mouseenter={toggleContributionsTooltip}
      on:mouseleave={toggleContributionsTooltip}
    >
      <span>{tool.contributions} Contributions</span>
      <GitPullRequest size={16} class="stroke-black" />
    </a>
  {/if}
</div>