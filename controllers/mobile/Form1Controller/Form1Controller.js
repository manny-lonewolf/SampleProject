define({

  onNavigate: function() {
    this.preShow();
  },

  preShow: function() {
    this.view.flxRB.setVisibility(false);
    this.view.flxAccountCB.setVisibility(false);
    this.view.flxCBCurrency.setVisibility(false);
    this.view.flxContent.setVisibility(false);
    this.view.flxRB1.onTouchStart=this.circle1.bind(this);
    this.view.flxRB2.onTouchStart=this.circle2.bind(this);
    this.view.btnAF.onClick = this.setContentVisible.bind(this);
    this.view.flxBtnDownArrow.onTouchStart = this.setSortByVisible.bind(this);
    this.view.flxBtnArrow2.onTouchStart = this.setAccountTypeVisible.bind(this);
    this.view.flxBtnArrow3.onTouchStart = this.setCurrencyVisible.bind(this);
    this.view.flx3.onTouchStart=this.box1.bind(this);
    this.view.flx4.onTouchStart=this.box2.bind(this);
    this.view.flx5.onTouchStart=this.box3.bind(this);
    this.view.flx5.onTouchStart=this.box4.bind(this);
},
	circle1: function(){
    this.view.imgRB1.setVisibility(true);
    this.view.imgRB2.setVisibility(false);
  },
  circle2: function(){
    this.view.imgRB1.setVisibility(false);
    this.view.imgRB2.setVisibility(true);
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
  box4: function(){
    this.view.img5.isVisible = ! this.view.img5.isVisible ;
  },
  reset: function(){
    this.view.img3.setVisibility(false);
    this.view.img4.setVisibility(false);
    this.view.img5.setVisibility(false);
  },
  
  setContentVisible: function() {
    this.view.flxContent.isVisible = !this.view.flxContent.isVisible;
  },

  setSortByVisible: function() {
    this.view.flxRB.isVisible = !this.view.flxRB.isVisible;
  },

  setAccountTypeVisible: function() {
    this.view.flxAccountCB.isVisible = !this.view.flxAccountCB.isVisible;
  },

  setCurrencyVisible: function() {
    this.view.flxCBCurrency.isVisible = !this.view.flxCBCurrency.isVisible;
  }
});
