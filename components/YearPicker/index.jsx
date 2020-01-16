import React, { Component } from 'react';
import { DatePicker } from 'antd';

export default class extends Component {
  state = {
    isopen: false,
    time: null,
  };

  handlePanelChange = value => {
    this.setState({
      isopen: false,
    });

    this.props.onChange && this.props.onChange(value);
  };

  handleOpenChange = status => {
    if (status) {
      this.setState({ isopen: true });
    } else {
      this.setState({ isopen: false });
    }
  };

  clearValue = () => {
    this.setState({
      time: null,
    });
  };

  render() {
    const { value, ...props } = this.props;
    return (
      <DatePicker
        onChange={this.handlePanelChange}
        value={value}
        open={this.state.isopen}
        mode='year'
        // placeholder='请选择年份'
        format='YYYY'
        onOpenChange={this.handleOpenChange}
        onPanelChange={this.handlePanelChange}
        {...props}
        // onChange={this.clearValue}
      />
    );
  }
}
