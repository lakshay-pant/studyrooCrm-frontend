import './taskListStyle.css';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalFooter from 'react-bootstrap/ModalFooter';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export const TaskList = () => {
	const [isOpen, setIsOpen] = useState(false);

	const showModal = () => {
		setIsOpen(true);
	};

	const hideModal = () => {
		setIsOpen(false);
	};

	return (
		<div className="content-wrapper">
			<div className="maincontent-rightside student-view add-student uncategorized">
				{/*--main-content start--*/}
				<section className="maincontent">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-12 col-12">
								<div className="add-student">
									<div className="add-text">
										<div className="add-round">
											<span>
												<i className="fa fa-tasks"></i>
											</span>
										</div>
										<small>Add New Task</small>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* --main-content end--*/}

				<section class="add-task-list">
					<div class="container-fluid">
						<div class="row">
							<div class="col-lg-4 col-12">
								<div class="task-student">
									<div class="headingdiv">Tasks by student</div>

									<div class="task-list">
										<div class="student-task">
											<div class="img-wrap">
												<img src="images/admin.svg" />
											</div>
											<div class="data">
												<p>Artur Szulakowski.</p>
											</div>
											<div class="number">
												<p>02</p>
											</div>
										</div>
									</div>

									<div class="task-list">
										<div class="student-task">
											<div class="img-wrap">
												<img src="images/admin.svg" />
											</div>
											<div class="data">
												<p>Artur Szulakowski.</p>
											</div>
											<div class="number">
												<p>02</p>
											</div>
										</div>
									</div>

									<div class="task-list">
										<div class="student-task">
											<div class="img-wrap">
												<img src="images/admin.svg" />
											</div>
											<div class="data">
												<p>Artur Szulakowski.</p>
											</div>
											<div class="number">
												<p>02</p>
											</div>
										</div>
									</div>

									<div class="task-list">
										<div class="student-task">
											<div class="img-wrap">
												<img src="images/admin.svg" />
											</div>
											<div class="data">
												<p>Artur Szulakowski.</p>
											</div>
											<div class="number">
												<p>02</p>
											</div>
										</div>
									</div>

									<div class="task-list">
										<div class="student-task">
											<div class="img-wrap">
												<img src="images/admin.svg" />
											</div>
											<div class="data">
												<p>Artur Szulakowski.</p>
											</div>
											<div class="number">
												<p>02</p>
											</div>
										</div>
									</div>

									<div class="task-list">
										<div class="student-task">
											<div class="img-wrap">
												<img src="images/admin.svg" />
											</div>
											<div class="data">
												<p>Artur Szulakowski.</p>
											</div>
											<div class="number">
												<p>02</p>
											</div>
										</div>
									</div>

									<div class="task-list">
										<div class="student-task">
											<div class="img-wrap">
												<img src="images/admin.svg" />
											</div>
											<div class="data">
												<p>Artur Szulakowski.</p>
											</div>
											<div class="number">
												<p>02</p>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="col-lg-8 col-12">
								<div class="task-student today">
									<div class="headingdiv">Today</div>

									<div class="task-list today">
										<div class="student-task">
											<div class="img-wrap">
												<span></span>
											</div>
											<div class="data">
												<p>Follow up quote(Adam Malkowski)</p>
												<p>
													Assigned to: Artur Szulakowski. Created by: Automation
												</p>
											</div>
											<div class="number">
												<p>14 Mar 2021</p>
												<div class="todo-buttons">
													<a href="#" class="task-btn-done">
														<span> Go To Student </span>
														<i class="fa fa-eye" aria-hidden="true"></i>
													</a>
													<a href="#" class="task-btn-done">
														<span> Mark as Complete</span>
														<i class="fa fa-check" aria-hidden="true"></i>
													</a>
													<a href="#" class="task-btn-done">
														<span>Mark as in Progress</span>
														<i
															class="fa fa-chevron-right"
															aria-hidden="true"
														></i>
													</a>
													<a class="task-btn-done" onClick={showModal}>
														<span> Edit </span>
														<i class="fas fa-pen" aria-hidden="true"></i>
													</a>
													<a href="#" class="task-btn-done">
														<span> Delete </span>
														<i class="fa fa-times" aria-hidden="true"></i>
													</a>
												</div>

												{/*modal-body--*/}
												<div
													class="modal fade filters-modal show"
													aria-modal="true"
												>
													<Modal show={isOpen} onHide={hideModal}>
														<div id="taskupdate">
															<div
																class="modal-dialog modal-lg"
																role="document"
															>
																<div class="modal-content">
																	<Modal.Body>
																		<div
																			class="modal-dialog modal-lg"
																			role="document"
																		>
																			<div class="modal-content">
																				<div class="modal-top">
																					<h5>Update Task</h5>
																					<button
																						type="button"
																						class="close"
																						data-dismiss="modal"
																						aria-label="Close"
																					>
																						<span aria-hidden="true">
																							&times;
																						</span>
																					</button>
																				</div>

																				<div class="student-filter-area">
																					<div class="row">
																						<div class="col-lg-8 col-12">
																							<div class="update-crm update-task">
																								<div class="crm-form">
																									<div class="headingdiv">
																										What is your task about?
																									</div>
																									<div class="form-row">
																										<div class="form-group col-md-12 col-12">
																											<label>
																												Task Name<p>*</p>
																											</label>
																											<input
																												type="text"
																												class="form-control"
																												placeholder=""
																												name=""
																												value="Send the student more information about the next steps for their visa"
																											/>
																										</div>

																										<div class="form-group col-md-6 col-12">
																											<label>Type</label>
																											<select
																												class="form-control"
																												name="cars"
																												id="cars"
																											>
																												<option value="allstudent">
																													Call
																												</option>
																												<option value="europeans">
																													Client Meeting
																												</option>
																												<option value="allstudent">
																													Event
																												</option>
																												<option value="allstudent">
																													Follow Up
																												</option>
																												<option value="allstudent">
																													Sales
																												</option>
																												<option value="allstudent">
																													test Message
																												</option>
																											</select>
																										</div>

																										<div class="form-group col-md-6 col-12">
																											<label>
																												Due Date<p>*</p>
																											</label>
																											<input
																												type="date"
																												class="form-control"
																												placeholder=""
																												name=""
																												value=""
																											/>
																										</div>

																										<div class="form-group col-md-12 col-12">
																											<label>
																												Task details (comments)
																												<p>*</p>
																											</label>
																											<textarea
																												name="message"
																												rows="4"
																												class="form-control"
																												placeholder=""
																											></textarea>
																										</div>
																									</div>
																								</div>

																								<div class="crm-form">
																									<div class="headingdiv">
																										Is your task related to a
																										student?
																									</div>
																									<div class="form-row">
																										<div class="form-group col-md-12 col-12">
																											<a class="badge badge-light">
																												STU23
																											</a>
																											Aleksandra Raczek
																											<a class="float-right color">
																												Open Student
																											</a>
																										</div>
																									</div>
																								</div>

																								<div class="crm-form">
																									<div class="headingdiv">
																										Who is assigned to this
																										task?
																									</div>
																									<div class="form-row">
																										<div class="form-group col-md-12 col-12">
																											<label>
																												This task will be
																												assigned to...
																											</label>
																											<input
																												type="text"
																												class="form-control"
																												placeholder=""
																												name=""
																												value="Artur Szulakowski"
																											/>
																										</div>
																									</div>
																								</div>

																								<div class="crm-form">
																									<div class="headingdiv">
																										Current status
																									</div>
																										<div class="form-row">
																											<div class="form-group col-md-12 col-12">
																												<form>
																													<label class="radio-inline">
																														<input
																															type="radio"
																															name="optradio"
																															checked
																														/>
																														Pending
																													</label>
																													<label class="radio-inline">
																														<input
																															type="radio"
																															name="optradio"
																														/>
																														In progress
																													</label>
																													<label class="radio-inline">
																														<input
																															type="radio"
																															name="optradio"
																														/>
																														Completed
																													</label>
																													<label class="radio-inline">
																														<input
																															type="radio"
																															name="optradio"
																														/>
																														Cancelled
																													</label>
																												</form>
																											</div>
																										</div>
																								</div>
																							</div>
																						</div>

																						
																					</div>
																					<div class="fotercontent">
																						<div class="rest">
																							<a href="#">
																								<span>
																									<i class="far fa-redo"></i>
																								</span>{' '}
																								Reset
																							</a>
																						</div>
																						<div class="footersingbtn">
																							<input
																								type="submit"
																								name="Save"
																								class="btn getin-btn"
																								value="Save"
																							/>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</Modal.Body>
																</div>
															</div>
														</div>
													</Modal>
												</div>
												{/*modal end */}
											</div>
										</div>

										<div class="task-list today">
											<div class="student-task">
												<div class="img-wrap">
													<span></span>
												</div>
												<div class="data">
													<p>Follow up quote(Adam Malkowski)</p>
													<p>
														Assigned to: Artur Szulakowski. Created by:
														Automation
													</p>
												</div>
												<div class="number">
													<p>14 Mar 2021</p>
												</div>
											</div>
										</div>

										<div class="task-list today">
											<div class="student-task">
												<div class="img-wrap">
													<span></span>
												</div>
												<div class="data">
													<p>Follow up quote(Adam Malkowski)</p>
													<p>
														Assigned to: Artur Szulakowski. Created by:
														Automation
													</p>
												</div>
												<div class="number">
													<p>14 Mar 2021</p>
												</div>
											</div>
										</div>

										<div class="task-list today">
											<div class="student-task">
												<div class="img-wrap">
													<span></span>
												</div>
												<div class="data">
													<p>Follow up quote(Adam Malkowski)</p>
													<p>
														Assigned to: Artur Szulakowski. Created by:
														Automation
													</p>
												</div>
												<div class="number">
													<p>14 Mar 2021</p>
												</div>
											</div>
										</div>

										<div class="task-list today">
											<div class="student-task">
												<div class="img-wrap">
													<span></span>
												</div>
												<div class="data">
													<p>Follow up quote(Adam Malkowski)</p>
													<p>
														Assigned to: Artur Szulakowski. Created by:
														Automation
													</p>
												</div>
												<div class="number">
													<p>14 Mar 2021</p>
												</div>
											</div>
										</div>

										<div class="task-list today">
											<div class="student-task">
												<div class="img-wrap">
													<span></span>
												</div>
												<div class="data">
													<p>Follow up quote(Adam Malkowski)</p>
													<p>
														Assigned to: Artur Szulakowski. Created by:
														Automation
													</p>
												</div>
												<div class="number">
													<p>14 Mar 2021</p>
												</div>
											</div>
										</div>

										<div class="task-list today">
											<div class="student-task">
												<div class="img-wrap">
													<span></span>
												</div>
												<div class="data">
													<p>Follow up quote(Adam Malkowski)</p>
													<p>
														Assigned to: Artur Szulakowski. Created by:
														Automation
													</p>
												</div>
												<div class="number">
													<p>14 Mar 2021</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};
