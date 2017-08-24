import React, {Component} from 'react';
import Form from "./react-components/Form"
import DataInput from "./react-components/DataInput"



export default class App extends Component {
    /* As DataInput are not direct children of form to maintain ui a layer is used. context is used to pass form functions to dataInput */
    render() {
        return <Form>
            <div className="form-container">
                <DataInput 
                name="name"
                label="Name"
                active={(props)=><input   {...props}  autoFocus/>}
                render={({value,onClick})=>{return <div onClick={onClick}>{value}</div>}}
                />

                <DataInput 
                    name="email"
                    label="Email"
                    active={(props)=><input   {...props}  autoFocus/>}
                    render={({value,onClick})=>{return <div onClick={onClick}>{value}</div>}}
                />

                <DataInput 
                    name="mob_no"
                    label="Mobile No"
                    active={(props)=><input   {...props}  autoFocus/>}
                    render={({value,onClick})=>{return <div onClick={onClick}>{value}</div>}}
                />

            </div>

        </Form>
    }
}

