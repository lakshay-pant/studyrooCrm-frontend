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
import { leadTask } from './leadTaskAction';
import { deleteLead } from './deleteLeadAction';
import { addLeadResetSuccessMSg } from './addLeadSlice';
import { deleteTask } from './deleteTaskAction';
import { deleteLeadTask } from './deleteLeadTaskAction';

import Moment from 'moment';

const Leads = () => {
	const { isLoadingLead, statusLead, messageLead } = useSelector(
		(state) => state.addLead
	);

	const { leads, isLoadingShowlead, error } = useSelector(
		(state) => state.leadList
	);

	const { lead, isLoadingShowSingleLead, errorSingleLead } = useSelector(
		(state) => state.singleLead
	);

	const completedTasks =
		lead &&
		lead.leadTasks.filter(function (lead) {
			return lead.taskCompleted === true;
		});

	const incompletedTasks =
		lead &&
		lead.leadTasks.filter(function (lead) {
			return lead.taskCompleted === false;
		});

	const [isOpen, setIsOpen] = useState(false);
	const [isOpen2, setIsOpen2] = useState(false);
	const [isOpen3, setIsOpen3] = useState(false);
	const [isOpen4, setIsOpen4] = useState(false);
	const [isOpen5, setIsOpen5] = useState(false);
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
	const [taskStatus, setTaskStatus] = useState('');
	const [taskStartDate, setTaskStartDate] = useState('');
	const [taskEndDate, setTaskEndDate] = useState('');
	const [taskNote, setTaskNote] = useState('');
	const [assignee, setAssignee] = useState('');
	const [taskCompleted, setTaskCompleted] = useState(false);
	const [statusNote, setStatusNote] = useState('');
	const [leadId, setLeadId] = useState('');
	const [taskEndTime, setTaskEndTime] = useState('');
	const [taskStartTime, setTaskStartTime] = useState('');
	const [leadTaskId, setLeadTaskId] = useState('');

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

			case 'statusNote':
				setStatusNote(value);
				break;

			case 'taskStartDate':
				setTaskStartDate(value);
				break;

			case 'taskEndDate':
				setTaskEndDate(value);
				break;

			case 'taskNote':
				setTaskNote(value);
				break;

			case 'assignee':
				setAssignee(value);
				break;

			case 'taskStartTime':
				setTaskStartTime(value);
				break;

			case 'taskEndTime':
				setTaskEndTime(value);
				break;

			default:
				break;
		}
	};

	const deleteLeadRecord = async () => {
		await dispatch(deleteLead(leadId));
		await showAddedLeads();
		hideModal();
	};

	const deleteTaskRecord = async () => {
		await dispatch(deleteLeadTask(leadId, leadTaskId));
		await showAddedLeads();
	};

	const showAddedLeads = () => {
		dispatch(fetchAllLeads());
	};

	const handleOnLeadTaskSubmit = async (e) => {
		e.preventDefault();

		const newLeadTask = {
			statusNote,
			taskStatus,
			taskStartDate,
			taskEndDate,
			taskNote,
			assignee,
			taskCompleted,
			taskStartTime,
			taskEndTime,
		};
		console.log('TASKS', newLeadTask);
		await dispatch(leadTask(newLeadTask, leadId));
		await dispatch(fetchSingleLead(leadId));
		await showAddedLeads();
		if (taskCompleted === true) {
			setTaskCompleted(false);
		}
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
		hideModal2();
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
		setLeadId(item._id);
	};

	const showModal2 = () => {
		setIsOpen2(true);
	};

	const hideModal = () => {
		setIsOpen(false);
		setFirstName('');
		setMiddleName('');
		setLastName('');
		setEmail('');
		setGender('');
		setOnShoreLocation('');
		setOffShoreLocation('');
		setNationality('');
		setOffShorePhone('');
		setOnShorePhone('');
		setLeadLevel('');
		setLocationStatus('');
		setBirthday('');
		setRefferalSource('');
		setAddedAt('');
		setUserName('');
	};
	const hideModal2 = () => {
		dispatch(addLeadResetSuccessMSg());
		setIsOpen2(false);
	};

	const showModal3 = (item) => {
		setIsOpen3(true);
		setLeadTaskId(item._id);
		console.log(leadTaskId);
	};

	const hideModal3 = () => {
		setIsOpen3(false);
	};

	const showModal4 = () => {
		setIsOpen4(true);
	};

	const hideModal4 = () => {
		setIsOpen4(false);
	};

	const showModal5 = (item) => {
		setIsOpen5(true);
		setLeadTaskId(item._id);
	};

	const hideModal5 = () => {
		setIsOpen5(false);
	};

	useEffect(() => {
		if (!leads.length) {
			dispatch(fetchAllLeads());
		}
	}, [leads, dispatch]);

	useEffect(() => {
		showAddedLeads();
	}, []);

	useEffect(() => {
		dispatch(fetchSingleLead(leadId));
	}, []);

	useEffect(() => {
		messageLead && dispatch(addLeadResetSuccessMSg());
	}, [dispatch]);

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
																				<p class="head">{firstName}</p>
																				<hr />
																				<p class="sub">Details</p>
																				<hr />
																				<ul>
																					<li>
																						Name:-{firstName} {lastName}
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
																						{Moment(addedAt).format('DD')}{' '}
																						{Moment(addedAt).format('MMMM')}{' '}
																						{Moment(addedAt).format('YYYY')}
																					</li>
																					<hr />
																					<li>
																						Created Time:-
																						{Moment(addedAt).format('h:mm a')}
																					</li>
																					<hr />
																					<li>Assignee:{userName}</li>
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
																							onClick={() => deleteLeadRecord()}
																						></i>
																					</div>
																				</li>
																				<li>
																					<div class="convert">
																						<button
																							type="button"
																							class="btn btn-convert"
																							onClick={showModal4}
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
																								<Tab>Activity 2</Tab>
																							</TabList>

																							<TabPanel>
																								<div class="planned">
																									<div class="row">
																										<div class="col-md-12 col-12">
																											<div class="planner-head">
																												<h5>PLANNED</h5>
																											</div>
																										</div>
																									</div>
																									{incompletedTasks &&
																									incompletedTasks.length ? (
																										incompletedTasks
																											.reverse()
																											.map((incompleteTask) => (
																												<div class="call-area">
																													<div class="row">
																														<div class="col-md-1">
																															<div class="call-icon">
																																<i class="fas fa-inbox"></i>
																															</div>
																														</div>
																														<div class="col-md-10">
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
																																			{
																																				incompleteTask.taskStatus
																																			}
																																		</label>
																																		<br />
																																	</a>
																																	<ul>
																																		<li>
																																			{
																																				incompleteTask.taskEndDate
																																			}
																																		</li>
																																		<li>
																																			{
																																				incompleteTask.assignee
																																			}
																																		</li>
																																	</ul>

																																	<button
																																		class="editleads-icon"
																																		onClick={() =>
																																			showModal3(
																																				incompleteTask
																																			)
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
																																																		name="statusNote"
																																																		value={
																																																			statusNote
																																																		}
																																																		onChange={
																																																			handleOnChange
																																																		}
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
																																																		name="statusNote"
																																																		value={
																																																			statusNote
																																																		}
																																																		onChange={
																																																			handleOnChange
																																																		}
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
																																																		name="statusNote"
																																																		value={
																																																			statusNote
																																																		}
																																																		onChange={
																																																			handleOnChange
																																																		}
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
																																																		name="statusNote"
																																																		value={
																																																			statusNote
																																																		}
																																																		onChange={
																																																			handleOnChange
																																																		}
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
																																																		name="statusNote"
																																																		value={
																																																			statusNote
																																																		}
																																																		onChange={
																																																			handleOnChange
																																																		}
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
																																																		name="statusNote"
																																																		value={
																																																			statusNote
																																																		}
																																																		onChange={
																																																			handleOnChange
																																																		}
																																																	/>
																																																</div>
																																															</TabPanel>
																																															<TabList>
																																																<Tab>
																																																	<div class="icon-bg">
																																																		<i
																																																			class="fa fa-phone"
																																																			aria-hidden="true"
																																																			onClick={() =>
																																																				setTaskStatus(
																																																					'Calling'
																																																				)
																																																			}
																																																		></i>
																																																	</div>
																																																</Tab>
																																																<Tab>
																																																	<div class="icon-bg">
																																																		<i
																																																			class="fa fa-user"
																																																			aria-hidden="true"
																																																			onClick={() =>
																																																				setTaskStatus(
																																																					'Meeting'
																																																				)
																																																			}
																																																		></i>
																																																	</div>
																																																</Tab>
																																																<Tab>
																																																	<div class="icon-bg">
																																																		<i
																																																			class="fa fa-clock-o"
																																																			aria-hidden="true"
																																																			onClick={() =>
																																																				setTaskStatus(
																																																					'Task'
																																																				)
																																																			}
																																																		></i>
																																																	</div>
																																																</Tab>
																																																<Tab>
																																																	<div class="icon-bg">
																																																		<i
																																																			class="fa fa-flag"
																																																			aria-hidden="true"
																																																			onClick={() =>
																																																				setTaskStatus(
																																																					'Deadline'
																																																				)
																																																			}
																																																		></i>
																																																	</div>
																																																</Tab>
																																																<Tab>
																																																	<div class="icon-bg">
																																																		<i
																																																			class="fa fa-paper-plane"
																																																			aria-hidden="true"
																																																			onClick={() =>
																																																				setTaskStatus(
																																																					'Email'
																																																				)
																																																			}
																																																		></i>
																																																	</div>
																																																</Tab>
																																																<Tab>
																																																	<div class="icon-bg">
																																																		<i
																																																			class="fa fa-phone"
																																																			aria-hidden="true"
																																																			onClick={() =>
																																																				setTaskStatus(
																																																					'Lunch'
																																																				)
																																																			}
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
																																															name="taskStartDate"
																																															value={
																																																taskStartDate
																																															}
																																															onChange={
																																																handleOnChange
																																															}
																																														/>

																																														<select
																																															class="form-control"
																																															id="time"
																																															name="taskStartTime"
																																															value={
																																																taskStartTime
																																															}
																																															onChange={
																																																handleOnChange
																																															}
																																														>
																																															<option>
																																																12:00
																																																AM
																																															</option>
																																															<option>
																																																12:15
																																																AM
																																															</option>
																																															<option>
																																																12:30
																																																AM
																																															</option>
																																															<option>
																																																12:45
																																																AM
																																															</option>
																																															<option>
																																																1:00
																																																AM
																																															</option>
																																															<option>
																																																1:15
																																																AM
																																															</option>
																																															<option>
																																																1:30
																																																AM
																																															</option>
																																															<option>
																																																1:45
																																																AM
																																															</option>
																																															<option>
																																																2:00
																																																AM
																																															</option>
																																															<option>
																																																2:15
																																																AM
																																															</option>
																																															<option>
																																																2:30
																																																AM
																																															</option>
																																															<option>
																																																2:45
																																																AM
																																															</option>
																																															<option>
																																																3:00
																																																AM
																																															</option>
																																															<option>
																																																3:15
																																																AM
																																															</option>
																																															<option>
																																																3:30
																																																AM
																																															</option>
																																															<option>
																																																3:45
																																																AM
																																															</option>
																																															<option>
																																																4:00
																																																AM
																																															</option>
																																															<option>
																																																4:15
																																																AM
																																															</option>
																																															<option>
																																																4:30
																																																AM
																																															</option>
																																															<option>
																																																4:45
																																																AM
																																															</option>
																																															<option>
																																																5:00
																																																AM
																																															</option>
																																															<option>
																																																5:15
																																																AM
																																															</option>
																																															<option>
																																																5:30
																																																AM
																																															</option>
																																															<option>
																																																5:45
																																																AM
																																															</option>
																																															<option>
																																																6:00
																																																AM
																																															</option>
																																															<option>
																																																6:15
																																																AM
																																															</option>
																																															<option>
																																																6:30
																																																AM
																																															</option>
																																															<option>
																																																6:45
																																																AM
																																															</option>
																																															<option>
																																																7:00
																																																AM
																																															</option>
																																															<option>
																																																7:15
																																																AM
																																															</option>
																																															<option>
																																																7:30
																																																AM
																																															</option>
																																															<option>
																																																7:45
																																																AM
																																															</option>
																																															<option>
																																																8:00
																																																AM
																																															</option>
																																															<option>
																																																8:15
																																																AM
																																															</option>
																																															<option>
																																																8:30
																																																AM
																																															</option>
																																															<option>
																																																8:45
																																																AM
																																															</option>
																																															<option>
																																																9:00
																																																AM
																																															</option>
																																															<option>
																																																9:15
																																																AM
																																															</option>
																																															<option>
																																																9:30
																																																AM
																																															</option>
																																															<option>
																																																9:45
																																																AM
																																															</option>
																																															<option>
																																																10:00
																																																AM
																																															</option>
																																															<option>
																																																10:15
																																																AM
																																															</option>
																																															<option>
																																																10:30
																																																AM
																																															</option>
																																															<option>
																																																10:45
																																																AM
																																															</option>
																																															<option>
																																																11:00
																																																AM
																																															</option>
																																															<option>
																																																11:15
																																																AM
																																															</option>
																																															<option>
																																																11:30
																																																AM
																																															</option>
																																															<option>
																																																11:45
																																																AM
																																															</option>
																																															<option>
																																																12:00
																																																PM
																																															</option>
																																															<option>
																																																12:15
																																																PM
																																															</option>
																																															<option>
																																																12:30
																																																PM
																																															</option>
																																															<option>
																																																12:45
																																																PM
																																															</option>
																																															<option>
																																																1:00
																																																PM
																																															</option>
																																															<option>
																																																1:15
																																																PM
																																															</option>
																																															<option>
																																																1:30
																																																PM
																																															</option>
																																															<option>
																																																1:45
																																																PM
																																															</option>
																																															<option>
																																																2:00
																																																PM
																																															</option>
																																															<option>
																																																2:15
																																																PM
																																															</option>
																																															<option>
																																																2:30
																																																PM
																																															</option>
																																															<option>
																																																2:45
																																																PM
																																															</option>
																																															<option>
																																																3:00
																																																PM
																																															</option>
																																															<option>
																																																3:15
																																																PM
																																															</option>
																																															<option>
																																																3:30
																																																PM
																																															</option>
																																															<option>
																																																3:45
																																																PM
																																															</option>
																																															<option>
																																																4:00
																																																PM
																																															</option>
																																															<option>
																																																4:15
																																																PM
																																															</option>
																																															<option>
																																																4:30
																																																PM
																																															</option>
																																															<option>
																																																4:45
																																																PM
																																															</option>
																																															<option>
																																																5:00
																																																PM
																																															</option>
																																															<option>
																																																5:15
																																																PM
																																															</option>
																																															<option>
																																																5:30
																																																PM
																																															</option>
																																															<option>
																																																5:45
																																																PM
																																															</option>
																																															<option>
																																																6:00
																																																PM
																																															</option>
																																															<option>
																																																6:15
																																																PM
																																															</option>
																																															<option>
																																																6:30
																																																PM
																																															</option>
																																															<option>
																																																6:45
																																																PM
																																															</option>
																																															<option>
																																																7:00
																																																PM
																																															</option>
																																															<option>
																																																7:15
																																																PM
																																															</option>
																																															<option>
																																																7:30
																																																PM
																																															</option>
																																															<option>
																																																7:45
																																																PM
																																															</option>
																																															<option>
																																																8:00
																																																PM
																																															</option>
																																															<option>
																																																8:15
																																																PM
																																															</option>
																																															<option>
																																																8:30
																																																PM
																																															</option>
																																															<option>
																																																8:45
																																																PM
																																															</option>
																																															<option>
																																																9:00
																																																PM
																																															</option>
																																															<option>
																																																9:15
																																																PM
																																															</option>
																																															<option>
																																																9:30
																																																PM
																																															</option>
																																															<option>
																																																9:45
																																																PM
																																															</option>
																																															<option>
																																																10:00
																																																PM
																																															</option>
																																															<option>
																																																10:15
																																																PM
																																															</option>
																																															<option>
																																																10:30
																																																PM
																																															</option>
																																															<option>
																																																10:45
																																																PM
																																															</option>
																																															<option>
																																																11:00
																																																PM
																																															</option>
																																															<option>
																																																11:15
																																																PM
																																															</option>
																																															<option>
																																																11:30
																																																PM
																																															</option>
																																															<option>
																																																11:45
																																																PM
																																															</option>
																																														</select>
																																														<input
																																															type="date"
																																															class="form-control"
																																															placeholder="Date"
																																															name="taskEndDate"
																																															value={
																																																taskEndDate
																																															}
																																															onChange={
																																																handleOnChange
																																															}
																																														/>
																																														<select
																																															class="form-control"
																																															id="time"
																																															name="taskEndTime"
																																															value={
																																																taskEndTime
																																															}
																																															onChange={
																																																handleOnChange
																																															}
																																														>
																																															<option>
																																																12:00
																																																AM
																																															</option>
																																															<option>
																																																12:15
																																																AM
																																															</option>
																																															<option>
																																																12:30
																																																AM
																																															</option>
																																															<option>
																																																12:45
																																																AM
																																															</option>
																																															<option>
																																																1:00
																																																AM
																																															</option>
																																															<option>
																																																1:15
																																																AM
																																															</option>
																																															<option>
																																																1:30
																																																AM
																																															</option>
																																															<option>
																																																1:45
																																																AM
																																															</option>
																																															<option>
																																																2:00
																																																AM
																																															</option>
																																															<option>
																																																2:15
																																																AM
																																															</option>
																																															<option>
																																																2:30
																																																AM
																																															</option>
																																															<option>
																																																2:45
																																																AM
																																															</option>
																																															<option>
																																																3:00
																																																AM
																																															</option>
																																															<option>
																																																3:15
																																																AM
																																															</option>
																																															<option>
																																																3:30
																																																AM
																																															</option>
																																															<option>
																																																3:45
																																																AM
																																															</option>
																																															<option>
																																																4:00
																																																AM
																																															</option>
																																															<option>
																																																4:15
																																																AM
																																															</option>
																																															<option>
																																																4:30
																																																AM
																																															</option>
																																															<option>
																																																4:45
																																																AM
																																															</option>
																																															<option>
																																																5:00
																																																AM
																																															</option>
																																															<option>
																																																5:15
																																																AM
																																															</option>
																																															<option>
																																																5:30
																																																AM
																																															</option>
																																															<option>
																																																5:45
																																																AM
																																															</option>
																																															<option>
																																																6:00
																																																AM
																																															</option>
																																															<option>
																																																6:15
																																																AM
																																															</option>
																																															<option>
																																																6:30
																																																AM
																																															</option>
																																															<option>
																																																6:45
																																																AM
																																															</option>
																																															<option>
																																																7:00
																																																AM
																																															</option>
																																															<option>
																																																7:15
																																																AM
																																															</option>
																																															<option>
																																																7:30
																																																AM
																																															</option>
																																															<option>
																																																7:45
																																																AM
																																															</option>
																																															<option>
																																																8:00
																																																AM
																																															</option>
																																															<option>
																																																8:15
																																																AM
																																															</option>
																																															<option>
																																																8:30
																																																AM
																																															</option>
																																															<option>
																																																8:45
																																																AM
																																															</option>
																																															<option>
																																																9:00
																																																AM
																																															</option>
																																															<option>
																																																9:15
																																																AM
																																															</option>
																																															<option>
																																																9:30
																																																AM
																																															</option>
																																															<option>
																																																9:45
																																																AM
																																															</option>
																																															<option>
																																																10:00
																																																AM
																																															</option>
																																															<option>
																																																10:15
																																																AM
																																															</option>
																																															<option>
																																																10:30
																																																AM
																																															</option>
																																															<option>
																																																10:45
																																																AM
																																															</option>
																																															<option>
																																																11:00
																																																AM
																																															</option>
																																															<option>
																																																11:15
																																																AM
																																															</option>
																																															<option>
																																																11:30
																																																AM
																																															</option>
																																															<option>
																																																11:45
																																																AM
																																															</option>
																																															<option>
																																																12:00
																																																PM
																																															</option>
																																															<option>
																																																12:15
																																																PM
																																															</option>
																																															<option>
																																																12:30
																																																PM
																																															</option>
																																															<option>
																																																12:45
																																																PM
																																															</option>
																																															<option>
																																																1:00
																																																PM
																																															</option>
																																															<option>
																																																1:15
																																																PM
																																															</option>
																																															<option>
																																																1:30
																																																PM
																																															</option>
																																															<option>
																																																1:45
																																																PM
																																															</option>
																																															<option>
																																																2:00
																																																PM
																																															</option>
																																															<option>
																																																2:15
																																																PM
																																															</option>
																																															<option>
																																																2:30
																																																PM
																																															</option>
																																															<option>
																																																2:45
																																																PM
																																															</option>
																																															<option>
																																																3:00
																																																PM
																																															</option>
																																															<option>
																																																3:15
																																																PM
																																															</option>
																																															<option>
																																																3:30
																																																PM
																																															</option>
																																															<option>
																																																3:45
																																																PM
																																															</option>
																																															<option>
																																																4:00
																																																PM
																																															</option>
																																															<option>
																																																4:15
																																																PM
																																															</option>
																																															<option>
																																																4:30
																																																PM
																																															</option>
																																															<option>
																																																4:45
																																																PM
																																															</option>
																																															<option>
																																																5:00
																																																PM
																																															</option>
																																															<option>
																																																5:15
																																																PM
																																															</option>
																																															<option>
																																																5:30
																																																PM
																																															</option>
																																															<option>
																																																5:45
																																																PM
																																															</option>
																																															<option>
																																																6:00
																																																PM
																																															</option>
																																															<option>
																																																6:15
																																																PM
																																															</option>
																																															<option>
																																																6:30
																																																PM
																																															</option>
																																															<option>
																																																6:45
																																																PM
																																															</option>
																																															<option>
																																																7:00
																																																PM
																																															</option>
																																															<option>
																																																7:15
																																																PM
																																															</option>
																																															<option>
																																																7:30
																																																PM
																																															</option>
																																															<option>
																																																7:45
																																																PM
																																															</option>
																																															<option>
																																																8:00
																																																PM
																																															</option>
																																															<option>
																																																8:15
																																																PM
																																															</option>
																																															<option>
																																																8:30
																																																PM
																																															</option>
																																															<option>
																																																8:45
																																																PM
																																															</option>
																																															<option>
																																																9:00
																																																PM
																																															</option>
																																															<option>
																																																9:15
																																																PM
																																															</option>
																																															<option>
																																																9:30
																																																PM
																																															</option>
																																															<option>
																																																9:45
																																																PM
																																															</option>
																																															<option>
																																																10:00
																																																PM
																																															</option>
																																															<option>
																																																10:15
																																																PM
																																															</option>
																																															<option>
																																																10:30
																																																PM
																																															</option>
																																															<option>
																																																10:45
																																																PM
																																															</option>
																																															<option>
																																																11:00
																																																PM
																																															</option>
																																															<option>
																																																11:15
																																																PM
																																															</option>
																																															<option>
																																																11:30
																																																PM
																																															</option>
																																															<option>
																																																11:45
																																																PM
																																															</option>
																																														</select>
																																													</div>
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
																																														name="taskNote"
																																														value={
																																															taskNote
																																														}
																																														onChange={
																																															handleOnChange
																																														}
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
																																														name="assignee"
																																														value={
																																															assignee
																																														}
																																														onChange={
																																															handleOnChange
																																														}
																																													>
																																														<option value="new">
																																															{
																																																userName
																																															}
																																														</option>
																																														<option value="new">
																																															yo
																																														</option>
																																														<option value="exisitng">
																																															asdsad
																																														</option>
																																													</select>
																																												</div>
																																											</div>
																																										</div>
																																									</div>

																																									<div class="form-foot">
																																										<div class="container">
																																											<div class="row">
																																												<div class="col-md-6 col-12 save-area">
																																													<p>
																																														hey
																																													</p>
																																													<button
																																														class="btn btn-save"
																																														onClick={
																																															deleteTaskRecord
																																														}
																																													>
																																														Delete
																																													</button>
																																												</div>
																																												<div class="col-md-6 col-12 save-area">
																																													<div class="done">
																																														<input
																																															type="checkbox"
																																															id="vehicle1"
																																															onChange={(
																																																e
																																															) =>
																																																setTaskCompleted(
																																																	e
																																																		.target
																																																		.checked
																																																)
																																															}
																																														/>
																																														<label>
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
																																								</form>
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
																											))
																									) : (
																										<p>No task found</p>
																									)}
																								</div>

																								<div class="done">
																									<div class="row">
																										<div class="col-md-12 col-12">
																											<div class="planner-head">
																												<h5>Done</h5>
																											</div>
																										</div>
																									</div>
																									{completedTasks &&
																									completedTasks.length ? (
																										completedTasks
																											.reverse()
																											.map((completeTask) => (
																												<div class="call-area">
																													<div class="row">
																														<div class="col-md-1">
																															<div class="call-icon">
																																<i class="fas fa-inbox"></i>
																															</div>
																														</div>
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
																																			{
																																				completeTask.taskStatus
																																			}
																																		</label>
																																		<br />
																																	</a>
																																	<ul>
																																		<li>
																																			{
																																				completeTask.taskEndDate
																																			}
																																		</li>
																																		<li>
																																			{
																																				completeTask.assignee
																																			}
																																		</li>
																																	</ul>

																																	<button
																																		class="editleads-icon"
																																		onClick={() =>
																																			showModal5(
																																				completeTask
																																			)
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
																																				isOpen5
																																			}
																																			onHide={
																																				hideModal5
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
																																									hideModal5
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
																																																		name="statusNote"
																																																		value={
																																																			statusNote
																																																		}
																																																		onChange={
																																																			handleOnChange
																																																		}
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
																																																		name="statusNote"
																																																		value={
																																																			statusNote
																																																		}
																																																		onChange={
																																																			handleOnChange
																																																		}
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
																																																		name="statusNote"
																																																		value={
																																																			statusNote
																																																		}
																																																		onChange={
																																																			handleOnChange
																																																		}
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
																																																		name="statusNote"
																																																		value={
																																																			statusNote
																																																		}
																																																		onChange={
																																																			handleOnChange
																																																		}
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
																																																		name="statusNote"
																																																		value={
																																																			statusNote
																																																		}
																																																		onChange={
																																																			handleOnChange
																																																		}
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
																																																		name="statusNote"
																																																		value={
																																																			statusNote
																																																		}
																																																		onChange={
																																																			handleOnChange
																																																		}
																																																	/>
																																																</div>
																																															</TabPanel>
																																															<TabList>
																																																<Tab>
																																																	<div class="icon-bg">
																																																		<i
																																																			class="fa fa-phone"
																																																			aria-hidden="true"
																																																			onClick={() =>
																																																				setTaskStatus(
																																																					'Calling'
																																																				)
																																																			}
																																																		></i>
																																																	</div>
																																																</Tab>
																																																<Tab>
																																																	<div class="icon-bg">
																																																		<i
																																																			class="fa fa-user"
																																																			aria-hidden="true"
																																																			onClick={() =>
																																																				setTaskStatus(
																																																					'Meeting'
																																																				)
																																																			}
																																																		></i>
																																																	</div>
																																																</Tab>
																																																<Tab>
																																																	<div class="icon-bg">
																																																		<i
																																																			class="fa fa-clock-o"
																																																			aria-hidden="true"
																																																			onClick={() =>
																																																				setTaskStatus(
																																																					'Task'
																																																				)
																																																			}
																																																		></i>
																																																	</div>
																																																</Tab>
																																																<Tab>
																																																	<div class="icon-bg">
																																																		<i
																																																			class="fa fa-flag"
																																																			aria-hidden="true"
																																																			onClick={() =>
																																																				setTaskStatus(
																																																					'Deadline'
																																																				)
																																																			}
																																																		></i>
																																																	</div>
																																																</Tab>
																																																<Tab>
																																																	<div class="icon-bg">
																																																		<i
																																																			class="fa fa-paper-plane"
																																																			aria-hidden="true"
																																																			onClick={() =>
																																																				setTaskStatus(
																																																					'Email'
																																																				)
																																																			}
																																																		></i>
																																																	</div>
																																																</Tab>
																																																<Tab>
																																																	<div class="icon-bg">
																																																		<i
																																																			class="fa fa-phone"
																																																			aria-hidden="true"
																																																			onClick={() =>
																																																				setTaskStatus(
																																																					'Lunch'
																																																				)
																																																			}
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
																																															name="taskStartDate"
																																															value={
																																																taskStartDate
																																															}
																																															onChange={
																																																handleOnChange
																																															}
																																														/>

																																														<select
																																															class="form-control"
																																															id="time"
																																															name="taskStartTime"
																																															value={
																																																taskStartTime
																																															}
																																															onChange={
																																																handleOnChange
																																															}
																																														>
																																															<option>
																																																12:00
																																																AM
																																															</option>
																																															<option>
																																																12:15
																																																AM
																																															</option>
																																															<option>
																																																12:30
																																																AM
																																															</option>
																																															<option>
																																																12:45
																																																AM
																																															</option>
																																															<option>
																																																1:00
																																																AM
																																															</option>
																																															<option>
																																																1:15
																																																AM
																																															</option>
																																															<option>
																																																1:30
																																																AM
																																															</option>
																																															<option>
																																																1:45
																																																AM
																																															</option>
																																															<option>
																																																2:00
																																																AM
																																															</option>
																																															<option>
																																																2:15
																																																AM
																																															</option>
																																															<option>
																																																2:30
																																																AM
																																															</option>
																																															<option>
																																																2:45
																																																AM
																																															</option>
																																															<option>
																																																3:00
																																																AM
																																															</option>
																																															<option>
																																																3:15
																																																AM
																																															</option>
																																															<option>
																																																3:30
																																																AM
																																															</option>
																																															<option>
																																																3:45
																																																AM
																																															</option>
																																															<option>
																																																4:00
																																																AM
																																															</option>
																																															<option>
																																																4:15
																																																AM
																																															</option>
																																															<option>
																																																4:30
																																																AM
																																															</option>
																																															<option>
																																																4:45
																																																AM
																																															</option>
																																															<option>
																																																5:00
																																																AM
																																															</option>
																																															<option>
																																																5:15
																																																AM
																																															</option>
																																															<option>
																																																5:30
																																																AM
																																															</option>
																																															<option>
																																																5:45
																																																AM
																																															</option>
																																															<option>
																																																6:00
																																																AM
																																															</option>
																																															<option>
																																																6:15
																																																AM
																																															</option>
																																															<option>
																																																6:30
																																																AM
																																															</option>
																																															<option>
																																																6:45
																																																AM
																																															</option>
																																															<option>
																																																7:00
																																																AM
																																															</option>
																																															<option>
																																																7:15
																																																AM
																																															</option>
																																															<option>
																																																7:30
																																																AM
																																															</option>
																																															<option>
																																																7:45
																																																AM
																																															</option>
																																															<option>
																																																8:00
																																																AM
																																															</option>
																																															<option>
																																																8:15
																																																AM
																																															</option>
																																															<option>
																																																8:30
																																																AM
																																															</option>
																																															<option>
																																																8:45
																																																AM
																																															</option>
																																															<option>
																																																9:00
																																																AM
																																															</option>
																																															<option>
																																																9:15
																																																AM
																																															</option>
																																															<option>
																																																9:30
																																																AM
																																															</option>
																																															<option>
																																																9:45
																																																AM
																																															</option>
																																															<option>
																																																10:00
																																																AM
																																															</option>
																																															<option>
																																																10:15
																																																AM
																																															</option>
																																															<option>
																																																10:30
																																																AM
																																															</option>
																																															<option>
																																																10:45
																																																AM
																																															</option>
																																															<option>
																																																11:00
																																																AM
																																															</option>
																																															<option>
																																																11:15
																																																AM
																																															</option>
																																															<option>
																																																11:30
																																																AM
																																															</option>
																																															<option>
																																																11:45
																																																AM
																																															</option>
																																															<option>
																																																12:00
																																																PM
																																															</option>
																																															<option>
																																																12:15
																																																PM
																																															</option>
																																															<option>
																																																12:30
																																																PM
																																															</option>
																																															<option>
																																																12:45
																																																PM
																																															</option>
																																															<option>
																																																1:00
																																																PM
																																															</option>
																																															<option>
																																																1:15
																																																PM
																																															</option>
																																															<option>
																																																1:30
																																																PM
																																															</option>
																																															<option>
																																																1:45
																																																PM
																																															</option>
																																															<option>
																																																2:00
																																																PM
																																															</option>
																																															<option>
																																																2:15
																																																PM
																																															</option>
																																															<option>
																																																2:30
																																																PM
																																															</option>
																																															<option>
																																																2:45
																																																PM
																																															</option>
																																															<option>
																																																3:00
																																																PM
																																															</option>
																																															<option>
																																																3:15
																																																PM
																																															</option>
																																															<option>
																																																3:30
																																																PM
																																															</option>
																																															<option>
																																																3:45
																																																PM
																																															</option>
																																															<option>
																																																4:00
																																																PM
																																															</option>
																																															<option>
																																																4:15
																																																PM
																																															</option>
																																															<option>
																																																4:30
																																																PM
																																															</option>
																																															<option>
																																																4:45
																																																PM
																																															</option>
																																															<option>
																																																5:00
																																																PM
																																															</option>
																																															<option>
																																																5:15
																																																PM
																																															</option>
																																															<option>
																																																5:30
																																																PM
																																															</option>
																																															<option>
																																																5:45
																																																PM
																																															</option>
																																															<option>
																																																6:00
																																																PM
																																															</option>
																																															<option>
																																																6:15
																																																PM
																																															</option>
																																															<option>
																																																6:30
																																																PM
																																															</option>
																																															<option>
																																																6:45
																																																PM
																																															</option>
																																															<option>
																																																7:00
																																																PM
																																															</option>
																																															<option>
																																																7:15
																																																PM
																																															</option>
																																															<option>
																																																7:30
																																																PM
																																															</option>
																																															<option>
																																																7:45
																																																PM
																																															</option>
																																															<option>
																																																8:00
																																																PM
																																															</option>
																																															<option>
																																																8:15
																																																PM
																																															</option>
																																															<option>
																																																8:30
																																																PM
																																															</option>
																																															<option>
																																																8:45
																																																PM
																																															</option>
																																															<option>
																																																9:00
																																																PM
																																															</option>
																																															<option>
																																																9:15
																																																PM
																																															</option>
																																															<option>
																																																9:30
																																																PM
																																															</option>
																																															<option>
																																																9:45
																																																PM
																																															</option>
																																															<option>
																																																10:00
																																																PM
																																															</option>
																																															<option>
																																																10:15
																																																PM
																																															</option>
																																															<option>
																																																10:30
																																																PM
																																															</option>
																																															<option>
																																																10:45
																																																PM
																																															</option>
																																															<option>
																																																11:00
																																																PM
																																															</option>
																																															<option>
																																																11:15
																																																PM
																																															</option>
																																															<option>
																																																11:30
																																																PM
																																															</option>
																																															<option>
																																																11:45
																																																PM
																																															</option>
																																														</select>
																																														<input
																																															type="date"
																																															class="form-control"
																																															placeholder="Date"
																																															name="taskEndDate"
																																															value={
																																																taskEndDate
																																															}
																																															onChange={
																																																handleOnChange
																																															}
																																														/>
																																														<select
																																															class="form-control"
																																															id="time"
																																															name="taskEndTime"
																																															value={
																																																taskEndTime
																																															}
																																															onChange={
																																																handleOnChange
																																															}
																																														>
																																															<option>
																																																12:00
																																																AM
																																															</option>
																																															<option>
																																																12:15
																																																AM
																																															</option>
																																															<option>
																																																12:30
																																																AM
																																															</option>
																																															<option>
																																																12:45
																																																AM
																																															</option>
																																															<option>
																																																1:00
																																																AM
																																															</option>
																																															<option>
																																																1:15
																																																AM
																																															</option>
																																															<option>
																																																1:30
																																																AM
																																															</option>
																																															<option>
																																																1:45
																																																AM
																																															</option>
																																															<option>
																																																2:00
																																																AM
																																															</option>
																																															<option>
																																																2:15
																																																AM
																																															</option>
																																															<option>
																																																2:30
																																																AM
																																															</option>
																																															<option>
																																																2:45
																																																AM
																																															</option>
																																															<option>
																																																3:00
																																																AM
																																															</option>
																																															<option>
																																																3:15
																																																AM
																																															</option>
																																															<option>
																																																3:30
																																																AM
																																															</option>
																																															<option>
																																																3:45
																																																AM
																																															</option>
																																															<option>
																																																4:00
																																																AM
																																															</option>
																																															<option>
																																																4:15
																																																AM
																																															</option>
																																															<option>
																																																4:30
																																																AM
																																															</option>
																																															<option>
																																																4:45
																																																AM
																																															</option>
																																															<option>
																																																5:00
																																																AM
																																															</option>
																																															<option>
																																																5:15
																																																AM
																																															</option>
																																															<option>
																																																5:30
																																																AM
																																															</option>
																																															<option>
																																																5:45
																																																AM
																																															</option>
																																															<option>
																																																6:00
																																																AM
																																															</option>
																																															<option>
																																																6:15
																																																AM
																																															</option>
																																															<option>
																																																6:30
																																																AM
																																															</option>
																																															<option>
																																																6:45
																																																AM
																																															</option>
																																															<option>
																																																7:00
																																																AM
																																															</option>
																																															<option>
																																																7:15
																																																AM
																																															</option>
																																															<option>
																																																7:30
																																																AM
																																															</option>
																																															<option>
																																																7:45
																																																AM
																																															</option>
																																															<option>
																																																8:00
																																																AM
																																															</option>
																																															<option>
																																																8:15
																																																AM
																																															</option>
																																															<option>
																																																8:30
																																																AM
																																															</option>
																																															<option>
																																																8:45
																																																AM
																																															</option>
																																															<option>
																																																9:00
																																																AM
																																															</option>
																																															<option>
																																																9:15
																																																AM
																																															</option>
																																															<option>
																																																9:30
																																																AM
																																															</option>
																																															<option>
																																																9:45
																																																AM
																																															</option>
																																															<option>
																																																10:00
																																																AM
																																															</option>
																																															<option>
																																																10:15
																																																AM
																																															</option>
																																															<option>
																																																10:30
																																																AM
																																															</option>
																																															<option>
																																																10:45
																																																AM
																																															</option>
																																															<option>
																																																11:00
																																																AM
																																															</option>
																																															<option>
																																																11:15
																																																AM
																																															</option>
																																															<option>
																																																11:30
																																																AM
																																															</option>
																																															<option>
																																																11:45
																																																AM
																																															</option>
																																															<option>
																																																12:00
																																																PM
																																															</option>
																																															<option>
																																																12:15
																																																PM
																																															</option>
																																															<option>
																																																12:30
																																																PM
																																															</option>
																																															<option>
																																																12:45
																																																PM
																																															</option>
																																															<option>
																																																1:00
																																																PM
																																															</option>
																																															<option>
																																																1:15
																																																PM
																																															</option>
																																															<option>
																																																1:30
																																																PM
																																															</option>
																																															<option>
																																																1:45
																																																PM
																																															</option>
																																															<option>
																																																2:00
																																																PM
																																															</option>
																																															<option>
																																																2:15
																																																PM
																																															</option>
																																															<option>
																																																2:30
																																																PM
																																															</option>
																																															<option>
																																																2:45
																																																PM
																																															</option>
																																															<option>
																																																3:00
																																																PM
																																															</option>
																																															<option>
																																																3:15
																																																PM
																																															</option>
																																															<option>
																																																3:30
																																																PM
																																															</option>
																																															<option>
																																																3:45
																																																PM
																																															</option>
																																															<option>
																																																4:00
																																																PM
																																															</option>
																																															<option>
																																																4:15
																																																PM
																																															</option>
																																															<option>
																																																4:30
																																																PM
																																															</option>
																																															<option>
																																																4:45
																																																PM
																																															</option>
																																															<option>
																																																5:00
																																																PM
																																															</option>
																																															<option>
																																																5:15
																																																PM
																																															</option>
																																															<option>
																																																5:30
																																																PM
																																															</option>
																																															<option>
																																																5:45
																																																PM
																																															</option>
																																															<option>
																																																6:00
																																																PM
																																															</option>
																																															<option>
																																																6:15
																																																PM
																																															</option>
																																															<option>
																																																6:30
																																																PM
																																															</option>
																																															<option>
																																																6:45
																																																PM
																																															</option>
																																															<option>
																																																7:00
																																																PM
																																															</option>
																																															<option>
																																																7:15
																																																PM
																																															</option>
																																															<option>
																																																7:30
																																																PM
																																															</option>
																																															<option>
																																																7:45
																																																PM
																																															</option>
																																															<option>
																																																8:00
																																																PM
																																															</option>
																																															<option>
																																																8:15
																																																PM
																																															</option>
																																															<option>
																																																8:30
																																																PM
																																															</option>
																																															<option>
																																																8:45
																																																PM
																																															</option>
																																															<option>
																																																9:00
																																																PM
																																															</option>
																																															<option>
																																																9:15
																																																PM
																																															</option>
																																															<option>
																																																9:30
																																																PM
																																															</option>
																																															<option>
																																																9:45
																																																PM
																																															</option>
																																															<option>
																																																10:00
																																																PM
																																															</option>
																																															<option>
																																																10:15
																																																PM
																																															</option>
																																															<option>
																																																10:30
																																																PM
																																															</option>
																																															<option>
																																																10:45
																																																PM
																																															</option>
																																															<option>
																																																11:00
																																																PM
																																															</option>
																																															<option>
																																																11:15
																																																PM
																																															</option>
																																															<option>
																																																11:30
																																																PM
																																															</option>
																																															<option>
																																																11:45
																																																PM
																																															</option>
																																														</select>
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
																																														rows="4"
																																														class="form-control"
																																														placeholder="add"
																																														name="taskNote"
																																														value={
																																															taskNote
																																														}
																																														onChange={
																																															handleOnChange
																																														}
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
																																														name="assignee"
																																														value={
																																															assignee
																																														}
																																														onChange={
																																															handleOnChange
																																														}
																																													>
																																														<option value="new">
																																															{
																																																userName
																																															}
																																														</option>
																																														<option value="new">
																																															yo
																																														</option>
																																														<option value="exisitng">
																																															asdsad
																																														</option>
																																													</select>
																																												</div>
																																											</div>
																																										</div>
																																									</div>

																																									<div class="form-foot">
																																										<div class="container">
																																											<div class="row">
																																												<div class="col-md-6 col-12 save-area">
																																													<button
																																														class="btn btn-save"
																																														onClick={
																																															deleteTaskRecord
																																														}
																																													>
																																														Delete
																																													</button>
																																												</div>
																																												<div class="col-md-6 col-12 save-area">
																																													<div class="done">
																																														<input
																																															type="checkbox"
																																															id="vehicle1"
																																															onChange={(
																																																e
																																															) =>
																																																setTaskCompleted(
																																																	e
																																																		.target
																																																		.checked
																																																)
																																															}
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
																																								</form>
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
																											))
																									) : (
																										<p>No task found</p>
																									)}
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
																																Lead Created
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
																										<form
																											onSubmit={
																												handleOnLeadTaskSubmit
																											}
																										>
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
																																			name="statusNote"
																																			value={
																																				statusNote
																																			}
																																			onChange={
																																				handleOnChange
																																			}
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
																																			name="statusNote"
																																			value={
																																				statusNote
																																			}
																																			onChange={
																																				handleOnChange
																																			}
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
																																			name="statusNote"
																																			value={
																																				statusNote
																																			}
																																			onChange={
																																				handleOnChange
																																			}
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
																																			name="statusNote"
																																			value={
																																				statusNote
																																			}
																																			onChange={
																																				handleOnChange
																																			}
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
																																			name="statusNote"
																																			value={
																																				statusNote
																																			}
																																			onChange={
																																				handleOnChange
																																			}
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
																																			name="statusNote"
																																			value={
																																				statusNote
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																</TabPanel>
																																<TabList>
																																	<Tab>
																																		<div class="icon-bg">
																																			<i
																																				class="fa fa-phone"
																																				aria-hidden="true"
																																				onClick={() =>
																																					setTaskStatus(
																																						'Calling'
																																					)
																																				}
																																			></i>
																																		</div>
																																	</Tab>
																																	<Tab>
																																		<div class="icon-bg">
																																			<i
																																				class="fa fa-user"
																																				aria-hidden="true"
																																				onClick={() =>
																																					setTaskStatus(
																																						'Meeting'
																																					)
																																				}
																																			></i>
																																		</div>
																																	</Tab>
																																	<Tab>
																																		<div class="icon-bg">
																																			<i
																																				class="fa fa-clock-o"
																																				aria-hidden="true"
																																				onClick={() =>
																																					setTaskStatus(
																																						'Task'
																																					)
																																				}
																																			></i>
																																		</div>
																																	</Tab>
																																	<Tab>
																																		<div class="icon-bg">
																																			<i
																																				class="fa fa-flag"
																																				aria-hidden="true"
																																				onClick={() =>
																																					setTaskStatus(
																																						'Deadline'
																																					)
																																				}
																																			></i>
																																		</div>
																																	</Tab>
																																	<Tab>
																																		<div class="icon-bg">
																																			<i
																																				class="fa fa-paper-plane"
																																				aria-hidden="true"
																																				onClick={() =>
																																					setTaskStatus(
																																						'Email'
																																					)
																																				}
																																			></i>
																																		</div>
																																	</Tab>
																																	<Tab>
																																		<div class="icon-bg">
																																			<i
																																				class="fa fa-phone"
																																				aria-hidden="true"
																																				onClick={() =>
																																					setTaskStatus(
																																						'Lunch'
																																					)
																																				}
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
																																name="taskStartDate"
																																value={
																																	taskStartDate
																																}
																																onChange={
																																	handleOnChange
																																}
																															/>

																															<select
																																class="form-control"
																																id="time"
																																name="taskStartTime"
																																value={
																																	taskStartTime
																																}
																																onChange={
																																	handleOnChange
																																}
																															>
																																<option>
																																	12:00 AM
																																</option>
																																<option>
																																	12:15 AM
																																</option>
																																<option>
																																	12:30 AM
																																</option>
																																<option>
																																	12:45 AM
																																</option>
																																<option>
																																	1:00 AM
																																</option>
																																<option>
																																	1:15 AM
																																</option>
																																<option>
																																	1:30 AM
																																</option>
																																<option>
																																	1:45 AM
																																</option>
																																<option>
																																	2:00 AM
																																</option>
																																<option>
																																	2:15 AM
																																</option>
																																<option>
																																	2:30 AM
																																</option>
																																<option>
																																	2:45 AM
																																</option>
																																<option>
																																	3:00 AM
																																</option>
																																<option>
																																	3:15 AM
																																</option>
																																<option>
																																	3:30 AM
																																</option>
																																<option>
																																	3:45 AM
																																</option>
																																<option>
																																	4:00 AM
																																</option>
																																<option>
																																	4:15 AM
																																</option>
																																<option>
																																	4:30 AM
																																</option>
																																<option>
																																	4:45 AM
																																</option>
																																<option>
																																	5:00 AM
																																</option>
																																<option>
																																	5:15 AM
																																</option>
																																<option>
																																	5:30 AM
																																</option>
																																<option>
																																	5:45 AM
																																</option>
																																<option>
																																	6:00 AM
																																</option>
																																<option>
																																	6:15 AM
																																</option>
																																<option>
																																	6:30 AM
																																</option>
																																<option>
																																	6:45 AM
																																</option>
																																<option>
																																	7:00 AM
																																</option>
																																<option>
																																	7:15 AM
																																</option>
																																<option>
																																	7:30 AM
																																</option>
																																<option>
																																	7:45 AM
																																</option>
																																<option>
																																	8:00 AM
																																</option>
																																<option>
																																	8:15 AM
																																</option>
																																<option>
																																	8:30 AM
																																</option>
																																<option>
																																	8:45 AM
																																</option>
																																<option>
																																	9:00 AM
																																</option>
																																<option>
																																	9:15 AM
																																</option>
																																<option>
																																	9:30 AM
																																</option>
																																<option>
																																	9:45 AM
																																</option>
																																<option>
																																	10:00 AM
																																</option>
																																<option>
																																	10:15 AM
																																</option>
																																<option>
																																	10:30 AM
																																</option>
																																<option>
																																	10:45 AM
																																</option>
																																<option>
																																	11:00 AM
																																</option>
																																<option>
																																	11:15 AM
																																</option>
																																<option>
																																	11:30 AM
																																</option>
																																<option>
																																	11:45 AM
																																</option>
																																<option>
																																	12:00 PM
																																</option>
																																<option>
																																	12:15 PM
																																</option>
																																<option>
																																	12:30 PM
																																</option>
																																<option>
																																	12:45 PM
																																</option>
																																<option>
																																	1:00 PM
																																</option>
																																<option>
																																	1:15 PM
																																</option>
																																<option>
																																	1:30 PM
																																</option>
																																<option>
																																	1:45 PM
																																</option>
																																<option>
																																	2:00 PM
																																</option>
																																<option>
																																	2:15 PM
																																</option>
																																<option>
																																	2:30 PM
																																</option>
																																<option>
																																	2:45 PM
																																</option>
																																<option>
																																	3:00 PM
																																</option>
																																<option>
																																	3:15 PM
																																</option>
																																<option>
																																	3:30 PM
																																</option>
																																<option>
																																	3:45 PM
																																</option>
																																<option>
																																	4:00 PM
																																</option>
																																<option>
																																	4:15 PM
																																</option>
																																<option>
																																	4:30 PM
																																</option>
																																<option>
																																	4:45 PM
																																</option>
																																<option>
																																	5:00 PM
																																</option>
																																<option>
																																	5:15 PM
																																</option>
																																<option>
																																	5:30 PM
																																</option>
																																<option>
																																	5:45 PM
																																</option>
																																<option>
																																	6:00 PM
																																</option>
																																<option>
																																	6:15 PM
																																</option>
																																<option>
																																	6:30 PM
																																</option>
																																<option>
																																	6:45 PM
																																</option>
																																<option>
																																	7:00 PM
																																</option>
																																<option>
																																	7:15 PM
																																</option>
																																<option>
																																	7:30 PM
																																</option>
																																<option>
																																	7:45 PM
																																</option>
																																<option>
																																	8:00 PM
																																</option>
																																<option>
																																	8:15 PM
																																</option>
																																<option>
																																	8:30 PM
																																</option>
																																<option>
																																	8:45 PM
																																</option>
																																<option>
																																	9:00 PM
																																</option>
																																<option>
																																	9:15 PM
																																</option>
																																<option>
																																	9:30 PM
																																</option>
																																<option>
																																	9:45 PM
																																</option>
																																<option>
																																	10:00 PM
																																</option>
																																<option>
																																	10:15 PM
																																</option>
																																<option>
																																	10:30 PM
																																</option>
																																<option>
																																	10:45 PM
																																</option>
																																<option>
																																	11:00 PM
																																</option>
																																<option>
																																	11:15 PM
																																</option>
																																<option>
																																	11:30 PM
																																</option>
																																<option>
																																	11:45 PM
																																</option>
																															</select>
																															<input
																																type="date"
																																class="form-control"
																																placeholder="Date"
																																name="taskEndDate"
																																value={
																																	taskEndDate
																																}
																																onChange={
																																	handleOnChange
																																}
																															/>
																															<select
																																class="form-control"
																																id="time"
																																name="taskEndTime"
																																value={
																																	taskEndTime
																																}
																																onChange={
																																	handleOnChange
																																}
																															>
																																<option>
																																	12:00 AM
																																</option>
																																<option>
																																	12:15 AM
																																</option>
																																<option>
																																	12:30 AM
																																</option>
																																<option>
																																	12:45 AM
																																</option>
																																<option>
																																	1:00 AM
																																</option>
																																<option>
																																	1:15 AM
																																</option>
																																<option>
																																	1:30 AM
																																</option>
																																<option>
																																	1:45 AM
																																</option>
																																<option>
																																	2:00 AM
																																</option>
																																<option>
																																	2:15 AM
																																</option>
																																<option>
																																	2:30 AM
																																</option>
																																<option>
																																	2:45 AM
																																</option>
																																<option>
																																	3:00 AM
																																</option>
																																<option>
																																	3:15 AM
																																</option>
																																<option>
																																	3:30 AM
																																</option>
																																<option>
																																	3:45 AM
																																</option>
																																<option>
																																	4:00 AM
																																</option>
																																<option>
																																	4:15 AM
																																</option>
																																<option>
																																	4:30 AM
																																</option>
																																<option>
																																	4:45 AM
																																</option>
																																<option>
																																	5:00 AM
																																</option>
																																<option>
																																	5:15 AM
																																</option>
																																<option>
																																	5:30 AM
																																</option>
																																<option>
																																	5:45 AM
																																</option>
																																<option>
																																	6:00 AM
																																</option>
																																<option>
																																	6:15 AM
																																</option>
																																<option>
																																	6:30 AM
																																</option>
																																<option>
																																	6:45 AM
																																</option>
																																<option>
																																	7:00 AM
																																</option>
																																<option>
																																	7:15 AM
																																</option>
																																<option>
																																	7:30 AM
																																</option>
																																<option>
																																	7:45 AM
																																</option>
																																<option>
																																	8:00 AM
																																</option>
																																<option>
																																	8:15 AM
																																</option>
																																<option>
																																	8:30 AM
																																</option>
																																<option>
																																	8:45 AM
																																</option>
																																<option>
																																	9:00 AM
																																</option>
																																<option>
																																	9:15 AM
																																</option>
																																<option>
																																	9:30 AM
																																</option>
																																<option>
																																	9:45 AM
																																</option>
																																<option>
																																	10:00 AM
																																</option>
																																<option>
																																	10:15 AM
																																</option>
																																<option>
																																	10:30 AM
																																</option>
																																<option>
																																	10:45 AM
																																</option>
																																<option>
																																	11:00 AM
																																</option>
																																<option>
																																	11:15 AM
																																</option>
																																<option>
																																	11:30 AM
																																</option>
																																<option>
																																	11:45 AM
																																</option>
																																<option>
																																	12:00 PM
																																</option>
																																<option>
																																	12:15 PM
																																</option>
																																<option>
																																	12:30 PM
																																</option>
																																<option>
																																	12:45 PM
																																</option>
																																<option>
																																	1:00 PM
																																</option>
																																<option>
																																	1:15 PM
																																</option>
																																<option>
																																	1:30 PM
																																</option>
																																<option>
																																	1:45 PM
																																</option>
																																<option>
																																	2:00 PM
																																</option>
																																<option>
																																	2:15 PM
																																</option>
																																<option>
																																	2:30 PM
																																</option>
																																<option>
																																	2:45 PM
																																</option>
																																<option>
																																	3:00 PM
																																</option>
																																<option>
																																	3:15 PM
																																</option>
																																<option>
																																	3:30 PM
																																</option>
																																<option>
																																	3:45 PM
																																</option>
																																<option>
																																	4:00 PM
																																</option>
																																<option>
																																	4:15 PM
																																</option>
																																<option>
																																	4:30 PM
																																</option>
																																<option>
																																	4:45 PM
																																</option>
																																<option>
																																	5:00 PM
																																</option>
																																<option>
																																	5:15 PM
																																</option>
																																<option>
																																	5:30 PM
																																</option>
																																<option>
																																	5:45 PM
																																</option>
																																<option>
																																	6:00 PM
																																</option>
																																<option>
																																	6:15 PM
																																</option>
																																<option>
																																	6:30 PM
																																</option>
																																<option>
																																	6:45 PM
																																</option>
																																<option>
																																	7:00 PM
																																</option>
																																<option>
																																	7:15 PM
																																</option>
																																<option>
																																	7:30 PM
																																</option>
																																<option>
																																	7:45 PM
																																</option>
																																<option>
																																	8:00 PM
																																</option>
																																<option>
																																	8:15 PM
																																</option>
																																<option>
																																	8:30 PM
																																</option>
																																<option>
																																	8:45 PM
																																</option>
																																<option>
																																	9:00 PM
																																</option>
																																<option>
																																	9:15 PM
																																</option>
																																<option>
																																	9:30 PM
																																</option>
																																<option>
																																	9:45 PM
																																</option>
																																<option>
																																	10:00 PM
																																</option>
																																<option>
																																	10:15 PM
																																</option>
																																<option>
																																	10:30 PM
																																</option>
																																<option>
																																	10:45 PM
																																</option>
																																<option>
																																	11:00 PM
																																</option>
																																<option>
																																	11:15 PM
																																</option>
																																<option>
																																	11:30 PM
																																</option>
																																<option>
																																	11:45 PM
																																</option>
																															</select>
																														</div>
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
																															name="taskNote"
																															value={taskNote}
																															onChange={
																																handleOnChange
																															}
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
																															name="assignee"
																															value={assignee}
																															onChange={
																																handleOnChange
																															}
																														>
																															<option>
																																{userName}
																															</option>
																															<option>
																																asasa
																															</option>
																															<option>
																																asdsad
																															</option>
																														</select>
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
																																onChange={(e) =>
																																	setTaskCompleted(
																																		e.target
																																			.checked
																																	)
																																}
																															/>
																															<label>
																																Mark as Done
																															</label>
																														</div>

																														<input
																															type="submit"
																															name="Save"
																															class="btn btn-save"
																														/>
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
														</div>
													</div>
												</div>
											</Modal.Body>
										</Modal>
									</div>
								</div>

								{/*modal-body--*/}
							</div>

							{/* convert to deal modal */}
							<div
								class="modal fade filters-modal show"
								id="convert"
								aria-modal="true"
							>
								<Modal show={isOpen4} onHide={hideModal4}>
									<Modal.Body>
										<div class="modal-dialog modal-lg" role="document">
											<div class="modal-body">
												<div id="studentFilter" class="deal-convert">
													<div class="modal-dialog modal-lg" role="document">
														<div class="modal-content">
															<div class="modal-top">
																<h5>Convert To Deal</h5>
																<button
																	type="button"
																	onClick={hideModal4}
																	class="close"
																	data-dismiss="modal"
																	aria-label="Close"
																>
																	<span aria-hidden="true">&times;</span>
																</button>
															</div>
															<Modal.Body>
																<form>
																	<div class="student-filter-area">
																		<div class="row">
																			<div class="col-lg-7 col-12">
																				<div class="update-student">
																					<div class="headingdiv">Personal</div>
																					<div class="crm-form card-body">
																						<div class="form-row">
																							<div class="form-group col-md-4 col-12">
																								<label>
																									First Name
																									<p>*</p>
																								</label>
																								<input
																									type="text"
																									class="form-control"
																									placeholder=""
																									name="firstName"
																									value={firstName}
																									onChange={handleOnChange}
																								/>
																							</div>

																							<div class="form-group col-md-4 col-12">
																								<label>
																									Last Name
																									<p>*</p>
																								</label>
																								<input
																									type="text"
																									class="form-control"
																									placeholder=""
																									name="lastName"
																									value={lastName}
																									onChange={handleOnChange}
																								/>
																							</div>

																							<div class="form-group col-md-4 col-12">
																								<label>
																									Birthday
																									<p>*</p>
																								</label>
																								<input
																									type="date"
																									class="form-control"
																									placeholder=""
																									name="birthday"
																									value={birthday}
																									onChange={handleOnChange}
																								/>
																							</div>

																							<div class="form-group col-md-4 col-12">
																								<label>Gender</label>
																								<select
																									class="form-control"
																									name="genders"
																									value=""
																								>
																									<option>Male</option>
																									<option>Female</option>
																									<option>Other</option>
																								</select>
																							</div>

																							<div class="form-group col-md-4 col-12">
																								<label>Nationality</label>
																								<select
																									class="form-control"
																									name="nation"
																									value=""
																								>
																									<option>Poland</option>
																									<option>Peru</option>
																									<option>Norway</option>
																									<option>Ghana</option>
																								</select>
																							</div>
																						</div>
																					</div>
																				</div>

																				<div class="update-student">
																					<div
																						class="accordion md-accordion"
																						id="accordionEx"
																						role="tablist"
																						aria-multiselectable="true"
																					>
																						<div class="card">
																							<div
																								class="card-header"
																								role="tab"
																								id="headingOne4"
																							>
																								<a
																									data-toggle="collapse"
																									data-parent="#accordionEx"
																									href="#collapseOne4"
																									aria-expanded="true"
																									aria-controls="collapseOne4"
																								>
																									<div class="headingdiv">
																										CRM{' '}
																										<i class="fas fa-angle-down rotate-icon"></i>
																									</div>
																								</a>
																							</div>
																							<div
																								id="collapseOne4"
																								class="collapse show"
																								role="tabpanel"
																								aria-labelledby="headingOne4"
																								data-parent="#accordionEx"
																							>
																								<div class="card-body">
																									<div class="crm-form">
																										<div class="form-row">
																											<div class="form-group col-md-6 col-12">
																												<label>
																													Sales Pipeline
																													<p>*</p>
																												</label>
																												<select
																													class="form-control"
																													name="salesPipeline"
																													id="cars"
																													value=""
																												>
																													<option>
																														OnShore
																													</option>
																													<option>
																														OffShore
																													</option>
																												</select>
																											</div>

																											<div class="form-group col-md-6 col-12">
																												<label>
																													Sale Status<p>*</p>
																												</label>
																												<select
																													class="form-control"
																													name="salesStatus"
																													id="cars"
																													value=""
																												>
																													<option>
																														Inquiry Recieved
																													</option>
																													<option>
																														Counselling
																													</option>
																													<option>
																														Quotation Sent
																													</option>
																													<option>
																														Application
																													</option>
																													<option>
																														Waiting for Loo
																													</option>
																													<option>
																														Payment Pending
																													</option>
																													<option>
																														Waiting for CoE
																													</option>
																													<option>
																														Apply for Visa
																													</option>
																													<option>
																														Waiting for Visa
																														Requirement
																													</option>
																													<option>
																														Waiting for Visa
																													</option>
																													<option>
																														Visa Granted
																													</option>
																													<option>
																														Course in Progress
																													</option>
																												</select>
																											</div>

																											<div class="form-group col-md-6 col-12">
																												<label>
																													Heat Level
																												</label>
																												<select
																													class="form-control"
																													name="heatLevel"
																													id="cars"
																													value=""
																												>
																													<option>
																														Very Hot
																													</option>
																													<option>Hot</option>
																													<option>Warm</option>
																													<option>Cold</option>
																												</select>
																											</div>

																											<div class="form-group col-md-12 col-12">
																												<label>
																													Other comments
																													(remarks)
																												</label>
																												<textarea
																													rows="5"
																													class="form-control"
																													placeholder="insert text here"
																													value=""
																													name="otherComments"
																												></textarea>
																											</div>
																										</div>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
                                                                                
																				<div class="passport">
																					<div
																						class="accordion md-accordion"
																						id="accordionEx"
																						role="tablist"
																						aria-multiselectable="true"
																					>
																						<div class="card">
																							<div
																								class="card-header"
																								role="tab"
																								id="headingOne1"
																							>
																								<a
																									data-toggle="collapse"
																									data-parent="#accordionEx"
																									href="#collapseOne1"
																									aria-expanded="true"
																									aria-controls="collapseOne1"
																								>
																									<div class="headingdiv">
																										Passport{' '}
																										<i class="fas fa-angle-down rotate-icon"></i>
																									</div>
																								</a>
																							</div>
																							<div
																								id="collapseOne1"
																								class="collapse show"
																								role="tabpanel"
																								aria-labelledby="headingOne1"
																								data-parent="#accordionEx"
																							>
																								<div class="card-body">
																										<div class="form-row">
																											<div class="form-group col-md-4">
																												<label>Number</label>
																												<input
																													type="text"
																													class="form-control"
																													placeholder=""
																													name="passNumber"
																													value=""
																													onChange={handleOnChange}
																												/>
																											</div>
																											<div class="form-group col-md-4">
																												<label>Nationality</label>
																												<input
																													type="text"
																													class="form-control"
																													placeholder=""
																													name="passNationality"
																													value=""
																													onChange={handleOnChange}
																												/>
																											</div>
																											<div class="form-group col-md-4">
																												<label>Issue Date</label>
																												<input
																													type="date"
																													class="form-control"
																													placeholder=""
																													name="passIssueDate"
																													value=""
																													onChange={handleOnChange}
																												/>
																											</div>
																											<div class="form-group col-md-4">
																												<label>Expiry Date</label>
																												<input
																													type="date"
																													class="form-control"
																													placeholder=""
																													name="passExpiryDate"
																													value=""
																													onChange={handleOnChange}
																												/>
																											</div>
																											<div class="form-group col-md-4">
																												<label>Comments</label>
																												<input
																													type="text"
																													class="form-control"
																													placeholder=""
																													name="passComments"
																													value=""
																													onChange={handleOnChange}
																												/>
																											</div>
																										</div>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>

																				<div class="documents">
																					<div
																						class="accordion md-accordion"
																						id="accordionEx"
																						role="tablist"
																						aria-multiselectable="true"
																					>
																						<div class="card">
																							<div
																								class="card-header"
																								role="tab"
																								id="headingOne1"
																							>
																								<a
																									data-toggle="collapse"
																									data-parent="#accordionEx"
																									href="#collapseOne2"
																									aria-expanded="true"
																									aria-controls="collapseOne1"
																								>
																									<div class="headingdiv">
																										Documents{' '}
																										<i class="fas fa-angle-down rotate-icon"></i>
																									</div>
																								</a>
																							</div>
																							<div
																								id="collapseOne2"
																								class="collapse show"
																								role="tabpanel"
																								aria-labelledby="headingOne2"
																								data-parent="#accordionEx"
																							>
																								<div class="card-body">
																										<div class="form-row">
																											<div class="form-group col-md-4">
																												<label>Passport</label>
																												<input type="file" />
																											</div>
																											<div class="form-group col-md-4">
																												<label>Certificate</label>
																												<input type="file" />
																											</div>
																										</div>
																										
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																				
																				<div class="others">
																					<div
																						class="accordion md-accordion"
																						id="accordionEx"
																						role="tablist"
																						aria-multiselectable="true"
																					>
																						<div class="card">
																							<div
																								class="card-header"
																								role="tab"
																								id="headingOne1"
																							>
																								<a
																									data-toggle="collapse"
																									data-parent="#accordionEx"
																									href="#collapseOne1"
																									aria-expanded="true"
																									aria-controls="collapseOne1"
																								>
																									<div class="headingdiv">
																										Others{' '}
																										<i class="fas fa-angle-down rotate-icon"></i>
																									</div>
																								</a>
																							</div>
																							<div
																								id="collapseOne1"
																								class="collapse show"
																								role="tabpanel"
																								aria-labelledby="headingOne1"
																								data-parent="#accordionEx"
																							>
																								<div class="card-body">
																									<div class="crm-form">
																										<div class="form-row">
																											<div class="form-group col-md-4 col-12">
																												<label>
																													Status <p>*</p>
																												</label>
																												<select
																													class="form-control"
																													name="locationStatus"
																													value={locationStatus}
																													id="cars"
																												>
																													<option>
																														Onshore
																													</option>
																													<option>
																														Offshore
																													</option>
																												</select>
																											</div>

																											<div class="form-group col-md-4 col-12">
																												<label>
																													Referral source{' '}
																													<p>*</p>
																												</label>
																												<select
																													class="form-control"
																													name="referalSource"
																													value=""
																													id="cars"
																												>
																													<option>
																														unknown
																													</option>
																													<option>
																														Youtube
																													</option>
																													<option>
																														Instagram
																													</option>
																													<option>
																														Facebook
																													</option>
																													<option>
																														Google
																													</option>
																												</select>
																											</div>
																										</div>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>

																				<div class="counsellor">
																					<div
																						class="accordion md-accordion"
																						id="accordionEx"
																						role="tablist"
																						aria-multiselectable="true"
																					>
																						<div class="card">
																							<div
																								class="card-header"
																								role="tab"
																								id="headingOne2"
																							>
																								<a
																									data-toggle="collapse"
																									data-parent="#accordionEx"
																									href="#collapseOne2"
																									aria-expanded="true"
																									aria-controls="collapseOne2"
																								>
																									<div class="headingdiv">
																										Counsellors{' '}
																										<i class="fas fa-angle-down rotate-icon"></i>
																									</div>
																								</a>
																							</div>
																							<div
																								id="collapseOne2"
																								class="collapse show"
																								role="tabpanel"
																								aria-labelledby="headingOne2"
																								data-parent="#accordionEx"
																							>
																								<div class="card-body">
																									<div class="crm-form">
																										<div class="form-row">
																											<div class="form-group col-md-12 col-12">
																												<label>
																													Counsellor 1
																												</label>
																												<input
																													type="text"
																													class="form-control"
																													placeholder=""
																													name="userNmae"
																													value=""
																												/>
																											</div>
																										</div>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>

																				<div class="notes">
																					<div
																						class="accordion md-accordion"
																						id="accordionEx"
																						role="tablist"
																						aria-multiselectable="true"
																					>
																						<div class="card">
																							<div
																								class="card-header"
																								role="tab"
																								id="headingOne3"
																							>
																								<a
																									data-toggle="collapse"
																									data-parent="#accordionEx"
																									href="#collapseOne3"
																									aria-expanded="true"
																									aria-controls="collapseOne3"
																								>
																									<div class="headingdiv">
																										Add a note{' '}
																										<i class="fas fa-angle-down rotate-icon"></i>
																									</div>
																								</a>
																							</div>
																							<div
																								id="collapseOne3"
																								class="collapse show"
																								role="tabpanel"
																								aria-labelledby="headingOne3"
																								data-parent="#accordionEx"
																							>
																								<div class="card-body">
																									<div class="crm-form">
																										<div class="form-row">
																											<div class="form-group col-md-12 col-12">
																												<textarea
																													name="note"
																													value=""
																													rows="4"
																													class="form-control"
																													placeholder="Add a Note"
																												></textarea>
																											</div>
																										</div>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>

																				<div class="contact">
																					<div
																						class="accordion md-accordion"
																						id="accordionEx"
																						role="tablist"
																						aria-multiselectable="true"
																					>
																						<div class="card">
																							<div
																								class="card-header"
																								role="tab"
																								id="headingOne1"
																							>
																								<a
																									data-toggle="collapse"
																									data-parent="#accordionEx"
																									href="#collapseOne5"
																									aria-expanded="true"
																									aria-controls="collapseOne5"
																								>
																									<div class="headingdiv">
																										Contact{' '}
																										<i class="fas fa-angle-down rotate-icon"></i>
																									</div>
																								</a>
																							</div>
																							<div
																								id="collapseOne5"
																								class="collapse show"
																								role="tabpanel"
																								aria-labelledby="headingOne5"
																								data-parent="#accordionEx"
																							>
																								<div class="card-body">
																									<div class="crm-form">
																										<div class="form-row">
																											<div class="form-group col-md-12 col-12">
																												<label>Email</label>
																												<input
																													type="email"
																													class="form-control"
																													placeholder=""
																													name="email"
																													value=""
																												/>
																											</div>

																											<div class="form-group col-md-12 col-12">
																												<label>
																													Onshore phone
																												</label>
																												<input
																													type="text"
																													class="form-control"
																													placeholder=""
																													name="onShorePhone"
																													value=""
																												/>
																											</div>

																											<div class="form-group col-md-12 col-12">
																												<label>
																													Offshore phone
																												</label>
																												<input
																													type="text"
																													class="form-control"
																													placeholder=""
																													name="offShorePhone"
																													value=""
																												/>
																											</div>
																										</div>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>

																				<div class="visa">
																					<div
																						class="accordion md-accordion"
																						id="accordionEx"
																						role="tablist"
																						aria-multiselectable="true"
																					>
																						<div class="card">
																							<div
																								class="card-header"
																								role="tab"
																								id="headingOne6"
																							>
																								<a
																									data-toggle="collapse"
																									data-parent="#accordionEx"
																									href="#collapseOne6"
																									aria-expanded="true"
																									aria-controls="collapseOne6"
																								>
																									<div class="headingdiv">
																										Visa{' '}
																										<i class="fas fa-angle-down rotate-icon"></i>
																									</div>
																								</a>
																							</div>
																							<div
																								id="collapseOne6"
																								class="collapse show"
																								role="tabpanel"
																								aria-labelledby="headingOne6"
																								data-parent="#accordionEx"
																							>
																								<div class="card-body">
																									<div class="crm-form">
																										<div class="form-row">
																											<div class="form-group col-md-4 col-12">
																												<label>Type</label>
																												<select
																													class="form-control"
																													name="visaType"
																													id="cars"
																													value=""
																												>
																													<option>Any</option>
																													<option>
																														Student visa
																													</option>
																													<option>
																														Working holiday
																													</option>
																													<option>
																														Work & holiday
																													</option>
																													<option>
																														Citizenship
																													</option>
																													<option>other</option>
																												</select>
																											</div>

																											<div class="form-group col-md-4 col-12">
																												<label>
																													Visa expire date
																												</label>
																												<input
																													type="date"
																													class="form-control"
																													placeholder=""
																													name="visaExpiryDate"
																													value=""
																												/>
																											</div>
																										</div>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>

                                                                                <div class="start-date">
																					<div
																						class="accordion md-accordion"
																						id="accordionEx"
																						role="tablist"
																						aria-multiselectable="true"
																					>
																						<div class="card">
																							<div
																								class="card-header"
																								role="tab"
																								id="headingOne6"
																							>
																								<a
																									data-toggle="collapse"
																									data-parent="#accordionEx"
																									href="#collapseOne8"
																									aria-expanded="true"
																									aria-controls="collapseOne7"
																								>
																									<div class="headingdiv">
																										Start Date{' '}
																										<i class="fas fa-angle-down rotate-icon"></i>
																									</div>
																								</a>
																							</div>
																							<div
																								id="collapseOne8"
																								class="collapse show"
																								role="tabpanel"
																								aria-labelledby="headingOne7"
																								data-parent="#accordionEx"
																							>
																								<div class="card-body">
																									<div class="form-bgclr">
																										<div class="form-row">
																											<div class="form-group col-md-4">
																												<label>Start Date</label>
																												<input
																													type="date"
																													class="form-control"
																													placeholder=""
																													name="insuranceStartDate"
																													value=""
																													
																												/>
																											</div>
																											<div class="form-group col-md-4">
																												<label>Expiry Date</label>
																												<input
																													type="date"
																													class="form-control"
																													placeholder=""
																													name="insuranceExpiryDate"
																													value=""
																												/>
																											</div>
																											<div class="form-group col-md-4">
																												<label>Type</label>
																												<select
																													class="form-control"
																													name="insuranceType"
																													id="cars"
																													value=""
																												>
																													<option>Single(Just for the student)</option>
																													<option>Couple(Just for the student)</option>
																													<option>
																														Single parent(Student and their kid)
																													</option>
																													<option>
																														Family(Student,partner and Kid)
																													</option>
																												</select>
																											</div>
																											<div class="form-group col-md-4">
																												<label>Number</label>
																												<input
																													type="text"
																													class="form-control"
																													placeholder=""
																													name="insuranceNumber"
																													value=""
																												/>
																											</div>
																											<div class="form-group col-md-4">
																												<label>Other comments (remarks)</label>
																												<input
																													type="text"
																													class="form-control"
																													placeholder=""
																													name="insuranceComment"
																													value=""
																													
																												/>
																											</div>
																										</div>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>

																			</div>
																		</div>
																	</div>
																	<div class="fotercontent">
																		<div class="form-buttons-w">
																			<div className="row">
																				<div className="col-md-9">
																					<button
																						type="button"
																						onClick=""
																						class="btn btn-danger btn-secondary"
																					>
																						Reset
																					</button>
																				</div>
																				<div className="col-md-3">
																					<input
																						type="submit"
																						name="Save"
																						class="btn float-right btn-primary getin-btn"
																						value="Save"
																					/>
																				</div>
																			</div>
																		</div>
																	</div>
																</form>
															</Modal.Body>
														</div>
													</div>
												</div>
											</div>
										</div>
									</Modal.Body>
								</Modal>
							</div>
							{/* convert to deat modal end*/}
						</div>
					</div>
					{/*-- commantable end here --*/}
				</div>
			</div>
		</div>
	);
};

export default Leads;
