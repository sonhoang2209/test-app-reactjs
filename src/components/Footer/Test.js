import react,{Component} from "react";

class Clock extends Component {
    constructor(props) {
      super(props);
      this.state = {
        date: new Date(),
        name2:'ajsdhfasdfg'
        };
    }
    
    componentWillMount() {
        this.setState({
            ...this.state, name2:'son'    
        });
    }

    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          <h2>It is {this.state.name2}.</h2>
        </div>
      );
    }
}

export default Clock;