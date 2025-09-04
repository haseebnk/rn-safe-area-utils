import { useMemo } from "react";
import { useSafeInsets } from "./useSafeInsets";

type Edge = "top" | "bottom" | "left" | "right";

export const useSafePadding = (edges: Edge[] = ["top", "bottom"]) => {
  const insets = useSafeInsets();

  return useMemo(() => {
    const style: Record<string, number> = {};
    edges.forEach((edge) => {
      style[`padding${edge.charAt(0).toUpperCase() + edge.slice(1)}`] =
        insets[edge];
    });
    return style;
  }, [insets, edges]);
};
