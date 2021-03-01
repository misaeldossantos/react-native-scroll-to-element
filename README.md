
# react-native-scroll-to-element

[![npm version](https://badge.fury.io/js/react-native-scroll-to-element.svg)](https://badge.fury.io/js/react-native-scroll-to-element)

Focus View elements within the ScrollView. Similar to DOMElement.scrollIntoView() for web. Compatible with Expo

## Built with

- React context-api
- React hooks
- Mobx@6

## Overview

This library allows to get focus of an element, any direct or indirect child element of ScrollView.

<img align="center" alt="preview" height="600px" src="./assets/demo.gif" />


## Motivation

I created based on react-native-scroll-into-view (https://github.com/slorber/react-native-scroll-into-view), I made this component with less code and with new features of react/react-native.


## Install

```
npm install react-native-scroll-to-element
```
or
```
yarn add react-native-scroll-to-element
```

## How to use

1. Replace ScrollView component to SpecialScrollView from react-native-scroll-into-view
2. On the element you want to focus on, wrap it with SpecialView component
3. You can pass "focused" prop (declarative mode) or call "focus" method (imperative mode)

- Declarative
```tsx
import React from 'react';
import { Text, View } from 'react-native';
import { SpecialScrollView, SpecialView } from 'react-native-scroll-to-element';

export default function () {
  return (
    <SpecialScrollView>
      <View
        style={{
          height: 400,
          backgroundColor: 'red'
        }}
      />
      <SpecialView
        style={{
          height: 50,
          backgroundColor: 'blue'
        }}
        focused
       >
        <Text 
          style={{
            color: 'white',
            fontSize: 20,
            padding: 10
          }}
        >
          Focus here
        </Text>
      </SpecialView>
      <View
        style={{
          height: 800,
          backgroundColor: 'green'
        }}
      />
    </SpecialScrollView>
  );
}

```

- Imperative:

```tsx
import React, { useRef } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SpecialScrollView, SpecialView } from 'react-native-scroll-to-element';

export default function () {
  const viewRef = useRef()

  return (
    <SpecialScrollView>
      <View
        style={{
          height: 400,
          backgroundColor: 'red'
        }}
      />
      <SpecialView
        style={{
          height: 50,
          backgroundColor: 'blue'
        }}
        ref={viewRef}
      >
        <TouchableOpacity
          onPress={() => viewRef.current.focus()}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              padding: 10
            }}
          >
            Focus here
        </Text>
        </TouchableOpacity>
      </SpecialView>
      <View
        style={{
          height: 800,
          backgroundColor: 'green'
        }}
      />
    </SpecialScrollView>
  );
}

```

Props of SpecialScrollView is the same of ScrollView. The same way, SpecialView receives props of View component
