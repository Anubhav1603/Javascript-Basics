//Find all prime factors of a number


function verifyPrime(num){
    let prime=0;
    for(let i=0;i<=num;i++){
        if(num%i==0){
            prime += 1;
        }
    }
    if (prime==2){
        return num
    }
    else {
        return 0
    }
}

function findPrime(num){
    let factors = []; //factors array to store factors
    let prime=[]

    for(let i=2;i<num;i++){
        if(num%i==0){
            factors.push(i)
        }
    }
    for(let j in factors){
        let c = verifyPrime(factors[j])
        if(c != 0){
            prime.push(c)
        }
    }
    console.log(prime)
}

findPrime(758575)