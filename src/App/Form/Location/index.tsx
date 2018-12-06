import React = require("react");
import './index.scss';
export class Location extends React.Component<any, any> {
    state : {
        anyLocation:boolean
    } = {
        anyLocation:false
    };

    constructor(props: any) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        if(this.state.anyLocation){
            this.setState({
                anyLocation:false
            })
        } else {
            this.setState({
                anyLocation:true
            })
        }
    }

    render() {
        return (
            <div className={'Box'}>
                <input placeholder={'Location'}/>
                <div onClick={this.onClick} className={'Toggle ' + (this.state.anyLocation ? 'True' : '')}>
                    <div className={'Lable'}>{'Any location'}</div>
                    <div className={'Control'}>
                        <div className={'Button'}></div>
                    </div>
                </div>
            </div>
        );
    }
}