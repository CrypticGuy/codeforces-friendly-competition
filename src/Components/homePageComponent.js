import React, {Component} from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'

export default class homePageComponent extends Component {
    constructor(props) {
        super(props)

        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onChangeDate = this.onChangeDate.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            username: '',
            users: [], 
            date: Date(), 
            isAuthenticated: false,
        }
    }

    componentDidMount() {
        if (!!Cookies.get('curr_username')) {
            this.setState({isAuthenticated: true, username: Cookies.get('curr_username')})
        } else {
            this.setState({isAuthenticated: false})
        }
    }

    onChangeUsername(e) {
        this.setState({username: e.target.value})
    }

    onChangeDate(date) {
        this.setState({date: date})
    }

    onSubmit(e) {
        e.preventDefault()
        axios.get(`https://codeforces.com/api/user.info?handles=${this.state.username}`)
        .then((resp) => {
            console.log(resp)
            Cookies.set('curr_username', this.state.username, {expires: 1})
            this.setState({
                isAuthenticated: true,
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    render() {
        const isAuthenticated = this.state.isAuthenticated
        let display;
        if (isAuthenticated) {
            display = (<h1 className="col-sm-12 col-md-6">Hello {this.state.username}</h1>)
        } else {
            display = (<form className="col-sm-12 col-md-6">
                <div className="form-group">
                    <label for="username">Username</label>
                    <input type="text" onChange={this.onChangeUsername} className="form-control" id="username" value={this.state.username} aria-describedby="usernameCodeforces" placeholder="Enter codeforces username" />
                    <small id="usernameCodeforces" className="form-text text-muted">We don't access any private information from this username</small>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
            </form>)
        }
        return (
            <div className="row align-items-center h-100 justify-content-center text-center">
                {display}
            </div>
        )
    }
}