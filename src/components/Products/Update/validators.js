

export const isNameValid = (value) => {
	return value.trim().length > 0 && value.trim().length <= 200;
};

export const isCategoriesValid = (value) => {
	return value.length > 0 && value.length <= 5;
}
export const isExpirationDateValid = (value) => {
	var minExpirationDate = new Date() ; 
	minExpirationDate.setDate(minExpirationDate.getDate() + 30 )
	return  minExpirationDate <new Date(value) ; 
}

export const isratingValid = (value) => {
	return value<8
}