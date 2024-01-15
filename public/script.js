


//get textType element for selecting noxt/acr from SELECT elelment
const textTypeEl = document.getElementById("textType")
console.log(textTypeEl)
//change types of text
textTypeEl.addEventListener('change', function(event){
    event.preventDefault()
    textType = textTypeEl.value
    console.log(textType)
    //select the textType to be displayed in the code area and/or change the page
    // document.querySelector()
})

//clear button
//PBD is the box with the NOXT
var PBD = document.getElementById("pictureBoxDiv")
var clearButton = document.getElementById("clearBTN")
clearButton.addEventListener('click', function(event){
    event.preventDefault()
    document.getElementById("pictureBox").value =""
    KDE.value = "";
    //PBD is the box with the NOXT
    PBD.value = "";
    console.log(PBD.querySelectorAll("IMG"))
    allIMG = PBD.querySelectorAll("IMG")
    // console.log(allIMG)
    // allIMG.baseURI=null
    // allIMG.currentSrc =''
    //PBD.parentNode.removeChild(PBD)
    //allIMG.parentNode.removeChild(allIMG)
    for (var i = 0; i < allIMG.length; i++){
        //allIMG[i].parentNode.removeChild(allIMG)
        allIMG[i].remove()
        // allIMG[i].alt = ''
        // allIMG[i].attributes[0]=''
        // allIMG[i].attributes[0].value=''
        // allIMG[i].attributes[0].alt=''
        // allIMG[i].attributes[0].height=''
        // allIMG[i].attributes[0].width=''
        // allIMG[i].attributes[0].outerHTML=''
        // //allIMG[i].=''
        // allIMG[i].attributes[0].baseURI=''

    }
})


const imgOther = document.createElement("IMG")
imgOther.setAttribute("src","./assets/NO_Other.png")
imgOther.setAttribute( "height","50px")
imgOther.setAttribute("width","50px")
imgOther.setAttribute("alt", "NO COLOR Other")

const imgA = document.createElement("IMG")
imgA.setAttribute("src","./assets/NO_A.png")
imgA.setAttribute( "height","50px")
imgA.setAttribute("width","50px")
imgA.setAttribute("alt", "NO COLOR A")

const imgB = document.createElement("IMG")
imgB.setAttribute("src","./assets/NO_B.png")
imgB.setAttribute( "height","50px")
imgB.setAttribute("width","50px")
imgB.setAttribute("alt", "NO COLOR B")

const imgC = document.createElement("IMG")
imgC.setAttribute("src","./assets/NO_C.png")
imgC.setAttribute( "height","50px")
imgC.setAttribute("width","50px")
imgC.setAttribute("alt", "NO COLOR C")

const imgD = document.createElement("IMG")
imgD.setAttribute("src","./assets/NO_D.png")
imgD.setAttribute( "height","50px")
imgD.setAttribute("width","50px")
imgD.setAttribute("alt", "NO COLOR D")

const imgE = document.createElement("IMG")
imgE.setAttribute("src","./assets/NO_E.png")
imgE.setAttribute( "height","50px")
imgE.setAttribute("width","50px")
imgE.setAttribute("alt", "NO COLOR E")

const imgF = document.createElement("IMG")
imgF.setAttribute("src","./assets/NO_F.png")
imgF.setAttribute( "height","50px")
imgF.setAttribute("width","50px")
imgF.setAttribute("alt", "NO COLOR F")

const imgG = document.createElement("IMG")
imgG.setAttribute("src","./assets/NO_G.png")
imgG.setAttribute( "height","50px")
imgG.setAttribute("width","50px")
imgG.setAttribute("alt", "NO COLOR G")

const imgH = document.createElement("IMG")
imgH.setAttribute("src","./assets/NO_H.png")
imgH.setAttribute( "height","50px")
imgH.setAttribute("width","50px")
imgH.setAttribute("alt", "NO COLOR H")

const imgI = document.createElement("IMG")
imgI.setAttribute("src","./assets/NO_I.png")
imgI.setAttribute( "height","50px")
imgI.setAttribute("width","50px")
imgI.setAttribute("alt", "NO COLOR I")

const imgJ = document.createElement("IMG")
imgJ.setAttribute("src","./assets/NO_J.png")
imgJ.setAttribute( "height","50px")
imgJ.setAttribute("width","50px")
imgJ.setAttribute("alt", "NO COLOR J")

const imgK = document.createElement("IMG")
imgK.setAttribute("src","./assets/NO_K.png")
imgK.setAttribute( "height","50px")
imgK.setAttribute("width","50px")
imgK.setAttribute("alt", "NO COLOR K")

const imgL = document.createElement("IMG")
imgL.setAttribute("src","./assets/NO_L.png")
imgL.setAttribute( "height","50px")
imgL.setAttribute("width","50px")
imgL.setAttribute("alt", "NO COLOR L")

const imgM = document.createElement("IMG")
imgM.setAttribute("src","./assets/NO_M.png")
imgM.setAttribute( "height","50px")
imgM.setAttribute("width","50px")
imgM.setAttribute("alt", "NO COLOR M")

const imgN = document.createElement("IMG")
imgN.setAttribute("src","./assets/NO_N.png")
imgN.setAttribute( "height","50px")
imgN.setAttribute("width","50px")
imgN.setAttribute("alt", "NO COLOR ")

const imgO = document.createElement("IMG")
imgO.setAttribute("src","./assets/NO_O.png")
imgO.setAttribute( "height","50px")
imgO.setAttribute("width","50px")
imgO.setAttribute("alt", "NO COLOR O")

const imgP = document.createElement("IMG")
imgP.setAttribute("src","./assets/NO_P.png")
imgP.setAttribute( "height","50px")
imgP.setAttribute("width","50px")
imgP.setAttribute("alt", "NO COLOR P")

const imgQ = document.createElement("IMG")
imgQ.setAttribute("src","./assets/NO_Q.png")
imgQ.setAttribute( "height","50px")
imgQ.setAttribute("width","50px")
imgQ.setAttribute("alt", "NO COLOR Q")

const imgR = document.createElement("IMG")
imgR.setAttribute("src","./assets/NO_R.png")
imgR.setAttribute( "height","50px")
imgR.setAttribute("width","50px")
imgR.setAttribute("alt", "NO COLOR R")

const imgS = document.createElement("IMG")
imgS.setAttribute("src","./assets/NO_S.png")
imgS.setAttribute( "height","50px")
imgS.setAttribute("width","50px")
imgS.setAttribute("alt", "NO COLOR S")

const imgT = document.createElement("IMG")
imgT.setAttribute("src","./assets/NO_T.png")
imgT.setAttribute( "height","50px")
imgT.setAttribute("width","50px")
imgT.setAttribute("alt", "NO COLOR T")

const imgU = document.createElement("IMG")
imgU.setAttribute("src","./assets/NO_U.png")
imgU.setAttribute( "height","50px")
imgU.setAttribute("width","50px")
imgU.setAttribute("alt", "NO COLOR U")

const imgV = document.createElement("IMG")
imgV.setAttribute("src","./assets/NO_V.png")
imgV.setAttribute( "height","50px")
imgV.setAttribute("width","50px")
imgV.setAttribute("alt", "NO COLOR V")

const imgW = document.createElement("IMG")
imgW.setAttribute("src","./assets/NO_W.png")
imgW.setAttribute( "height","50px")
imgW.setAttribute("width","50px")
imgW.setAttribute("alt", "NO COLOR W")

const imgX = document.createElement("IMG")
imgX.setAttribute("src","./assets/NO_X.png")
imgX.setAttribute( "height","50px")
imgX.setAttribute("width","50px")
imgX.setAttribute("alt", "NO COLOR X")

const imgY = document.createElement("IMG")
imgY.setAttribute("src","./assets/NO_Y.png")
imgY.setAttribute( "height","50px")
imgY.setAttribute("width","50px")
imgY.setAttribute("alt", "NO COLOR Y")

const imgZ = document.createElement("IMG")
imgZ.setAttribute("src","./assets/NO_Z.png")
imgZ.setAttribute( "height","50px")
imgZ.setAttribute("width","50px")
imgZ.setAttribute("alt", "NO COLOR Z")

const imgSpaceBtn = document.createElement("IMG")
imgSpaceBtn.setAttribute("src","./assets/NO_SPACE.png")
imgSpaceBtn.setAttribute( "height","50px")
imgSpaceBtn.setAttribute("width","50px")
imgSpaceBtn.setAttribute("alt", "NO COLOR SPACE button")

const imgNo1 = document.createElement("IMG")
imgNo1.setAttribute("src","./assets/NO_1.png")
imgNo1.setAttribute( "height","50px")
imgNo1.setAttribute("width","50px")
imgNo1.setAttribute("alt", "NO COLOR No 1")

const imgNo2 = document.createElement("IMG")
imgNo2.setAttribute("src","./assets/NO_2.png")
imgNo2.setAttribute( "height","50px")
imgNo2.setAttribute("width","50px")
imgNo2.setAttribute("alt", "NO COLOR No 2")

const imgNo3 = document.createElement("IMG")
imgNo3.setAttribute("src","./assets/NO_3.png")
imgNo3.setAttribute( "height","50px")
imgNo3.setAttribute("width","50px")
imgNo3.setAttribute("alt", "NO COLOR No 3")

const imgNo4 = document.createElement("IMG")
imgNo4.setAttribute("src","./assets/NO_4.png")
imgNo4.setAttribute( "height","50px")
imgNo4.setAttribute("width","50px")
imgNo4.setAttribute("alt", "NO COLOR No 4")

const imgNo5 = document.createElement("IMG")
imgNo5.setAttribute("src","./assets/NO_5.png")
imgNo5.setAttribute( "height","50px")
imgNo5.setAttribute("width","50px")
imgNo5.setAttribute("alt", "NO COLOR No 5")

const imgNo6 = document.createElement("IMG")
imgNo6.setAttribute("src","./assets/NO_6.png")
imgNo6.setAttribute( "height","50px")
imgNo6.setAttribute("width","50px")
imgNo6.setAttribute("alt", "NO COLOR No 6")

const imgNo7 = document.createElement("IMG")
imgNo7.setAttribute("src","./assets/NO_7.png")
imgNo7.setAttribute( "height","50px")
imgNo7.setAttribute("width","50px")
imgNo7.setAttribute("alt", "NO COLOR No 7")

const imgNo8 = document.createElement("IMG")
imgNo8.setAttribute("src","./assets/NO_8.png")
imgNo8.setAttribute( "height","50px")
imgNo8.setAttribute("width","50px")
imgNo8.setAttribute("alt", "NO COLOR No 8")

const imgNo9 = document.createElement("IMG")
imgNo9.setAttribute("src","./assets/NO_9.png")
imgNo9.setAttribute( "height","50px")
imgNo9.setAttribute("width","50px")
imgNo9.setAttribute("alt", "NO COLOR No 9")

/////////////practice

/////////////practice
                         
//document.getElementById("fromColors").appendChild(imgOther)
document.getElementById("fromColors0").appendChild(imgA)
document.getElementById("fromColors0").appendChild(imgB)
document.getElementById("fromColors0").appendChild(imgC)
document.getElementById("fromColors0").appendChild(imgD)
document.getElementById("fromColors0").appendChild(imgE)
document.getElementById("fromColors0").appendChild(imgF)
document.getElementById("fromColors0").appendChild(imgG)
document.getElementById("fromColors0").appendChild(imgH)
document.getElementById("fromColors0").appendChild(imgI)
document.getElementById("fromColors0").appendChild(imgJ)
document.getElementById("fromColors0").appendChild(imgK)
document.getElementById("fromColors0").appendChild(imgL)
document.getElementById("fromColors0").appendChild(imgM)
document.getElementById("fromColors0").appendChild(imgN)
document.getElementById("fromColors0").appendChild(imgO)
document.getElementById("fromColors0").appendChild(imgP)
document.getElementById("fromColors0").appendChild(imgQ)
document.getElementById("fromColors0").appendChild(imgR)
document.getElementById("fromColors0").appendChild(imgS)
document.getElementById("fromColors0").appendChild(imgT)
document.getElementById("fromColors0").appendChild(imgU)
document.getElementById("fromColors0").appendChild(imgV)
document.getElementById("fromColors0").appendChild(imgW)
document.getElementById("fromColors0").appendChild(imgX)
document.getElementById("fromColors0").appendChild(imgY)
document.getElementById("fromColors0").appendChild(imgZ)
document.getElementById("fromColors0").appendChild(imgSpaceBtn)
document.getElementById("fromColors0").appendChild(imgNo1)
document.getElementById("fromColors0").appendChild(imgNo2)
document.getElementById("fromColors0").appendChild(imgNo3)
document.getElementById("fromColors0").appendChild(imgNo4)
document.getElementById("fromColors0").appendChild(imgNo5)
document.getElementById("fromColors0").appendChild(imgNo6)
document.getElementById("fromColors0").appendChild(imgNo7)
document.getElementById("fromColors0").appendChild(imgNo8)
document.getElementById("fromColors0").appendChild(imgNo9)
document.getElementById("fromColors0").appendChild(imgOther)




// const imgOther1 = document.createElement("IMG")
// imgOther.setAttribute("src","./assets/NO_Other.png")
// imgOther.setAttribute( "height","50px")
// imgOther.setAttribute("width","50px")
// imgOther.setAttribute("alt", "NO COLOR Other")

// const imgA1 = document.createElement("IMG")
// imgA.setAttribute("src","./assets/NO_A.png")
// imgA.setAttribute( "height","50px")
// imgA.setAttribute("width","50px")
// imgA.setAttribute("alt", "NO COLOR A")

// const imgB1 = document.createElement("IMG")
// imgB.setAttribute("src","./assets/NO_B.png")
// imgB.setAttribute( "height","50px")
// imgB.setAttribute("width","50px")
// imgB.setAttribute("alt", "NO COLOR B")

// const imgC1 = document.createElement("IMG")
// imgC.setAttribute("src","./assets/NO_C.png")
// imgC.setAttribute( "height","50px")
// imgC.setAttribute("width","50px")
// imgC.setAttribute("alt", "NO COLOR C")

// const imgD1 = document.createElement("IMG")
// imgD.setAttribute("src","./assets/NO_D.png")
// imgD.setAttribute( "height","50px")
// imgD.setAttribute("width","50px")
// imgD.setAttribute("alt", "NO COLOR D")

// const imgE1 = document.createElement("IMG")
// imgE.setAttribute("src","./assets/NO_E.png")
// imgE.setAttribute( "height","50px")
// imgE.setAttribute("width","50px")
// imgE.setAttribute("alt", "NO COLOR E")

// const imgF1 = document.createElement("IMG")
// imgF.setAttribute("src","./assets/NO_F.png")
// imgF.setAttribute( "height","50px")
// imgF.setAttribute("width","50px")
// imgF.setAttribute("alt", "NO COLOR F")

// const imgG1 = document.createElement("IMG")
// imgG.setAttribute("src","./assets/NO_G.png")
// imgG.setAttribute( "height","50px")
// imgG.setAttribute("width","50px")
// imgG.setAttribute("alt", "NO COLOR G")

// const imgH1 = document.createElement("IMG")
// imgH.setAttribute("src","./assets/NO_H.png")
// imgH.setAttribute( "height","50px")
// imgH.setAttribute("width","50px")
// imgH.setAttribute("alt", "NO COLOR H")

// const imgI1 = document.createElement("IMG")
// imgI.setAttribute("src","./assets/NO_I.png")
// imgI.setAttribute( "height","50px")
// imgI.setAttribute("width","50px")
// imgI.setAttribute("alt", "NO COLOR I")

// const imgJ1 = document.createElement("IMG")
// imgJ.setAttribute("src","./assets/NO_J.png")
// imgJ.setAttribute( "height","50px")
// imgJ.setAttribute("width","50px")
// imgJ.setAttribute("alt", "NO COLOR J")

// const imgK1 = document.createElement("IMG")
// imgK.setAttribute("src","./assets/NO_K.png")
// imgK.setAttribute( "height","50px")
// imgK.setAttribute("width","50px")
// imgK.setAttribute("alt", "NO COLOR K")

// const imgL1 = document.createElement("IMG")
// imgL.setAttribute("src","./assets/NO_L.png")
// imgL.setAttribute( "height","50px")
// imgL.setAttribute("width","50px")
// imgL.setAttribute("alt", "NO COLOR L")

// const imgM1 = document.createElement("IMG")
// imgM.setAttribute("src","./assets/NO_M.png")
// imgM.setAttribute( "height","50px")
// imgM.setAttribute("width","50px")
// imgM.setAttribute("alt", "NO COLOR M")

// const imgN1 = document.createElement("IMG")
// imgN.setAttribute("src","./assets/NO_N.png")
// imgN.setAttribute( "height","50px")
// imgN.setAttribute("width","50px")
// imgN.setAttribute("alt", "NO COLOR ")

// const imgO1 = document.createElement("IMG")
// imgO.setAttribute("src","./assets/NO_O.png")
// imgO.setAttribute( "height","50px")
// imgO.setAttribute("width","50px")
// imgO.setAttribute("alt", "NO COLOR O")

// const imgP1 = document.createElement("IMG")
// imgP.setAttribute("src","./assets/NO_P.png")
// imgP.setAttribute( "height","50px")
// imgP.setAttribute("width","50px")
// imgP.setAttribute("alt", "NO COLOR P")

// const imgQ1 = document.createElement("IMG")
// imgQ.setAttribute("src","./assets/NO_Q.png")
// imgQ.setAttribute( "height","50px")
// imgQ.setAttribute("width","50px")
// imgQ.setAttribute("alt", "NO COLOR Q")

// const imgR1 = document.createElement("IMG")
// imgR.setAttribute("src","./assets/NO_R.png")
// imgR.setAttribute( "height","50px")
// imgR.setAttribute("width","50px")
// imgR.setAttribute("alt", "NO COLOR R")

// const imgS1 = document.createElement("IMG")
// imgS.setAttribute("src","./assets/NO_S.png")
// imgS.setAttribute( "height","50px")
// imgS.setAttribute("width","50px")
// imgS.setAttribute("alt", "NO COLOR S")

// const imgT1 = document.createElement("IMG")
// imgT.setAttribute("src","./assets/NO_T.png")
// imgT.setAttribute( "height","50px")
// imgT.setAttribute("width","50px")
// imgT.setAttribute("alt", "NO COLOR T")

// const imgU1 = document.createElement("IMG")
// imgU.setAttribute("src","./assets/NO_U.png")
// imgU.setAttribute( "height","50px")
// imgU.setAttribute("width","50px")
// imgU.setAttribute("alt", "NO COLOR U")

// const imgV1 = document.createElement("IMG")
// imgV.setAttribute("src","./assets/NO_V.png")
// imgV.setAttribute( "height","50px")
// imgV.setAttribute("width","50px")
// imgV.setAttribute("alt", "NO COLOR V")

// const imgW1 = document.createElement("IMG")
// imgW.setAttribute("src","./assets/NO_W.png")
// imgW.setAttribute( "height","50px")
// imgW.setAttribute("width","50px")
// imgW.setAttribute("alt", "NO COLOR W")

// const imgX1 = document.createElement("IMG")
// imgX.setAttribute("src","./assets/NO_X.png")
// imgX.setAttribute( "height","50px")
// imgX.setAttribute("width","50px")
// imgX.setAttribute("alt", "NO COLOR X")

// const imgY1 = document.createElement("IMG")
// imgY.setAttribute("src","./assets/NO_Y.png")
// imgY.setAttribute( "height","50px")
// imgY.setAttribute("width","50px")
// imgY.setAttribute("alt", "NO COLOR Y")

// const imgZ1 = document.createElement("IMG")
// imgZ.setAttribute("src","./assets/NO_Z.png")
// imgZ.setAttribute( "height","50px")
// imgZ.setAttribute("width","50px")
// imgZ.setAttribute("alt", "NO COLOR Z")

// const imgSpaceBtn1 = document.createElement("IMG")
// imgSpaceBtn.setAttribute("src","./assets/NO_SPACE.png")
// imgSpaceBtn.setAttribute( "height","50px")
// imgSpaceBtn.setAttribute("width","50px")
// imgSpaceBtn.setAttribute("alt", "NO COLOR SPACE button")

// const imgNo1A = document.createElement("IMG")
// imgNo1.setAttribute("src","./assets/NO_1.png")
// imgNo1.setAttribute( "height","50px")
// imgNo1.setAttribute("width","50px")
// imgNo1.setAttribute("alt", "NO COLOR No 1")

// const imgNo2A = document.createElement("IMG")
// imgNo2.setAttribute("src","./assets/NO_2.png")
// imgNo2.setAttribute( "height","50px")
// imgNo2.setAttribute("width","50px")
// imgNo2.setAttribute("alt", "NO COLOR No 2")

// const imgNo3A = document.createElement("IMG")
// imgNo3.setAttribute("src","./assets/NO_3.png")
// imgNo3.setAttribute( "height","50px")
// imgNo3.setAttribute("width","50px")
// imgNo3.setAttribute("alt", "NO COLOR No 3")

// const imgNo4A = document.createElement("IMG")
// imgNo4.setAttribute("src","./assets/NO_4.png")
// imgNo4.setAttribute( "height","50px")
// imgNo4.setAttribute("width","50px")
// imgNo4.setAttribute("alt", "NO COLOR No 4")

// const imgNo5A = document.createElement("IMG")
// imgNo5.setAttribute("src","./assets/NO_5.png")
// imgNo5.setAttribute( "height","50px")
// imgNo5.setAttribute("width","50px")
// imgNo5.setAttribute("alt", "NO COLOR No 5")

// const imgNo6A = document.createElement("IMG")
// imgNo6.setAttribute("src","./assets/NO_6.png")
// imgNo6.setAttribute( "height","50px")
// imgNo6.setAttribute("width","50px")
// imgNo6.setAttribute("alt", "NO COLOR No 6")

// const imgNo7A = document.createElement("IMG")
// imgNo7.setAttribute("src","./assets/NO_7.png")
// imgNo7.setAttribute( "height","50px")
// imgNo7.setAttribute("width","50px")
// imgNo7.setAttribute("alt", "NO COLOR No 7")

// const imgNo8A = document.createElement("IMG")
// imgNo8.setAttribute("src","./assets/NO_8.png")
// imgNo8.setAttribute( "height","50px")
// imgNo8.setAttribute("width","50px")
// imgNo8.setAttribute("alt", "NO COLOR No 8")

// const imgNo9A = document.createElement("IMG")
// imgNo9.setAttribute("src","./assets/NO_9.png")
// imgNo9.setAttribute( "height","50px")
// imgNo9.setAttribute("width","50px")
// imgNo9.setAttribute("alt", "NO COLOR No 9")


// document.getElementById("fromColors1").appendChild(imgA1)
// document.getElementById("fromColors1").appendChild(imgB1)
// document.getElementById("fromColors1").appendChild(imgC1)
// document.getElementById("fromColors1").appendChild(imgD1)
// document.getElementById("fromColors1").appendChild(imgE1)
// document.getElementById("fromColors1").appendChild(imgF1)
// document.getElementById("fromColors1").appendChild(imgG1)
// document.getElementById("fromColors1").appendChild(imgH1)
// document.getElementById("fromColors1").appendChild(imgI1)
// document.getElementById("fromColors1").appendChild(imgJ1)
// document.getElementById("fromColors1").appendChild(imgK1)
// document.getElementById("fromColors1").appendChild(imgL1)
// document.getElementById("fromColors1").appendChild(imgM1)
// document.getElementById("fromColors1").appendChild(imgN1)
// document.getElementById("fromColors1").appendChild(imgO1)
// document.getElementById("fromColors1").appendChild(imgP1)
// document.getElementById("fromColors1").appendChild(imgQ1)
// document.getElementById("fromColors1").appendChild(imgR1)
// document.getElementById("fromColors1").appendChild(imgS1)
// document.getElementById("fromColors1").appendChild(imgT1)
// document.getElementById("fromColors1").appendChild(imgU1)
// document.getElementById("fromColors1").appendChild(imgV1)
// document.getElementById("fromColors1").appendChild(imgW1)
// document.getElementById("fromColors1").appendChild(imgX1)
// document.getElementById("fromColors1").appendChild(imgY1)
// document.getElementById("fromColors1").appendChild(imgZ1)
// document.getElementById("fromColors1").appendChild(imgSpaceBtn1)
// document.getElementById("fromColors1").appendChild(imgNo1A)
// document.getElementById("fromColors1").appendChild(imgNo2A)
// document.getElementById("fromColors1").appendChild(imgNo3A)
// document.getElementById("fromColors1").appendChild(imgNo4A)
// document.getElementById("fromColors1").appendChild(imgNo5A)
// document.getElementById("fromColors1").appendChild(imgNo6A)
// document.getElementById("fromColors1").appendChild(imgNo7A)
// document.getElementById("fromColors1").appendChild(imgNo8A)
// document.getElementById("fromColors1").appendChild(imgNo9A)
// document.getElementById("fromColors1").appendChild(imgOther1)





// console.log(fromColors0)
  //in console shows all boxes - clickable in console


console.log(imgA) // not clickable in console
console.log('imgA alt:',imgA.alt)
console.log('imgA.attributes:', imgA.attributes)
console.log('imgA.attributes-source:', imgA.attributes[0])
console.log('imgA.attributes-node value:', imgA.attributes[0].nodeValue)
console.log('imgA.attributes-value:', imgA.attributes[0].value)
console.log('imgA.attributes-text content:', imgA.attributes[0].textContent)
console.log('imgA.attributes-height:', imgA.attributes[1])
console.log('imgA.attributes-width:', imgA.attributes[2])
console.log('imgA.attributes-alt:', imgA.attributes[3])
console.log('ImgA source:',imgA.src)   //clickable in console
console.log('ImgA current source:',imgA.currentSrc)  //clickable in console
console.log('ImgA outer HTML:',imgA.outerHTML)
console.log('imgA base URI:', imgA.baseURI)



var colors = [
        {
            letter : "a",
            box: src = "./assets/NO_A.png" ,  // #78ac96 
            text : 'green box'
           },
        
        {
            letter :'b',
            box : src = './assets/NO_B.png' ,  // #f8da24 
            text : 'yellow box'
        },
        {
            letter :'c',
            box : src = './assets/NO_C.png' ,  // #
            text : 'lavender box'
        }
    ]
    
console.log('COLORS [0]:',colors[0])
console.log('COLORS [0].BOX:',colors[0].box)
console.log('COLORS [0]TEXT:',colors[0].text)

//loop over colors ARRAY
// document.getElementById("loopOver")
//     for (var i=0; i < colors.length; i++){
//         console.log(colors[i].box)
//         const loopImg = document.createElement("IMG")
//         //document.createElement("li")
//         loopImg.setAttribute("src",colors[i].box)
//         loopImg.setAttribute( "height","25px")
//         loopImg.setAttribute("width","250px")
//         loopImg.setAttribute("alt", colors[i].alt)
//         document.getElementById("loopOver").appendChild(loopImg)
//     }



//set objects in color array to LOCAL STAORAGE - local storage under application
localStorage.setItem('colors',JSON.stringify(colors))
//var colorsArray = localStorage.setItem('colors',JSON.stringify(colors))
var colorsArray = JSON.parse(localStorage.getItem('colors',JSON.stringify(colors)))
console.log('CONSOLE.LOG(COLORSARRAY:', colorsArray[2].box)

//BOX FROM ARRAY 1 2 and 3
//create boxes from the boxes in the array

// const BFA1 = document.getElementById("boxFromArray1")
// const imgEE = document.createElement("IMG")
// imgEE.setAttribute( "height","50px")
// imgEE.setAttribute("width","50px")
// //imgEE.setAttribute(colors[0].box) - doesnt work
// imgEE.setAttribute("src",colors[0].box)
// BFA1.appendChild(imgEE)

// const BFA2 = document.getElementById("boxFromArray2")
// const imgFF = document.createElement("IMG")
// imgFF.setAttribute( "height","50px")
// imgFF.setAttribute("width","50px")
// //imgEE.setAttribute(colors[0].box) - doesnt work
// imgFF.setAttribute("src",colors[1].box)
// BFA2.appendChild(imgFF)

// const BFA3 = document.getElementById("boxFromArray3")
// const imgGG = document.createElement("IMG")
// imgGG.setAttribute( "height","50px")
// imgGG.setAttribute("width","50px")
// //imgEE.setAttribute(colors[0].box) - doesnt work
// imgGG.setAttribute("src",colors[2].box)
// BFA3.appendChild(imgGG)



//BUTTON FOR CLIPBOARD AREA - this was to change background color of box
// var clipBtn = document.getElementById("clipboardBTN")
// colors666 = ["red", "grey", "blue", "forest green", "honeydew"]
// const eFCT1 = document.getElementById("exampleFormControlTextarea1")
// console.log(eFCT1)
// clipBtn.addEventListener("click",function(){
//     console.log('TEST TEST TEST CLICK')
//     var randColor = Math.floor(Math.random()*5)
//     console.log(randColor)
//     var customColor = colors666[randColor]
//     eFCT1.setAttribute("style", "background-color:"+ customColor)
// })

//form and button for keydown event
var letters = [
    {
        a : src = "./assets/NO_A.png" ,  // #78ac96 
        text : 'green box'
       },
    
    {
        b : src = './assets/NO_B.png' ,  // #f8da24 
        text : 'yellow box'
    },
    {
        c : src = './assets/NO_C.png' ,  // #
        text : 'lavender box'
    }
]
var KDE = document.getElementById("keydownEvent")
KDE.addEventListener('keydown', function(event){
    ektLC = event.key.toLowerCase()
    //etkLC is the lowercase letter pressed
    console.log(ektLC)
    // event is the keydown event
    console.log(event)
    if(ektLC == 'a'){
        const imgA = document.createElement("IMG")
        // b = '<img src = "'+ ./assets/NO_A.png +'" />'
        imgA.setAttribute("src","./assets/NO_A.png")
        imgA.setAttribute( "height","15px")
        imgA.setAttribute("width","15px")
        imgA.setAttribute("alt", "NO COLOR A")
        //document.getElementById('keydownEventOutput').appendChild(imgA)
        // var b =  '<img src= "./assets/NO_A.png" />'
        // console.log('CONSOLE.LOG B',b)
        document.getElementById('outsideAllBoxes').appendChild(imgA)
        // var content = document.getElementById("exampleFormControlTextarea1")
        // content.value = content.value 
        var PB = document.getElementById("pictureBox")
        console.log(PB)
        PB.appendChild(imgA)
       // var PBD = document.getElementById("pictureBoxDiv")

       //this was trying to insert icons into a textarea:
        // let tA = document.getElementById('textArea1')
        // let imageA = document.createElement('img')
        // imageA.src="./assets/NO_A.png"
        // imageA.setAttribute( "height","15px")
        // imageA.setAttribute("width","15px")
        // imageA.setAttribute("alt", "NO COLOR A")
        // tA.appendChild(imageA)
        // console.log(tA)
        // console.log(imageA)

    //    let tA = document.getElementById('textArea1')
    //    console.log(tA)
    //    let html = `<div>
    //    <img src: ./assets/NO_A.png >
    //    </div>`
    //    console.log(html)
    //    tA.appendChild(html)
        }
    else if(ektLC == 'b'){

        const imgB = document.createElement("IMG")
        imgB.setAttribute("src","./assets/NO_B.png")
        imgB.setAttribute( "height","15px")
        imgB.setAttribute("width","15px")
        imgB.setAttribute("alt", "NO COLOR B")
        document.getElementById('outsideAllBoxes').appendChild(imgB)
        document.getElementById("pictureBox").appendChild(imgB)
    }
    else if(ektLC == 'c'){
    
        const imgC = document.createElement("IMG")
        imgC.setAttribute("src","./assets/NO_C.png")
        imgC.setAttribute( "height","15px")
        imgC.setAttribute("width","15px")
        imgC.setAttribute("alt", "NO COLOR C")
        document.getElementById('outsideAllBoxes').appendChild(imgC)
        document.getElementById("pictureBox").appendChild(imgC)
    }
    else if(ektLC == 'd'){

        const imgD = document.createElement("IMG")
        imgD.setAttribute("src","./assets/NO_D.png")
        imgD.setAttribute( "height","15px")
        imgD.setAttribute("width","15px")
        imgD.setAttribute("alt", "NO COLOR B")
        document.getElementById('outsideAllBoxes').appendChild(imgD)
        document.getElementById("pictureBox").appendChild(imgD)
    }
    else if(ektLC == 'e'){
    
        const imgE = document.createElement("IMG")
        imgE.setAttribute("src","./assets/NO_E.png")
        imgE.setAttribute( "height","15px")
        imgE.setAttribute("width","15px")
        imgE.setAttribute("alt", "NO COLOR C")
        document.getElementById('outsideAllBoxes').appendChild(imgE)
        document.getElementById("pictureBox").appendChild(imgE)
    }
    else if(ektLC == 'f'){

        const imgF = document.createElement("IMG")
        imgF.setAttribute("src","./assets/NO_F.png")
        imgF.setAttribute( "height","15px")
        imgF.setAttribute("width","15px")
        imgF.setAttribute("alt", "NO COLOR B")
        document.getElementById('outsideAllBoxes').appendChild(imgF)
        document.getElementById("pictureBox").appendChild(imgF)
    }
    else if(ektLC == 'g'){
    
        const imgG = document.createElement("IMG")
        imgG.setAttribute("src","./assets/NO_G.png")
        imgG.setAttribute( "height","15px")
        imgG.setAttribute("width","15px")
        imgG.setAttribute("alt", "NO COLOR C")
        document.getElementById('outsideAllBoxes').appendChild(imgG)
        document.getElementById("pictureBox").appendChild(imgG)
    }
    else if(ektLC == 'h'){

        const imgH = document.createElement("IMG")
        imgH.setAttribute("src","./assets/NO_H.png")
        imgH.setAttribute( "height","15px")
        imgH.setAttribute("width","15px")
        imgH.setAttribute("alt", "NO COLOR B")
        document.getElementById('outsideAllBoxes').appendChild(imgH)
        document.getElementById("pictureBox").appendChild(imgH)
    }
    else if(ektLC == 'i'){
    
        const imgI = document.createElement("IMG")
        imgI.setAttribute("src","./assets/NO_I.png")
        imgI.setAttribute( "height","15px")
        imgI.setAttribute("width","15px")
        imgI.setAttribute("alt", "NO COLOR C")
        document.getElementById('outsideAllBoxes').appendChild(imgI)
        document.getElementById("pictureBox").appendChild(imgI)
    }
    else if(ektLC == 'j'){

        const imgJ = document.createElement("IMG")
        imgJ.setAttribute("src","./assets/NO_J.png")
        imgJ.setAttribute( "height","15px")
        imgJ.setAttribute("width","15px")
        imgJ.setAttribute("alt", "NO COLOR B")
        document.getElementById('outsideAllBoxes').appendChild(imgJ)
        document.getElementById("pictureBox").appendChild(imgJ)
    }
    else if(ektLC == 'k'){
    
        const imgK = document.createElement("IMG")
        imgK.setAttribute("src","./assets/NO_K.png")
        imgK.setAttribute( "height","15px")
        imgK.setAttribute("width","15px")
        imgK.setAttribute("alt", "NO COLOR C")
        document.getElementById('outsideAllBoxes').appendChild(imgK)
        document.getElementById("pictureBox").appendChild(imgK)
    }
    else if(ektLC == 'l'){

        const imgL = document.createElement("IMG")
        imgL.setAttribute("src","./assets/NO_L.png")
        imgL.setAttribute( "height","15px")
        imgL.setAttribute("width","15px")
        imgL.setAttribute("alt", "NO COLOR B")
        document.getElementById('outsideAllBoxes').appendChild(imgL)
        document.getElementById("pictureBox").appendChild(imgL)
    }
    else if(ektLC == 'm'){
    
        const imgM = document.createElement("IMG")
        imgM.setAttribute("src","./assets/NO_M.png")
        imgM.setAttribute( "height","15px")
        imgM.setAttribute("width","15px")
        imgM.setAttribute("alt", "NO COLOR C")
        document.getElementById('outsideAllBoxes').appendChild(imgM)
        document.getElementById("pictureBox").appendChild(imgM)
    }
    else if(ektLC == 'n'){

        const imgN = document.createElement("IMG")
        imgN.setAttribute("src","./assets/NO_N.png")
        imgN.setAttribute( "height","15px")
        imgN.setAttribute("width","15px")
        imgN.setAttribute("alt", "NO COLOR B")
        document.getElementById('outsideAllBoxes').appendChild(imgN)
        document.getElementById("pictureBox").appendChild(imgN)
    }
    else if(ektLC == 'o'){
    
        const imgO = document.createElement("IMG")
        imgO.setAttribute("src","./assets/NO_O.png")
        imgO.setAttribute( "height","15px")
        imgO.setAttribute("width","15px")
        imgO.setAttribute("alt", "NO COLOR C")
        document.getElementById('outsideAllBoxes').appendChild(imgO)
        document.getElementById("pictureBox").appendChild(imgO)
    }
    else if(ektLC == 'p'){

        const imgP = document.createElement("IMG")
        imgP.setAttribute("src","./assets/NO_P.png")
        imgP.setAttribute( "height","15px")
        imgP.setAttribute("width","15px")
        imgP.setAttribute("alt", "NO COLOR B")
        document.getElementById('outsideAllBoxes').appendChild(imgP)
        document.getElementById("pictureBox").appendChild(imgP)
    }
    else if(ektLC == 'q'){
    
        const imgQ = document.createElement("IMG")
        imgQ.setAttribute("src","./assets/NO_Q.png")
        imgQ.setAttribute( "height","15px")
        imgQ.setAttribute("width","15px")
        imgQ.setAttribute("alt", "NO COLOR C")
        document.getElementById('outsideAllBoxes').appendChild(imgQ)
        document.getElementById("pictureBox").appendChild(imgQ)
    }
    else if(ektLC == 'r'){

        const imgR = document.createElement("IMG")
        imgR.setAttribute("src","./assets/NO_R.png")
        imgR.setAttribute( "height","15px")
        imgR.setAttribute("width","15px")
        imgR.setAttribute("alt", "NO COLOR B")
        document.getElementById('outsideAllBoxes').appendChild(imgR)
        document.getElementById("pictureBox").appendChild(imgR)
    }
    else if(ektLC == 's'){
    
        const imgS = document.createElement("IMG")
        imgS.setAttribute("src","./assets/NO_S.png")
        imgS.setAttribute( "height","15px")
        imgS.setAttribute("width","15px")
        imgS.setAttribute("alt", "NO COLOR C")
        document.getElementById('outsideAllBoxes').appendChild(imgS)
        document.getElementById("pictureBox").appendChild(imgS)
    }
    else if(ektLC == 't'){

        const imgT = document.createElement("IMG")
        imgT.setAttribute("src","./assets/NO_T.png")
        imgT.setAttribute( "height","15px")
        imgT.setAttribute("width","15px")
        imgT.setAttribute("alt", "NO COLOR B")
        document.getElementById('outsideAllBoxes').appendChild(imgT)
        document.getElementById("pictureBox").appendChild(imgT)
    }
    else if(ektLC == 'u'){
    
        const imgU = document.createElement("IMG")
        imgU.setAttribute("src","./assets/NO_U.png")
        imgU.setAttribute( "height","15px")
        imgU.setAttribute("width","15px")
        imgU.setAttribute("alt", "NO COLOR C")
        document.getElementById('outsideAllBoxes').appendChild(imgU)
        document.getElementById("pictureBox").appendChild(imgU)
    }
    else if(ektLC == 'v'){

        const imgV = document.createElement("IMG")
        imgV.setAttribute("src","./assets/NO_V.png")
        imgV.setAttribute( "height","15px")
        imgV.setAttribute("width","15px")
        imgV.setAttribute("alt", "NO COLOR B")
        document.getElementById('outsideAllBoxes').appendChild(imgV)
        document.getElementById("pictureBox").appendChild(imgV)
    }
    else if(ektLC == 'w'){
    
        const imgW = document.createElement("IMG")
        imgW.setAttribute("src","./assets/NO_W.png")
        imgW.setAttribute( "height","15px")
        imgW.setAttribute("width","15px")
        imgW.setAttribute("alt", "NO COLOR C")
        document.getElementById('outsideAllBoxes').appendChild(imgW)
        document.getElementById("pictureBox").appendChild(imgW)
    }
    else if(ektLC == 'x'){

        const imgX = document.createElement("IMG")
        imgX.setAttribute("src","./assets/NO_X.png")
        imgX.setAttribute( "height","15px")
        imgX.setAttribute("width","15px")
        imgX.setAttribute("alt", "NO COLOR B")
        document.getElementById('outsideAllBoxes').appendChild(imgX)
        document.getElementById("pictureBox").appendChild(imgX)
    }
    else if(ektLC == 'y'){
    
        const imgY = document.createElement("IMG")
        imgY.setAttribute("src","./assets/NO_Y.png")
        imgY.setAttribute( "height","15px")
        imgY.setAttribute("width","15px")
        imgY.setAttribute("alt", "NO COLOR C")
        document.getElementById('outsideAllBoxes').appendChild(imgY)
        document.getElementById("pictureBox").appendChild(imgY)
    }
    else if(ektLC == 'z'){

        const imgZ = document.createElement("IMG")
        imgZ.setAttribute("src","./assets/NO_Z.png")
        imgZ.setAttribute( "height","15px")
        imgZ.setAttribute("width","15px")
        imgZ.setAttribute("alt", "NO COLOR B")
        document.getElementById('outsideAllBoxes').appendChild(imgZ)
        document.getElementById("pictureBox").appendChild(imgZ)
    }
    else if(event.key == '1'){
    
        const img1 = document.createElement("IMG")
        img1.setAttribute("src","./assets/NO_1.png")
        img1.setAttribute( "height","15px")
        img1.setAttribute("width","15px")
        img1.setAttribute("alt", "NO COLOR C")
        document.getElementById('outsideAllBoxes').appendChild(img1)
        document.getElementById("pictureBox").appendChild(img1)
    }
    else if(event.key == '2'){

        const img2 = document.createElement("IMG")
        img2.setAttribute("src","./assets/NO_2.png")
        img2.setAttribute( "height","15px")
        img2.setAttribute("width","15px")
        img2.setAttribute("alt", "NO COLOR B")
        document.getElementById('outsideAllBoxes').appendChild(img2)
        document.getElementById("pictureBox").appendChild(img2)
    }
    else if(event.key == '3'){
    
        const img3 = document.createElement("IMG")
        img3.setAttribute("src","./assets/NO_3.png")
        img3.setAttribute( "height","15px")
        img3.setAttribute("width","15px")
        img3.setAttribute("alt", "NO COLOR C")
        document.getElementById('outsideAllBoxes').appendChild(img3)
        document.getElementById("pictureBox").appendChild(img3)
    }
    else if(event.key == '4'){

        const img4 = document.createElement("IMG")
        img4.setAttribute("src","./assets/NO_4.png")
        img4.setAttribute( "height","15px")
        img4.setAttribute("width","15px")
        img4.setAttribute("alt", "NO COLOR B")
        document.getElementById('outsideAllBoxes').appendChild(img4)
        document.getElementById("pictureBox").appendChild(img4)
    }
    else if(event.key == '5'){
    
        const img5 = document.createElement("IMG")
        img5.setAttribute("src","./assets/NO_5.png")
        img5.setAttribute( "height","15px")
        img5.setAttribute("width","15px")
        img5.setAttribute("alt", "NO COLOR C")
        document.getElementById('outsideAllBoxes').appendChild(img5)
        document.getElementById("pictureBox").appendChild(img5)
    }
    else if(event.key == '6'){

        const img6 = document.createElement("IMG")
        img6.setAttribute("src","./assets/NO_6.png")
        img6.setAttribute( "height","15px")
        img6.setAttribute("width","15px")
        img6.setAttribute("alt", "NO COLOR B")
        document.getElementById('outsideAllBoxes').appendChild(img6)
        document.getElementById("pictureBox").appendChild(img6)
    }
    else if(event.key == '7'){
    
        const img7 = document.createElement("IMG")
        img7.setAttribute("src","./assets/NO_7.png")
        img7.setAttribute( "height","15px")
        img7.setAttribute("width","15px")
        img7.setAttribute("alt", "NO COLOR C")
        document.getElementById('outsideAllBoxes').appendChild(img7)
        document.getElementById("pictureBox").appendChild(img7)
    }
    else if(event.key == '8'){

        const img8 = document.createElement("IMG")
        img8.setAttribute("src","./assets/NO_8.png")
        img8.setAttribute( "height","15px")
        img8.setAttribute("width","15px")
        img8.setAttribute("alt", "NO COLOR B")
        document.getElementById('outsideAllBoxes').appendChild(img8)
        document.getElementById("pictureBox").appendChild(img8)
    }
    else if(event.key == '9'){
    
        const img9 = document.createElement("IMG")
        img9.setAttribute("src","./assets/NO_9.png")
        img9.setAttribute("height","15px")
        img9.setAttribute("width","15px")
        img9.setAttribute("alt", "NO COLOR C")
        document.getElementById('outsideAllBoxes').appendChild(img9)
        document.getElementById("pictureBox").appendChild(img9)
    }
    else if(event.code == 'Space'){
    
        const imgSpaceBtn = document.createElement("IMG")
        imgSpaceBtn.setAttribute("src","./assets/NO_SPACE.png")
        imgSpaceBtn.setAttribute("height","15px")
        imgSpaceBtn.setAttribute("width","15px")
        imgSpaceBtn.setAttribute("alt", "NO COLOR Other")
        document.getElementById('outsideAllBoxes').appendChild(imgSpaceBtn)
        document.getElementById("pictureBox").appendChild(imgSpaceBtn)
    }
    else if(event.key =='#'||
    event.key =='@'||
    event.key =='!'||
    event.key ==','||
    event.key =='.'||
    event.key =='?'||
    event.key =='/'||
    event.key =='!'||
    event.key =='#'||
    event.key =='$'||
    event.key =='%'||
    event.key =='^'||
    event.key =='&'||
    event.key =='*'||
    event.key =='('||
    event.key ==')'||
    event.key =='-'||
    event.key =='+'||
    event.key =='_'||
    event.key =='='||
    event.key =='{'||
    event.key =='}'||
    event.key =='\\'||
    event.key =='|'||
    event.key =='['||
    event.key ==']'||
    event.key ==';'||
    event.key ==':'||
    event.key =='"'||
    event.key =="'"||
    event.key =="<"||
    event.key ==">"||
    event.key =="~"||
    event.key =="`"){
    
        const imgOther = document.createElement("IMG")
        imgOther.setAttribute("src","./assets/NO_Other.png")
        imgOther.setAttribute("height","15px")
        imgOther.setAttribute("width","15px")
        imgOther.setAttribute("alt", "NO COLOR Other")
        document.getElementById('outsideAllBoxes').appendChild(imgOther)
        document.getElementById("pictureBox").appendChild(imgOther)
    }
})





// "form-control" area keydown listener





    // let A = colors.filter(colors => colors.letter ==="A");
    // console.log(A)
    // console.log(A.box)
    // console.log(A.text)
    // console.log(A.letter)

    // const imgDD = document.createElement("IMG")
    // imgDD.setAttribute("src","./assets/NO_D.png")
    // imgDD.setAttribute( "height","50px")
    // imgDD.setAttribute("width","50px")
    // imgDD.setAttribute("alt", "NO COLOR D")

    // let colorBoxB = colors.find(color => color==="B")
    // console.log(colorBoxB)
    // console.log(colorBoxB.box)
    // console.log(colorBoxB.text)
    // console.log(colorBoxB.letter)



    // var colors111 = {
    //     'a': 'A',
    //     'b': img1
    // }


    //fromColors.innerText=colors111.b
    //fromColors=colors111.b

    //    fromColors


    //form.addEventListener('submit', formFun);
    // const formDataObj = {};
    // document.getElementById("fromColors").addEventListener("change", function(e) {
    //         console.log(`Changed`);
    //     let newImg = new Image('350', '480');
    //     newImg.src = e.target.files[0];
    //     newImg.src = URL.createObjectURL(e.target.files[0]);
    //     formDataObj.img = (newImg);
    //     });
    // function formFun(event) {
    //     event.preventDefault();
    //     const myFormData = new FormData(event.target);
       
    //     myFormData.forEach((value, key) => {
    //         formDataObj[key] = value
    //     });
    //     thatArray.push(formDataObj);
    //     console.log(thatArray);
            
    //     const newJsonArray = JSON.stringify(thatArray);

    //     localStorage.setItem('array', newJsonArray);
    //     };

    var customerOrder = {
        drinkName: "latte",
        sugars: 2,
        isReady(isReady){
            if(isReady){
                console.log('your '+this.drinkName+' dink is ready')
            }else{
                console.log('your '+this.drinkName+ ' is NOT ready')
            }
        }


    }
    console.log(customerOrder.drinkName)
    console.log(customerOrder.sugars)
    customerOrder.isReady(false)