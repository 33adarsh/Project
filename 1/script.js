const wraper=document.querySelector(".wraper"),
qrInput=wraper.querySelector(".form input"),
generateBtn=wraper.querySelector(".form button"),
qrImg=wraper.querySelector(".qr-code img");

generateBtn.addEventListener("click",()=>{
    let qrvalue=qrInput.value;
    if(!qrvalue) return //If the input is empty return form here.
    generateBtn.innerText="Generate QR Code...";
    //Getting a QR code of user entered vlaue using the qrserver.
    //Api and passing the api returned img src to qrImg.
    qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrvalue}`;
    qrImg.addEventListener("load",()=>{ //Once QR code img loaded.
        generateBtn.innerText="Generate QR Code";
        wraper.classList.add("active");
    })
})

qrInput.addEventListener("keyup",()=>{
    if(!qrInput.value){
        wraper.classList.remove("active");
    }
})