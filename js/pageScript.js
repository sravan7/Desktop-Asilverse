
          let sliderBtns = document.getElementsByClassName("slider-btn");
          let btns = Array.from(sliderBtns)
          let caroselContent = document.getElementsByClassName("carosel-content");
          let content = Array.from(caroselContent);
          let test = (i) =>
          {
            //console.log(i)
            let elem = content[i]
            if(elem.classList.contains("carosel-none"))
              {
                //console.log("if fn")
               const newEl = content.filter(item =>  item!==elem).map(item => item.classList.add("carosel-none"))
                elem.classList.remove("carosel-none");
              }
          }
          for (let elem of sliderBtns)
          {
            elem.addEventListener('click',(e) => {
              //elem.classList.toggle("slider-active");
              
              if(elem.classList.contains("slider-active"))
              {
                //console.log("if")
               const newEl = btns.filter(item =>  item!==elem).map(item => item.classList.remove("slider-active"))
                //console.log(newEl);
              }
              else{
                //console.log("else")
                test(btns.indexOf(elem))
                const newEl = btns.filter(item =>  item!==elem).map(item => item.classList.remove("slider-active"))
                elem.classList.add("slider-active");
              }
                //console.log(e,elem.classList.contains("slider-active"))
            })
          }
          //console.log(sliderBtns);
          let width = window.innerWidth;
          let height = window.innerHeight;
          document.body.onresize = function(){
            width = window.innerWidth;
            height = window.innerHeight;
            window.screenAlert
            //console.log("reszed")
          }
        /*let scrollCount =0;
        let scroll = window.scrollY;
        window.onscroll = function(event){
          //console.log(document.documentElement.scrollTop, document.body.scrollTop)
          //console.log("some one scrolled", event)
          let scrollNow = window.scrollY
          if(scrollNow>scroll){
            //console.log("down")
            if(scrollCount<4){
              scrollCount++
              test(scrollCount)
            }
            else{
              scrollCount=4
              test(scrollCount)
            }
            
          }
          else{
            console.log("up")
            if(scrollCount>0){
              scrollCount--
              test(scrollCount)
            }
          }
          scroll = scrollNow;
        }
        */
        console.log(width,height);
        let screenAlert= (function(){
          if(width<1536 && height<762) {
          alert("Hey sorry, Hasn't Designed to your screen Size")
        }
        else if(width<600 && width>320){
          window.location.replace("changeher")
        } 
      }())
        