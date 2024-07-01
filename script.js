const URL =  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=parth";
let imgBox = document.querySelector('#imgbox');
let qrImg = document.querySelector('#qrImg');
let qrText = document.querySelector('#qrText');

const generateQR = async () => {
  if(qrText.value.length > 0 ){
    let response = await fetch(URL);
    console.log(response);
    qrImg.src =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${ qrText.value}` ;
  }else{
    qrText.value = 'Please write something!!'
  }
    
}

document.querySelector('button').addEventListener('click' , () => {
    generateQR()
}) 