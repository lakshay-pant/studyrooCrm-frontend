import React from 'react'
import "./addStudent.style.css"

export const AddStudentForm = () => {
    return (
        <div className="body">
           <section class="student-from">
  <div class="container-fluid">
  <div class="student-bg">
      <div class="col-md-12">
      <div class="headingdiv">Personal</div>
      <div class="form-bgclr">
        <form>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label>First Name*</label>
              <input type="text" class="form-control" placeholder="" name=""/>
            </div>
             <div class="form-group col-md-4">
              <label>Middle name</label>
              <input type="text" class="form-control" placeholder="" name=""/>
            </div>
             <div class="form-group col-md-4">
              <label>Last name*</label>
              <input type="text" class="form-control" placeholder="" name=""/>
            </div>
             <div class="form-group col-md-4">
              <label>Birthday</label>
              <input type="text" class="form-control" placeholder="" name=""/>
            </div>
             <div class="form-group col-md-4">
              <label>Gender</label>
             <select class="form-control" name="cars" id="cars">
              <option value="volvo">Male</option>
              <option value="saab">Female</option>
             
            </select>
            </div>
             <div class="form-group col-md-4">
              <label>Nationality</label>
             <select class="form-control" name="cars" id="cars">
              <option value="volvo">Indian</option>
              
            </select>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="col-md-12">
      <div class="headingdiv">Contact</div>
      <div class="form-bgclr">
        <form>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label>Email</label>
              <input type="text" class="form-control" placeholder="" name=""/>
            </div>
             <div class="form-group col-md-4">
              <label>Onshore phone</label>
              <input type="text" class="form-control" placeholder="" name=""/>
            </div>
             <div class="form-group col-md-4">
              <label>Offshore phone</label>
              <input type="text" class="form-control" placeholder="" name=""/>
            </div>
            
          </div>
        </form>
      </div>
    </div>

    <div class="col-md-12">
      <div class="headingdiv">CRM</div>
      <div class="form-bgclr">
        <form>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label>Sales pipeline *</label>
              <input type="text" class="form-control" placeholder="All Students" name=""/>
            </div>
             <div class="form-group col-md-4">
              <label>Sale status *</label>
             <select class="form-control" name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            </div>
             <div class="form-group col-md-4">
              <label>Heat level</label>
             <select class="form-control" name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            </div>
            
          </div>
        </form>
      </div>
    </div>

     <div class="col-md-12">
      <div class="headingdiv">Add a note</div>
      <div class="form-bgclr">
        <form>
          <div class="form-row">
            <div class="form-group col-md-12">
             <textarea class="form-control" rows="5" placeholder="Onshore"></textarea>
              
            </div>
           
            
          </div>
          <div class="footersingbtn">
                               <input type="submit" name="Save" class="btn getin-btn" value="Save"/>
                             </div>
        </form>
      </div>
    </div>
  </div>
  </div>
</section> 
        </div>
    )
}

