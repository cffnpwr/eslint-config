import { useState } from "react";

export function ConditionalHook({ enabled }: { enabled: boolean }) {
  if (enabled) {
    const [count] = useState(0);
    return <div>{count}</div>;
  }
  return null;
}

export function MissingAlt() {
  return <img src="/logo.png" />;
}

export function MissingKey() {
  return (
    <ul>
      {[1, 2, 3].map((n) => (
        <li>{n}</li>
      ))}
    </ul>
  );
}
