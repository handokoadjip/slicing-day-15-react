import React, { Component } from "react";
import { Main } from "components/atoms";
import {
  Header,
  SectionContent,
  SectionFooter,
  Footer,
} from "components/molecules";

class index extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scroll(0, 0);
    document.title = "Creative Market | DORIAN";
  }

  render() {
    return (
      <>
        <Header />
        <Main>
          <SectionContent />
        </Main>
        <SectionFooter />
        <Footer />
      </>
    );
  }
}

export default index;
