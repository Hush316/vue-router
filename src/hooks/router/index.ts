import type { RouteLocationRaw, Router } from 'vue-router';
import router from "../../router";

function handleError(e: Error) {
    console.error(e);
}

export const useGo = (_router?: Router) => {
    const { push, replace } = _router || router;
    function go(opt: RouteLocationRaw, isReplace = false) {
        if (!opt) {
            return;
        }
        isReplace ? replace(opt).catch(handleError) : push(opt).catch(handleError)
    }
    return go
}

export const useNext = () => {
    function next() {
        router.go(1)
    }
    return next
}
export const usePrev = () => {
    function prev() {
        router.back()
    }
    return prev
}



