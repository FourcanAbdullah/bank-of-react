import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <img src="https://logos-download.com/wp-content/uploads/2016/03/Lloyds_Bank_logo_1.png" alt="bank" />
                <h1>Bank of React</h1>

                <Link to="/userProfile">User Profile</Link>
                <AccountBalance accountBalance={this.props.accountBalance} />
            </div>
        );
    }
}

export default Home;