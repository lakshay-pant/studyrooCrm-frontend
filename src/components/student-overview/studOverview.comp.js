import React from 'react'
import "./studOverview.style.css"

export const StudOverview = () => {
    return (
        <div className="body"> <div className="maincontent-rightside student-view">
        <section className="maincontent">
      <div className="container-fluid">
          <div className="row">
              <div className="col-md-5">
                  <div className="wel-admin">
                              <h5>Students overview</h5>
                       </div>
              </div>
              <div className="col-md-7">
                <div className="add-student-button">
                  <label>Import from spreadsheet</label>
                  <a href="/#">
                    <i className="fal fa-user-graduate"></i>
                    Add New Student
                    <span><i className="fal fa-plus"></i></span>
                  </a>
                </div>
              </div>
          </div>
      </div>
    </section>
    
    {/*-- overview boxes -*/}
    <section className="overview-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="over-view overfirst">
              <p>Overview</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="over-view">
             <div className="overone">
                <span>
                    <i className="fal fa-user-graduate"></i>
                </span>
             </div>
                <p>Arrivals</p>
                <div className="overlast">
                  <span>00</span>
                </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="over-view">
             <div className="overone">
                <span>
                    <i className="fal fa-user-graduate"></i>
                </span>
             </div>
                <p>Visa Expiring</p>
                <div className="overlast">
                  <span>00</span>
                </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="over-view">
             <div className="overone">
                <span>
                    <i className="fal fa-user-graduate"></i>
                </span>
             </div>
                <p>Course Ending</p>
                <div className="overlast">
                  <span>00</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*-- overview boxes end-*/}
    
    {/*-- students-leads -*/}
    <section className="students-leads">
      <div className="container-fluid">
    <div className="row">
        <div className="col-md-12">
          <div className="all-activity-button">
              <form className="activform ml-auto">
      <div className="form-row">
        <div className="form-group">
        <div className="activi-inputs">
             <label className="labelheade">View</label>
         <select className="form-control" id="exampleFormControlSelect1">
          <option>All Office</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        </div>
      </div>
      <div className="form-group">
        <div className="activi-inputs m-0">
          <label className="labelheade">Details</label>
         
        </div>
      </div>
      </div>
    </form>
            </div>
         <div className="headingdiv">Students & leads in the last 30 days</div>
      </div>
    </div>
         <div className="leads-list">
           <ul>
             <li>
               <div className="leads-box">
                 <p>Added</p>
               <small>0</small>
               </div>
             </li>
              <li>
              <div className="leads-box">
                 <p>No Heat Level</p>
               <small>0</small>
               </div>
             </li>
              <li>
             <div className="leads-box">
                 <p>No Contact</p>
               <small>0</small>
               </div>
             </li>
              <li>
              <div className="leads-box">
                 <p>No Reply</p>
               <small>0</small>
               </div>
             </li>
              <li>
               <div className="leads-box">
                 <p>Follow up missed</p>
               <small>0</small>
               </div>
             </li>
           </ul>
         </div>
      </div>
    </section>
    {/*-- students-leads end -*/}
    
    {/*-- commantable -*/}
    <div className="commantablesection">
    <div className="container-fluid">
        <div className="row">
        <div className="col-md-12">
          <div className="stuednttable table-responsive">
             <table className="table">
       <thead>
        <tr>       
          <th>USER</th>
          <th>ASSIGNED</th>
          <th>NO HEAT LEVEL</th>
          <th>NO CONTACT</th>
          <th>NO REPLY</th>
          <th>FOLLOW UP MISSED</th>
          <th>ARRIVALS</th>
          <th>VISA EXPIRING</th>
          <th>COURSE ENDING</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
           <td>2</td>
           <td>3</td>
            <td>4</td>
             <td>5</td>
              <td>6</td>
               <td>7</td>
                <td>8</td>
                 <td>9</td>
        </tr>
         <tr>
          <td>1</td>
           <td>2</td>
           <td>3</td>
            <td>4</td>
             <td>5</td>
              <td>6</td>
               <td>7</td>
                <td>8</td>
                 <td>9</td>
        </tr>
         <tr>
          <td>1</td>
           <td>2</td>
           <td>3</td>
            <td>4</td>
             <td>5</td>
              <td>6</td>
               <td>7</td>
                <td>8</td>
                 <td>9</td>
        </tr>
    
    
      </tbody>
    </table>
          </div>
        </div>
      </div>
    </div>
    </div>
            </div></div>
           
    )
}
