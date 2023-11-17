
let users = JSON.parse(localStorage.getItem('users'))
console.log(users);
let computers = []

for(let user of users){
    computers.push(...user.todos)
}

const currentUser = localStorage.getItem('currentUser')

let todos =  users.find(user => user.name === currentUser).todos

console.log(todos);

const allTabPanes = document.querySelectorAll('.tab-pane')





for(let tabPane of allTabPanes){
    for(let comp of computers){
        if(tabPane.id.toUpperCase() === comp.mark.toUpperCase()){
            tabPane.innerHTML += `<div class="card" style="width: 200px; margin-left: 10px; height: 315px;">
            <div class="dForImg">
            <img src="${comp.img}" class="card-img-top fimg" alt="...">
            </div>
            <div class="card-body">
            <p class="p1">Adi:${comp.mark}</p>
            <p class="p1">Tesvir:${comp.tesvir}</p>
            <p class="p1">Qiymet:${comp.prise}</p>
            <p class="p1">Yeni:${comp.yeni}</p>
            
            <p class="p1">id:${comp.id}</p>
              
            <button class="btn btn-primary kkk" id="${comp.id}" >Atrafli</button>
            </div>
          </div>`
        }
        // if(tabPane.innerHTML === ''){
            // tabPane.innerHTML += 'No computers'
        // }
    }
}

// $('#searc').on('input', function(){
    // 
    // 
// })

// $('#modalImg').attr('src', $(this).val())

// $('.clos').click({
    // $('.clos').css({
        // "display": "none"
//  })
// })

$('.clos').click(function(){
    $('.clos').css({
         "display": "none"
           
  })
 

})
// $('.pro').click(function(){
    // $('#hp').attr('class', 'tab-pane fade show active')
//  
// 
// })

let id
$('.conSt').click(function(e){
    if(e.target.innerHTML === 'Atrafli'){
       
        id = e.target.id
        console.log(id);
    
        $('.clos').css({
             "display": "block"
      })
    //   console.log(todos);

      const currentTodo = todos.find(todo => todo.id == id)
      console.log(currentTodo);

    //   $('#ad').text(`Ad:${currentTodo.Ad}`)
    //   $('#prise').text(`Qiymet:${currentTodo.prise}`)


       $('#yeni').html(`<span style="background-color: blue;color: aliceblue;">Yeni:</span>${currentTodo.yeni}`)
       $('#ad').html(`<span style="background-color: blue;color: aliceblue;">Ad:</span>${currentTodo.Ad}`)
       $('#ey').html(`<span style="background-color: blue;color: aliceblue;">Emeleyaddas:</span>${currentTodo.Emeleyaddas}`)
       $('#prise').html(`<span style="background-color: blue;color: aliceblue;">Qiymet:</span>${currentTodo.prise}`)
       $('#tesvir').html(`<span style="background-color: blue;color: aliceblue;">Tesvir:</span>${currentTodo.tesvir}`)
       $('#dy').html(`<span style="background-color: blue;color: aliceblue;">Daimi yaddas:</span>${currentTodo.Daimiyaddas}`)
       $('#dyt').html(`<span style="background-color: blue;color: aliceblue;">Daimi yaddas tipi:</span>${currentTodo.Daimiyaddastipi}`)
       $('#vk').html(`<span style="background-color: blue;color: aliceblue;">Video kart:</span>${currentTodo.Videokart}`)
       $('#es').html(`<span style="background-color: blue;color: aliceblue;">Emeliyyat sistemi:</span>${currentTodo.Emeliyyatsistemi}`)
       $('#cpu').html(`<span style="background-color: blue;color: aliceblue;">CPU:</span>${currentTodo.Merkeziprosessor}`)
       $('.modImg').attr('src', currentTodo.img)
       
    //    Emeliyyatsistemi


        // const currentTodo = todos.find(todo => todo.id === id)

        
    //    
    }
    // 
 })


// let ser = document.getElementsByClassName('searc')
// console.log(ser);

// $('.searc').on('input', function() {
    // let searchValue = $(this).val().toLowerCase()
    // console.log(searchValue.adi);
// 
    // $('.tab-pane').each(function() {
        // let tabContent = $(this).text().toLowerCase()
        // console.log(tabContent);
        // if(tabContent.includes(searchValue)) {
            // $(this).addClass('active')
        // } else {
            // console.log('net');
        // }
    // })
// })

//  document.getElementById('searchInput').addEventListener('input', function() {
    //  let searchValue = this.value.toLowerCase();
    //  let tabs = document.querySelectorAll('.tab-pane');
    //  
    //  tabs.forEach(tab => {
        //  let tabContent = tab.textContent.toLowerCase();
        //  if (tabContent.includes(searchValue)) {
            //  tab.classList.add('active');
            //  console.log('da');
        //  } else {
            //  tab.classList.remove('active');
            //  console.log('net');
        //  }
    //  });
//  });
// 

