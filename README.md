# rn-safe-area-utils

[![npm version](https://img.shields.io/npm/v/rn-safe-area-utils.svg)](https://www.npmjs.com/package/rn-safe-area-utils)
[![npm downloads](https://img.shields.io/npm/dm/rn-safe-area-utils.svg)](https://www.npmjs.com/package/rn-safe-area-utils)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A lightweight utility library for React Native that makes working with **safe area insets** (notches, status bars, home indicators) super easy and developer-friendly.

---

## ✨ Features
- 🔹 `useSafeInsets()` → get **top, bottom, left, right** inset values  
- 🔹 `useSafePadding(edges)` → automatically apply padding for selected edges  
- 🔹 `<SafeAreaWrapper />` → drop-in component to wrap screens with safe padding  
- ⚡ Minimal, dependency-light, and built on top of [`react-native-safe-area-context`](https://github.com/th3rdwave/react-native-safe-area-context)  

---

## 🚀 Installation

```bash
npm install rn-safe-area-utils react-native-safe-area-context
# or
yarn add rn-safe-area-utils react-native-safe-area-context


## 📖 Usage Examples

### 1. useSafeInsets
Get raw inset values:


// App.tsx
import React from "react";
import { View, Text } from "react-native";
import { useSafeInsets } from "rn-safe-area-utils";

export default function Demo() {
  const insets = useSafeInsets();

  return (
    <View style={{ paddingTop: insets.top, flex: 1, backgroundColor: "#fafafa" }}>
      <Text>Top Inset: {insets.top}</Text>
      <Text>Bottom Inset: {insets.bottom}</Text>
    </View>
  );
}
