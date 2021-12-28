//Find all prime factors of a number

function findPrime(num){
    let factors = []; //factors array to store factors

    for(let i=2;i<num;i++){
        if(num%i==0){
            factors.push(i)
        }
    }

    console.log(factors)
}

findPrime(55)