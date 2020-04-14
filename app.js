


let btn = document.querySelector('#btn')


btn.addEventListener('click', Goster);


function Goster(e) {

    let key = parseInt(document.querySelector('#input').value);
    key=key%10;
    let ul = document.querySelector('ul');

    switch (key) {
        case 1: {
            let li = document.createElement("LI");              
            let text = document.createTextNode("Bazar ertəsi");       
            li.appendChild(text);                           
            ul.appendChild(li);   
            break;
        }
        case 2: {
            let li = document.createElement("LI");              
            let text = document.createTextNode("Çərşənbə axşamı");       
            li.appendChild(text);                           
            ul.appendChild(li);   
            break;
        }
        case 3: {
            let li = document.createElement("LI");              
            let text = document.createTextNode("Çərşənbə");       
            li.appendChild(text);                           
            ul.appendChild(li);   
            break;
        }
        case 4: {
             let li = document.createElement("LI");              
            let text = document.createTextNode("Cümə axşamı");       
            li.appendChild(text);                           
            ul.appendChild(li);   
            break;
        }
        case 5: {
            let li = document.createElement("LI");              
            let text = document.createTextNode("Cümə");       
            li.appendChild(text);                           
            ul.appendChild(li);   
            break;
        }
        case 6: {
            let li = document.createElement("LI");              
            let text = document.createTextNode("Şənbə");       
            li.appendChild(text);                           
            ul.appendChild(li);   
            break;
        }
        case 7: {
            let li = document.createElement("LI");              
            let text = document.createTextNode("Bazar");       
            li.appendChild(text);                           
            ul.appendChild(li);   
            break;
        }

        default:
            let li = document.createElement("LI");              
            let text = document.createTextNode("Təyin edilməyib");       
            li.appendChild(text);                           
            ul.appendChild(li);   
            break;
    }
}





// let btn1 = document.querySelector('#b1');
// let btn2 = document.querySelector('#b2');
// let btn3 = document.querySelector('#b3');
// let btn4 = document.querySelector('#b4');


// btn1.addEventListener('click', topr);
// btn2.addEventListener('click', topl);
// btn3.addEventListener('click', bottomr);
// btn4.addEventListener('click', bottoml);




// function topr(e) {
//     let box = document.querySelector('#box');
//     box.style.top = "0%";
//     box.style.right = "0%";
//     box.style.bottom = "60%";
//     box.style.left = "60%";
// }

// function topl(e) {
//     let box = document.querySelector('#box');
//     box.style.top = "0%";
//     box.style.left = "0%";
//     box.style.bottom = "60%";
//     box.style.right = "60%";
// }


// function bottomr(e) {
//     let box = document.querySelector('#box');
//     box.style.bottom = "0%";
//     box.style.right = "0%";
//     box.style.top = "60%";
//     box.style.left = "60%";
// }


// function bottoml(e) {
//     let box = document.querySelector('#box');
//     box.style.bottom = "0%";
//     box.style.left = "0%";
//     box.style.top = "60%";
//     box.style.right = "60%";
// }
