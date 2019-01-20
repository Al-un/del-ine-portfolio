import React, { Component } from 'react';
import portfolio from '../data/portfolio';
import WorkComponent from '../components/portfolio/WorkComponent';

/**
 * Display a work.
 */
export default class WorkPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id
    };
  }

  componentDidMount = () => {
    const works = portfolio.filter(
      work => work.id === this.props.match.params.id
    );

    if (works) {
      this.setState({
        work: works[0]
      });
    } else {
      console.log(`Work ${this.props.match.params.id} is not found`);
    }
  };

  render() {
    return this.state.work ? (
      <div className="pf-page work-page">
        <WorkComponent work={this.state.work} />
      </div>
    ) : (
      <div className="pf-page">
        <h1>Problem!</h1>
        <p>Work not found</p>
      </div>
    );
  }
}
