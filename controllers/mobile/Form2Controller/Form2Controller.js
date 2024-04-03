define({

  // Define your controller code here
  onNavigate: function () {
    this.preShow();
  },

  preShow: function () {
    this.loadSegment();
  },

  loadSegment: function () {
   

    var rowData = [
      { "lblName": { "text": "manny" }, "lblReg": { "text": "12" }, "btnRemove": { "onClick": this.removeRow.bind(this) } },
      { "lblName": { "text": "manny" }, "lblReg": { "text": "122"},"btnRemove": { "onClick": this.removeRow.bind(this) } },
      { "lblName": { "text": "manny" }, "lblReg": { "text": "123"},"btnRemove": { "onClick": this.removeRow.bind(this) } },
      { "lblName": { "text": "manny" }, "lblReg": { "text": "124"},"btnRemove": { "onClick": this.removeRow.bind(this) } },
      { "lblName": { "text": "manny" }, "lblReg": { "text": "125"},"btnRemove": { "onClick": this.removeRow.bind(this) } },
      { "lblName": { "text": "manny" }, "lblReg": { "text": "126"},"btnRemove": { "onClick": this.removeRow.bind(this) } },
      { "lblName": { "text": "manny" }, "lblReg": { "text": "127"},"btnRemove": { "onClick": this.removeRow.bind(this) } }
    ];
	for(var i=0;i<rowData.length;i++){
      rowData[i].lblSno=i;
    }
    
    this.dataMapSegment(rowData);
    
  },
  dataMapSegment: function(rowData){
     var dataMap = {
      "flxTemplate": "flxTemplate",
      "lblSno": "lblSno",
      "lblName": "lblName",
      "lblReg": "lblReg",
      "btnRemove": "btnRemove"
    };
    this.view.segMain.widgetDataMap = dataMap;
    this.view.segMain.setData(rowData);
  },

  removeRow: function (widRef, sectionIndex, rowIndex) {
    
  var datainSegment= this.view.segMain.data;
    alert(datainSegment);
    datainSegment.splice(sectionIndex.rowIndex,1);
    for(var i=0;i<datainSegment.length;i++){
      datainSegment[i].lblSno=i;
    }
    this.dataMapSegment(datainSegment);
    
  }

});
