export const formatNumber = (value: number | string | any): string => {
	return new Intl.NumberFormat("ja-JP").format(value);
};
