const arrPrint = document.getElementById('arrPrint');
const tambahPenumpang = document.getElementById('tambahpenumpang');
const turunPenumpang = document.getElementById('turunpenumpang');


var penumpang = [];

function naik(nama){
  penumpang.push(nama);
};

function turun(nama){
  if(penumpang.includes(nama)){
    var namas = penumpang.indexOf(nama);
    penumpang.splice(namas,1,undefined);
  }else{
    console.log("tidak ada nama penumpang tersebut!");
  }
  
}

function show(arr){
  console.clear();
  var showStatus = arr.map(function(x,i){
    var nomorPenumpang = penumpang.indexOf(x) + 1;
    return '\npenumpang ke '+ nomorPenumpang + ' adalah : '+x ;
  });
  document.getElementById("arrPrint").innerHTML = showStatus;
}

tambahPenumpang.addEventListener("click",function(){
  

  var nama = prompt('Masukkan nama penumpang: ');
  if(nama !=null && nama.length>0){
    var findUndef = penumpang.includes(undefined);
    if(findUndef==true){
      var dataUndef = penumpang.indexOf(undefined);
      penumpang.splice(dataUndef,1,nama);
      show(penumpang)
    }
    
    else{
      if(!penumpang.includes(nama)){
        naik(nama);
        show(penumpang)
      } else{
        console.log("nama dengan penumpang tersebut sudah ada!");
      }
    }
  }else{
    console.log("Isi data dengan benar");
  }
});

turunPenumpang.addEventListener("click",function(){
  var nama = prompt('Masukkan nama penumpang: ');
  if(nama !=null && nama.length>0){
    turun(nama);
    show(penumpang)
  }else{
    console.log("Isi data dengan benar");
  } 
});