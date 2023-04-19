import { useState } from "react";
import "./Modal.css";
import { Button, Modal, Tab, Tabs } from "react-bootstrap";

function BuyModalBtn({ SendActiveTabToAnHome, SendtermToAnHome, SendminRateToAnHome }) {
  const [minRateValue, setminRateValue] = useState("");
  const [termValue, setTermValue] = useState("");

  const handleminRateChange = (event) => {
    event.preventDefault();
    setminRateValue(event.target.value);
  };

  const handleTermChange = (event) => {
    event.preventDefault();
    setTermValue(event.target.value);
  };

  function handleDetail(event) {
    event.preventDefault();
    // const term = JSON.stringify(termValue);
    // const minRate = JSON.stringify(minRateValue);
  }
  const [activeTab, setActiveTab] = useState("");

  const [show, setShow] = useState(false);
  const closeHandler = () => {
    setShow(false);
  };
  const showHandler = () => {
    setShow(true);
  };
  const settingHandler = () => {
    SendActiveTabToAnHome(activeTab); // activeTab 이름 전송
    SendtermToAnHome(termValue); // 고저알 알고리즘 term 전송
    SendminRateToAnHome(minRateValue); // 고저알 알고리즘 최소등락폭 전송
    setShow(false);
  };

  const [selectedOpButton, setSelectedOpButton] = useState("");
  const [selectedFGOpButton, setSelectedFGOpButton] = useState("");
  const [selectedCondButton, setSelectedCondOpButton] = useState("");
  const [selectedFGCondButton, setSelectedFGCondOpButton] = useState("");

  const handleButtonOpClick = (button) => {
    setSelectedOpButton(button);
  };
  const handleButtonCondClick = (button) => {
    setSelectedCondOpButton(button);
  };
  const handleButtonFGOpClick = (button) => {
    setSelectedFGOpButton(button);
  };
  const handleButtonFGCondClick = (button) => {
    setSelectedFGCondOpButton(button);
  };

  const getButtonOpVariant = (button) => {
    if (button === selectedOpButton) {
      return "success";
    } else {
      return "secondary";
    }
  };
  const getButtonCondVariant = (button) => {
    if (button === selectedCondButton) {
      return "success";
    } else {
      return "secondary";
    }
  };

  const getButtonFGOpVariant = (button) => {
    if (button === selectedFGOpButton) {
      return "success";
    } else {
      return "secondary";
    }
  };
  const getButtonFGCondVariant = (button) => {
    if (button === selectedFGCondButton) {
      return "success";
    } else {
      return "secondary";
    }
  };

  const buttonOpStyle = {
    marginLeft: "0.1rem",
    marginRight: "0.1rem",
  };
  const buttonCondStyle = {
    marginLeft: "0.1rem",
    marginRight: "0.1rem",
  };
  const buttonFGOpStyle = {
    marginLeft: "0.1rem",
    marginRight: "0.1rem",
  };
  const buttonFGCondStyle = {
    marginLeft: "0.1rem",
    marginRight: "0.1rem",
  };

  return (
    <div>
      <Button className="showBtn" variant="outline-primary" onClick={showHandler}>
        조건식
      </Button>
      <Modal show={show} onHide={closeHandler} size="lg">
        <Modal.Header>
          <Modal.Title>
            <Tabs activeKey={activeTab} onSelect={(tab) => setActiveTab(tab)}>
              <Tab eventKey={"고점 저점 알고리즘"} title="고점 저점 알고리즘">
                <hr></hr>
                <form className="style_modalTabForm">
                  <div className="form1">
                    <h3>
                      Term : <input value={termValue} onChange={handleTermChange} type="number" placeholder="1"></input> 봉
                    </h3>
                  </div>
                  <div className="form2">
                    <h3>
                      최소 등락폭 : <input value={minRateValue} onChange={handleminRateChange} type="number" placeholder="20"></input> %
                    </h3>
                  </div>
                </form>
              </Tab>
              <Tab eventKey={"NAVER TREND"} title="NAVER TREND">
                <hr></hr>
                <form>
                  <h3>
                    연산자 :
                    <span>
                      <Button style={buttonOpStyle} variant={getButtonOpVariant("<")} onClick={() => handleButtonOpClick("<")}>
                        {"<"}
                      </Button>
                      <Button style={buttonOpStyle} variant={getButtonOpVariant("=")} onClick={() => handleButtonOpClick("=")}>
                        {"="}
                      </Button>
                      <Button style={buttonOpStyle} variant={getButtonOpVariant(">")} onClick={() => handleButtonOpClick(">")}>
                        {">"}
                      </Button>
                      <Button style={buttonOpStyle} variant={getButtonOpVariant("<=")} onClick={() => handleButtonOpClick("<=")}>
                        {"<="}
                      </Button>
                      <Button style={buttonOpStyle} variant={getButtonOpVariant(">=")} onClick={() => handleButtonOpClick(">=")}>
                        {">="}
                      </Button>
                    </span>
                  </h3>
                  <h3>
                    수치 : <input placeholder="1" type="number"></input> %
                  </h3>
                  <h4>
                    AND / OR :
                    <span>
                      <Button style={buttonCondStyle} variant={getButtonCondVariant("AND")} onClick={() => handleButtonCondClick("AND")}>
                        {"AND"}
                      </Button>
                      <Button style={buttonCondStyle} variant={getButtonCondVariant("OR")} onClick={() => handleButtonCondClick("OR")}>
                        {"OR"}
                      </Button>
                    </span>
                  </h4>
                </form>
              </Tab>
              <Tab eventKey={"공포 탐욕 지수"} title="공포 탐욕 지수">
                <hr></hr>
                <form>
                  <h3>
                    연산자 :
                    <span>
                      <Button style={buttonFGOpStyle} variant={getButtonFGOpVariant("<")} onClick={() => handleButtonFGOpClick("<")}>
                        {"<"}
                      </Button>
                      <Button style={buttonFGOpStyle} variant={getButtonFGOpVariant("=")} onClick={() => handleButtonFGOpClick("=")}>
                        {"="}
                      </Button>
                      <Button style={buttonFGOpStyle} variant={getButtonFGOpVariant(">")} onClick={() => handleButtonFGOpClick(">")}>
                        {">"}
                      </Button>
                      <Button style={buttonFGOpStyle} variant={getButtonFGOpVariant("<=")} onClick={() => handleButtonFGOpClick("<=")}>
                        {"<="}
                      </Button>
                      <Button style={buttonFGOpStyle} variant={getButtonFGOpVariant(">=")} onClick={() => handleButtonFGOpClick(">=")}>
                        {">="}
                      </Button>
                    </span>
                  </h3>
                  <h3>
                    수치 : <input placeholder="1" type="number"></input> %
                  </h3>
                  <h4>
                    AND / OR :
                    <span>
                      <Button
                        style={buttonFGCondStyle}
                        variant={getButtonFGCondVariant("AND")}
                        onClick={() => handleButtonFGCondClick("AND")}
                      >
                        {"AND"}
                      </Button>
                      <Button
                        style={buttonFGCondStyle}
                        variant={getButtonFGCondVariant("OR")}
                        onClick={() => handleButtonFGCondClick("OR")}
                      >
                        {"OR"}
                      </Button>
                    </span>
                  </h4>
                </form>
              </Tab>
            </Tabs>
          </Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <Button type="submit" className="btn_setting" variant="primary" onClick={settingHandler}>
            설정하기
          </Button>

          <Button className="btn_close" variant="secondary" onClick={closeHandler}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default BuyModalBtn;
