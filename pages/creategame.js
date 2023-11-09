import * as components from "@/components/modules"

export default function Game() {
  return (
    <main className="overflow-hidden h-full flex flex-col blocks animate-zoom">
      <components.GameHeader />
      <components.GameBody />
      <components.Footer />
    </main>
  );
}
