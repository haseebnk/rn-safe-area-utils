import { useMemo } from "react";
import { useSafeInsets } from "./useSafeInsets";
export const useSafePadding = (edges = ["top", "bottom"]) => {
    const insets = useSafeInsets();
    return useMemo(() => {
        const style = {};
        edges.forEach((edge) => {
            style[`padding${edge.charAt(0).toUpperCase() + edge.slice(1)}`] =
                insets[edge];
        });
        return style;
    }, [insets, edges]);
};
//# sourceMappingURL=useSafePadding.js.map