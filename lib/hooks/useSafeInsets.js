import { useSafeAreaInsets } from "react-native-safe-area-context";
export const useSafeInsets = () => {
    const insets = useSafeAreaInsets();
    return {
        top: insets.top,
        bottom: insets.bottom,
        left: insets.left,
        right: insets.right,
    };
};
//# sourceMappingURL=useSafeInsets.js.map