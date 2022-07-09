import {useState} from 'react'
// import AbsenteeList from "./Components/AbsenteeList";
import Student from "./Components/Student";
import data from './Data/students'

function App() {
  const [studentData, setStudentData] = useState(data)
  const [absentees, setAbsentees] = useState([])
  const [absenteeCount, setAbsenteeCount] = useState(0)
  const [isBtnActive, setIsBtnActive] = useState(false)
  const [markCount, setMarkCount] = useState(0)

  
  // const [isPresent, setPresent] = useState(false)

  const onclickhandler =(id) => {
    // console.log(id)
    // console.log(studentData[id-1])
    // console.log(studentData[id-1].isPresent) 
    // console.log(studentData)
    studentData[id-1].isPresent = !studentData[id-1].isPresent 
    setStudentData([...studentData])
    // console.log(studentData[id-1].isPresent)     
    // console.log(studentData)
    markCount > 1 ? setIsBtnActive(false) : setIsBtnActive(true)

  } 

  const markAttendanceHandler = () =>{
    console.log(markCount)
    markCount > 1 ? setIsBtnActive(false) : setMarkCount(markCount + 1)

    const absentStudents = studentData.filter(student => student.isPresent === false) 
      setAbsentees(absentStudents)
      let absentCount = absentStudents.length
      setAbsenteeCount(absentCount)
  }
  return (
    
    <div className="container">
      <h1>Attendance Monitoring</h1>
      <div>
        
     
      <div className="students-grid">
        {studentData.map(student => {
          // console.log(student);
          return (
              <div
              key={Math.random()} 
              onClick = {()=> onclickhandler(student.ID)}
              // className = "active" 
              // className = {student.isPresent == true ? "active" : "default" } 
              >
                  <Student detail = {student} />
              </div>
             )
        })}
      </div>

        <button 
        disabled={!isBtnActive}
        className="btn"
        onClick={() => markAttendanceHandler()}
        >Mark Attendance</button>
        <h2>Absentees Details</h2>
        <br />
        <h3>Total absentees :- {absenteeCount} </h3>
        <br />
        <ul className='students-grid'>
          {absentees.map(student => {
            return (<li key={Math.random()} >{student.Name}--{student.ID}</li>)
          })}
        </ul>

      </div>
    </div>
  );
}

export default App;
