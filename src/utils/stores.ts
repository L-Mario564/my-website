import { writable } from 'svelte/store';

export function createToggle(initial: boolean) {
  const state = writable(initial);

  function toggle() {
    state.update((value) => !value);
  }

  function toFalse() {
    state.set(false);
  }

  function toTrue() {
    state.set(true);
  }

  return {
    ...state,
    toggle,
    toFalse,
    toTrue
  };
}
