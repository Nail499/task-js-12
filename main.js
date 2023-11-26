let title = document.getElementById("titleinput");
let author = document.getElementById("authorinput");
let color = document.getElementById("colorinput");
let radio = document.querySelectorAll("input");
let add = document.getElementById("add");
let tablebody = document.getElementById ("tbodyinput");

add.addEventListener('click',()=>{
    let titlein = title.value.trim();
        let authorin = author.value.trim();
        let colorin = color.value.trim();
        let radiochec;
        radio.forEach(radio=>{
           
            if(radio.checked){
                radiochec=radio.value
            }
             })
        if (titlein !== "" && authorin !== "" && colorin !== "" ){
            let newRow = tablebody.insertRow();
            let titleCell = newRow.insertCell(0);
          titleCell.textContent = titlein;
          let authorCell = newRow.insertCell(1);
          authorCell.textContent=authorin;
          let typeCell = newRow.insertCell(2);
          typeCell.textContent=radiochec;
          let newcolor =color.value;
         newRow.style.backgroundColor=newcolor;

        }else{
            alert("Bos saxlamaq olmaz")
        }
})
