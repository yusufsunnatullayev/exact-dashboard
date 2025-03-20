import debounce from "lodash.debounce";

export const debouncedSet = debounce((val: any, setState: any) => {
	setState(val);
}, 500);
export const debouncedSearch = debounce((val: any, fn: any) => {
	fn(val);
}, 500);
