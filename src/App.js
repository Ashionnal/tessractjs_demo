import logo from './logo.svg';
import './App.css';
import { createWorker } from 'tesseract.js'
import { Component } from 'react';
import TestOCRImage from './assests/images/testocr.png'
import Test1Image from './assests/images/test1.png'
// import LangPath from './tesseract-ocr-data'

class index extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.demo()
  }

  demo = async () => {
    debugger
    const worker = await createWorker({
      langPath: './lang-data',
      logger: m => console.log(m),
    })
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    // await worker.loadLanguage('chi_sim');
    // await worker.initialize('chi_sim');
    const { data: { text } } = await worker.recognize(Test1Image);
    console.log(text);
    await worker.terminate();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

        </header>
      </div>
    )
  }

}

export default index;
