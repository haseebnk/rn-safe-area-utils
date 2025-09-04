import React from "react";
import { View, StyleSheet } from "react-native";
import { useSafePadding } from "../hooks/useSafePadding";
export const SafeAreaWrapper = ({ edges = ["top", "bottom"], style, children, ...props }) => {
    const safePadding = useSafePadding(edges);
    return (React.createElement(View, { style: [styles.container, safePadding, style], ...props }, children));
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
//# sourceMappingURL=SafeAreaWrapper.js.map