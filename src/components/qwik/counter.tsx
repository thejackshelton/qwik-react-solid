/** @jsxImportSource @builder.io/qwik */
import { component$, useSignal } from "@builder.io/qwik";

export const Counter = component$(() => {
  const counter = useSignal(0);

  return (
    <button type="button" onClick$={() => counter.value++}>
      Qwik Count: {counter.value}
    </button>
  );
});
