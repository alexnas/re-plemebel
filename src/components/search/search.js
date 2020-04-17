import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchArticle } from '../../actions/actions';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.searchArticle(this.state.value);
  }

  render() {
    return (
      <div className='well blosd'>
        <h4 className='lead'>Quick shop</h4>

        <form onSubmit={this.handleSubmit}>
          <div className='input-group'>
            <input
              onChange={this.handleChange}
              type='text'
              className='form-control'
            />
            <span className='input-group-btn'>
              <button className='btn btn-outline-secondary'>
                <i className='fa fa-search'></i>
              </button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

const mapDipatchToProps = {
  searchArticle
};

export default connect(null, mapDipatchToProps)(Search);
