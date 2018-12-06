import React = require("react");
import './Dropdown.scss';

export class Dropdown extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    state: {
        value: string,
        suggestionList: string[],
        movement: boolean,
        selIndex: number
    } = {
        value: '',
        suggestionList: [],
        movement: true,
        selIndex: 0
    };

    strList: string[] = [
        'Hairdresser',
        'Plumber',
        'UX Designer',
        'UI Developer',
        'Frontend Developer',
        'Digital Marketer',
        'Babysitter',
    ];

    getList(): React.ReactNode | undefined {
        const elmList: React.ReactNode[] = [];
        const self = this;
        const value = this.state.value.toLocaleLowerCase().trim();
        if (this.state.movement === true) {
            for (let index = 0; index < this.state.suggestionList.length; index++) {
                const currentString = this.state.suggestionList[index];
                elmList.push(
                    <div onClick={() => {
                        if (self.refs.input) {
                            const input: HTMLInputElement = this.refs.input as HTMLInputElement;
                            input.value = currentString;
                            self.setState({
                                value: currentString,
                                movement: false
                            });
                        }
                    }} key={index}
                         className={'Item' + (elmList.length === this.state.selIndex ? ' Sel' : '')}>{currentString}</div>
                );
            }
        }
        if (elmList.length !== 0) {
            return <div className={'List'}>{elmList}</div>
        }
    }

    componentDidMount() {
        let isDown = false;
        const self = this;
        if (this.refs.rootElm) {
            const rootElm: HTMLElement = this.refs.rootElm as HTMLElement;
            rootElm.addEventListener('mouseup', () => {
                isDown = true;
            });
        }
        document.addEventListener('mouseup', () => {
            if (!isDown) {
                self.setState({
                    movement: false
                });
            }
            isDown = false;
        });
    }

    getFilterdList(): string[] {
        const strList: string[] = [];
        const value = this.state.value.toLocaleLowerCase().trim();
        if (this.state.movement === true) {
            for (let index = 0; index < this.strList.length; index++) {
                const currentString = this.strList[index].toLocaleLowerCase().trim();
                if (currentString.startsWith(value) || value.length === 0) {
                    strList.push(this.strList[index]);
                }
            }
        }
        return strList;
    }

    onKeyUp(e: React.KeyboardEvent) {
        const input = e.target as HTMLInputElement;
        this.state.value = input.value;
        const strList = this.getFilterdList();
        let movement = true;
        let selIndex = this.state.selIndex;

        if (e.keyCode == 40) {
            selIndex++;
        } else if (e.keyCode == 38) {
            selIndex--;
        } else if (e.keyCode === 13) {
            movement = false;
            if (this.refs.input) {
                const input: HTMLInputElement = this.refs.input as HTMLInputElement;
                input.value = strList[selIndex];
                console.log(strList[selIndex])
                this.setState({
                    value: input.value,
                    movement: false
                });
            }
            return;
        }

        if (selIndex < 0) {
            selIndex = 0;
        } else if (selIndex > strList.length - 1) {
            selIndex = strList.length - 1;
        }

        this.setState({
            value: input.value,
            movement,
            selIndex,
            suggestionList: strList
        });
    }

    onClick(e: React.MouseEvent) {
        const input = e.target as HTMLInputElement;
        this.state.value = input.value;
        const strList = this.getFilterdList();
        this.setState({
            value: input.value,
            movement:true,
            selIndex:-1,
            suggestionList: strList
        });
    }

    render() {
        return (
            <div ref={'rootElm'} className={'Box Dropdown'}>
                <input ref={'input'} onClick={this.onClick} onKeyUp={this.onKeyUp} placeholder={"I'am looking for.."}/>
                {this.getList()}
            </div>
        );
    }
}