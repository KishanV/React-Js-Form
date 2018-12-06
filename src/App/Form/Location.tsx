import React = require("react");
import './Location.scss';
export class Location extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className={'Box'}>
                <input placeholder={'Location'}/>
            </div>
        );
    }
}