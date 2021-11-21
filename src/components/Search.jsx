import React from 'react';

class Search extends React.Component {
    state = {
        search: '',
        type: 'all',
    };

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    };

    handleChange = (event) => {
        this.setState(
            () => ({ type: event.target.dataset.type }),
            () => {
                this.props.searchMovies(this.state.search, this.state.type);
            }
        );
    };

    render() {
        return (
            <div className='row'>
                <div className='input-field'>
                    <input
                        className='validate'
                        value={this.state.search}
                        type='search'
                        placeholder='search'
                        onChange={(e) =>
                            this.setState({ search: e.target.value })
                        }
                        onKeyDown={this.handleKey}
                    />
                    <button
                        className='btn search-btn blue darken-2'
                        onClick={() =>
                            this.props.searchMovies(
                                this.state.search,
                                this.state.type
                            )
                        }
                    >
                        Search
                    </button>
                </div>
                <label>
                    <input
                        className='with-gap'
                        name='type'
                        type='radio'
                        onChange={this.handleChange}
                        checked={this.state.type === 'all'}
                        data-type='all'
                    />
                    <span>All</span>
                </label>
                <label>
                    <input
                        className='with-gap'
                        name='type'
                        type='radio'
                        onChange={this.handleChange}
                        checked={this.state.type === 'movie'}
                        data-type='movie'
                    />
                    <span>Movies Only</span>
                </label>
                <label>
                    <input
                        className='with-gap'
                        name='type'
                        type='radio'
                        onChange={this.handleChange}
                        checked={this.state.type === 'series'}
                        data-type='series'
                    />
                    <span>Series Only</span>
                </label>
                <label>
                    <input
                        className='with-gap'
                        name='type'
                        type='radio'
                        onChange={this.handleChange}
                        checked={this.state.type === 'game'}
                        data-type='game'
                    />
                    <span>Games Only</span>
                </label>
            </div>
        );
    }
}

export { Search };
