function verificar(){
var data=new Date()
var ano = data.getFullYear()
var fano= document.getElementById('txtano')
var res= document.querySelector('div#res')
if(fano.value.length==0||Number (fano.value > ano)){
window.alert('verifique os dados e tente novamente')
}else{
   var fsex=document.getElementsByName('radsex') 
   var idade= ano-Number(fano.value)
   var genero=""
   var img =document.createElement('img')
   img.setAttribute('id', 'foto')
   if(fsex[0].checked){
       genero='Homem'
       if(idade>= 0 && idade <10 ){
           img.setAttribute('src', 'GAROTO.png')
       } else if(idade <21 ){
           img.setAttribute('src', 'MENINO.png')
       }else if(idade  <55){
        img.setAttribute('src', 'ADULTO.png')
    
       } else {
        img.setAttribute('src', 'IDOSO.png')
        
    }
    ////////////////////////////////////////////////////
   }else if(fsex[1].checked){
       genero='Mulher'
       if(idade>= 0 && idade <10 ){
        img.setAttribute('src', 'GAROTA.png')
    }
    else if(idade<21 ){
        img.setAttribute('src', 'MENINA.png')
    }
    else if(idade<55){
        img.setAttribute('src', 'ADULTA.png')
    }
    else {
        img.setAttribute('src', 'IDOSA.png')
    }
   }
   res.style.textallign = 'center'
   res.innerHTML=` detectamos ${genero} com ${idade} anos.`
   res.appendChild(img)
}
}