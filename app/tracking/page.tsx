import { Suspense } from "react";
import TrackingContent from "./TrackingContent";

export default function TrackingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-20">Loading…</div>}>
      <TrackingContent />
    </Suspense>
  );
}
