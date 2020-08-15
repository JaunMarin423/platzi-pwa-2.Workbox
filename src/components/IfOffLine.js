import React from 'react'

export default class IfOffLine extends React.Component {
    constructor(props) {
        super(props)
        this.state = { onLine: navigator ? navigator.onLine : true }
    }

    componentDidMount() {
        if ( ! window ) return console
        window.addEventListener('online', this.goOnlie )
        window.addEventListener('offline', this.goOffline)
    }

    componentWillUnmount() {
        window.removeEventListener('online', this.goOnlie)
        window.removeEventListener('offline', this.goOffline)
    }

    goOnlie = () => this.setState({ onLine: true })
    goOffline = () => this.setState({ onLine: false })

    render() {
        const { children } = this.props
        const { onLine } = this.state

        if( onLine ) { return null } else {
        return <span>{ children }</span>
        }
    }
    
}