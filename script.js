function clickFulter(element, list){
    const targetElement = document.querySelectorAll(element)
    if(!targetElement)return
    targetElement.forEach(target =>{
        
        target.addEventListener('click', (event)=>{
            if(target.checked){
            document.querySelectorAll(list).forEach(e=>{
                if(e.checked) return
                e.click()
            })
        } else{
            document.querySelectorAll(list).forEach(e=>{
                if(!e.checked) return  //если не было выбрано ни одного из checkbox'ов, то ничего не делаем
                e.click()
            })
        }
        })
    })
}
function test(){
    if(target.checked){
        document.querySelectorAll(list).forEach(e=>{
            if(e.checked) return
            e.click()
        })
    } else{
        document.querySelectorAll(list).forEach(e=>{
            if(!e.checked) return  //если не было выбрано ни одного из checkbox'ов, то ничего не делаем
            e.click()
        })
    }
}


let startfilter = setInterval(()=>{
    if(!document.querySelector('.t-store__filter')) return
    clickFulter('input[name="XS"]','input[name^="XS ("]')
    clickFulter('input[name="S"]','input[name^="S ("]')
    clickFulter('input[name="S-M"]','input[name^="S-M ("]')
    clickFulter('input[name="M"]','input[name^="M ("]')
    clickFulter('input[name="L"]','input[name^="L ("]')
    clickFulter('input[name="L-XL"]','input[name^="L-XL ("]')
    clickFulter('input[name="Onesize"]','input[name^="Onesize ("]')

    clearInterval(startfilter)
},1e3)


function ftWrapperftTabRePosition() {
    function ftTabRePosition() {
        const targetElement = document.querySelector(".t-store__prod-popup__info");
        const tabs = document.querySelector(".t-store__tabs");
        tabs.classList.add('ft-tab');
        targetElement.append(tabs);
    }

    let st_ftTabRePosition = setInterval(() => {
        if (document.querySelector(".t-store__prod-popup__info") && document.querySelector(".t-store__tabs")) {
            console.log('нашли');
            
            ftTabRePosition();
            clearInterval(st_ftTabRePosition);
        } else{
            console.log('ищем');
            
        }
    }, 500);
}
ftWrapperftTabRePosition()




function getForm() {
    const bascetFormName = document.querySelector('#input_0091244879700')//имя в корзине
    const FormName = document.querySelector('#in-1731013975580')//имя в форме


const ronsMount = document.querySelector('[value="Консьерж-сервис на месяц — 600 руб. "]')
const ronsYar = document.querySelector('[value="Консьерж-сервис на год — 6 000 руб."]')
const free = document.querySelector('[value="Базовый сервис — бесплатно"]')
        const product = {
          name: ronsMount.checked?'Консьерж-сервис на месяц':ronsYar.checked?'Консьерж-сервис на год':'',
        //   amount:ronsMount.checked?600:ronsYar.checked?6000:0,
          price: ronsMount.checked?600:ronsYar.checked?6000:0,
          img: "https://static.tildacdn.com/tild3435-3333-4139-b033-316162343465/Logo.svg",
        };


    const button = document.querySelector('[href="#send"]')
    button.addEventListener('click', ()=>{
        if(document.querySelector('[class="t-input-error"][style="opacity: 1; display: block;"]')){
            console.log('заполнены не все поля');
            // return;//если есть незаполненое поле
        }
        if(free.checked){
            console.log('выбран бесплатный тариф');
            
            return;//если выбран бесплатный тариф
        }
        bascetFormName.value = FormName.value


        tcart__addProduct(product);

        tcart__updateTotalProductsinCartObj();
        tcart__reDrawCartIcon();
        tcart__reDrawTotal();
        tcart__saveLocalObj();
        tcart__reDrawProducts()
    })

}
getForm()