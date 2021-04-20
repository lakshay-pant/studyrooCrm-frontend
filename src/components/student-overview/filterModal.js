import React, { Component } from 'react'
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

class Example extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			smShow: false,
			lgShow: false,
		};
	}

	render() {
		let smClose = () => this.setState({ smShow: false });
		let lgClose = () => this.setState({ lgShow: false });

		return (
            <div className="content-wrapper">
				<div className="maincontent-rightside student-view add-student uncategorized">

					<section class="maincontent">
					<div class="container-fluid">
							<a onClick={() => this.setState({ smShow: true })}>
								Small modal
							</a>
							<a onClick={() => this.setState({ lgShow: true })} style={{ marginLeft: 5 }}>
								Large modal
							</a>

							<Modal
								size="sm"
								show={this.state.smShow}
								onHide={smClose}
								aria-labelledby="example-modal-sizes-title-sm">
								<Modal.Header closeButton>
									<Modal.Title id="example-modal-sizes-title-sm">
										Small Modal
									</Modal.Title>
								</Modal.Header>
								<Modal.Body>...</Modal.Body>
							</Modal>

							<Modal
								size="lg"
								show={this.state.lgShow}
								onHide={lgClose}
								aria-labelledby="example-modal-sizes-title-lg">
								<Modal.Header closeButton>
									<Modal.Title id="example-modal-sizes-title-lg">
										Large Modal
									</Modal.Title>
								</Modal.Header>
								<Modal.Body>...</Modal.Body>
							</Modal>
						</div>
					</section>
				</div>
          </div>
		);
	}
}

export default () => (<div><Example /></div>)