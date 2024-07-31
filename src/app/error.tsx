"use client";

export default function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }): React.ReactNode {
  return (
    <>
      <h1>There has been an error: {error.message}</h1>
      <button onClick={reset}>Retry</button>
    </>
  );
}
