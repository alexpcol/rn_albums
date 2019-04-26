import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    state = { loggedIn: null };
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBGjhuVcY5yMLKPPVUEvO953ST9kdu_8JE',
            authDomain: 'reactauth-65f4e.firebaseapp.com',
            databaseURL: 'https://reactauth-65f4e.firebaseio.com',
            projectId: 'reactauth-65f4e',
            storageBucket: 'reactauth-65f4e.appspot.com',
            messagingSenderId: '228201086354'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderLoginForm() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button>
                        Log Out
                    </Button>
                );
            case false:
                return (
                    <LoginForm />
                );
            default:
                return (
                    <Spinner />
                );
        }
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F8F8F8' }}>
                <SafeAreaView>
                    <Header headerText="Authentication" />
                    {this.renderLoginForm()}
                </SafeAreaView>
            </View>
        );
    }
}

export default App;
