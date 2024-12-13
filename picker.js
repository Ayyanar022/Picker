const userInput = document.getElementById("user-input")
const input_btn = document.getElementById("input-btn");
const uoList = document.getElementById("uo_list");
const showCount = document.getElementById("array-count");
const suffle = document.getElementById('suffle');


let arryList = [];

input_btn.addEventListener("click",addListItem);
userInput.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        addListItem()
    }
})

//ADD LIST ITEM IN ARRAY--------------
function addListItem(){
    uoList.innerHTML = '';

     if(userInput.value.trim() ){
        const valueObj = {name :userInput.value.trim(),checked:true,img:''}     
        arryList.push(valueObj);
    }

    showCount.innerHTML = arryList.length ; 
    userInput.value = '';
   
    showList()
 }

 function addImage(image){
    uoList.innerHTML = '';

    if(image){

        const valuObj ={name:'',checked:true,img:image}
        arryList.push(valuObj)
    }

    showCount.innerHTML = arryList.length;
    showList()
 }

 // SHOW LIST ITEM --------------------------------------

//  function showList(){
//     uoList.innerHTML = '';  
   

//     arryList.forEach((element,index)=>{
//         const li = document.createElement('li');
//         li.setAttribute('id','list-li')
//         const input_div = document.createElement('div');
//         input_div.setAttribute('id',"input-div1")


//         const textInput = document.createElement('input');
//         textInput.setAttribute('id','text-input');
//         textInput.value = element.name; 
//         textInput.addEventListener('input',function(event){
//             arryList[index].name = event.target.value;
//             showListOuter()
//         })

//         const image = document.createElement('img');
//         image.src=element.img
//         image.alt="icon";
//         image.style.width = "25px";
//         image.style.height = "20px";

//         input_div.appendChild(textInput);
//         if(element.img){
//             input_div.appendChild(image)
//         }
       


//         const div = document.createElement('div');

//         // grip icon
//         const gripIcon = document.createElement('i');
//         gripIcon.classList.add('fas','fa-grip-vertical')
        
//         //copy icon 
//         const copyIcon = document.createElement('i');
//         copyIcon.classList.add('far','fa-copy');

//         //checkbox input
//         const chekBox = document.createElement('input');
//         chekBox.setAttribute('type','checkbox');
//         chekBox.setAttribute("id","list-checkbox")
//         chekBox.checked = element.checked
//         chekBox.addEventListener('change',function(event){
//             arryList[index].checked = event.target.checked
//             showListOuter();
//         })

       
//         //remove icon
//         const remoIcon = document.createElement('i');
//         remoIcon.classList.add('fas' ,'fa-times');
//         remoIcon.setAttribute('id','remov-icon');

//         div.appendChild(gripIcon);
//         div.appendChild(copyIcon);
//         div.appendChild(chekBox);
//         div.appendChild(remoIcon);

//         li.appendChild(input_div)
//         li.appendChild(div);

//         uoList.appendChild(li);

//         // finished creating list items 

//         // list elemnet functionality

//         copyIcon.addEventListener('click',function(){
//             const copyitem = {...element}
//             arryList.splice(index , 0, copyitem);
//             addListItem();
//         })

//         remoIcon.addEventListener('click',function(){
//             arryList.splice(index,1);
//             addListItem();
//         })

//         // userInput.value = '';

//     })

//     showListOuter()
//     console.log("list array",arryList)
//  }

function showList() {
    uoList.innerHTML = '';  

    arryList.forEach((element, index) => {
        const li = document.createElement('li');
        li.setAttribute('id', 'list-li');
        li.dataset.index = index; 
        const input_div = document.createElement('div');
        input_div.setAttribute('id', "input-div1");

        const textInput = document.createElement('input');
        textInput.setAttribute('id', 'text-input');
        textInput.value = element.name;
        textInput.addEventListener('input', function (event) {
            arryList[index].name = event.target.value;
            showListOuter();
        });

        const image = document.createElement('img');
        image.src = element.img;
        image.alt = "icon";
        image.style.width = "25px";
        image.style.height = "20px";

        input_div.appendChild(textInput);
        if (element.img) {
            input_div.appendChild(image);
        }

        const div = document.createElement('div');

        // Grip icon
        const gripIcon = document.createElement('i');
        gripIcon.classList.add('fas', 'fa-grip-vertical');
        gripIcon.style.cursor = 'move';

        // Copy icon
        const copyIcon = document.createElement('i');
        copyIcon.classList.add('far', 'fa-copy');

        // Checkbox input
        const chekBox = document.createElement('input');
        chekBox.setAttribute('type', 'checkbox');
        chekBox.setAttribute("id", "list-checkbox");
        chekBox.checked = element.checked;
        chekBox.addEventListener('change', function (event) {
            arryList[index].checked = event.target.checked;
            showListOuter();
        });

        // Remove icon
        const remoIcon = document.createElement('i');
        remoIcon.classList.add('fas', 'fa-times');
        remoIcon.setAttribute('id', 'remov-icon');

        div.appendChild(gripIcon);
        div.appendChild(copyIcon);
        div.appendChild(chekBox);
        div.appendChild(remoIcon);

        li.appendChild(input_div);
        li.appendChild(div);

        uoList.appendChild(li);

        // Copy item
        copyIcon.addEventListener('click', function () {
            const copyitem = { ...element };
            arryList.splice(index, 0, copyitem);
            addListItem();
        });

        // Remove item
        remoIcon.addEventListener('click', function () {
            arryList.splice(index, 1);
            addListItem();
        });
    });

    showListOuter();
    addDragAndDropFunctionality(); 
}



  // SUFFLE  funcion----------------------
  
  suffle.addEventListener("click",function(){
    suffleArrayfun(arryList)
    showList()
    })
       
    function suffleArrayfun(list) {
        if (list.length === 0) return;

        for (let i = list.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); 
            [list[i], list[j]] = [list[j], list[i]]; 
        }
     }
//---------------------------------------
// More Menu open 

const more_menu = document.getElementById("more-menu");
const menu = document.getElementById("menu");

more_menu.addEventListener("click",function(){
    menu.style.display = menu.style.display ==="block"?"none":"block";
})

//hide menu when clicking outside

document.addEventListener("click",(e)=>{
    if(!more_menu.contains(e.target)){
        menu.style.display = "none";
        menu.style.display='none';
    }
})


// menu dialog box
const removeAllBtn = document.getElementById("remove-all")
const dialogContent = document.getElementById('conformation-dialog')

removeAllBtn.addEventListener('click',()=>{
    dialogContent.classList.remove('hide-dialog');
})

const cancelBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("confirm-btn");

cancelBtn.addEventListener("click",()=>{
       dialogContent.classList.add("hide-dialog");
})

yesBtn.addEventListener("click",()=>{
    arryList =[];
    showList();
    showListOuter();
    showCount.innerText=arryList.length;
    dialogContent.classList.add("hide-dialog");

})


// show hide icon --------------------------------------------------------
const hideButton = document.querySelector('.hide-button');
const showButton = document.querySelector('.show-button');
const todoDiv = document.querySelector('#todo');
const pickerDiv = document.querySelector('#picker');
const show_btn2 = document.getElementById("show-btn2");

hideButton.addEventListener('click', () => {
    todoDiv.classList.add('hidden');
    showButton.style.display = 'block';
    pickerDiv.style.flex = "2";
});

showButton.addEventListener('click', () => {
    todoDiv.classList.remove('hidden');
    showButton.style.display = 'none';
    pickerDiv.style.flex = "1";
});

show_btn2.addEventListener('click',()=>{
    todoDiv.classList.remove('hidden');
    showButton.style.display = 'none';
    pickerDiv.style.flex = "1";
})

//-------------------------------------------------------------------

// its for OUTPUT DIV

const outList = document.getElementById('out-ul');

function showListOuter(){
    outList.innerHTML='';  
    spinResult.innerHTML="";

    if(arryList.length===0) return

    arryList.forEach((item)=>{       
        if( item.checked){
            const li = document.createElement('li');
                 
            li.setAttribute('id','weel-li');

            if(!item.name && item.img){
                const img = document.createElement('img');
                img.src=item.img;
                img.style.width = "25px"
                img.style.height = "25px";  
                li.appendChild(img)
            }else if(item.name && !item.img){
                li.innerHTML = item.name;
            }
            else if(item.name && item.img){

                const container = document.createElement('div');
                const span = document.createElement('p')
                span.style.color = "black"
                span.innerText = item.name;

                const img = document.createElement('img');
                img.src= item.img;
                img.style.width = "25px"
                img.style.height = "25px"; 
                img.style.marginLeft='7px'

                container.appendChild(span)
                container.appendChild(img)
                spinResult.appendChild(container);
                li.appendChild(container);
            

            }
           
            outList.append(li)
        }
    })
}

//---------------------------------------------
// SPIN FUNCTION
const spinbtn = document.getElementById("spin-btn");
const spinResult = document.getElementById("result-sapn");


spinbtn.addEventListener("click",function(){
    spinResult.innerText =''

    const random = Math.floor(Math.random()* arryList.length);
    let count =5;
    spinResult.innerText = count
    
     let intervelId = setInterval(()=>{
        if(count===1){

            if(arryList[random].name && !arryList[random].img){
                 spinResult.innerText =''
                spinResult.innerText = arryList[random].name;

            }else if(!arryList[random].name && arryList[random].img){
                spinResult.innerText =''
            const img = document.createElement('img');
            img.src=arryList[random].img;
            img.style.width = "25px"
            img.style.height = "25px"; 
            spinResult.innerText='';
            spinResult.appendChild(img)
            }
            else if(arryList[random].name && arryList[random].img){
                 spinResult.innerText =''

                const container = document.createElement('div');
                const span = document.createElement('span')
                span.innerText = arryList[random].name;

                const img = document.createElement('img');
                img.src=arryList[random].img;
                img.style.width = "25px"
                img.style.height = "25px"; 
                img.style.marginLeft='7px'
                spinResult.innerText='';

                container.appendChild(span)
                container.appendChild(img)
                spinResult.appendChild(container);
            }

            clearInterval(intervelId)
            return
        }
        count--
        spinResult.innerText =count ;
     },1000)

})

//---------IMAGE FUNCTION ----------------------

const imgselect = document.getElementById("img-file");
imgselect.addEventListener('change',(e)=>{
    if(e.target.files[0].name){
        console.log("img",e.target.files[0].name)
        const imageurl = URL.createObjectURL(e.target.files[0])
        addImage(imageurl)
    }
})



//-----------------------------------------------------------------------
// VIEW / INSERT DIALOG 

const view_insert = document.getElementById('view-insert-iconDiv');
const view_insert_dialog = document.getElementById("view-dialog-outer");
const cancel_btn = document.getElementById('cancel');
const insert_btn = document.getElementById('insert');
const insert_ul = document.getElementById("insert-ul");
const dialog_count = document.getElementById('dialog-count')
const dialog_textarea = document.getElementById("dialog-input-textarea");


view_insert.addEventListener("click",()=>{
    view_insert_dialog.classList.remove('hide-view-dialog');
    insert_ul.innerHTML ='';
    dialog_count.innerText = arryList.length;

    
    arryList.forEach((element)=>{
        const li = document.createElement('li');
        li.setAttribute('id','dialog-li')

        const p= document.createElement('p');
        p.innerText=element.name

        li.appendChild(p)

        const img = document.createElement('img');        
        img.src = element.img;
        img.alt="img"
        img.style.width ="30px" ;
        img.style.height ="25px";

        if(element.img){
            li.appendChild(img);
        }

        insert_ul.appendChild(li);

    })
})

cancel_btn.addEventListener('click',()=>{
    view_insert_dialog.classList.add('hide-view-dialog');
})

insert_btn.addEventListener('click',()=>{
    const data =dialog_textarea.value

    if(!data.trim())return alert("Please Type Somthing..")

    const text ={name:data.trim(),checked:true,img:''};
    arryList.push(text)
    view_insert_dialog.classList.add('hide-view-dialog');
    showList();
    showListOuter()
    dialog_textarea.value = "";
    })

//-----------------------------------------------------


// drag funcionality

function addDragAndDropFunctionality() {
    const listItems = document.querySelectorAll("#uo_list li");
    let dragStartIndex;

    listItems.forEach((li, index) => {
        const gripIcon = li.querySelector(".fa-grip-vertical");
        
        gripIcon.addEventListener("mousedown", () => {
            li.setAttribute("draggable", true); 
        });

        gripIcon.addEventListener("mouseup", () => {
            li.setAttribute("draggable", false); 
        });

        li.addEventListener("dragstart", () => {
            dragStartIndex = index; 
        });

        li.addEventListener("dragover", (e) => {
            e.preventDefault(); 
            li.classList.add("drag-over"); 
        });

        li.addEventListener("dragleave", () => {
            li.classList.remove("drag-over"); 
        });

        li.addEventListener("drop", () => {
            const dragEndIndex = index; 

            // Swap items in the array
            const [movedItem] = arryList.splice(dragStartIndex, 1);
            arryList.splice(dragEndIndex, 0, movedItem);

           
            showList();
        });
    });
}



//----TO STORE DATA IN DATABASE --------------------------------------------------------------------

const save_data = document.getElementById('store-data');

save_data.addEventListener('click',async()=>{

    try{
        const response = await fetch('http://localhost:7070/api/insert',{
            method:"POST",
            headers:{
               "content-type":"application/json"
            },
            body:JSON.stringify(arryList)
        })
        console.log(response)
    
        if(!response.ok){
            throw new Error("Issue occure while data storing..")
        }
    
        const res =await response.json()
        arryList =[]
        alert("Data inserted successfully..")
    }catch(error){
        console.error("An error occurred:", error); // Log the error for debugging
        alert("Something went wrong while processing your request. Please try again later.");
    }  

})