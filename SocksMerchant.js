var n=9;
const ar=[10, 20, 20, 10, 10, 30, 50, 10, 20]
function sockMerchant(n, ar) {
    let res=0;
    ar.sort();
    for(let i=0;i<n;i++){
        if(ar[i]==ar[i+1]){
            i++
            res++;
        }
    }
    console.log(res)
    }
sockMerchant(n,ar)