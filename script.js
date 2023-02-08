let item1 = 0
let item2 = 0
let item3 = 0
let item4 = 0

let showPopup = false

var plus1 = document.getElementById("plus1")
plus1.addEventListener("click", increment)

var minus1 = document.getElementById("minus1")
minus1.addEventListener("click", decrement)

var plus2 = document.getElementById("plus2")
plus2.addEventListener("click", increment)

var minus2 = document.getElementById("minus2")
minus2.addEventListener("click", decrement)

var plus3 = document.getElementById("plus3")
plus3.addEventListener("click", increment)

var minus3 = document.getElementById("minus3")
minus3.addEventListener("click", decrement)

var plus4 = document.getElementById("plus4")
plus4.addEventListener("click", increment)

var minus4 = document.getElementById("minus4")
minus4.addEventListener("click", decrement)

var clearall = document.getElementById("clearAll")
clearall.addEventListener("click", clearAll)

var placeorder = document.getElementById("placeOrder")
placeorder.addEventListener("click", placeOrder)

var OKs = document.getElementById("OK")
OKs.addEventListener("click", OK)

function increment(){
    const sender = this.id; 
    if(sender==='plus1'){
        item1 += 1
        document.getElementById('count1').innerHTML=item1
    }
    if(sender==='plus2'){
        item2 += 1
        document.getElementById('count2').innerHTML=item2
    }
    if(sender==='plus3'){
        item3 += 1
        document.getElementById('count3').innerHTML=item3
    }
    if(sender==='plus4'){
        item4 += 1
        document.getElementById('count4').innerHTML=item4
    }
    document.getElementById("subtotal").innerHTML="Subtotal $" + (5* item1 + 17*item2 + 6*item3 + 49*item4)
} 

function decrement(){
    const sender = this.id; 
    if(sender==='minus1'){
        if(item1 > 0){
            item1 -= 1
        }
        document.getElementById('count1').innerHTML=item1
    }
    if(sender==='minus2'){
        if(item2 > 0){
            item2 -= 1
        }
        document.getElementById('count2').innerHTML=item2
    }
    if(sender==='minus3'){
        if(item3 > 0){
            item3 -= 1
        }
        document.getElementById('count3').innerHTML=item3
    }
    if(sender==='minus4'){
        if(item4 > 0){
            item4 -= 1
        }
        document.getElementById('count4').innerHTML=item4
    }
    document.getElementById("subtotal").innerHTML="Subtotal $" + (5* item1 + 17*item2 + 6*item3 + 49*item4)
}  


function clearAll(){
        item1 = 0
        document.getElementById('count1').innerHTML=item1
        item2 =0
        document.getElementById('count2').innerHTML=item2
        item3=0
        document.getElementById('count3').innerHTML=item3
        item4 =0
        document.getElementById('count4').innerHTML=item4

        document.getElementById("subtotal").innerHTML="Subtotal $" + (5* item1 + 17*item2 + 6*item3 + 49*item4)
} 

function placeOrder(){
    let orderText = ""

    item1 > 0 ? orderText += item1 + ' mac and cheese ' : ''
    item2 > 0 ? orderText += item2 + ' roasted fish ' : ''
    item3 > 0 ? orderText += item3 + ' chocolate stew ' : ''
    item4 > 0 ? orderText += item4 + ' black hot dog ' : ''

    document.getElementById("foodOrder").innerHTML = orderText
    document.getElementById("foodOrderPopup").classList.remove("hidden")
} 

function OK(){
    console.log('OK')
    document.getElementById("foodOrderPopup").classList.add("hidden")
} 