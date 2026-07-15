import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button type="button" onClick={() => setCount(count + 1)}>
      count is {count}
    </button>
  );
}

export function Greeting({ name }: { name: string }) {
  return <p>Hello, {name}</p>;
}
