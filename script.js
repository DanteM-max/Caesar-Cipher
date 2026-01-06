console.log("CHARGE!");

const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


function encrypt() {
    console.log("Encrypting...");

    //get user message from box
    let userBox = document.getElementById("messageInput");

    let userText = userBox.value;
    console.log("userText = " + userText);
    //get key from special number selector. and parseInt so that we can use it
    let keyBox = document.getElementById("key");
    
    let key = parseInt(keyBox.value);
    console.log("key = " + key);
    //create empty string var to store result
    let result = "";
    // convert string to numbers with for loop
    for (let i = 0; i < userText.length; i++) {
        //get curr char use String.prototype.charAt() and use String.prototype.toLowercase()
        let curr=userText.charAt(i).toLowerCase();
        console.log(curr);
        //get index of char in alpha
        let currIndexInAlpha = alpha.indexOf(curr);
        console.log(currIndexInAlpha);
        //apply formula ((x+k)%26) for encrypted nummber
        let cipherIndex = (currIndexInAlpha + key) % 26;
        console.log("cipherIndex = " + cipherIndex);
        //get encrypted number and use it to get char from alpha, like alpha[encryptedNum]

        //concatenate into string
    }
    //display result in result.box
}

function decrypt() {
    console.log("Decrypting...");
}