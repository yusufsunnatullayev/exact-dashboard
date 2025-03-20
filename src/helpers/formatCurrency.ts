export const switchCurrency = (value: string): string => {
	switch (value) {
		case "USD":
			return "$";
		case "UZS":
			return "so'm";
		default:
			return "$";
	}
};
