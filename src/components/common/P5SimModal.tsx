import { Modal } from "antd";
import { Rnd } from "react-rnd";
import { useState } from "react";
import { Sim } from "../../types";

/**
 * This component is exclusively for displaying a p5 sketch iframe
 * Since the size of the iframe is uncertain, the size of the modal box
 * gets changed as we resize the sim
 */

/**
 * Accepts all the props of Modal in antd along with a
 * sim object which is of the form { owner:string, id: string }
 */

const P5SimModal = (props: any) => {
  let sim: Sim;

  const { onCancel, onOk } = props;

  sim = props.sim;

  const [size, setSize] = useState({ width: 640, height: 360 });

  const handleResize = (
    _e: any,
    _direction: any,
    ref: any,
    _delta: any,
    _position: any
  ) => {
    setSize({
      width: parseInt(ref.style.width),
      height: parseInt(ref.style.height),
    });
  };

  let { width, height } = size;

  if (!(sim && sim.id && sim.owner)) {
    height = 0;
  }

  const handleCancelClick = () => {
    onCancel();
    setSize({ width: 640, height: 360 });
  };

  const handleOKClick = () => {
    onOk();
    setSize({ width: 640, height: 360 });
  };

  const resizeConfig = {
    top: false,
    bottom: false,
    left: false,
    right: false,
    topLeft: false,
    topRight: false,
    bottomLeft: false,
    bottomRight: true,
  };

  return (
    <Modal
      {...props}
      onOk={handleOKClick}
      onCancel={handleCancelClick}
      width={width + 50}
    >
      <div style={{ width: width + "px", height: height + "px" }}>
        <Rnd
          enableResizing={resizeConfig}
          disableDragging
          onResize={handleResize}
          size={{ width, height }}
        >
          {sim && sim.id && sim.owner ? (
            <iframe
              width={width}
              height={height}
              scrolling="no"
              src={`https://editor.p5js.org/${sim.owner}/embed/${sim.id}`}
            ></iframe>
          ) : null}
        </Rnd>
      </div>
      <div style={{ width: width + "px" }}>{props.children}</div>
    </Modal>
  );
};

export default P5SimModal;
