import { LightningElement, wire } from 'lwc';
import getListOfFirsts from '@salesforce/apex/TableTestController.getListOfFirsts';

const columns = [
    { label: 'First', fieldName: 'firstName' },
    { label: 'Second', fieldName: 'secondName' },
    { label: 'Third', fieldName: 'thirdName' },
];

export default class tableTest extends LightningElement {
    
    columns = columns;
    limit = 10;
    offset = 0;
    firsts = [];
    loadStatus;
    @wire(getListOfFirsts, { maximum: '$limit', offset:'$offset' }) 
    wiredData({error, data}){
        if(data){
            this.firsts = this.firsts.concat(data);
            this.loadStatus = 'Loaded';
        } else if (error){
            this.loadStatus = error.body.message;
        }
    }


    loadMoreData(event) {
        //Display a spinner to signal that data is being loaded
        let table = event.target;
        table.isLoading = true;
        //Display "Loading" when more data is being loaded
        this.loadStatus = 'Loading';
        this.offset += this.limit + 1;
        getListOfFirsts({ maximum: this.limit, offset:this.offset }).then((data) => {
            if (data.length == 0) {
                table.enableInfiniteLoading = false;
                this.loadStatus = 'No more data to load';
            } else {
                const currentData = this.firsts;
                //Appends new data to the end of the table
                this.firsts = currentData.concat(data);
                this.loadStatus = 'Loaded';
            }
            table.isLoading = false;
        });
    }
}