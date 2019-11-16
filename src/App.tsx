import React, {Component} from 'react';
import './App.css';
import Button from './components/Buttom/Button';
import Message from "./components/Message/Message";
import {IAppStore} from "./Redux/state";
import {connect} from "react-redux";
import {AddNotificationThunk, IObjectNotification} from "./Redux/Reducer";

interface IObjectOfProps {
    AddNotificationThunk: (title: string, text: string, types: string) => void;
    notificationArray: Array<IObjectNotification>
}

class App extends Component<IObjectOfProps> {

    onClickButtonSuccess = () => this.props.AddNotificationThunk(`Success`, `someText`, `Success`);
    onClickButtonWarning = () => this.props.AddNotificationThunk(`Warning`, `someText`, `Warning`);
    onClickButtonError = () => this.props.AddNotificationThunk(`Error`, `someText`, `Error`);

    render() {
        let notification = this.props.notificationArray.map(item => <Message key={item.id} style={`${item.types}`}
                                                                             title={`${item.title}`}
                                                                             text={`${item.text}`}/>);
        return (
            <div className="App">
                <Button style={`buttonSuccess button`} callback={this.onClickButtonSuccess} nameButton={'Success'}/>
                <Button style={`buttonWarning button`} callback={this.onClickButtonWarning} nameButton={'Warning'}/>
                <Button style={`buttonError button`} callback={this.onClickButtonError} nameButton={'Error'}/>

                <div className={`NotificationBlock`}>
                    {notification}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: IAppStore) => ({notificationArray: state.partStore.notificationArray});
export default connect(mapStateToProps, {AddNotificationThunk})(App);