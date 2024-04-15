/* function generarQR */
function generarQR(){
    let Input1 = document.getElementById('input1').value.trim();
    let Input2 = document.getElementById('input2').value.trim();
    let Input3 = document.getElementById('input3').value.trim();    
    let Input4 = document.getElementById('input4').value.trim();

    console.log(Input1);
    console.log(Input2);
    console.log(Input3);
    console.log(Input4);

    let textoConcatenado = Input1+","+Input2+","+Input3+","+Input4;
    console.log(textoConcatenado);
    
    if(textoConcatenado===",,,"){
        alert("Los datos estan vacios");
    }
    var qrCodeURL = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + encodeURIComponent(textoConcatenado);

    let qrImg = document.createElement('img');
    qrImg.src=qrCodeURL;
    qrImg.alt="CodigoQR";

    qrImg.classList.add('qr-code');

    document.getElementById('qr-code').appendChild(qrImg);
}