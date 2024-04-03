define({ 
onNavigate: function(){
  this.preShow();
},
  preShow: function(){   
   this.view.img2.setVisibility(false);
   this.view.img1.setVisibility(false);
   this.view.img3.setVisibility(false);
    this.view.img4.setVisibility(false);
    this.view.img5.setVisibility(false);
   this.view.flx11.onTouchStart=this.circle1.bind(this);
   this.view.flx2.onTouchStart=this.circle2.bind(this);
    this.view.flx3.onTouchStart=this.box1.bind(this);
    this.view.flx4.onTouchStart=this.box2.bind(this);
    this.view.flx5.onTouchStart=this.box3.bind(this);

    this.view.btn1.onClick=this.reset.bind(this);
  },
  box1: function(){
    this.view.img3.isVisible = ! this.view.img3.isVisible ;
  },
  box2: function(){
    this.view.img4.isVisible = ! this.view.img4.isVisible ;
  },
  box3: function(){
    this.view.img5.isVisible = ! this.view.img5.isVisible ;
  },
  reset: function(){
    this.view.img3.setVisibility(false);
    this.view.img4.setVisibility(false);
    this.view.img5.setVisibility(false);
  },
  circle1: function(){
    this.view.img1.setVisibility(true);
    this.view.img2.setVisibility(false);
  },
  circle2: function(){
    this.view.img1.setVisibility(false);
    this.view.img2.setVisibility(true);
  }

 });