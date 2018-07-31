
function delegate(el, evt, sel, handler) {
    el.addEventListener(evt, function(event) {
        var t = event.target;
        while (t && t !== this) {
            if (t.matches(sel)) {
                handler.call(t, event);
            }
            t = t.parentNode;
        }
    });
}




function initiateTextFields() {
   
        // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
        if (!String.prototype.trim) {
          (function() {
            // Make sure we trim BOM and NBSP
            var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            String.prototype.trim = function() {
              return this.replace(rtrim, '');
            };
          })();
        }

        [].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
          // in case the input is already filled..
          if( inputEl.value.trim() !== '' ) {
            classie.add( inputEl.parentNode, 'input--filled' );
          }

          // events:
          inputEl.addEventListener( 'focus', onInputFocus );
          inputEl.addEventListener( 'blur', onInputBlur );
        } );

        function onInputFocus( ev ) {
          classie.add( ev.target.parentNode, 'input--filled' );
        }

        function onInputBlur( ev ) {
            
          if( ev.target.value.trim() === '' ) {
            classie.remove( ev.target.parentNode, 'input--filled' );
          }
        }
      }

initiateTextFields();

function makeSelTextReadOnly(){
    var selTextBoxes = document.getElementsByClassName("pseudoSelectText");
    for(var i=0;i<selTextBoxes.length;i++)
    {   
        selTextBoxes[i].readOnly = true;
    }
}


delegate(document, "click", ".deleteGuestRowIcon", function(event) {    
    this.parentNode.remove();
   initCustomScrollBars('#guestsDetailsContainerWithFixedHeight','#guestsDetailsContainerWithFixedHeight .Inner_1','#guestsDetailsContainerWithFixedHeight .Inner_2'); 

   // document.getElementsByClassName("Inner_1")[0].scrollTop=9999;

    if(document.getElementById("duplicateRowsCont").childNodes.length-1==1)
{
    document.getElementsByClassName("scroller")[0].remove();
    var domEle=document.getElementById("guestsDetailsContainerWithFixedHeight")
    domEle.className=domEle.className.replace(/showScroll/g,"").trim();
}

});

delegate(document, "click", ".wiproSowLogoSmall", function(event) {
    document.getElementById ("bgvid").play();
});


delegate(document, "click", "#registerNowButton, #addGuestsButn, #addMoreGuestsButn, .submitRegisterationButn", function(event) {
    initiateTextFields();
    makeSelTextReadOnly();
});

delegate(document, "click", ".distance", function(event) {    
    var c = this.parentNode.childNodes;
    for(var i=0;i<c.length;i++)
    {   
        c[i].className=c[i].className.replace("active","");
    }
        this.className+=" "+"active";
});

delegate(document, "click", ".selSizeBox", function(event) {    
    var c = this.parentNode.parentNode.childNodes;    
    for(var i=0;i<c.length;i++)
    {            
        c[i].childNodes[0].childNodes[0].className=c[i].childNodes[0].childNodes[0].className.replace("checked","");
    }
    this.childNodes[0].className+=" "+"checked";
});

delegate(document, "click", ".drpDwnIcn, .pseudoSelectText", function(event) {    
    var c = this.parentNode;
    c.getElementsByClassName("pseudoSelectText")[0].focus();
    var dropOptsUL = document.getElementsByClassName("dropOptsUL");
    for(var i=0;i<dropOptsUL.length;i++)
    {   
        dropOptsUL[i].style.display = 'none';
    }    
    c.nextSibling.style.display = 'block';
});

delegate(document, "click", ".dropOptsLI", function(event) {    
    
    var one = this.getAttribute('data-name');
    this.parentNode.previousSibling.childNodes[0].value = one;
    this.parentNode.previousSibling.childNodes[0].focus();           
    this.parentNode.style.display = 'none';
    this.parentNode.previousSibling.childNodes[0].blur();
});
            
delegate(document, "click", ".burgerMenuIcon", function(event) {    
    var targetCont = this.nextSibling;
    targetCont.className+=" "+"active";
});

delegate(document, "click", ".closeMenuPanel", function(event) {
    var targetCont = this.parentNode.parentNode;
    targetCont.className="menuBackground";
});


function initCustomScrollBars(scrollCont1, scrollInner1, scrollInner2) {
    var scrollContainer = document.querySelector(scrollCont1),
        scrollContentWrapper = document.querySelector(scrollInner1),
        scrollContent = document.querySelector(scrollInner2),
        contentPosition = 0,
        scrollerBeingDragged = false,
        scroller,
        topPosition,
        scrollerHeight;

    function calculateScrollerHeight() {
        // *Calculation of how tall scroller should be
        var visibleRatio = scrollContainer.offsetHeight / scrollContentWrapper.scrollHeight;
        return visibleRatio * scrollContainer.offsetHeight;
    }

    function moveScroller(evt) {
        // Move Scroll bar to top offset
        var scrollPercentage = evt.target.scrollTop / scrollContentWrapper.scrollHeight;
        topPosition = scrollPercentage * (scrollContainer.offsetHeight - 5); // 5px arbitrary offset so scroll bar doesn't move too far beyond content wrapper bounding box
        scroller.style.top = topPosition + 'px';
    }

    function startDrag(evt) {
        normalizedPosition = evt.pageY;
        contentPosition = scrollContentWrapper.scrollTop;
        scrollerBeingDragged = true;
    }

    function stopDrag(evt) {
        scrollerBeingDragged = false;
    }

    function scrollBarScroll(evt) {

        if (scrollerBeingDragged === true) {
            var mouseDifferential = evt.pageY - normalizedPosition;
            var scrollEquivalent = mouseDifferential * (scrollContentWrapper.scrollHeight / scrollContainer.offsetHeight);
            scrollContentWrapper.scrollTop = contentPosition + scrollEquivalent;
        }
    }

    function createScroller() {
        // *Creates scroller element and appends to '.scrollable' div
        // create scroller element

        if(document.querySelector(scrollCont1+" .scroller")==null){
             scroller = document.createElement("div");
             scrollContainer.appendChild(scroller);
        }
        else
        {
            scroller = document.querySelector(scrollCont1+" .scroller");
        }
        scroller.className = 'scroller';

        // determine how big scroller should be based on content
        scrollerHeight = calculateScrollerHeight();
        
        if (scrollerHeight / scrollContainer.offsetHeight < 1){
            // *If there is a need to have scroll bar based on content size
            scroller.style.height = scrollerHeight + 'px';

            // append scroller to scrollContainer div
            
            
            // show scroll path divot
            if(scrollContainer.className.indexOf("showScroll")==-1)
            scrollContainer.className += ' showScroll';
            
            // attach related draggable listeners
            scroller.addEventListener('mousedown', startDrag);
            window.addEventListener('mouseup', stopDrag);
            window.addEventListener('mousemove', scrollBarScroll)
        }
        
    }


createScroller();


    


    // *** Listeners ***
    scrollContentWrapper.addEventListener('scroll', moveScroller);
}

function customAnimate(){
    var prevVal=document.getElementsByClassName("Inner_1")[0].scrollTop++;
    var vvInterval=setInterval(function(){

    if(prevVal!=document.getElementsByClassName("Inner_1")[0].scrollTop)
    {
    prevVal=document.getElementsByClassName("Inner_1")[0].scrollTop;

    document.getElementsByClassName("Inner_1")[0].scrollTop+=document.getElementsByClassName("Inner_1")[0].getBoundingClientRect().height/10;

    }
    else
    {
    clearInterval(vvInterval);
    }

    },0);
}


var outsideClick_CallerVAR=false;

function outsideClick_Caller(){
    if(outsideClick_CallerVAR==false)
    {
        outsideClick_CallerVAR=true;
        outsideClick();
    }
}



function outsideClick(){
    document.body.addEventListener("click",function(event){
        var ele=event.srcElement||event.toElement||event.target;

        if(ele.className!="dropOptsUL"&&ele.className!="dropOptsLI"){
        var dropOptsUL = document.getElementsByClassName("dropOptsUL");
            for(var i=0;i<dropOptsUL.length;i++)
            {   
                dropOptsUL[i].style.display = 'none';
            }  
        }
    });
}

outsideClick_Caller();

var PHOTO_SET=[{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/15.png',lightboxImage:{src:'images/16.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/15.png',lightboxImage:{src:'images/16.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/15.png',lightboxImage:{src:'images/16.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/15.png',lightboxImage:{src:'images/16.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/15.png',lightboxImage:{src:'images/16.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/15.png',lightboxImage:{src:'images/16.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/15.png',lightboxImage:{src:'images/16.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/15.png',lightboxImage:{src:'images/16.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/15.png',lightboxImage:{src:'images/16.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/15.png',lightboxImage:{src:'images/16.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/15.png',lightboxImage:{src:'images/16.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/15.png',lightboxImage:{src:'images/16.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/15.png',lightboxImage:{src:'images/16.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/15.png',lightboxImage:{src:'images/16.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/15.png',lightboxImage:{src:'images/16.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/15.png',lightboxImage:{src:'images/16.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/15.png',lightboxImage:{src:'images/16.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/15.png',lightboxImage:{src:'images/16.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/15.png',lightboxImage:{src:'images/16.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/15.png',lightboxImage:{src:'images/16.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}}];
var PHOTO_SET1=[{src:'images/15.png',lightboxImage:{src:'images/16.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}},{src:'images/7B.png',lightboxImage:{src:'images/8.png'}}];

function initializePhotoGalaryWithLightbox(objOfDetail)
{
    var imageSets=objOfDetail.photoSet;
    var chArr=document.querySelector(objOfDetail.targetIdofElement).children;
    


   while(chArr.length!=0)
    {
        chArr[0].remove();
    }
    
    for(var i=0;i<imageSets.length;i++)
    {
        var imgEle=document.createElement("IMG");
        imgEle.setAttribute("src",imageSets[i].src);
        imgEle.setAttribute("data-lighboxsrc",imageSets[i].lightboxImage.src);
        imgEle.className="galThumbImg";
        document.querySelector(objOfDetail.targetIdofElement).appendChild(imgEle);
    }
}


delegate(document, "click", ".galThumbImg", function(event) {

    var idx=0;
    document.getElementsByClassName("lightBox")[0].setAttribute("data-selectedgalleryaddr",this.parentNode.parentNode.parentNode.parentNode.getAttribute("id"));

    for(var i=0;i<this.parentNode.children.length;i++)
    {
        if(this.parentNode.children[i]==this)
        idx=i;
    }

   var imgEle=document.getElementsByClassName("galExpandedImg")[0];
   var bigImgSrc = this.getAttribute("data-lighboxsrc");
    imgEle.setAttribute("src",bigImgSrc);
    imgEle.className="galExpandedImg";
    imgEle.setAttribute("data-imgindex",idx);
    document.body.className+=" "+"galPageShown";

    document.getElementsByClassName("lightBoxNavButtonRight")[0].style.display="block";  
    document.getElementsByClassName("lightBoxNavButtonLeft")[0].style.display="block";  

    if(idx==0){
        document.getElementsByClassName("lightBoxNavButtonRight")[0].style.display="block";  
        document.getElementsByClassName("lightBoxNavButtonLeft")[0].style.display="none"; 
    }
    else if (idx==this.parentNode.children.length-1){
        document.getElementsByClassName("lightBoxNavButtonRight")[0].style.display="none";  
        document.getElementsByClassName("lightBoxNavButtonLeft")[0].style.display="block"; 
    }

    document.addEventListener("keydown",performKeyPressForGallery);


});

delegate(document, "click", ".closeLightBoxIcon", function(event) {      
    //document.getElementsByClassName("lightBox")[0].style.display="none";    
    document.body.className=document.body.className.replace(/galPageShown/g,"");
    document.removeEventListener("keydown",performKeyPressForGallery);
});

delegate(document, "click", ".lightBoxNavButtonRight", function(event) {  
    event.preventDefault();
   var curIdx = document.getElementsByClassName("galExpandedImg")[0].getAttribute("data-imgindex");

    if(curIdx+1==document.querySelector("#"+document.querySelector(".lightBox").getAttribute("data-selectedgalleryaddr")+" .gal_dyn_pag_inner").children.length){
        document.getElementsByClassName("lightBoxNavButtonRight")[0].style.display="none";  
        document.getElementsByClassName("lightBoxNavButtonLeft")[0].style.display="block"; 
    }
    else
    {
        document.getElementsByClassName("lightBoxNavButtonRight")[0].style.display="block"; 
         document.getElementsByClassName("lightBoxNavButtonLeft")[0].style.display="block";  
    }
    if(curIdx<document.querySelector("#"+document.querySelector(".lightBox").getAttribute("data-selectedgalleryaddr")+" .gal_dyn_pag_inner").children.length-1){
        document.querySelector("#"+document.querySelector(".lightBox").getAttribute("data-selectedgalleryaddr")+" .gal_dyn_pag_inner").children[parseInt(curIdx)+1].click();
       
    }
});

delegate(document, "click", ".lightBoxNavButtonLeft", function(event) { 
event.preventDefault(); 
    var curIdx = document.getElementsByClassName("galExpandedImg")[0].getAttribute("data-imgindex");


    if(curIdx-1==0){
        document.getElementsByClassName("lightBoxNavButtonLeft")[0].style.display="none";
         document.getElementsByClassName("lightBoxNavButtonRight")[0].style.display="block";   
    }
    else
    {
        document.getElementsByClassName("lightBoxNavButtonLeft")[0].style.display="block";  
        document.getElementsByClassName("lightBoxNavButtonRight")[0].style.display="block";  
    }

    if(curIdx-1>=0){
        document.querySelector("#"+document.querySelector(".lightBox").getAttribute("data-selectedgalleryaddr")+" .gal_dyn_pag_inner").children[parseInt(curIdx)-1].click();
       
    }
});


function performKeyPressForGallery(event){
    if(event.keyCode==37){

if(document.getElementsByClassName("lightBoxNavButtonLeft")[0].style.display!="none"){
   document.getElementsByClassName("lightBoxNavButtonLeft")[0].click(); 
}

}
if(event.keyCode==39){
    if(document.getElementsByClassName("lightBoxNavButtonRight")[0].style.display!="none"){
document.getElementsByClassName("lightBoxNavButtonRight")[0].click();
}
}
}



delegate(document, "click", ".maintabheader", function(event) {
    for(var i=0;i<this.parentNode.children.length;i++){
      this.parentNode.children[i].className= this.parentNode.children[i].className.replace(/maintabheaderActive/g,"");
    }
    this.className+=" maintabheaderActive";
    document.getElementsByClassName("mainTabsBodyContainer")[0].setAttribute("data-mainbodyindex",this.getAttribute("data-maintabindex"));
    initCustomScrollBars('#mainGalleryContainer','#mainGalleryContainer .Inner_1','#mainGalleryContainer .Inner_2'); 
   initCustomScrollBars('#mainGalleryContainerNew','#mainGalleryContainerNew .Inner_1','#mainGalleryContainerNew .Inner_2'); 
      
});


delegate(document, "click", ".subtabheader", function(event) {
   for(var i=0;i<this.parentNode.children.length;i++){
      this.parentNode.children[i].className= this.parentNode.children[i].className.replace(/subtabheaderActive/g,"");
      document.getElementsByClassName("subTabsBodyContainer")[0].children[i].style.display="none";
      if(this.parentNode.children[i]==this){
         this.className+=" subtabheaderActive";
         document.getElementsByClassName("subTabsBodyContainer")[0].children[i].style.display="block";
      }
    }
   initCustomScrollBars('#mainGalleryContainer','#mainGalleryContainer .Inner_1','#mainGalleryContainer .Inner_2'); 
   initCustomScrollBars('#mainGalleryContainerNew','#mainGalleryContainerNew .Inner_1','#mainGalleryContainerNew .Inner_2'); 

});

delegate(document, "click", ".declarationConfirmButns2", function(event) {
  if(document.getElementsByClassName("acceptDeclarationChk")[0].checked){
    document.body.setAttribute("data-popbodyindex","2");
  }
});




delegate(document, "click", ".hasSubmenu", function(event) {  
  var ele = document.getElementById("collapsedSubMenu");
  if(ele.className.indexOf("expanded")==-1)
    {
      this.className+=" "+"active";
      ele.className+=" "+"expanded";
    }
    else
    {
      ele.className=ele.className.replace(/expanded/g,"");
      this.className=this.className.replace(/active/g,"");
    }

});

delegate(document, "click", "a", function(event) {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
});

