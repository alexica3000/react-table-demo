import React, {Component} from 'react';
import Table from "./components/Table";
import Form from "./components/Form";
import Api from "./components/Api";
import Total from "./components/Total";

class App extends Component {
    state = {
        characters: []
    };

    removeCharacter = (index) => {
        const {characters} = this.state;

        this.setState({
            characters: characters.filter((characters,  i) => {
                return i !== index;
            }),
        });
    }

    handleSubmit = (character) => {
        this.setState({
            characters: [...this.state.characters, character]
        });
    }

    totalItems = () => {
        return this.state.characters.length;
    }

    render() {
        const {characters} = this.state;

        return (
            <div className="container">
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <Total totalItems={this.totalItems()}/>
                <hr/>
                <Form handleSubmit={this.handleSubmit} />
                <hr/>
                <Api />
            </div>
        );
    }
}

export default App;
