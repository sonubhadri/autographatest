import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import PieChart from "./PieChart";
import DoughnutChart from "./Doughnut";

class Translation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      verse: "",
      books: [],
      currentToken: ""
    };

    this.getVerse = this.getVerse.bind(this);
  }

  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();

    fetch("https://api.myjson.com/bins/12ia7y")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            items: result.tokenList,
            verse: result.verse,
            books: result.Books,
            currentToken: "धन्य"
          });
          let selects = document.querySelectorAll("select");

          M.FormSelect.init(selects, result.books);

          Array.from(document.querySelectorAll("span")).forEach(e => {
            e.style.color = "#3895D3";
          });

          Array.from(document.querySelectorAll("#धन्य")).forEach(e => {
            e.style.color = "maroon";
            e.style.fontSize = "18px";
          });
        },
        error => {}
      );
  }

  getVerse(token) {
    fetch("https://api.myjson.com/bins/12ia7y")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            verse: result.verse,
            currentToken: token
          });

          Array.from(document.querySelectorAll("p span")).forEach(e => {
            e.style.color = "#3895D3";
            e.style.fontSize = "15px";
          });

          Array.from(document.querySelectorAll("#" + token)).forEach(e => {
            e.style.color = "maroon";
            e.style.fontSize = "18px";
          });
        },
        error => {}
      );
  }
  render() {
    const { items, verse, books, currentToken } = this.state;
    return (
      <div className="">
        <h5 className="center-align" style={{ color: "#3895D3" }}>
          {" "}
          AUTOGRAPHA MT{" "}
        </h5>
        <div className="row" style={{ marginBottom: "0px" }}>
          <div className="input-field col s2">
            <select>
              {books.map(book => (
                <option>{book}</option>
              ))}
            </select>
            <label>Select Book</label>
          </div>
        </div>

        <div className="row">
          <div className="col s4">
            <div
              className="card "
              style={{
                border: "3px solid #3895D3",
                height: "330px",
                // width: "400px",
                overflowY: "auto"
              }}
            >
              <ul
                className="collection"
                style={{ margin: "0rem", color: "#3895D3" }}
              >
                {items.map(item => (
                  <li
                    key={item.token}
                    className="collection-item"
                    onClick={() => this.getVerse(item.token)}
                  >
                    {item.token}
                    {item.check == "True" ? (
                      <i className="secondary-content material-icons">check</i>
                    ) : (
                      ""
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col s8">
            <div
              className="card "
              style={{
                height: "150px",
                border: "3px solid #3895D3",
                overflowY: "auto"
              }}
            >
              <p
                id="versePara"
                style={{ padding: "0px 13px 0px 13px", color: "#3895D3" }}
              >
                {verse.split(" ").map(span => (
                  <span id={span}> {span} </span>
                ))}
              </p>
            </div>
          </div>

          <div className="col s8">
            <div
              className="card "
              style={{
                height: "150px",
                border: "3px solid #3895D3",
                overflowY: "auto"
              }}
            >
              <p style={{ padding: "0px 13px 0px 13px", color: "#3895D3" }}>
                क्या ही धन्य है वह पुरूष जो दुष्टों की युक्ति पर नहीं चलता, और न
                पापियों के मार्ग में खड़ा होता; और न ठट्ठा करने वालों की मण्डली
                में बैठता है! परन्तु वह तो यहोवा की व्यवस्था से प्रसन्न रहता; और
                उसकी व्यवस्था पर रात दिन ध्यान करता रहता है। वह उस वृक्ष के समान
                है, जो बहती नालियों के किनारे लगाया गया है। और अपनी ऋतु में फलता
                है, और जिसके पत्ते कभी मुरझाते नहीं। इसलिये जो कुछ वह पुरूष करे
                वह सफल होता है॥ दुष्ट लोग ऐसे नहीं होते, वे उस भूसी के समान होते
                हैं, जो पवन से उड़ाई जाती है। इस कारण दुष्ट लोग अदालत में स्थिर
                न रह सकेंगे, और न पापी धर्मियों की मण्डली में ठहरेंगे; क्योंकि
                यहोवा धर्मियों का मार्ग जानता है, परन्तु दुष्टों का मार्ग नाश हो
                जाएगा॥ क्या ही धन्य है वह पुरूष जो दुष्टों की युक्ति पर नहीं
                चलता, और न पापियों के मार्ग में खड़ा होता; और न ठट्ठा करने वालों
                की मण्डली में बैठता है! परन्तु वह तो यहोवा की व्यवस्था से
                प्रसन्न रहता; और उसकी व्यवस्था पर रात दिन ध्यान करता रहता है। वह
                उस वृक्ष के समान है, जो बहती नालियों के किनारे लगाया गया है। और
                अपनी ऋतु में फलता है, और जिसके पत्ते कभी मुरझाते नहीं। इसलिये जो
                कुछ वह पुरूष करे वह सफल होता है॥ दुष्ट लोग ऐसे नहीं होते, वे उस
                भूसी के समान होते हैं, जो पवन से उड़ाई जाती है। इस कारण दुष्ट
                लोग अदालत में स्थिर न रह सकेंगे, और न पापी धर्मियों की मण्डली
                में ठहरेंगे; क्योंकि यहोवा धर्मियों का मार्ग जानता है, परन्तु
                दुष्टों का मार्ग नाश हो जाएगा॥
              </p>
            </div>
          </div>
          {/* <div className="col s4">
            <PieChart />
          </div>
          <div className="col s4">
            <DoughnutChart />
          </div> */}
        </div>

        <div className="row" style={{ margin: "0rem" }}>
          <div
            className="center-align col s2 chip"
            style={{
              backgroundColor: "#3895D3",
              color: "white",
              marginLeft: "5px"
            }}
          >
            Translation Words
          </div>
          <div
            className="center-align col s1 offset-s2 chip"
            style={{ backgroundColor: "#3895D3", color: "white" }}
          >
            Related Words
          </div>
        </div>

        <div className="row">
          <div className="col s4">
            <div
              className="card"
              style={{
                height: "150px",
                border: "3px solid #3895D3",
                overflowY: "auto"
              }}
            >
              <p style={{ padding: "0px 13px 0px 13px", color: "#3895D3" }}>
                क्या ही धन्य है वह पुरूषजो दुष्टों की युक्ति पर नहीं चलता, और न
                पापियों के मार्ग <br /> में खड़ा होता; व्यवस्था से प्रसन्न रहता;
                और उसक <br />
                गया है। और अपनी ऋतु में फलता है,
                <br /> और जिसके पत्ते कभी जो कुछ वह पुरूष करे वह सफल होता है॥{" "}
                <br /> दुष्ट लोग ऐसे नहीं होते, वे उस भूसी के समान होते हैं
              </p>
            </div>
          </div>

          <div className="col s2">
            <div
              className="card"
              style={{
                height: "150px",
                border: "3px solid #3895D3",
                overflowY: "auto"
              }}
            >
              <p style={{ padding: "0px 13px 0px 13px", color: "#3895D3" }}>
                Free- क्या ही धन्य है वह <br />
                Freedom- जो दुष्टों की <br />
                Liberty- युक्ति पर नहीं चलता <br />
                Ransom- जानता है
              </p>
            </div>
          </div>

          <div
            className="center-align col s2"
            style={{
              marginLeft: "5px"
            }}
          >
            Hindi
          </div>

          <div
            className="center-align col s2"
            style={{
              marginLeft: "15px"
            }}
          >
            BHZ
          </div>

          <div
            className="center-align col s2 chip"
            style={{
              marginLeft: "5px",
              marginTop: "20px"
            }}
          >
            <span style={{ fontSize: "20px" }}> {currentToken} </span>
          </div>

          <div
            className="col s2"
            style={{
              marginLeft: "15px",
              marginTop: "5px"
            }}
          >
            <input
              placeholder="TargetWord"
              id="first_name"
              type="text"
              className="validate"
            />
          </div>
          <div
            className="col s1"
            style={{
              marginTop: "15px"
            }}
          >
            <a style={{ cursor: "pointer" }}>
              <i className="material-icons">edit</i>
            </a>
            <a style={{ cursor: "pointer" }}>
              <i className="material-icons" style={{ marginLeft: "25px" }}>
                save
              </i>
            </a>
          </div>
        </div>

        <div className="row" style={{ margin: "0rem" }}>
          <div
            className="center-align col s2 chip"
            style={{
              backgroundColor: "#3895D3",
              color: "white",
              marginLeft: "5px"
            }}
          >
            Translation Notes
          </div>
        </div>

        <div className="row">
          <div className="col s6">
            <div
              className="card"
              style={{
                height: "100px",
                border: "3px solid #3895D3",
                overflowY: "auto"
              }}
            >
              <p style={{ padding: "0px 13px 0px 13px", color: "#3895D3" }}>
                क्या ही धन्य है वह पुरूषजो दुष्टों की युक्ति पर नहीं चलता, और न
                पापियों के मार्ग <br /> में खड़ा होता; व्यवस्था से प्रसन्न रहता;
                और उसक <br />
                गया है। और अपनी ऋतु में फलता है
              </p>
            </div>
          </div>

          <PieChart />
          <DoughnutChart />
        </div>
      </div>
    );
  }
}

export default Translation;
