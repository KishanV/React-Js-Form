import React = require("react");
import './index.scss';
import {Form} from "./Form";

export class Index extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (<div className={'App'}>
            <Form/>
        </div>);
    }
}