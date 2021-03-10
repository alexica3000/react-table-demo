import React, {Component} from 'react';
import Table from "./components/Table";
import Form from "./components/Form";
import Api from "./components/Api";
import Total from "./components/Total";

class App extends Component {
    initialFormData = {
        name: '',
        job: '',
        index: ''
    };

    state = {
        characters: [],
        formData: this.initialFormData
    };

    removeCharacter = (index) => {
        const {characters} = this.state;

        this.setState({
            characters: characters.filter((characters,  i) => {
                return i !== index;
            }),
        });
    }

    editCharacter = (index) => {
        const character = this.state.characters[index];

        this.setState({
            formData: {
                name: character.name,
                job: character.job,
                index: index
            }
        });
    }

    getState = () => {
        return this.state;
    }

    handleSubmit = (character) => {
        if (character.index === '') {
            this.setState({
                characters: [...this.state.characters, character]
            });
        } else {
            let characters = [...this.state.characters];
            characters[character.index] = character;

            this.setState({
                characters: characters,
                formData: this.initialFormData
            });
        }
    }

    totalItems = () => {
        return this.state.characters.length;
    }

    render() {
        const {characters, formData} = this.state;

        return (
            <div className="container">
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                    editCharacter={this.editCharacter}
                />
                <Total totalItems={this.totalItems()}/>
                <Form
                    handleSubmit={this.handleSubmit}
                    formData={formData}
                />
                <Api />
            </div>
        );
    }
}

export default App;
