import {useMemo} from "react";
import {observable} from "mobx";

export function useMobxBox(initialValue) {
    return useMemo(() => {
        return observable.box(initialValue)
    }, [])
}