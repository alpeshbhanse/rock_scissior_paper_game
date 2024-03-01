
let str='Alpesh Subhash Bhanse',count=0;

const ch=['a','e','i','o','u'];

for (const s of str.toLocaleLowerCase()) {
    
    
    if(ch.includes(s)) {
        count++;
       }

}



console.log(count);

