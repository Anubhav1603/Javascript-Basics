//Verify a prime number

function verifyPrime(num){
    let prime=0;
    for(let i=0;i<=num;i++){
        if(num%i==0){
            prime += 1;
        }
    }
    if (prime==2){
        console.log("its prime number")
    }
    else{
        console.log("Not a prime number")
    }
}

verifyPrime(18)