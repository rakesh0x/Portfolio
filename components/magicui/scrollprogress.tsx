import { ScrollProgress } from "@/components/magicui/scroll-progress";

export function ScrollProgressDemo() {
  return (
    <div className="z-10 rounded-2xl p-8">
      <ScrollProgress className="top-[200px]" />
      <h2 className="pb-4 font-2xl">
        Note: The scroll progress is shown below the navbar of the page.
      </h2>
    </div>
  );
}
