import React, { Component } from 'react';

function LoadingMessage() {
    return (
        <div className="splash">
            Wait a moment while we load the portfolio.
            <svg className="splash__loader" viewBox="0 0 200 70">
                <defs>
                    <linearGradient id="gradient1" x1="0%" x2="100%" y1="0%" y2="0%">
                        <stop offset="0%" stopColor="#1A053A" stopOpacity="0"></stop>
                        <stop offset="50%" stopColor="#8E2F5C" stopOpacity="0.8"></stop>
                        <stop offset="100%" stopColor="#4C2D73" stopOpacity="0"></stop>
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" x2="100%" y1="0%" y2="0%">
                        <stop offset="0%" stopColor="#D30029" stopOpacity="0"></stop>
                        <stop offset="70%" stopColor="#022A35" stopOpacity="0.8"></stop>
                        <stop offset="100%" stopColor="#D30029" stopOpacity="0"></stop>
                    </linearGradient>
                    <linearGradient id="gradient3" x1="0%" x2="100%" y1="0%" y2="0%">
                        <stop offset="0%" stopColor="#070C62" stopOpacity="0"></stop>
                        <stop offset="70%" stopColor="#3F025E" stopOpacity="0.8"></stop>
                        <stop offset="100%" stopColor="#070C62" stopOpacity="0"></stop>
                    </linearGradient>
                </defs>
                <path
                    fill="none"
                    d="M200 35s-43.5 56.5-100 0S0 35 0 35"
                    className="splash__wave"
                ></path>
                <path
                    fill="none"
                    d="M0 36.7s30-36 66 0 61.7 15 76.7 0 42.5-14.8 57.3 0"
                    className="splash__wave"
                ></path>
                <path
                    fill="none"
                    d="M0 33.3s49 51 100 0S200 37 200 37"
                    className="splash__wave"
                ></path>
                <path
                    fill="none"
                    d="M0 33.7s33.5 33.2 66.7 0 60.2-8.5 68.7 0 32.7 32 64.7 0"
                    className="splash__wave"
                ></path>
                <path
                    fill="none"
                    d="M0 36s23.3-27.3 50.7 0 43.6 5.7 49.3 0 22.7-27.3 50 0 50 0 50 0"
                    className="splash__wave"
                ></path>
                <path
                    fill="none"
                    d="M0 35.7s20 29.5 49.3 0 44.5-5.5 50 0 25.5 25.3 50.7 0 50-.7 50-.7"
                    className="splash__wave"
                ></path>
                <path
                    fill="none"
                    d="M200 35s-43.5 56.5-100 0S0 35 0 35"
                    className="splash__wave"
                ></path>
                <path
                    fill="none"
                    d="M0 36.7s30-36 66 0 61.7 15 76.7 0 42.5-14.8 57.3 0"
                    className="splash__wave"
                ></path>
                <path
                    fill="none"
                    d="M0 33.3s49 51 100 0S200 37 200 37"
                    className="splash__wave"
                ></path>
                <path
                    fill="none"
                    d="M0 33.7s33.5 33.2 66.7 0 60.2-8.5 68.7 0 32.7 32 64.7 0"
                    className="splash__wave"
                ></path>
                <path
                    fill="none"
                    d="M0 36s23.3-27.3 50.7 0 43.6 5.7 49.3 0 22.7-27.3 50 0 50 0 50 0"
                    className="splash__wave"
                ></path>
                <path
                    fill="none"
                    d="M0 35.7s20 29.5 49.3 0 44.5-5.5 50 0 25.5 25.3 50.7 0 50-.7 50-.7"
                    className="splash__wave"
                ></path>
                <path
                    fill="none"
                    d="M200 35s-43.5 56.5-100 0S0 35 0 35"
                    className="splash__wave"
                ></path>
                <path
                    fill="none"
                    d="M0 36.7s30-36 66 0 61.7 15 76.7 0 42.5-14.8 57.3 0"
                    className="splash__wave"
                ></path>
                <path
                    fill="none"
                    d="M0 33.3s49 51 100 0S200 37 200 37"
                    className="splash__wave"
                ></path>
                <path
                    fill="none"
                    d="M0 33.7s33.5 33.2 66.7 0 60.2-8.5 68.7 0 32.7 32 64.7 0"
                    className="splash__wave"
                ></path>
                <path
                    fill="none"
                    d="M0 36s23.3-27.3 50.7 0 43.6 5.7 49.3 0 22.7-27.3 50 0 50 0 50 0"
                    className="splash__wave"
                ></path>
                <path
                    fill="none"
                    d="M0 35.7s20 29.5 49.3 0 44.5-5.5 50 0 25.5 25.3 50.7 0 50-.7 50-.7"
                    className="splash__wave"
                ></path>
                <path
                    fill="none"
                    d="M200 35s-43.5 56.5-100 0S0 35 0 35"
                    className="splash__wave"
                ></path>
                <path
                    fill="none"
                    d="M0 36.7s30-36 66 0 61.7 15 76.7 0 42.5-14.8 57.3 0"
                    className="splash__wave"
                ></path>
                <path
                    fill="none"
                    d="M0 33.3s49 51 100 0S200 37 200 37"
                    className="splash__wave"
                ></path>
                <path
                    fill="none"
                    d="M0 33.7s33.5 33.2 66.7 0 60.2-8.5 68.7 0 32.7 32 64.7 0"
                    className="splash__wave"
                ></path>
                <path
                    fill="none"
                    d="M0 36s23.3-27.3 50.7 0 43.6 5.7 49.3 0 22.7-27.3 50 0 50 0 50 0"
                    className="splash__wave"
                ></path>
                <path
                    fill="none"
                    d="M0 35.7s20 29.5 49.3 0 44.5-5.5 50 0 25.5 25.3 50.7 0 50-.7 50-.7"
                    className="splash__wave"
                ></path>
            </svg>
        </div>
    );
}

export function Splashscreen(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
            };
        }

        async componentDidMount() {
            try {
                //await auth0Client.loadSession();
                setTimeout(() => {
                    this.setState({
                        loading: false,
                    });
                }, 3000)
            } catch (err) {
                console.log(err);
                this.setState({
                    loading: false,
                });
            }
        }

        render() {
            // while checking user session, show "loading" message
            if (this.state.loading) return LoadingMessage();

            // otherwise, show the desired route
            return <WrappedComponent {...this.props} />;
        }
    };
}


