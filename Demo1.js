import {LightningElement} from 'lwc';



import {NavigationMixin} from 'lightning/navigation';



export default class NavigationComponent extends NavigationMixin(LightningElement) {



    NavigatetonewLead() {



   this[NavigationMixin.Navigate]({



       type: 'standard__objectPage',



           attributes: {



           recordId:this.recordId,



           objectApiName: 'Lead',



           actionName: 'new'



       },



    });



 }
