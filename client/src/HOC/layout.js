import React, { Component } from 'react';
import Header from '../Components/HeaderFooter/header'
import Footer from '../Components/HeaderFooter/footer'
class layout extends Component {
    render() {
        return (
            <div className="page_wrapper">
              <Header/>
              <div className="home_container">
              {this.props.children}
              </div>
              
              <Footer/>
            </div>
        );
    }
}

export default layout;