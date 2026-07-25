import { ArrowRightIcon } from "./icons";

export type FlowNode = {
  title: string;
  subtitle: string;
  emphasis?: boolean;
};

/**
 * Renders a horizontal (desktop) / vertical (mobile) sequence of flow nodes
 * connected by arrows, e.g. "Vendor Logs → Cloud Storage → Pipeline → Reporting".
 */
export default function DataFlowStep({ nodes }: { nodes: FlowNode[] }) {
  return (
    <ol className="flex w-full flex-col items-stretch gap-0 lg:flex-row lg:items-center lg:gap-4">
      {nodes.map((node, i) => (
        <li key={node.title} className="flex w-full flex-col items-stretch lg:contents">
          <div
            className={`flex w-full flex-col items-center rounded-md border px-4 py-3 text-center lg:flex-1 ${
              node.emphasis ? "border-[1.5px] border-teal bg-white" : "border-border bg-white"
            }`}
          >
            <p className={`font-display text-sm font-semibold ${node.emphasis ? "text-teal" : "text-ink"}`}>
              {node.title}
            </p>
            <p className="text-[11px] text-muted">{node.subtitle}</p>
          </div>
          {i < nodes.length - 1 && (
            <div className="flex items-center justify-center py-2 text-muted lg:w-4 lg:py-0" aria-hidden="true">
              <span className="lg:hidden">↓</span>
              <ArrowRightIcon className="hidden size-4 lg:block" />
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}
