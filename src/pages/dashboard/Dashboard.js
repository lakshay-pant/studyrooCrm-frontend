import React, { useEffect } from 'react';
import './dashboard.style.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllStudents } from '../allStudents/allStudentAction';
import { fetchAlltask } from '../taskList/taskListgetAction';
import { fetchAllLeadTaskD } from '../leads/dGetLeadTaskAction';
import Moment from 'moment';
import moment from 'moment';

const Dashboard = () => {
	const dispatch = useDispatch();

	const { students } = useSelector((state) => state.allStudent);

	const { user } = useSelector((state) => state.user);

	const { task } = useSelector((state) => state.getTask);

	const { leadTasks } = useSelector((state) => state.getLeadTaskData);

	useEffect(() => {
		if (!students.length) {
			dispatch(fetchAllStudents());
		}
	}, []);

	useEffect(() => {
		dispatch(fetchAllStudents());
	}, [dispatch]);

	useEffect(() => {
		dispatch(fetchAlltask());
	}, [dispatch]);

	useEffect(() => {
		dispatch(fetchAllLeadTaskD());
	}, [dispatch]);

	useEffect(() => {
		if (!leadTasks.length) {
			dispatch(fetchAllLeadTaskD());
		}
	}, []);

	useEffect(() => {
		if (!task.length) {
			dispatch(fetchAlltask());
		}
	}, []);

	var studentNumber = students.length;

	const studentTask = task.filter(function (task) {
		return task.taskStatus === 'Pending';
	});

	const addStudentFilter = students.filter(function (stud) {
		//var date1 = new Date(student.addedAt);
		//date1.setDate(date1.getDate() - 30);
		//var date2 = new Date(student.addedAt);
		//date2.setDate(date1.getDate() - 1);

		var prevMonth = moment().subtract(1, 'months');
		var nextDay = moment().add(1, 'days');

		var filteredStudents = moment(stud.addedAt).isBetween(prevMonth, nextDay);
		fetchAllStudents();
		return filteredStudents;
	});

	const addStudentTaskFilter = task.filter(function (ta) {
		//var date1 = new Date(student.addedAt);
		//date1.setDate(date1.getDate() - 30);
		//var date2 = new Date(student.addedAt);
		//date2.setDate(date1.getDate() - 1);

		var prevMonth = moment().subtract(1, 'months');
		var nextDay = moment().add(1, 'days');

		var filteredStudentTask = moment(ta.addedAt).isBetween(prevMonth, nextDay);
		fetchAlltask();
		console.log(filteredStudentTask);
		return filteredStudentTask;
	});

	const addLeadTaskFilter = leadTasks.filter(function (leadTask) {
		//var date1 = new Date(student.addedAt);
		//date1.setDate(date1.getDate() - 30);
		//var date2 = new Date(student.addedAt);
		//date2.setDate(date1.getDate() - 1);

		var prevMonth = moment().subtract(1, 'months');
		var nextDay = moment().add(1, 'days');

		var filteredLeadTask = moment(leadTask.addedAt).isBetween(
			prevMonth,
			nextDay
		);
		fetchAllLeadTaskD();
		console.log(filteredLeadTask);
		return filteredLeadTask;
	});

	const leadTask = leadTasks.filter(function (leadTask) {
		return leadTask.taskCompleted === false;
	});

	return (
		<div className="html ">
			{' '}
			<div id="page-top" className="hold-transition sidebar-mini layout-fixed">
				<div className="wrapper">
					{/*-- Content Wrapper. Contains page content */}
					<div className="content-wrapper ">
						{/*-- Content Header (Page header) */}
						{/*-- /.content-header */}

						{/*-- Main content */}
						<div className="maincontent-rightside">
							<section className="maincontent">
								<div className="container-fluid">
									<div className="row">
										<div className="col-md-12">
											<div className="wel-admin">
												<h2>Welcome, {user.firstName} </h2>
												<span>What would you like to do?</span>
											</div>
										</div>
									</div>
								</div>
							</section>
							{/*-- boxese section */}
							<section className="allboxes">
								<div className="container-fluid">
									<div className="boxese-ul">
										<ul className="list-unstyled">
											<li>
												<a href="/#">
													<span>
														<i className="fa fa-user-graduate"></i>
													</span>
													<Link to="/addstudent">
														{' '}
														<p className="mb-0">Add New Student</p>
													</Link>
												</a>
											</li>
											<li>
												<a href="/#">
													<span>
														<i className="fa fa-tasks"></i>
													</span>
													<Link to="/add-task">
														{' '}
														<p className="mb-0">Add New Task</p>
													</Link>
												</a>
											</li>
											<li>
												<a href="/#">
													<span>
														<i className="fa fa-usd"></i>
													</span>
													<p className="mb-0">See Agency Revenue</p>
												</a>
											</li>
											<li>
												<a href="/#">
													<span>
														<i className="fa fa-chart-pie"></i>
													</span>
													<p className="mb-0">See Agency Performance</p>
												</a>
											</li>
											<li>
												<a href="/#">
													<span>
														<i className="fa fa-user-graduate"></i>
													</span>
													<p className="mb-0">Student Portal</p>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</section>
							{/*-- boxese section */}

							{/*-- pending task section */}
							<section className="pendingtask">
								<div className="container-fluid">
									<div className="row">
										<div className="col-md-5">
											<div className="headingdiv">
												You have {studentTask.length} student tasks pending
											</div>
											{studentTask.length
												? studentTask.reverse().map((item) => (
														<div className="client-mett table-responsive">
															<table className="table table-hover">
																<tbody>
																	<tr>
																		<td>
																			{item.type}
																			<br />
																			<span>
																				Assigned To : {item.studentAssign}
																			</span>
																			{'   '}
																			<span>Created By : {item.userName}</span>
																		</td>
																		<td>
																			{item.dueDate
																				? Moment(item.dueDate).format('DD')
																				: 'No Date'}{' '}
																			{item.dueDate
																				? Moment(item.dueDate).format('MMMM')
																				: ''}{' '}
																			{item.dueDate
																				? Moment(item.dueDate).format('YYYY')
																				: ''}
																		</td>
																	</tr>
																</tbody>
															</table>
														</div>
												  ))
												: 'No Student Task Found'}
										</div>

										<div className="col-md-4">
											<div className="headingdiv">
												You have {leadTask.length} lead tasks pending
											</div>
											{leadTask.length
												? leadTask.reverse().map((item) => (
														<div className="client-mett table-responsive">
															<table className="table table-hover">
																<tbody>
																	<tr>
																		<td>
																			{item.taskStatus}
																			<br />

																			<span>Assigned To : {item.assignee}</span>
																			{'   '}
																			<span>Created By : {item.userName}</span>
																		</td>
																		<td>
																			{item.taskEndDate
																				? Moment(item.taskEndDate).format('DD')
																				: 'No Date'}{' '}
																			{item.taskEndDate
																				? Moment(item.taskEndDate).format(
																						'MMMM'
																				  )
																				: ''}{' '}
																			{item.taskEndDate
																				? Moment(item.taskEndDate).format(
																						'YYYY'
																				  )
																				: ''}
																		</td>
																	</tr>
																</tbody>
															</table>
														</div>
												  ))
												: 'No Student Task Found'}
										</div>
									</div>
								</div>
							</section>
							{/*-- pending task section  end*/}

							{/*-- activities section  */}
							<section className="activities">
								<div className="container-fluid">
									<div className="row">
										<div className="col-md-12">
											<div className="all-activity-button">
												<form className="activform ml-auto">
													<div className="form-row">
														<div className="form-group">
															<div className="activi-inputs">
																<label className="labelheade">View</label>
																<select
																	className="form-control"
																	id="exampleFormControlSelect1"
																>
																	<option>My Organization</option>
																	<option>2</option>
																	<option>3</option>
																	<option>4</option>
																	<option>5</option>
																</select>
															</div>
														</div>
														<div className="form-group">
															<div className="activi-inputs m-0">
																<label className="labelheade">Activities</label>
																<select
																	className="form-control"
																	id="exampleFormControlSelect1"
																>
																	<option>All</option>
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
											<div className="headingdiv">Activities</div>
										</div>
										<div className="col-md-3">
											<div className="activity-boxmain">
												<div className="activi-content">
													<span>
														<i className="fa fa-user-graduate"></i>
													</span>
													<p>
														Students Added<small>last 30 days</small>
													</p>
												</div>
												<div className="activi-value">
													<span>{addStudentFilter.length}</span>
												</div>
											</div>
										</div>

										<div className="col-md-3">
											<div className="activity-boxmain">
												<div className="activi-content">
													<span>
														<i className="fa fa-user-graduate"></i>
													</span>
													<p>
														Sales Added<small>last 30 days</small>
													</p>
												</div>
												<div className="activi-value">
													<span>00</span>
												</div>
											</div>
										</div>

										<div className="col-md-3">
											<div className="activity-boxmain">
												<div className="activi-content">
													<span>
														<i className="fa fa-user-graduate"></i>
													</span>
													<p>
														Student Tasks Added<small>last 30 days</small>
													</p>
												</div>
												<div className="activi-value">
													<span>{addStudentTaskFilter.length}</span>
												</div>
											</div>
										</div>

										<div className="col-md-3">
											<div className="activity-boxmain">
												<div className="activi-content">
													<span>
														<i className="fa fa-user-graduate"></i>
													</span>
													<p>
														Lead Task Added<small>last 30 days</small>
													</p>
												</div>
												<div className="activi-value">
													<span>{addLeadTaskFilter.length}</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</section>
							{/*-- activities section  end*/}

							{/*-- graph section */}
							<section className="graph-section">
								<div className="container-fluid">
									<div className="row">
										<div className="col-md-12">
											<div className="garph">
												<img
													src="images/graph.jpg"
													alt="Graph"
													className="img-fluid"
												/>
											</div>
										</div>
									</div>
								</div>
							</section>
							{/*-- graph section and here */}
						</div>
						{/*-- /.content */}
					</div>
					{/*-- /.content-wrapper */}

					{/*-- Control Sidebar */}
					<aside className="control-sidebar control-sidebar-dark">
						{/*-- Control sidebar content goes here */}
					</aside>
					{/*-- /.control-sidebar */}
				</div>
				{/*-- ./wrapper */}
			</div>
		</div>
	);
};

export default Dashboard;
