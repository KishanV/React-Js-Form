import React = require("react");
import './Dropdown.scss';

export class Dropdown extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.onKeyUp = this.onKeyUp.bind(this);
    }

    state: {
        value: string,
        sugetions: string[],
        movement: boolean
    } = {
        value: '',
        sugetions: [],
        movement: false
    };

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
        if (this.state.movement === true) {
            for (let index = 0; index < strList.length; index++) {
                const currentString = strList[index].toLocaleLowerCase().trim();
                console.log(value, currentString);
                if (currentString.startsWith(value) || value.length === 0) {
                    elmList.push(
                        <div key={index} className={'Item'}>{strList[index]}</div>
                    );
                }
            }
        }
        return elmList;
    }

    componentDidMount() {
        let isDown = false;
        const self = this;
        document.addEventListener('mouseup', () => {
            if (!isDown) {
                self.setState({
                    movement: false
                });
            }
        });
        document.addEventListener('mousedown', () => {
            isDown = false;
        });
        if (this.refs.rootElm) {
            const rootElm: HTMLElement = this.refs.rootElm as HTMLElement;
            rootElm.addEventListener('mousedown', () => {
                isDown = true;
            });
        }
    }

    onKeyUp(e: React.KeyboardEvent) {
        const input = e.target as HTMLInputElement;
        this.setState({
            value: input.value,
            movement: true
        });
        console.log(this.refs);
    }

    render() {
        return (
            <div ref={'rootElm'} className={'Box Dropdown'}>
                <input onKeyUp={this.onKeyUp} placeholder={"I'am looking for.."}/>
                <div className={'List'}>
                    {this.getList()}
                </div>
            </div>
        );
    }
}