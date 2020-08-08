class nwSyllabusProfessorwCB extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <br>(<a rel="noopener" target="_blank"
    href=
    "https://www.nwmissouri.edu/services/facility/pdf/floorplans/Colden%20Hall%201st%20Floor.pdf"
    >map</a>)
    
<h2>Course Professors</h2>
<h3>Section 2</h3>
Dr. Denise Case
<br />
Assistant Professor <br />
660.562.1136
<br />
<a rel="noopener" target="_top" href=
"mailto:dcase@nwmissouri.edu?Subject=44-517">dcase@nwmissouri.edu</a>
<br />
<a rel="noopener" target="_blank"
  href=
  "https://www.nwmissouri.edu/services/facility/pdf/floorplans/Colden%20Hall%202nd%20Floor.pdf"
  >Colden Hall 2280</a>
  <br><br>
Office Hours
<a href=
"https://docs.google.com/spreadsheets/d/1dGFW0ybTrUKMN6U4vu8I9G9efUE1ZJz8ktDyOTJTOA0/edit?usp=sharing"
> (link)</a><br>
  MW 3-3:50 PM<br>
  MW 4-4:50 PM<br>
  Tu 12:30-1:20 PM<br>
  Tu 1:30-2:20 PM<br>
  Tu 2:30-3:20 PM<br>
  
<br>
<h3>Section 1</h3>
Dr. Charles Badami
<br />
Assistant Professor <br />
660.562.0814
<br />
<a rel="noopener" target="_top" href=
"mailto:cbadami@nwmissouri.edu?Subject=44-517">cbadami@nwmissouri.edu</a>
<br />
<a rel="noopener" target="_blank"
  href=
  "https://www.nwmissouri.edu/services/facility/pdf/floorplans/Colden%20Hall%202nd%20Floor.pdf"
  >Colden Hall 2270</a>
  <br><br>
Office Hours
<a href=
"https://drive.google.com/file/d/1IawCbTsOY9GEdwnX8pz1xQmGrJ_8CMUc/view?usp=sharing"
> (link)</a><br>
  M 2-3 PM<br>
  TuTh 10-12 PM<br>
  W 2-4 PM<br>
`;
  }
}

window.customElements.define('nw-syllabus-professor', nwSyllabusProfessor);
