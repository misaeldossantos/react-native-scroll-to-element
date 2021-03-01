import { React } from 'react';
import {ScrollViewProps, ViewProps} from 'react-native'

export const SpecialScrollView: React.FC<ScrollViewProps>

export const SpecialView: React.FC<ViewProps & {
	focused: boolean
}>