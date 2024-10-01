<script lang="ts">
  import { onMount } from 'svelte';

  const transitionTime = 50; // Milliseconds
  const titles = [
    'Full-stack web developer',
    'Competitive gamer',
    'Music enjoyer',
    'Curiosity-driven learner'
  ];
  let letterWidth = 18.75; // Pixels
  let animate = false;
  let animation: 'type' | 'untype' = 'type';
  let titleIndex = titles.length - 1;

  onMount(() => {
    windowResize();
    window.addEventListener('resize', windowResize);

    setTimeout(() => {
      animateTitle();
      animate = true;
    }, 1200);

    return () => window.removeEventListener('resize', windowResize);
  });

  function windowResize() {
    if (window.innerWidth < 450) {
      letterWidth = 10;
    } else if (window.innerWidth < 640) {
      letterWidth = 11.25;
    } else if (window.innerWidth < 768) {
      letterWidth = 15;
    } else {
      letterWidth = 18.75;
    }
  }

  function animateTitle() {
    titleIndex = titleIndex > titles.length - 2 ? 0 : titleIndex + 1;
    animation = 'type';

    setTimeout(() => {
      animation = 'untype';
      setTimeout(animateTitle, totalTransitionTime + 50);
    }, totalTransitionTime + 2500);
  }

  $: title = titles[titleIndex];
  $: containerWidth = title.length * letterWidth;
  $: totalTransitionTime = title.length * transitionTime;
</script>

<div class="flex" style={`width: ${containerWidth}px; margin-left: ${letterWidth}px`}>
  <span class={`inline-block overflow-hidden text-nowrap mr-[2px] w-0 ${animate ? (animation === 'type' ? 'animate-[type]' : 'animate-[untype]') : ''}`.trim()} style={animate ? `animation: ${animation} ${totalTransitionTime}ms steps(${title.length}) forwards` : ''}>
    {title}
  </span>
  <span class="inline border-l-[3px] border-white animate-cursor-blink relative top-0" />
</div>
