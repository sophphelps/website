"use client";

export function PrintButton() {
  return <button onClick={() => window.print()} className="button-primary no-print">Download / print CV</button>;
}
