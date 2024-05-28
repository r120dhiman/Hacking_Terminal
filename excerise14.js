 function getrandom () {
    
  let x=1+Math.random()*6;
return x;
};

async function msg(str) {
    return new Promise(resolve => {
        setTimeout(() => {
            document.querySelector(".con").innerHTML=document.querySelector(".con").innerHTML+`<div class="msgs"> ${str}  <span class="dots">.  .  .</span> <br> </div>`;
            resolve();
        }, getrandom()*1000);
    })
}
async function main(){
    await msg("Initializing Hacking");
    await msg("Reading your Files ");
    await msg("Password files Detected ");
    await msg("Sending all passwords and personal files to server ");
    await msg("Cleaning up");
    setTimeout(() => {
        document.querySelector(".con").innerHTML=`<h1 class="lastmsg"> THANKS FOR GIVING YOUR PRECIOUS DATA TO US </h1>`;
    }, 7000);
}
main();