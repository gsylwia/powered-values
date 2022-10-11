const getAllPoweredValuesLimitedByNumber = (value) => {
  
    if (typeof(value) !== 'number'){
        return [];
    }
    
    const result = [];
    let i = 1;
	let power = Math.pow(i,2);

    while (power <= value) {
        result.push(power);
        i++;
        power = Math.pow(i,2)
	}   
    
    console.log(result);
	return result;
};

getAllPoweredValuesLimitedByNumber(68);