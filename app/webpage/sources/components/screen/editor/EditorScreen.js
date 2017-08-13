var FullRow = require('../../common/bootstrap/FullRow.js');
var Row = require('../../common/bootstrap/Row.js');
var Col = require('../../common/bootstrap/Col.js');
var JsonCode = require('../../common/JsonCode.js');
var FileNameHeader = require('./FileNameHeader.js');
var SaveButtons = require('./SaveButtons.js');
var CodeArea = require('./CodeArea.js');

module.exports = class EditorScreen extends React.Component {

  constructor(props) {
    super(props);
    var script = this.props.aiRepository.getScript(this.props.name);
    this.state = {
      script: script,
      unsavedCode: script.code
    };
  }

  onRename(newValue, oldValue) {
    if(newValue != oldValue && !this.props.aiRepository.isNameAllowed(newValue)) {
      return "Name must be unique, at least 3 characters long";
    }

    this.props.aiRepository.renameScript(newValue, oldValue);
    this.setState({script: this.props.aiRepository.getScript(newValue)});
    this.props.onRename(newValue, oldValue);
    return null;
  }

  onCodeChanged(code) {
    this.setState({unsavedCode: code});
  }

  hasUnsavedChanges() {
    return this.state.script.code != this.state.unsavedCode;
  }

  onClose(testNow) {
    if(testNow) {
      this.props.onTest();
    } else {
      this.props.onClose();
    }
  }

  onSave() {
    var name = this.state.script.name;
    if(this.hasUnsavedChanges()) {
      this.props.aiRepository.updateScript(name, this.state.unsavedCode);
      this.setState({script: this.props.aiRepository.getScript(name)});
    }
  }

  render() {
    var settingsData = {
      SKIN: 'forest'
    };
    var controlData = {
      THROTTLE: 0,
      BOOST: 0,
      TURN: 0,
      RADAR_TURN: 0,
      GUN_TURN: 0,
      SHOOT: 0,
      DEBUG: {}
    };
    var stateData = {
      x: 39.5,
      y: 74.3,
      angle: 45.2,
      energy: 100,
      boost: 300,
      collisions: {
        enemy: false,
        wall: false
      },
      radar: {
        angle: 120.4,
        targetingAlarm: false,
        wallDistance: 74,
        enemy: {
          id: 4,
          x: 39.5,
          y: 74.3,
          angle: 45.2,
          speed: 23,
          energy: 43
        },
        bullets: [
          {
            id: 4,
            x: 94,
            y: 3,
            angle: -43,
            speed: 45,
            damage: 9
          }
        ]
      },
      gun: {
        angle: -34.5,
        reloading: false
      }
    };
    return <div>
      <FullRow>
          <FileNameHeader
            className="pull-left"
            defaultName={this.props.name}
            onChange={(newValue, oldValue) => this.onRename(newValue, oldValue)}
          />
          <div className="pull-right" style={{paddingTop: '15px'}}>
            <SaveButtons
              unsavedChanges={this.hasUnsavedChanges()}
              onClose={(testNow) => this.onClose(testNow)}
              onSave={() => this.onSave()}
            />
          </div>
      </FullRow>
      <FullRow>
        <hr style={{marginTop: '5px'}}/>
      </FullRow>
      <Row>
        <Col lg={3} md={4} className="visible-md visible-lg">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Cheat Sheet</h3>
          </div>
          <div className="panel-body">
            <JsonCode className="debug" highlight={true} data={settingsData} varName="settings"/>
            <JsonCode className="debug" highlight={true} data={controlData} varName="control" />
            <JsonCode className="debug" highlight={true} data={stateData} varName="state" />
          </div>
        </div>
        </Col>
        <Col lg={9} md={8} sm={12} xs={12}>
          <CodeArea
            className="form-control"
            defaultValue={this.state.script.code}
            onChange={(e) => this.onCodeChanged(e)}
          />
        </Col>
      </Row>
    </div>;
  }
};