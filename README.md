
# react-native-scroll-to-element

Focus View elements within the ScrollView. Similar to DOMElement.scrollIntoView() for web. Compatible with Expo

## Built with

- React context-api
- React hooks
- Mobx@6

## Overview

This library allows to get focus of an element, in any direct or indirect child element of ScrollView.

## Motivation

I created based on react-native-scroll-into-view (https://github.com/slorber/react-native-scroll-into-view), I made this component with less code and with new features of react/react-native.


## Install

npm install react-native-scroll-to-element
or
yarn add react-native-scroll-to-element

## How to use

1. Replace ScrollView component from react-native to SpecialScrollView from react-native-scroll-into-view
2. On the element you want to focus on, wrap it with SpecialView component
3. You can pass "focused" prop (declarative mode) or call "scrollToElement" method (imperative mode)

```tsx
import React from 'react'
import {SpecialScrollView, SpecialView} from 'react-native-scroll-to-element'

function Example1() {
	return <SpecialScrollView>
		<Text>
			Text1
		</Text>
		<Text>
			Text2
		</Text>
		<Text>
			Text3
		</Text>
		<Text>
			Text4
		</Text>
		<View>
			<SpecialView focused>
				<Text>
					Focus here
				</Text>
			</SpecialView>
		</View>
	</SpecialScrollView>
}

function Example2() {
	const ref = useRef()

	return <SpecialScrollView>
		<Text>
			Text1
		</Text>
		<Text>
			Text2
		</Text>
		<Text>
			Text3
		</Text>
		<Text>
			Text4
		</Text>
		<View>
			<SpecialView ref={ref}>
				<Text>
					Focus here
				</Text>
			</SpecialView>
			<Button 
				onPress={() => {
					ref.current.scrollToElement()
				}}
			>
				Focus
			</Button>
		</View>
	</SpecialScrollView>
}

```

Props of SpecialScrollView is the same of ScrollView from react-native. The same way, SpecialView receives props of View component