import * as React from "react";
import {ControllerProps} from "../AppController";
import {ScaleLoader} from "react-spinners";

type HolidayTimeRegionState = {
    busy: boolean,
    username?: string,
    surname?: string,
    saved?: boolean
}

export class PersonalDetailsRegion extends React.Component<ControllerProps, HolidayTimeRegionState> {
    componentDidMount() {
        this.updateStateFromController();
    }

    updateStateFromController() {
        this.setState({
            busy: false,
            username: this.profile.username,
            surname: this.profile.surname
        })
    }

    updateUsername(e: any) {
        this.setState({
            username: e.target.value as string
        });
    }

    updateSurname(e: any) {
        this.setState({
            surname: e.target.value as string
        });
    }

    storeDetails() {
        this.props.controller.storeUserDetails(this.state.username!, this.state.surname)
            .then(this.updateStateFromController);
    }


    get profile() {
        return this.props.controller.verified.profile!;
    }

    get pristine(): boolean {
        return this.state.username === this.profile.username
            && this.state.surname === this.profile.surname;
    }

    private resetDetails() {
        this.setState({
            username: this.profile.username,
            surname: this.profile.surname
        })
    }

    render() {
        return (<form className="pure-form">
            <fieldset>
                <legend>Change your details</legend>
                {
                    this.state.saved && <div className="App-confirmsave"><span>Your details were saved</span></div>
                }
                {
                    this.state.busy &&
                    <div className="App-standoff"><ScaleLoader color={"blue"} height={12} loading={true}/></div>
                    ||
                    <div>
                        <label htmlFor="username">First Name</label>
                        <input id="username" type="text" placeholder="Enter your name" required
                               onChange={(e) => this.updateUsername(e)} value={this.state.username}/>

                        <label htmlFor="surname">Surname (optional)</label>
                        <input id="surname" type="text" placeholder="Surname or initial" required
                               onChange={(e) => this.updateSurname(e)} value={this.state.surname}/>

                        <button type="button" onClick={e => this.storeDetails()}
                                hidden={this.pristine}
                                className="pure-button pure-button-primary">
                            Save
                        </button>
                        <button type="button" onClick={e => this.resetDetails()}
                                hidden={this.pristine} className="pure-button">
                            Cancel
                        </button>
                    </div>
                }
            </fieldset>
        </form>)
    }
}