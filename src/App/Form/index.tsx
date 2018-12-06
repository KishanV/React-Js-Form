import React = require("react");
import './index.scss';
import {Dropdown} from "./Dropdown";
import {Location} from "./Location";

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
                <div className={'Item Field Search'}>
                    <Dropdown/>
                </div>
                <div className={'Item Field'}>
                    <Location/>
                </div>
                <div className={'Item Field AskButton'}>
                    <div className={'Box'}>
                        <div className={'Icon'}></div>
                        <div className={'Lable'}>Ask for Recs</div>
                    </div>
                </div>
            </div>
        );
    }
}