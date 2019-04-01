import React, { Component } from 'react';
import './App.css';
import Nyhetslistan from './component/Nyhetslista';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {
          urlToImage: "https://source.unsplash.com/random/200x150/?cat",
          title: "testing 1",
          content: "beskrivning av testing",
        },
        {
          urlToImage: "https://source.unsplash.com/random/200x150/?cat",
          title: "testing 2",
          content: "beskrivning av testing",
        }
      ]
    };
  }

  componentDidMount() {
    fetch("https://newsapi.org/v2/top-headlines?country=se&apiKey=b240662165584717b863c09563946350").then(function (response) {

      return response.json()
    }).then(jsondata => {    
      this.setState({ articles: jsondata.articles })
    }).catch(error => {
      this.setState({
        articles: [{
          urlToImage: "fejk.jpg",
          title: "ingen anslutning",
          content: "försök igen senare"
        }]
      });
    })
  }

  render() {
    return (
      <Nyhetslistan minaArtiklar={this.state.articles} />
    );
  }
}

export default App;
