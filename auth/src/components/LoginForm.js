import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends Component {

    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    };

    logInAction() {
        const { email, password } = this.state;
        this.setState({ error: '', loading: true });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.loginSucceed.bind(this))
            .catch(this.signUpAction.bind(this));
    }

    signUpAction() {
        const { email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.loginSucceed.bind(this))
            .catch(this.loginFailed.bind(this));
    }

    loginSucceed() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    loginFailed() {
        this.setState({ error: 'Authentication failed', loading: false });
    }

    renderButton() {
        if (this.state.loading) {
            return (
                <Spinner size='small' />
            );
        }
        return (
            <Button onPress={this.logInAction.bind(this)}>
                Log in
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        autoCapitalize='none'
                        label='Email'
                        value={this.state.email}
                        onChangeText={text => this.setState({ email: text })}
                        placeholder='user@mail.com'
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label='Password'
                        secureEntry
                        value={this.state.password}
                        onChangeText={text => this.setState({ password: text })}
                        placeholder='Enter Password'
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>{this.state.error}</Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}
const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;
