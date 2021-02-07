import React, { Component } from 'react';

// import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';

class Auth extends Component {
    state= {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            Password: {
                elementType: 'input',
                elementConfig: {
                    type: 'Password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        }
    }

    render() {
        const  = {

        }
        return (
            <div>
                <form>

                </form>
            </div>
        );
    }
}

export default Auth;