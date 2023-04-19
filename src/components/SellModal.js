import { useState } from "react";
import "./Modal.css";
import { Button, Modal, Tab, Tabs } from "react-bootstrap";

function SellModalBtn() {
  const [activeTab, setActiveTab] = useState("");
  const [show, setShow] = useState(false);
  const closeHandler = () => {
    setShow(false);
  };
  const showHandler = () => {
    setShow(true);
  };
  const settingHandler = () => {};

  const [selectedOpButton, setSelectedOpButton] = useState(null);
  const [selectedFGOpButton, setSelectedFGOpButton] = useState(null);
  const [selectedCondButton, setSelectedCondOpButton] = useState(null);
  const [selectedFGCondButton, setSelectedFGCondOpButton] = useState(null);
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
                      Term : <input type="number" placeholder="1"></input> 봉
                    </h3>
                  </div>
                  <div className="form2">
                    <h3>
                      최소 등락폭 : <input type="number" placeholder="20"></input> %
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
          <Button className="btn_setting" variant="primary" onClick={settingHandler}>
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

export default SellModalBtn;
