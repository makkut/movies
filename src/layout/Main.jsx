import { Movies } from './../components/Movies';
import { Search } from './../components/Search';
import { Preloader } from './../components/Preloader';
import React from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=66d7af53&s=matrix`)
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            )
            .catch((err) => {
                console.log(err);
                this.setState({ loading: false });
            });
    }

    searchMovies = (str, type = 'all') => {
        this.setState({ loading: true });
        fetch(
            `https://www.omdbapi.com/?apikey=66d7af53&s=${str}${
                type !== 'all' ? `&type=${type}` : ''
            }`
        )
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            )
            .catch((err) => {
                console.log(err);
                this.setState({ loading: false });
            });
    };

    render() {
        const { movies, loading } = this.state;
        return (
            <main className='container content'>
                <Search searchMovies={this.searchMovies} />
                {loading ? <Preloader /> : <Movies movies={movies} />}
            </main>
        );
    }
}

// function Main(props) {
//   return (
//     <main className="container content">
//       <Movies movies={props.movies} />
//     </main>
//   );
// }

export { Main };