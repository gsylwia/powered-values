const getAllPoweredValuesLimitedByNumber = (value) => {
  
    if (typeof(value) !== 'number'){
        return [];
    }
    
    const result = [];
    let i = 1;
		    
    while ( i <= value) {
		const power = Math.pow(i,2);
 				
        if (power >= value) break;
            result.push(power);
        i++;
	}   
    
    console.log(result);
	return result;
};

getAllPoweredValuesLimitedByNumber(68);