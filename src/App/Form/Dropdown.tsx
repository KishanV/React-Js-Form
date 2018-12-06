import React = require("react");
import './Dropdown.scss';

export class Dropdown extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.onKeyUp = this.onKeyUp.bind(this);
    }

    state:{
        value:string
    } = {
        value:''
    }

    getList(): React.ReactNode[] {
        const strList = [
            'Hairdresser',
            'Plumber',
            'UX Designer',
            'Frontend Developer',
            'Digital Marketer',
            'Babysitter',
        ];
        const elmList: React.ReactNode[] = [];
        const value = this.state.value.toLocaleLowerCase().trim();
        if(this.state.value.trim().length != 0){
            for (let index = 0; index < strList.length; index++) {
                const currentString = strList[index].toLocaleLowerCase().trim();
                console.log(value,currentString);
                if(currentString.startsWith(value)){
                    elmList.push(
                        <div key={index} className={'Item'}>{strList[index]}</div>
                    );
                }
            }
        }

        return elmList;
    }

    onKeyUp(e:React.KeyboardEvent) {
        const input = e.target as HTMLInputElement;
        this.setState({
            value:input.value
        })
    }

    render() {
        return (
            <div className={'Box Dropdown'}>
                <input onKeyUp={this.onKeyUp} placeholder={"I'am looking for.."}/>
                <div className={'List'}>
                    {this.getList()}
                </div>
            </div>
        );
    }
}