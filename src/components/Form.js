import React, {Component} from 'react';

class Form extends Component {
    initialState = {
        name: '',
        job: '',
        index: ''
    }

    state = this.props.formData;

    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        if (this.isEmptyData()) {
            return;
        }

        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    isEmptyData = () => {
        return this.state.name === '' || this.state.job === '';
    }

    reRender = () => {
        this.forceUpdate();
    };

    componentDidUpdate(prevProps) {
        const {name, job, index} = this.props.formData;

        if(prevProps.formData.index !== this.props.formData.index) {
            this.setState({
                name: name,
                job: job,
                index: index
            });
        }
    }

    render() {
        const {name, job, index} = this.state;

        return (
            <form key={index}>
                <label htmlFor="name">Name</label>
                <input
                    className="input-form"
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange}
                />
                <label htmlFor="job">Job</label>
                <input
                    className="input-form"
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handleChange}
                />
                <input
                    type="button"
                    value="Submit"
                    onClick={this.submitForm}
                    className={this.isEmptyData() ? "disabled-btn" : ""}
                />
            </form>
        );
    }
}

export default Form;
