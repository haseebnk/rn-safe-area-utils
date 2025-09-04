import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";
import { useSafePadding } from "../hooks/useSafePadding";

interface SafeAreaWrapperProps extends ViewProps {
    edges?: ("top" | "bottom" | "left" | "right")[];
    children: React.ReactNode;
}

export const SafeAreaWrapper: React.FC<SafeAreaWrapperProps> = ({
    edges = ["top", "bottom"],
    style,
    children,
    ...props
}) => {
    const safePadding = useSafePadding(edges);

    return (
        <View style={[styles.container, safePadding, style]} {...props}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
