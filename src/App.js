
import { React, Component } from "react";

class App extends Component {
  loadingMessage = '';

  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
    this.loadingMessage = 'Wait while data is being loaded.'
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(result =>
          result.json()
        )
        .then((response) => {
          this.setState({ data: response.title });
        })
    }, 5000);
  }
  render() {
    return (
      <div>

        {this.state.data ? <p>{this.state.data}</p> : <p>{this.loadingMessage}</p>}
      </div>
    )
  }
}

export default App;