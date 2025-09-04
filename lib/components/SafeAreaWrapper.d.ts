import React from "react";
import { ViewProps } from "react-native";
interface SafeAreaWrapperProps extends ViewProps {
    edges?: ("top" | "bottom" | "left" | "right")[];
    children: React.ReactNode;
}
export declare const SafeAreaWrapper: React.FC<SafeAreaWrapperProps>;
export {};
//# sourceMappingURL=SafeAreaWrapper.d.ts.map