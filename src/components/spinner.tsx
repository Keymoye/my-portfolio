// src/components/Spinner.tsx
export default function Spinner() {
  return (
    <div
      className="w-10 h-10 border-4 border-muted border-t-primary rounded-full animate-spin"
      aria-label="Loading"
    ></div>
  );
}
