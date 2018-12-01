// Import React
import React from "react";


// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  logo: require("../assets/logo.jpg"),
  birth: require("../assets/birth.gif")
};

preloader(images);

const theme = createTheme({
  primary: "#ffffff",
  secondary: "#3d3d3d"
});

var tag = {
  fontFamily: "Raleway, 'sans-serif'",
  marginTop: '519px',
  marginLeft: '670px',
  color: 'black',
  fontSize: '22px'
};

var fontStyle = {
  fontFamily: "Raleway, 'sans-serif'",
  color: '#353535'
}

var title = {
  fontFamily: "Raleway, 'sans-serif'",
  color: '#131313',
  fontWeight: 'unset',
  textShadow: '2px 2px 4px #828385'
}

var sources = {
  fontSize: '16px'
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500} progress={'pacman'}>

          <Slide transition={["zoom"]} bgImage={images.logo}>
            <Text style={tag} lineHeight={1} textColor="black">
              ブライアン・フェルプス<br/>
              Brian Phelps JR.
            </Text>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="white" notes="Talk about History and what problems it solved">
            <Heading size={1} Fit cap lineHeight={1} style={title}>
              Concepts:
            </Heading>
            <List style={fontStyle}>
              peer to peer online currency<br/><br/>
              PoW <br/><br/>
            </List>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="white" notes="Talk about History and what problems it solved">
            <Heading size={1} Fit cap lineHeight={1} style={title}>
              Ethereum
            </Heading>
            <Image src={images.birth} />
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="white">
            <Heading size={1} Fit cap lineHeight={1} style={title}>
              Problem Statement
            </Heading>
            <List style={fontStyle}>
                BitCoin's underlying technology can have more usecases than just currency.<br/><br/>
                eg) financial derivitives, hedging contracts, crowdfunding, voting, IoT

            </List>
          </Slide>

          <Slide transition={["zoom", "slide"]}>
            <Heading size={1} Fit cap lineHeight={1} style={title}>
                Contribution of Paper
            </Heading>
            <List style={fontStyle}>
              Open Platform<br/><br/>
              enables developers to build & deploy<br/><br/>
              Decentralized Applications (aka smart contract)
              NOTES
               Includes programming language for users to create smart contracts<br/><br/>
            </List>
          </Slide>

          <Slide transition={["zoom", "slide"]}>
            <Heading size={1} Fit cap lineHeight={1} style={title}>
                Smart Contact
            </Heading>
            Run with a digital history.
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading size={1} Fit cap lineHeight={1} style={title}>
              Ethereum Virtual Machine
            </Heading>
            <List style={fontStyle}>
            All nodes on network run EVM in addition to validating transactions.<br/><br/>
            Distributed network of VMs running known as 'World Computer'<br/><br/>
            Separate from main network

            </List>
          </Slide>


          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading size={1} Fit cap lineHeight={1} style={title}>
              Major Conclusions
            </Heading>
            <List style={fontStyle}>
            Created to provide framework to run all decentralized applications.<br/><br/>


            </List>
          </Slide>

          <Slide transition={["zoom", "slide"]}>
            <Heading size={1} Fit cap lineHeight={1} style={title}>
              Thoughts about the paper
            </Heading>
          </Slide>

          <Slide transition={["zoom", "slide"]}>
            <Heading size={1} Fit cap lineHeight={1.5} style={title}>
              Questions
            </Heading>
            <Appear><Text style={fontStyle}>
              ETH Blockchain VERSUS BTC Blockchain
            </Text></Appear>
            <Appear>
            <Text lineHeight={2} style={fontStyle}>
              Ethereum 2.0
            </Text></Appear>
            <List style={fontStyle}>
              <Appear><ListItem style={fontStyle}>PoS</ListItem></Appear>
              <Appear><ListItem style={fontStyle}>Sharding</ListItem></Appear>
              <Appear>
              <ListItem>eWASM</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} Fit cap lineHeight={1.5} textColor="secondary">
            <i class="fal fa-code-branch"></i>
              gitHub
            </Heading>
            <Text lineHeight={2} style={fontStyle}>
              https://github.com/F1nalFortune/ethSpec
            </Text>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
