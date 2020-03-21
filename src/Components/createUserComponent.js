import React, {Component} from 'react'

export default class createUserComponent extends Component {
    
    constructor(props) {
        super(props)

        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onChangeDate = this.onChangeDate.bind(this)

        this.state = {
            username: '',
            users: [], 
            date: Date()
        }
    }

    componentDidMount() {

    }

    onChangeUsername(e) {
        this.setState({username: e.target.value})
    }

    onChangeDate(date) {
        this.setState({date: date})
    }

    onSubmit(e) {
        e.preventDefault()
         
    }
    
    render() {
        return (
            <form>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" id="username" aria-describedby="usernameCodeforces" placeholder="Enter codeforces username" />
                    <small id="usernameCodeforces" class="form-text text-muted">We don't access any private information from this username</small>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        )
    }
}