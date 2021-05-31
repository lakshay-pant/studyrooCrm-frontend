import './LeadsStyle.css';
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalFooter from 'react-bootstrap/ModalFooter';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { addLead } from './addLeadAction';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner, Alert } from 'react-bootstrap';

import { fetchAllLeads } from './showLeadAction';
import { fetchSingleLead } from './getSingleLeadAction';

import Moment from 'moment';

const Leads = () => {
	const { isLoadingLead, statusLead, messageLead } = useSelector(
		(state) => state.addLead
	);

	const { leads, isLoadingShowlead, error } = useSelector(
		(state) => state.leadList
	);

	const [isOpen, setIsOpen] = useState(false);
	const [isOpen2, setIsOpen2] = useState(false);
	const [isOpen3, setIsOpen3] = useState(false);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [middleName, setMiddleName] = useState('');
	const [onShoreLocation, setOnShoreLocation] = useState('');
	const [offShoreLocation, setOffShoreLocation] = useState('');
	const [locationStatus, setLocationStatus] = useState('');
	const [leadLevel, setLeadLevel] = useState('');
	const [refferalSource, setRefferalSource] = useState('');
	const [onShorePhone, setOnShorePhone] = useState('');
	const [offShorePhone, setOffShorePhone] = useState('');
	const [email, setEmail] = useState('');
	const [nationality, setNationality] = useState('');
	const [gender, setGender] = useState('');
	const [birthday, setBirthday] = useState('');
	const [userName, setUserName] = useState('');
	const [addedAt, setAddedAt] = useState('');

	const dispatch = useDispatch();

	const handleOnChange = (e) => {
		const { name, value } = e.target;

		switch (name) {
			case 'firstName':
				setFirstName(value);
				break;

			case 'middleName':
				setMiddleName(value);
				break;

			case 'lastName':
				setLastName(value);
				break;

			case 'onShoreLocation':
				setOnShoreLocation(value);
				break;

			case 'offShoreLocation':
				setOffShoreLocation(value);

				break;

			case 'locationStatus':
				setLocationStatus(value);

				break;

			case 'leadLevel':
				setLeadLevel(value);
				break;

			case 'refferalSource':
				setRefferalSource(value);
				break;

			case 'onShorePhone':
				setOnShorePhone(value);
				break;

			case 'offShorePhone':
				setOffShorePhone(value);
				break;

			case 'email':
				setEmail(value);
				break;

			case 'nationality':
				setNationality(value);
				break;

			case 'gender':
				setGender(value);
				break;

			case 'birthday':
				setBirthday(value);
				break;

			default:
				break;
		}
	};

	const showAddedLeads = () => {
		dispatch(fetchAllLeads());
	};

	const handleOnLeadSubmit = async (e) => {
		e.preventDefault();

		const newLead = {
			firstName,
			middleName,
			lastName,
			email,
			gender,
			onShoreLocation,
			onShorePhone,
			offShorePhone,
			refferalSource,
			nationality,
			leadLevel,
			offShoreLocation,
			locationStatus,
			birthday,
		};
		await dispatch(addLead(newLead));
		await showAddedLeads();
	};

	const showModal = (item) => {
		setIsOpen(true);
		dispatch(fetchSingleLead(item._id));
		setFirstName(item.firstName);
		setMiddleName(item.middleName);
		setLastName(item.lastName);
		setEmail(item.email);
		setGender(item.gender);
		setOnShoreLocation(item.onShoreLocation);
		setOffShoreLocation(item.offShoreLocation);
		setNationality(item.nationality);
		setOffShorePhone(item.offShorePhone);
		setOnShorePhone(item.onShorePhone);
		setLeadLevel(item.leadLevel);
		setLocationStatus(item.locationStatus);
		setBirthday(item.birthday);
		setRefferalSource(item.refferalSource);
		setAddedAt(item.addedAt);
		setUserName(item.userName);
	};

	const showModal2 = () => {
		setIsOpen2(true);
	};

	const hideModal = () => {
		setIsOpen(false);
	};
	const hideModal2 = () => {
		setIsOpen2(false);
	};

	const showModal3 = () => {
		setIsOpen3(true);
	};

	const hideModal3 = () => {
		setIsOpen3(false);
	};

	useEffect(() => {
		if (!leads.length) {
			dispatch(fetchAllLeads());
		}
	}, [leads, dispatch]);

	useEffect(() => {
		showAddedLeads();
	}, []);

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
										<small>Leads</small>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* --main-content end--*/}

				{/*--student-leads start--*/}
				<div class="student-leads leads-page">
					<div class="container-fluid">
						<div class="leads">
							<div class="row">
								<div class="col-md-6 col-12">
									<div class="student-lead">
										<div class="tooltip">
											<div class="inbox-icon">
												<i class="fas fa-inbox"></i>
											</div>
											<span class="tooltiptext">Inbox</span>
										</div>

										<div class="tooltip">
											<div class="inbox-icon">
												<i class="fas fa-archive"></i>
											</div>
											<span class="tooltiptext">Archive</span>
										</div>

										<select
											class="form-control filter-box"
											onClick={showModal2}
										>
											<option>Add Lead</option>
										</select>
									</div>

									{/*modal-body--*/}
									<div
										class="modal fade filters-modal show"
										id="task"
										aria-modal="true"
									>
										<Modal show={isOpen2} onHide={hideModal2}>
											<Modal.Body>
												<div
													class="modal-dialog modal-lg add-leads"
													role="document"
												>
													{messageLead && (
														<Alert
															variant={
																statusLead === 'success' ? 'success' : 'danger'
															}
														>
															{messageLead}
														</Alert>
													)}

													<div class="modal-content ">
														<div class="modal-top leads-top">
															<h5>Add Lead</h5>
															<button
																type="button"
																class="close"
																data-dismiss="modal"
																aria-label="Close"
																onClick={hideModal2}
															>
																&times;
															</button>
														</div>

														<div class="modal-body">
															<form onSubmit={handleOnLeadSubmit}>
																{' '}
																<div class="student-filter-area">
																	<div class="row">
																		<div class="col-lg-12 col-12">
																			<div class="update-crm add-leads">
																				<div class="row">
																					<div class="col-md-6 col-12">
																						<div class="form-row">
																							<div class="form-group col-md-12 col-12">
																								<label>First Name</label>

																								<input
																									type="text"
																									class="form-control input-field"
																									placeholder=""
																									name="firstName"
																									value={firstName}
																									onChange={handleOnChange}
																								/>
																							</div>

																							<div class="form-group col-md-12 col-12">
																								<label>Middle Name</label>

																								<input
																									type="text"
																									class="form-control input-field"
																									placeholder=""
																									name="middleName"
																									value={middleName}
																									onChange={handleOnChange}
																								/>
																							</div>

																							<div class="form-group col-md-12 col-12">
																								<label>Last Name</label>

																								<input
																									type="text"
																									class="form-control input-field"
																									placeholder=""
																									name="lastName"
																									value={lastName}
																									onChange={handleOnChange}
																								/>
																							</div>

																							<div class="form-group col-md-12 col-12">
																								<label>Location Status</label>
																								<select
																									class="form-control"
																									name="locationStatus"
																									value={locationStatus}
																									id="cars"
																									onChange={handleOnChange}
																								>
																									<option>OnShore</option>
																									<option>OffShore</option>
																								</select>
																							</div>

																							<div class="form-group col-md-12 col-12">
																								<label>OnShore(Location)</label>

																								<input
																									type="text"
																									class="form-control input-field"
																									placeholder=""
																									name="onShoreLocation"
																									value={onShoreLocation}
																									onChange={handleOnChange}
																								/>
																							</div>

																							<div class="form-group col-md-12 col-12">
																								<label>
																									OffShore(Location)
																								</label>

																								<input
																									type="text"
																									class="form-control input-field"
																									placeholder=""
																									name="offShoreLocation"
																									value={offShoreLocation}
																									onChange={handleOnChange}
																								/>
																							</div>

																							<div class="form-group col-md-12 col-12">
																								<label>Lead Level</label>
																								<select
																									class="form-control"
																									id="cars"
																									name="leadLevel"
																									value={leadLevel}
																									onChange={handleOnChange}
																								>
																									<option>Very Hot</option>
																									<option>Hot</option>
																									<option>Cold</option>
																									<option>Warm</option>
																								</select>
																							</div>

																							<div class="form-group col-md-12 col-12">
																								<label>Referral source </label>
																								<select
																									class="form-control"
																									name="refferalSource"
																									value={refferalSource}
																									onChange={handleOnChange}
																								>
																									<option>unknown</option>
																									<option>Youtube</option>
																									<option>Instagram</option>
																									<option>Facebook</option>
																									<option>Google</option>
																								</select>
																							</div>
																						</div>
																					</div>

																					<div class="col-md-6 col-12 person-area">
																						<div class="person">
																							<div class="heading">
																								<i class="fa fa-user"></i>
																								<span>Person</span>
																							</div>
																							<div class="row">
																								<div class="form-group col-md-6 col-6 left">
																									<label>OffShorePhone</label>
																									<input
																										type="text"
																										class="form-control"
																										placeholder=""
																										name="offShorePhone"
																										value={offShorePhone}
																										onChange={handleOnChange}
																									/>
																								</div>
																								<div class="form-group col-md-6 col-6 left">
																									<label>OnShorePhone</label>
																									<input
																										type="text"
																										class="form-control"
																										placeholder=""
																										name="onShorePhone"
																										value={onShorePhone}
																										onChange={handleOnChange}
																									/>
																								</div>
																								<div class="col-md-6 col-6 form-group right">
																									<label>Gender</label>
																									<select
																										class="form-control"
																										id="cars"
																										name="gender"
																										value={gender}
																										onChange={handleOnChange}
																									>
																										<option>Male</option>
																										<option>Female</option>
																										<option>Others</option>
																									</select>
																								</div>
																								<div class="form-group col-md-6 col-6 left">
																									<label>Email</label>
																									<input
																										type="text"
																										class="form-control"
																										placeholder=""
																										name="email"
																										value={email}
																										onChange={handleOnChange}
																									/>
																								</div>
																								<div class="form-group col-md-6 col-6 left">
																									<label>Nationality</label>
																									<input
																										type="text"
																										class="form-control"
																										placeholder=""
																										name="nationality"
																										value={nationality}
																										onChange={handleOnChange}
																									/>
																								</div>

																								<div class="form-group col-md-6 col-6 left">
																									<label>Birthdate</label>
																									<input
																										type="date"
																										class="form-control"
																										placeholder=""
																										name="birthday"
																										value={birthday}
																										onChange={handleOnChange}
																									/>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div class="fotercontent">
																		<div class="footersingbtn">
																			<input
																				type="submit"
																				name="Save"
																				class="btn getin-btn"
																				value="Save"
																			/>
																		</div>
																	</div>
																	{/*<!-- Modal -->*/}
																</div>
															</form>
														</div>
													</div>
												</div>
											</Modal.Body>
										</Modal>
									</div>
								</div>
								<div class="col-md-6 col-12">
									<form class="activform ml-auto">
										<div class="form-row">
											<div class="form-group">
												<div class="activi-inputs">
													<select class="form-control filter-box">
														<option>Amount Of Leads</option>
														<option>2</option>
														<option>3</option>
														<option>4</option>
														<option>5</option>
													</select>

													<select class="form-control filter-box">
														<option>Lead Source</option>
														<option>2</option>
														<option>3</option>
														<option>4</option>
														<option>5</option>
													</select>

													<select class="form-control filter-box">
														<option>Lead Priority</option>
														<option>2</option>
														<option>3</option>
														<option>4</option>
														<option>5</option>
													</select>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*--student-leads start--*/}

				{/*-- commantable --*/}
				<div class="commantablesection uncategorized-list lead-page-list">
					<div class="container-fluid">
						<div class="row">
							<div class="col-md-12">
								<div class="stuednttable table-responsive">
									<table class="table">
										<thead>
											<tr>
												<th>NAME</th>
												<th>Gender</th>
												<th>Nationality</th>
												<th>Location Status</th>
												<th>PHONE</th>
												<th>Email</th>
												<th>Birthday</th>
												<th>Priority</th>
												<th>Created Date</th>
												<th>Created Time</th>
												<th>Assignee</th>
												<th>Refferal Source</th>
											</tr>
										</thead>
										<tbody>
											{leads
												.slice(0)
												.reverse()
												.map((item) => (
													<tr key={item.id}>
														{' '}
														<td onClick={() => showModal(item)}>
															{item.firstName}
														</td>
														<td>{item.gender}</td>
														<td>{item.nationality}</td>
														<td>{item.locationStatus}</td>
														<td>
															onShoreNO:-{item.onShorePhone}
															<br />
															offShoreNo:-{item.offShorePhone}
														</td>
														<td>{item.email}</td>
														<td>{item.birthday}</td>
														<td>{item.leadLevel}</td>
														<td>{Moment(item.addedAt).format('DD/MM/YYYY')}</td>
														<td>{Moment(item.addedAt).format('HH:mm:ss')}</td>
														<td>{item.userName}</td>
														<td>{item.refferalSource}</td>
														</tr>
														))}
														</tbody>
													</table>

															<div
																class="modal fade filters-modal show "
																id="leadsFilter"
																aria-modal="true"
															>
																<Modal show={isOpen} onHide={hideModal}>
																	<Modal.Body class="myleadsfilter">
																		<div
																			class="accordion md-accordion"
																			id="accordionEx"
																			role="tablist"
																			aria-multiselectable="true"
																		>
																			<div class="card">
																				<div role="tab" id="leadspopup">
																					<a
																						data-toggle="collapse"
																						data-parent="#accordionEx"
																						href="#leadspopup1"
																						aria-expanded="true"
																						aria-controls="leadspopup1"
																					>
																						<div class="arrow">
																							<i class="fas fa-angle-up"></i>
																							<i class="fas fa-angle-down"></i>
																						</div>
																					</a>
																				</div>

																				<div
																					id="leadspopup1"
																					class="collapse show"
																					role="tabpanel"
																					aria-labelledby="leadspopup1"
																					data-parent="#accordionEx"
																				>
																					<div class="card-body">
																						<div class="row">
																							<div class="col-lg-4 col-12">
																								<div class="leads-area">
																									<div class="lead-detail">
																										<p class="head">
																											{firstName}
																										</p>
																										<hr />
																										<p class="sub">Details</p>
																										<hr />
																										<ul>
																											<li>
																												Name:-{firstName}{' '}
																												{lastName}
																											</li>
																											<hr />
																											<li>
																												OnShore Phone:-
																												{onShorePhone}
																											</li>
																											<hr />
																											<li>
																												OffShore Phone:-
																												{offShorePhone}
																											</li>
																											<hr />
																											<li>Email:-{email}</li>
																											<hr />

																											<li>
																												Source:-
																												{refferalSource}
																											</li>
																											<hr />
																											<li>
																												Created Date:-
																												{Moment(addedAt).format(
																													'DD'
																												)}{' '}
																												{Moment(addedAt).format(
																													'MMMM'
																												)}{' '}
																												{Moment(addedAt).format(
																													'YYYY'
																												)}
																											</li>
																											<hr />
																											<li>
																												Created Time:-
																												{Moment(addedAt).format(
																													'h:mm a'
																												)}
																											</li>
																											<hr />
																											<li>
																												Assignee:{userName}
																											</li>
																											<hr />
																										</ul>
																									</div>
																								</div>
																								<div class="lead-action">
																									<ul>
																										<li>
																											<div class="list-view">
																												<i
																													class="fa fa-ellipsis-h"
																													aria-hidden="true"
																												></i>
																											</div>
																										</li>
																										<li>
																											<div class="delete">
																												<i
																													class="fa fa-trash"
																													aria-hidden="true"
																												></i>
																											</div>
																										</li>
																										<li>
																											<div class="convert">
																												<button
																													type="button"
																													class="btn btn-convert"
																												>
																													Convert to deal
																												</button>
																											</div>
																										</li>
																									</ul>
																								</div>
																							</div>
																							<div class="col-lg-8 col-12">
																								<div id="leadsFilter">
																									<div class="row">
																										<div class="col-md-12">
																											<div class="notes-area">
																												<Tabs className="react-tabs first">
																													<TabList>
																														<Tab>Notes</Tab>
																														<Tab>
																															Activity 2
																														</Tab>
																													</TabList>

																													<TabPanel>
																														<p>Hello</p>

																														<div class="planned">
																													<div class="row">
																														<div class="col-md-12 col-12">
																															<div class="planner-head">
																																<h5>PLANNED</h5>
																															</div>
																														</div>
																													</div>
																													<div class="call-area">
																														<div class="row">
																															<div class="col-md-11">
																																<div class="main-timeline call">
																																	<div class="timeline active">
																																		<a
																																			href="#"
																																			class="timeline-content"
																																		>
																																			<input
																																				type="radio"
																																				id="call"
																																				name="call"
																																				value="call"
																																			/>
																																			<label for="call">
																																				Call
																																			</label>
																																			<br />
																																		</a>
																																		<ul>
																																			<li>
																																				Wednesday
																																			</li>
																																			<li>
																																				Marco
																																			</li>
																																		</ul>

																																		<button
																																			class="editleads-icon"
																																			onClick={
																																				showModal3
																																			}
																																		>
																																			<i
																																				class="fa fa-ellipsis-h"
																																				aria-hidden="true"
																																			></i>
																																		</button>

																																		<div
																																			class="modal fade filters-modal show"
																																			id="leadsupdate"
																																			aria-modal="true"
																																		>
																																			<Modal
																																				show={
																																					isOpen3
																																				}
																																				onHide={
																																					hideModal3
																																				}
																																			>
																																				<div
																																					id="leadsFilter"
																																					class="leadsedit"
																																				>
																																					<div class="notes-area">
																																						<Modal.Body>
																																							<div class="fl-head">
																																								<h5>
																																									{' '}
																																									Edit
																																									activity
																																								</h5>
																																								<button
																																									onClick={
																																										hideModal3
																																									}
																																									className="close"
																																								>
																																									<span aria-hidden="true">
																																										&times;
																																									</span>
																																								</button>
																																							</div>

																																							<div class="row">
																																								<div class="col-md-12 col-12">
																																									<form>
																																										<div class="call-sec">
																																											<div class="container">
																																												<div class="row">
																																													<div class="col-md-1 col-2"></div>
																																													<div class="col-md-8 col-12">
																																														<div class="meeting-input">
																																															<Tabs>
																																																<TabPanel>
																																																	<div
																																																		id="home"
																																																		class="tab-pane active show"
																																																	>
																																																		<input
																																																			type="text"
																																																			class="form-control"
																																																			placeholder="Call"
																																																		/>
																																																	</div>
																																																</TabPanel>
																																																<TabPanel>
																																																	<div
																																																		id="menu1"
																																																		class="tab-pane"
																																																	>
																																																		<input
																																																			type="text"
																																																			class="form-control"
																																																			placeholder="Meeting"
																																																		/>
																																																	</div>
																																																</TabPanel>
																																																<TabPanel>
																																																	<div
																																																		id="menu2"
																																																		class="tab-pane"
																																																	>
																																																		<input
																																																			type="text"
																																																			class="form-control"
																																																			placeholder="Task"
																																																		/>
																																																	</div>
																																																</TabPanel>
																																																<TabPanel>
																																																	<div
																																																		id="menu3"
																																																		class="tab-pane"
																																																	>
																																																		<input
																																																			type="text"
																																																			class="form-control"
																																																			placeholder="Deadline"
																																																		/>
																																																	</div>
																																																</TabPanel>
																																																<TabPanel>
																																																	<div
																																																		id="menu4"
																																																		class="tab-pane"
																																																	>
																																																		<input
																																																			type="text"
																																																			class="form-control"
																																																			placeholder="Email"
																																																		/>
																																																	</div>
																																																</TabPanel>
																																																<TabPanel>
																																																	<div
																																																		id="menu5"
																																																		class="tab-pane"
																																																	>
																																																		<input
																																																			type="text"
																																																			class="form-control"
																																																			placeholder="Lunch"
																																																		/>
																																																	</div>
																																																</TabPanel>
																																																<TabList>
																																																	<Tab>
																																																		<div class="icon-bg">
																																																			<i
																																																				class="fa fa-phone"
																																																				aria-hidden="true"
																																																			></i>
																																																		</div>
																																																	</Tab>
																																																	<Tab>
																																																		<div class="icon-bg">
																																																			<i
																																																				class="fa fa-user"
																																																				aria-hidden="true"
																																																			></i>
																																																		</div>
																																																	</Tab>
																																																	<Tab>
																																																		<div class="icon-bg">
																																																			<i
																																																				class="fa fa-clock-o"
																																																				aria-hidden="true"
																																																			></i>
																																																		</div>
																																																	</Tab>
																																																	<Tab>
																																																		<div class="icon-bg">
																																																			<i
																																																				class="fa fa-flag"
																																																				aria-hidden="true"
																																																			></i>
																																																		</div>
																																																	</Tab>
																																																	<Tab>
																																																		<div class="icon-bg">
																																																			<i
																																																				class="fa fa-paper-plane"
																																																				aria-hidden="true"
																																																			></i>
																																																		</div>
																																																	</Tab>
																																																	<Tab>
																																																		<div class="icon-bg">
																																																			<i
																																																				class="fa fa-phone"
																																																				aria-hidden="true"
																																																			></i>
																																																		</div>
																																																	</Tab>
																																																</TabList>
																																															</Tabs>
																																														</div>
																																													</div>
																																												</div>
																																											</div>
																																										</div>

																																										<div class="date-sec">
																																											<div class="container">
																																												<div class="row">
																																													<div class="col-md-1 col-2">
																																														<i
																																															class="fa fa-clock-o left-icon"
																																															aria-hidden="true"
																																														></i>
																																													</div>
																																													<div class="col-md-8 col-12">
																																														<div class="time-area">
																																															<input
																																																type="date"
																																																class="form-control"
																																																placeholder="Date"
																																															/>
																																															<input
																																																type="text"
																																																class="form-control"
																																																place="time"
																																															/>
																																															<input
																																																type="date"
																																																class="form-control"
																																																placeholder="Date"
																																															/>
																																															<input
																																																type="text"
																																																class="form-control"
																																																place="time"
																																															/>
																																														</div>
																																													</div>
																																												</div>
																																											</div>
																																										</div>

																																										<div class="multi-section">
																																											<div class="container">
																																												<div class="row">
																																													<div class="col-md-1 col-2">
																																														<i
																																															class="fa fa-user left-icon"
																																															aria-hidden="true"
																																														></i>
																																													</div>
																																													<div class="col-md-8 col-12">
																																														<div class="hide-show">
																																															<span class="edit-on-click ">
																																																Guests
																																															</span>
																																														</div>
																																													</div>
																																												</div>

																																												<div class="row">
																																													<div class="col-md-1 col-2">
																																														<i
																																															class="fa fa-map-marker left-icon"
																																															aria-hidden="true"
																																														></i>
																																													</div>
																																													<div class="col-md-8 col-12">
																																														<div class="hide-show">
																																															<span class="edit-on-click ">
																																																Location
																																															</span>
																																														</div>
																																													</div>
																																												</div>
																																												<div class="row">
																																													<div class="col-md-1 col-2">
																																														<i
																																															class="fa fa-list left-icon"
																																															aria-hidden="true"
																																														></i>
																																													</div>
																																													<div class="col-md-8 col-12">
																																														<div class="hide-show">
																																															<span class="edit-on-click ">
																																																Description
																																															</span>
																																														</div>
																																													</div>
																																												</div>
																																											</div>
																																										</div>

																																										<div class="busy-dropdown">
																																											<div class="container">
																																												<div class="row">
																																													<div class="col-md-1 col-2">
																																														<i
																																															class="fa fa-sticky-note left-icon"
																																															aria-hidden="true"
																																														></i>
																																													</div>
																																													<div class="col-md-3 col-12">
																																														<select
																																															class="form-control"
																																															name="busy"
																																														>
																																															<option value="new"></option>
																																															<option value="new">
																																																Busy
																																															</option>
																																															<option value="exisitng">
																																																Free
																																															</option>
																																														</select>
																																													</div>
																																												</div>
																																											</div>
																																										</div>

																																										<div class="add-note">
																																											<div class="container">
																																												<div class="row">
																																													<div class="col-md-1 col-2">
																																														<i
																																															class="fa fa-sticky-note left-icon"
																																															aria-hidden="true"
																																														></i>
																																													</div>
																																													<div class="col-md-8 col-12">
																																														<textarea
																																															name="message"
																																															rows="4"
																																															class="form-control"
																																															placeholder="add"
																																														></textarea>
																																													</div>
																																												</div>
																																											</div>
																																										</div>

																																										<div class="user-dropdown">
																																											<div class="container">
																																												<div class="row">
																																													<div class="col-md-1 col-2">
																																														<i
																																															class="fa fa-user left-icon"
																																															aria-hidden="true"
																																														></i>
																																													</div>
																																													<div class="col-md-8 col-12">
																																														<select
																																															class="form-control"
																																															name="user"
																																														>
																																															<option value="new">
																																																Raj(You)
																																															</option>
																																															<option value="new">
																																																asasa
																																															</option>
																																															<option value="exisitng">
																																																asdsad
																																															</option>
																																														</select>
																																													</div>
																																												</div>
																																											</div>
																																										</div>

																																										<div class="user-dropdown">
																																											<div class="container">
																																												<div class="row">
																																													<div class="col-md-1 col-2">
																																														<i
																																															class="fa fa-link left-icon"
																																															aria-hidden="true"
																																														></i>
																																													</div>
																																													<div class="col-md-8 col-12">
																																														<div class="inputWithIcon">
																																															<input
																																																type="text"
																																																class="form-control"
																																																placeholder="Deal or Lead"
																																															/>
																																															<i
																																																class="fa fa-check-circle-o"
																																																aria-hidden="true"
																																															></i>
																																														</div>

																																														<div class="inputWithIcon">
																																															<input
																																																type="text"
																																																class="form-control"
																																																placeholder="Your name"
																																															/>
																																															<i
																																																class="fa fa-user fa-lg fa-fw"
																																																aria-hidden="true"
																																															></i>
																																														</div>

																																														<div class="inputWithIcon">
																																															<input
																																																type="text"
																																																class="form-control"
																																																placeholder="Organization"
																																															/>
																																															<i
																																																class="fa fa-building-o"
																																																aria-hidden="true"
																																															></i>
																																														</div>
																																													</div>
																																												</div>
																																											</div>
																																										</div>
																																									</form>
																																									<div class="form-foot">
																																										<div class="container">
																																											<div class="row">
																																												<div class="col-md-6 col-12 save-area">
																																													<button class="btn btn-save">
																																														Delete
																																													</button>
																																												</div>
																																												<div class="col-md-6 col-12 save-area">
																																													<div class="done">
																																														<input
																																															type="checkbox"
																																															id="vehicle1"
																																															name="vehicle1"
																																															value="Bike"
																																														/>
																																														<label for="vehicle1">
																																															Mark
																																															as
																																															Done
																																														</label>
																																													</div>

																																													<button class="btn btn-save">
																																														Save
																																													</button>
																																												</div>
																																											</div>
																																										</div>
																																									</div>
																																								</div>
																																							</div>
																																						</Modal.Body>
																																					</div>
																																				</div>

																																				<Modal.Footer></Modal.Footer>
																																			</Modal>
																																		</div>
																																	</div>
																																</div>
																															</div>
																														</div>
																													</div>

																													<div class="call-area">
																														<div class="row">
																															<div class="col-md-10">
																																<div class="main-timeline call sub">
																																	<div class="timeline">
																																		<div class="row">
																																			<div class="col-md-2 col-4">
																																				<div class="icon-bg">
																																					<i
																																						class="fa fa-phone"
																																						aria-hidden="true"
																																					></i>
																																				</div>
																																			</div>
																																			<div class="col-md-10 col-8">
																																				<input
																																					type="text"
																																					class="form-control small"
																																					placeholder="Call"
																																				/>
																																				<ul>
																																					<li>
																																						<div class="icon-bg">
																																							In
																																							1
																																							h
																																						</div>
																																					</li>
																																					<li>
																																						<div class="icon-bg">
																																							In
																																							3
																																							h
																																						</div>
																																					</li>
																																					<li>
																																						<div class="icon-bg">
																																							Tomorrow
																																						</div>
																																					</li>
																																					<li>
																																						<div class="icon-bg">
																																							Next
																																							Week
																																						</div>
																																					</li>
																																				</ul>
																																			</div>
																																		</div>
																																	</div>
																																</div>
																															</div>
																														</div>
																													</div>
																												</div>

																												<div class="done">
																													<div class="row">
																														<div class="col-md-12 col-12">
																															<div class="planner-head">
																																<h5>Done</h5>
																															</div>
																														</div>
																													</div>
																													<div class="call-area">
																														<div class="row">
																															<div class="col-md-11">
																																<div class="main-timeline call meeting">
																																	<div class="timeline active">
																																		<a
																																			href="#"
																																			class="timeline-content"
																																		>
																																			<input
																																				type="radio"
																																				id="call"
																																				name="call"
																																				value="call"
																																			/>
																																			<label for="call">
																																				Meeting
																																			</label>
																																			<br />
																																		</a>
																																		<ul>
																																			<li>
																																				Wednesday
																																			</li>
																																			<li>
																																				Marco
																																			</li>
																																		</ul>
																																	</div>
																																</div>
																															</div>
																														</div>
																													</div>
																												</div>

																												<div class="lead-created">
																													<div class="call-area">
																														<div class="row">
																															<div class="col-md-11">
																																<div class="main-timeline call created">
																																	<div class="timeline active">
																																		<a
																																			href="#"
																																			class="timeline-content"
																																		>
																																			<label for="call">
																																				Lead
																																				Created
																																			</label>
																																			<br />
																																			<p class="lead-info">
																																				{Moment(
																																					addedAt
																																				).format(
																																					'DD'
																																				)}{' '}
																																				{Moment(
																																					addedAt
																																				).format(
																																					'MMMM'
																																				)}{' '}
																																				{Moment(
																																					addedAt
																																				).format(
																																					'YYYY'
																																				)}
																																				,
																																				{Moment(
																																					addedAt
																																				).format(
																																					'dddd'
																																				)}{' '}
																																				at{' '}
																																				{Moment(
																																					addedAt
																																				).format(
																																					'h:mm a'
																																				)}
																																			</p>
																																		</a>
																																	</div>
																																</div>
																															</div>
																														</div>
																													</div>
																												</div>
																												
																													</TabPanel>

																													<TabPanel>
																														<div class="row">
																															<div class="col-md-12 col-12">
																																<form>
																																	<div class="call-sec">
																																		<div class="row">
																																			<div class="col-md-1 col-2"></div>
																																			<div class="col-md-11 col-12">
																																				<div class="meeting-input">
																																					<Tabs>
																																						<TabPanel>
																																							<div
																																								id="home"
																																								class="tab-pane active show"
																																							>
																																								<input
																																									type="text"
																																									class="form-control"
																																									placeholder="Call"
																																								/>
																																							</div>
																																						</TabPanel>
																																						<TabPanel>
																																							<div
																																								id="menu1"
																																								class="tab-pane"
																																							>
																																								<input
																																									type="text"
																																									class="form-control"
																																									placeholder="Meeting"
																																								/>
																																							</div>
																																						</TabPanel>
																																						<TabPanel>
																																							<div
																																								id="menu2"
																																								class="tab-pane"
																																							>
																																								<input
																																									type="text"
																																									class="form-control"
																																									placeholder="Task"
																																								/>
																																							</div>
																																						</TabPanel>
																																						<TabPanel>
																																							<div
																																								id="menu3"
																																								class="tab-pane"
																																							>
																																								<input
																																									type="text"
																																									class="form-control"
																																									placeholder="Deadline"
																																								/>
																																							</div>
																																						</TabPanel>
																																						<TabPanel>
																																							<div
																																								id="menu4"
																																								class="tab-pane"
																																							>
																																								<input
																																									type="text"
																																									class="form-control"
																																									placeholder="Email"
																																								/>
																																							</div>
																																						</TabPanel>
																																						<TabPanel>
																																							<div
																																								id="menu5"
																																								class="tab-pane"
																																							>
																																								<input
																																									type="text"
																																									class="form-control"
																																									placeholder="Lunch"
																																								/>
																																							</div>
																																						</TabPanel>
																																						<TabList>
																																							<Tab>
																																								<div class="icon-bg">
																																									<i
																																										class="fa fa-phone"
																																										aria-hidden="true"
																																									></i>
																																								</div>
																																							</Tab>
																																							<Tab>
																																								<div class="icon-bg">
																																									<i
																																										class="fa fa-user"
																																										aria-hidden="true"
																																									></i>
																																								</div>
																																							</Tab>
																																							<Tab>
																																								<div class="icon-bg">
																																									<i
																																										class="fa fa-clock-o"
																																										aria-hidden="true"
																																									></i>
																																								</div>
																																							</Tab>
																																							<Tab>
																																								<div class="icon-bg">
																																									<i
																																										class="fa fa-flag"
																																										aria-hidden="true"
																																									></i>
																																								</div>
																																							</Tab>
																																							<Tab>
																																								<div class="icon-bg">
																																									<i
																																										class="fa fa-paper-plane"
																																										aria-hidden="true"
																																									></i>
																																								</div>
																																							</Tab>
																																							<Tab>
																																								<div class="icon-bg">
																																									<i
																																										class="fa fa-phone"
																																										aria-hidden="true"
																																									></i>
																																								</div>
																																							</Tab>
																																						</TabList>
																																					</Tabs>
																																				</div>
																																			</div>
																																		</div>
																																	</div>

																																	<div class="date-sec">
																																		<div class="row">
																																			<div class="col-md-1 col-2">
																																				<i
																																					class="fa fa-clock-o left-icon"
																																					aria-hidden="true"
																																				></i>
																																			</div>
																																			<div class="col-md-11 col-12">
																																				<div class="time-area">
																																					<input
																																						type="date"
																																						class="form-control"
																																						placeholder="Date"
																																					/>
																																					<input
																																						type="text"
																																						class="form-control"
																																						place="time"
																																					/>
																																					<input
																																						type="date"
																																						class="form-control"
																																						placeholder="Date"
																																					/>
																																					<input
																																						type="text"
																																						class="form-control"
																																						place="time"
																																					/>
																																				</div>
																																			</div>
																																		</div>
																																	</div>

																																	<div class="multi-section">
																																		<div class="row">
																																			<div class="col-md-1 col-2">
																																				<i
																																					class="fa fa-user left-icon"
																																					aria-hidden="true"
																																				></i>
																																			</div>
																																			<div class="col-md-11 col-12">
																																				<div class="hide-show">
																																					<span class="edit-on-click ">
																																						Guests
																																					</span>
																																				</div>
																																			</div>
																																		</div>

																																		<div class="row">
																																			<div class="col-md-1 col-2">
																																				<i
																																					class="fa fa-map-marker left-icon"
																																					aria-hidden="true"
																																				></i>
																																			</div>
																																			<div class="col-md-11 col-12">
																																				<div class="hide-show">
																																					<span class="edit-on-click ">
																																						Location
																																					</span>
																																				</div>
																																			</div>
																																		</div>
																																		<div class="row">
																																			<div class="col-md-1 col-2">
																																				<i
																																					class="fa fa-list left-icon"
																																					aria-hidden="true"
																																				></i>
																																			</div>
																																			<div class="col-md-11 col-12">
																																				<div class="hide-show">
																																					<span class="edit-on-click ">
																																						Description
																																					</span>
																																				</div>
																																			</div>
																																		</div>
																																	</div>

																																	<div class="busy-dropdown">
																																		<div class="row">
																																			<div class="col-md-1 col-2">
																																				<i
																																					class="fa fa-sticky-note left-icon"
																																					aria-hidden="true"
																																				></i>
																																			</div>
																																			<div class="col-md-3 col-12">
																																				<select
																																					class="form-control"
																																					name="busy"
																																				>
																																					<option value="new"></option>
																																					<option value="new">
																																						Busy
																																					</option>
																																					<option value="exisitng">
																																						Free
																																					</option>
																																				</select>
																																			</div>
																																		</div>
																																	</div>

																																	<div class="add-note">
																																		<div class="row">
																																			<div class="col-md-1 col-2">
																																				<i
																																					class="fa fa-sticky-note left-icon"
																																					aria-hidden="true"
																																				></i>
																																			</div>
																																			<div class="col-md-11 col-12">
																																				<textarea
																																					name="message"
																																					rows="4"
																																					class="form-control"
																																					placeholder="add"
																																				></textarea>
																																			</div>
																																		</div>
																																	</div>

																																	<div class="user-dropdown">
																																		<div class="row">
																																			<div class="col-md-1 col-2">
																																				<i
																																					class="fa fa-user left-icon"
																																					aria-hidden="true"
																																				></i>
																																			</div>
																																			<div class="col-md-11 col-12">
																																				<select
																																					class="form-control"
																																					name="user"
																																				>
																																					<option value="new">
																																						Raj(You)
																																					</option>
																																					<option value="new">
																																						asasa
																																					</option>
																																					<option value="exisitng">
																																						asdsad
																																					</option>
																																				</select>
																																			</div>
																																		</div>
																																	</div>

																																	<div class="user-dropdown">
																																		<div class="row">
																																			<div class="col-md-1 col-2">
																																				<i
																																					class="fa fa-link left-icon"
																																					aria-hidden="true"
																																				></i>
																																			</div>
																																			<div class="col-md-11 col-12">
																																				<div class="inputWithIcon">
																																					<input
																																						type="text"
																																						class="form-control"
																																						placeholder="Deal or Lead"
																																					/>
																																					<i
																																						class="fa fa-check-circle-o"
																																						aria-hidden="true"
																																					></i>
																																				</div>

																																				<div class="inputWithIcon">
																																					<input
																																						type="text"
																																						class="form-control"
																																						placeholder="Your name"
																																					/>
																																					<i
																																						class="fa fa-user fa-lg fa-fw"
																																						aria-hidden="true"
																																					></i>
																																				</div>

																																				<div class="inputWithIcon">
																																					<input
																																						type="text"
																																						class="form-control"
																																						placeholder="Organization"
																																					/>
																																					<i
																																						class="fa fa-building-o"
																																						aria-hidden="true"
																																					></i>
																																				</div>
																																			</div>
																																		</div>
																																	</div>

																																	<div class="form-foot">
																																		<div class="row">
																																			<div class="col-md-5 col-12"></div>
																																			<div class="col-md-7 col-12 save-area">
																																				<div class="done">
																																					<input
																																						type="checkbox"
																																						id="vehicle1"
																																						name="vehicle1"
																																						value="Bike"
																																					/>
																																					<label for="vehicle1">
																																						Mark
																																						as
																																						Done
																																					</label>
																																				</div>
																																				<button class="btn btn-cancel">
																																					Cancel
																																				</button>
																																				<button class="btn btn-save">
																																					Save
																																				</button>
																																			</div>
																																		</div>
																																	</div>
																																</form>
																															</div>
																														</div>
																													</TabPanel>
																												</Tabs>

																												
																											</div>
																										</div>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																					<Modal.Footer>
																						<div class="fotercontent">
																							<div class="rest">
																								<a href="/#">
																									<span>
																										<i class="far fa-redo"></i>
																									</span>
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
																					</Modal.Footer>
																				</div>
																			</div>
																		</div>
																	</Modal.Body>
																</Modal>
															</div>
												
								</div>

								{/*modal-body--*/}
							</div>
						</div>
					</div>
					{/*-- commantable end here --*/}
				</div>
			</div>
		</div>
	);
};

export default Leads;
