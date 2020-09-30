/**
 * @author: Marko Golemovic
 */
window.onscroll = function(){
    scrollFunction()
};

function scrollFunction(){
    if(document.body.scrollTop>30 || document.documentElement.scrollTop > 30 ){

    }
    else{
        document.getElementById("myBtn").style.display="neone";
    }

}



function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}