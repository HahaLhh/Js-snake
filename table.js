Star = {
      init:function(){
        var bigDiv = this.appendEle(this.addStyle(this.creatEle(),
          {w:'900',h:'600',p:'absolute',t:10,l:500}));
        for(var i = 0; i<600/30;i++){
          Star.data.arrayAll[i] = [];
          for(var j = 0; j<900/30; j++){
            div = this.addStyle(this.creatEle(),{w:(!+[1,] ? 30 :28),h:(!+[1,] ? 30 :28),f:'left',border:'1px solid #666'});
            div.setAttribute('number', i*30+j)
            this.appendEle(div,bigDiv)
            Star.data.arrayAll[i][j] = div;
          }
        }
        bigDiv = this.appendEle(this.addStyle(this.creatEle(),
          {w:'900',h:'600',p:'absolute',t:10,l:500}));
  
  
        this.pushEleInSelect(Star.data.arrayAll[9][15],Star.data.arrayAll[9][14],Star.data.arrayAll[9][13])
        this.keyBoard.apply(this,arguments);
        this.appearPoint();
        this.leftGo();
      },
      appearPoint:function(){
        var arrayIn = [];
        var number;
        for(var i = 0; i<600; i++){
          if(!this.hasInArray(Star.data.arrayAll[parseInt(i/30)][i%30].getAttribute('number'),Star.data.arraySelect)){
            arrayIn.push(Star.data.arrayAll[i])
          }
        }
        Star.data.foodNumber = number = parseInt(Math.random()*arrayIn.length);
        this.giveColor(number)
      },
      giveColor:function(number){
        var div = Star.data.arrayAll[parseInt(number/30)][number%30];
        Star.timeInterval.timeB = setInterval(function(){
          if(div.className == 'shanshuo'){
            div.className = ''
            div.style.backgroundColor = '#fff'
          }
          else{
            div.className = 'shanshuo';
            div.style.backgroundColor = '#f00'
          }
        },500)
      },
      disappearColor:function(){
        clearInterval(Star.timeInterval.timeB);
        Star.data.arrayAll[parseInt(Star.data.foodNumber/30)][Star.data.foodNumber%30].style.backgroundColor = '#f00';
      },
      hasInArray:function(number,array){
        for(var i in array){
          if(array[i] instanceof Array){
            if(this.hasInArray(number,array[i])){
              return true;
            }
          }
          if(array[i].getAttribute && array[i].getAttribute('number') == number) return true;
        }
        return false;
      },
      keyBoard:function(){
        var self = this;
        document.onkeydown = function(e){
          e = e? e : window.event;
          switch(e.keyCode){
            case 37: if(Star.keycode == 37 || Star.keycode == 39){return;};  self.leftGo(); break;
            case 38: if(Star.keycode == 38 || Star.keycode == 40){return;};  self.upGo();break;
            case 39: if(Star.keycode == 37 || Star.keycode == 39){return;};  self.rightGo();break;
            case 40: if(Star.keycode == 38 || Star.keycode == 40){return;};  self.downGo();break;
          }
        }
      },
      leftGo:function(){
        var div, number , self = this;
        Star.keycode = 37;
        clearInterval(Star.timeInterval.timeA)
        Star.timeInterval.timeA = setInterval(function(){
          number = Star.data.arraySelect[0].getAttribute('number');
          if(number%30<=0 || self.hasInArray(number-1,Star.data.arraySelect)){
            self.guanle();
          }
          else{
            if(Star.data.foodNumber == number-1){
              self.pushEleInSelect(Star.data.arrayAll[parseInt(Star.data.foodNumber/30)][Star.data.foodNumber%30]);
              self.disappearColor();
              self.appearPoint();
            }
            else{
              div = Star.data.arraySelect.pop();
              div.style.background = '#fff';
  
              self.pushEleInSelect(Star.data.arrayAll[parseInt(number/30)][number%30-1]);
            }
          }
        },Star.timeInterval.speed)
      },
      upGo:function(){
        var div, number , self = this;
        Star.keycode = 38;
        clearInterval(Star.timeInterval.timeA)
        Star.timeInterval.timeA = setInterval(function(){
          number = parseInt(Star.data.arraySelect[0].getAttribute('number'));
  
          if(parseInt(number/30)<=0 || self.hasInArray(number-30,Star.data.arraySelect)){
            self.guanle();
          }
          else{
            if(Star.data.foodNumber == number-30){
              self.pushEleInSelect(Star.data.arrayAll[parseInt(Star.data.foodNumber/30)][Star.data.foodNumber%30]);
              self.disappearColor();
              self.appearPoint();
            }
            else{
              div = Star.data.arraySelect.pop();
              div.style.background = '#fff';
              self.pushEleInSelect(Star.data.arrayAll[parseInt(number/30)-1][number%30]);
            }
          }
        },Star.timeInterval.speed)
      },
      rightGo:function(){
        var div, number , self = this;
        Star.keycode = 39;
        clearInterval(Star.timeInterval.timeA)
        Star.timeInterval.timeA = setInterval(function(){
          number = parseInt(Star.data.arraySelect[0].getAttribute('number'));
          if(parseInt(number%30)>=29 || self.hasInArray(number+1,Star.data.arraySelect)){
            self.guanle();
          }
          else{
            if(Star.data.foodNumber == number+1){
              self.pushEleInSelect(Star.data.arrayAll[parseInt(Star.data.foodNumber/30)][Star.data.foodNumber%30]);
              self.disappearColor();
              self.appearPoint();
            }
            else{
              div = Star.data.arraySelect.pop();
              div.style.background = '#fff';
              self.pushEleInSelect(Star.data.arrayAll[parseInt(number/30)][number%30+1]);
            }
          }
        },Star.timeInterval.speed)
      },
      downGo:function(){
        var div, number , self = this;
        Star.keycode = 40;
        clearInterval(Star.timeInterval.timeA)
        Star.timeInterval.timeA = setInterval(function(){
          number = parseInt(Star.data.arraySelect[0].getAttribute('number'));
          if(parseInt(number/30)>=19 || self.hasInArray(number+30,Star.data.arraySelect)){
            self.guanle();
          }
          else{
            if(Star.data.foodNumber == number+30){
              self.pushEleInSelect(Star.data.arrayAll[parseInt(Star.data.foodNumber/30)][Star.data.foodNumber%30]);
              self.disappearColor();
              self.appearPoint();
            }
            else{
              div = Star.data.arraySelect.pop();
              div.style.background = '#fff';
              self.pushEleInSelect(Star.data.arrayAll[parseInt(number/30)+1][number%30]);
            }
          }
        },Star.timeInterval.speed)
      },
      guanle:function(){
        console.log('撞墙了,总分：' + (Star.data.arraySelect.length-3) * parseInt(1000 / Star.timeInterval.speed));
        location.reload();
      },
      creatEle:function(tag){
        var tagName = tag || 'DIV'
        return document.createElement(tagName)
      },
      appendEle:function(ele,father){
        var father = father || document.body || document.documentElement
        father.appendChild(ele)
        return ele;
      },
      addStyle:function(ele,css){
        for(var i in css){
          switch(i){
            case 'b' : ele.style.background = css[i];       break;
            case 'l' : ele.style.left       = css[i]+'px';  break;
            case 'r' : ele.style.right      = css[i]+'px';  break;
            case 't' : ele.style.top        = css[i]+'px';  break;
            case 'd' : ele.style.down       = css[i]+'px';  break;
            case 'p' : ele.style.position   = css[i];       break;
            case 'w' : ele.style.width      = css[i]+'px';  break;
            case 'h' : ele.style.height     = css[i]+'px';  break;
            case 'f' : ele.style.cssFloat   = css[i];  ele.style.styleFloat   = css[i];     break;
            default  : ele.style[i]         = css[i];       break;
          }
        }
        return ele;
      },
      pushEleInSelect:function(){
        for(var i = 0; i<arguments.length; i++){
          Star.data.arraySelect = [arguments[i]].concat(Star.data.arraySelect)
          this.addStyle(arguments[i],{b:'#f00'})
        }
      }
    }
    Star.data={
      arrayAll : [],
      arraySelect:[],
      newPoint:null,
      foodNumber:0
    }
    Star.timeInterval={
      timeA:null,
      timeB:null
    }
    Star.keycode = 0;
  
  
    window.onload = function(){
      var select = Star.creatEle('select');
      var optionDefault = Star.creatEle('option');
      optionDefault.innerHTML = '请选择关卡'
      Star.appendEle(optionDefault,select)
      Star.addStyle(select,{w:200,h:30,p:'absolute',left:'40%',top:'40%'})
      for(var i = 0 ; i <10 ; i++){
        var option = Star.creatEle('option');
        option.innerHTML = '第' + (i+1) + '关'
        Star.appendEle(option,select);
      }
      Star.appendEle(select)
      select.onchange = function(){
        selectValue = select.options[select.selectedIndex].value || select.options[select.selectedIndex].innerHTML
        var number = selectValue.match(/\d+/)[0]
        Star.timeInterval.speed = parseInt(200/number);
        Star.addStyle(select,{display:'none'});
        Star.init();
      }
    }