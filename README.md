<div id="top"></div>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <img src=".github/logo.png" alt="Logo" width="80" height="80">

  <h3 align="center">buymeacookie</h3>

  <p align="center">
    A crowd funding application made on top of the fundMe smart contract.
    <br />
    <a href="https://buy-me-a-cookie.rbjr.dev">View Demo</a>
    ·
    <a href="https://github.com/robertokbr/buymeacookie/issues">Report Bug</a>
    ·
    <a href="https://github.com/robertokbr/buymeacookie/issues">Request Feature</a>
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

![Product Name Screen Shot](.github/screenshot.png)


Buymeacookie is an application inpired on the app [buymeacoffee](https://www.buymeacoffee.com/), a content creator support application. This uses the blockchain as core infraestructure to handle donations and give credit to the donors.


<p align="right">(<a href="#top">back to top</a>)</p>


### Built With
* [Next.js](https://nextjs.org/)
* [Chakra-ui](https://chakra-ui.com/)
* [Hardhat](https://hardhat.org/)
* [Ethers.js](https://www.npmjs.com/package/ethers)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started
To get started wiht the development setup, you first got to deploy the smart contract locally. After this, fill in the frontend environment variables with the fundMe contract address, which will be logged after the `yarn deploy` command.

### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/robertokbr/buymeacookie.git
   ```
2. Install NPM packages
   ```sh
   cd contracts && npm install
   ```
3. Deploy the contract locally
   ```sh
   yarn deploy
   ```   
4. Enter the FundMe address into the `.env.local`, inside the frontend dir
   ```sh
   cd frontend && cp .env.example .env.local
   ```
   ```js
   // .env.example
   NEXT_PUBLIC_FUNDME_ADDRESS='ENTER THE ADDRESS HERE';
   ```
5. Install frontend NPM packages
   ```sh
   npm install
   ```
6. Run frontend
   ```sh
   yarn dev
   ```   
<p align="right">(<a href="#top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage
To use it, open your browser and get to the address `http://localhost:3000`. 
If you do not have metamask installed, go to https://metamask.io/ to install.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

### Solidity
- [x] Libraries;
- [x] Modifiers;
- [x] Fallback and Receive functions;
- [x] Constant and immutable properties;
- [x] Payable functions;
- [x] Receive and Fallback functions;
- [x] Storage and Memmory variables;

### Hardhat
- [x] Contract compilation;
- [x] Contract deploy;
- [x] Contract Tests;
- [x] Hardhat Tasks;
- [x] Etherscan verification
- [x] Gas reporter;
- [x] Solidity coverage;
- [x] Typechain
- [x] Unit tests
- [x] Mocks


See the [open issues](https://github.com/robertokbr/buymeacookie/issues) for a full list of proposed features (and known issues).


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Roberto Junior - [@robertojrdev](https://twitter.com/robertojrdev) - robertojuniordev@gmail.com

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments
This app backend (smart contract) was made following the resource bellow:

* [Learn Blockchain, Solidity, and Full Stack Web3 Development with JavaScript – 32-Hour Course](https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=46910s)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/robertokbr/buymeacookie.svg?style=for-the-badge
[contributors-url]: https://github.com/robertokbr/buymeacookie/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/robertokbr/buymeacookie.svg?style=for-the-badge
[forks-url]: https://github.com/robertokbr/buymeacookie/network/members
[stars-shield]: https://img.shields.io/github/stars/robertokbr/buymeacookie.svg?style=for-the-badge
[stars-url]: https://github.com/robertokbr/buymeacookie/stargazers
[issues-shield]: https://img.shields.io/github/issues/robertokbr/buymeacookie.svg?style=for-the-badge
[issues-url]: https://github.com/robertokbr/buymeacookie/issues
[license-shield]: https://img.shields.io/github/license/robertokbr/buymeacookie.svg?style=for-the-badge
[license-url]: https://github.com/robertokbr/buymeacookie/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/robertojrcdc/
[product-screenshot]: images/screenshot.png
