import * as React from "react";
import {VerifiedComponentProps} from "../component/KeyVerification";
import {ScaleLoader} from "react-spinners";
import {peopleCount} from "../../common/utils";
import {ProfileLink} from "../App";
import {TimeOption, UserProfile} from "../../common/UserProfile";

class Count extends React.Component<{ items: Array<any>, option: string }, any> {
    render() {
        const count = this.props.items.filter(p => p.option == this.props.option).length;
        return <span>{peopleCount(count)}</span>
    }
}

export class Turnout extends React.Component<VerifiedComponentProps, any> {
    state: any = {};

    componentDidMount() {
        this.props.controller.turnout().then(t => this.setState({
            turnout: t,
            ready: true
        }))
    }

    renderGroup(filter: string | undefined) {
        return this.state.turnout.filter((t: UserProfile) => t.option === filter).map((t: UserProfile, index: number) => (
            <div className="App-userbadge" key={filter + '-' + index}>
                {t.username}
            </div>
        ))
    }

    renderComingGroup() {
        type GroupedProfiles = {
            [index: string]: UserProfile[]
        };

        const groupedProfiles = this.state.turnout
            .filter((t: any) => t.option === "yes")
            .reduce((grouped: GroupedProfiles, profile: UserProfile) => {
                console.log("Group user", profile.username, profile.time);

                const key = profile.time || "not specified";
                if (!grouped[key]) {
                    grouped[key] = [];
                }
                grouped[key].push(profile);
                return grouped;
            }, {});

        return Object.keys(groupedProfiles)
            .sort()
            .map((group, groupIndex) => (
                <div className="pure-g" key={"group" + groupIndex}>
                    <div className="pure-u-2-5 pure-u-sm-1-5">
                        <span className="App-timegroup">{group}</span>
                    </div>
                    <div className="pure-u-3-5 pure-u-sm-4-5">
                        {
                            groupedProfiles[group].map((profile: UserProfile, index: number) => (
                                <div className="App-userbadge" key={"profile" + index}>{profile.username}</div>
                            ))
                        }
                    </div>
                </div>
            ))
    }

    render() {
        return this.state.ready && (
            <div>
                <p className="App-intro">Current responses for this week</p>

                <form className="pure-form pure-form-stacked">
                    <fieldset>
                        <legend>There <Count items={this.state.turnout} option="yes"/> confirmed</legend>
                        {this.renderComingGroup()}
                    </fieldset>

                    <fieldset>
                        <legend>There <Count items={this.state.turnout} option="no"/> who cannot make it</legend>
                        {this.renderGroup("no")}
                    </fieldset>
                </form>

                <p>There are {this.state.turnout.length} people on the email list but note that some regular players don't subscribe.</p>

                <p>If you need to update your status for this week, view your <ProfileLink verificationKey={this.props.match.params.key}>
                    Profile</ProfileLink>.</p>
            </div>
        ) || <div>
            <p className="App-intro">Fetching information for this week</p>
            <ScaleLoader color={'blue'} height={12} loading={true}/>
        </div>;
    }
}