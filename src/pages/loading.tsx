// src/pages/Loading.tsx
import Spinner from "../components/spinner";

export default function Loading() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <Spinner />
      <p className="mt-4 text-muted">Loading your experience...</p>
    </main>
  );
}
