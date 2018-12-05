import React = require("react");
import './index.scss';

export class Form extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className={'Form'}>
                <div className={'Item Header'}>
                    <div className={'UserImg'}></div>
                    <div className={'Message'}>
                        Ask friends to recommend.<br/>
                        Free. With no middleman.
                    </div>
                </div>
            </div>
        );
    }
}