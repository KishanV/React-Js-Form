import React = require("react");
import './Dropdown.scss';
export class Dropdown extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className={'Box'}>
                <input placeholder={"I'am looking for.."}/>
            </div>
        );
    }
}