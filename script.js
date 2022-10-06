const getAllPoweredValuesLimitedByNumber = (value) => {
  
    if (typeof(value) != 'number'){
        return [];
    }
    
	let result = [];
    for (i=1; i <= value; i++) {
        let power = Math.pow(i,2);
        
        if (power >= value) {
        	console.log(result);
            return result;
        } else {
        	result.push(power);
        }  
    }
};

getAllPoweredValuesLimitedByNumber(68);