import { Fragment } from "react";
import MetaData from '../layouts/MetaData'
import {MDBDataTable} from 'mdbreact'

export default function UserOrders(){
 const setOrders = () => {
    const data = {
        columns: [
            {
                lablel: "Order ID",
                field: 'id',
                sort: "asc",

            },
            {
                lablel: "Number of Items",
                field: 'numOfItems',
                sort: "asc",
                
            },
            {
                lablel: "Amount",
                field: 'amount',
                sort: "asc",
                
            },
            {
                lablel: "Status",
                field: 'status',
                sort: "asc",
                
            },
            {
                lablel: "Actions",
                field: 'actions',
                sort: "asc",
                
            }
        ],
        rows:[]
    }
 }

    return(
        <Fragment>
        <MetaData title="My Orders" />
        <h1 className="mt-5"> My Orders</h1>
        <MDBDataTable 
        className="px-3"
        bordered
        striped
        hover
        data={setOrders}
        />
        </Fragment>
    
    )
}