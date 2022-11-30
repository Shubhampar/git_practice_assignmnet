
function identifyPrime(num) {
    // Write code here
let flag="True";   
    for(let i=2;i<num;i++)
        if(num%i ===1){
            flag=false;
            break;
        }
        if(flag){
            console.log('Yes');
        }
        else{
            console.log('No');
}
        }
 //check palindrome
function checkPalindrome(N, str) {
    //write code here
 let ans="";
    for(let i=str.length-2;i>=0;i--){
        ans+=str[i];
        }
        if(ans==str){
      console.log('Yes');
        }else{
       console.log('No');
        }
    }
         