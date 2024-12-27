import { Show, createSignal } from "solid-js";

export function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        {" "}
        Solid count: {count()}{" "}
      </button>
    </>
  );
}
