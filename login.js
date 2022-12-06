
function identifyPrime(num) {
    // Write code here
let flag="True";   
    for(let i=2;i<num/2;i++)
        if(num%i ===0){
            flag=false;
            break;
        }
        if(flag==true){
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
    for(let i=str.length-1;i>=0;i--){
        ans+=str[i];
        }
        if(ans==str){
      console.log('Yes');
        }else{
       console.log('No');
        }
    }
         