function findGreatestNumber(...number){
    if(number === undefined || number == "" || number == null){
        return 0;
    }
    let greatest = number[0];
    number.splice(0).forEach(value => {
        if(value > greatest){
            greatest = value;
        }
    });

    return greatest;
}

export default findGreatestNumber;