import { type TransitionState } from "./types";

type Listener = (state: TransitionState) => void;

export function createStateMachine(initial: TransitionState = "idle") {
  let state = initial;
  const listeners = new Set<Listener>();

  function getState() {
    return state;
  }

  function is(s: TransitionState) {
    return state === s;
  }

  function transition(to: TransitionState) {
    state = to;
    listeners.forEach((fn) => fn(state));
  }

  function subscribe(fn: Listener) {
    listeners.add(fn);
    return () => listeners.delete(fn);
  }

  return { getState, is, transition, subscribe };
}
