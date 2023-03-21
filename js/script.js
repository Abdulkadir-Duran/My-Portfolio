	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
     
    // Dark Mode
    let darkmode = document.querySelector('#darkmode');
     
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')){
            darkmode.classList.replace('bx-moon','bx-sun');
            document.body.classList.add('active');
        }else{
            darkmode.classList.replace('bx-sun','bx-moon');
            document.body.classList.remove('active');
        }
    }
    
    $(document).ready(function(){

        $(window).scroll(function(){
    
            
    
              // Scrolling Button Btn
              if(this.scrollY >500){
                $('.scroll-up-btn').addClass("show");
                }else{
                $('.scroll-up-btn').removeClass("show");
                }   
        });
    
       
       
    
        //slide-up script
        $('.scroll-up-btn').click(function(){
            $('html').animate({scrollTop:0});
        });
    
        
     
    
    });

    
    function send(){
        let name = document.getElementById("name");
        let email= document.getElementById("email");
        let subject= document.getElementById("subject");
        let message= document.getElementById("message");
        
        if (name.value != "" && email.value !="" && subject.value != "" && message.value !="" ){
            alert("Message sucessfully sent!")
            return true
        }
        else{
            alert("Please fill out all the fields")
            return false
        }
        
        
    }



