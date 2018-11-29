import React, { Component } from 'react';
// import {
//   Text,
//   View,
//   ActivityIndicator
// } from 'react-native';

import {
  Text,
  View
} from 'react-native';





import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import API from './utils/api';
import CategoryList from './src/videos/containers/category-list.js';
import Player from './src/player/containers/player';
import { Provider } from 'react-redux';
import store from './store';

type Props = {};
export default class App extends Component<Props> {
  state = {
    // suggestionList: [],
    // categorysList: [],
    // loading: true,
  }
  async componentDidMount() {
    const movies = await API.getSuggestion(10);
    const categories = await API.getMovies();
    // console.log(movies);
    // console.log(categories);
    // this.setState({
    // suggestionList: movies,
    // categorysList: categories,
    // loading: false,
    // })
    store.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categories
      }
    })
    store.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        movies
      }
    })
  }
  render() {
    return (
      <Provider
        store={store}
      >
        <Home>
          <Header />
          <Player />
          <Text>buscador</Text>
          <Text>categorías</Text>
          {/* {
          this.state.loading ?
            <View>
              <ActivityIndicator size="large" color="##ff0050" />
              <Text>HOla</Text>
            </View>
            :
            <CategoryList
              list={this.state.categorysList}
            />
            <SuggestionList
              list={this.state.suggestionList}
            />
        } */}

          <CategoryList />
          <SuggestionList />
        </Home>
      </Provider>

    );
  }
}