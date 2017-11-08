import React, { Component } from 'react'
import CourseSelector from './CourseSelector'
import StudentsList from './StudentsList'
import courseList from '../courseList'

class CourseContainer extends Component {
  constructor() {
    super()

    this.state = {
      students: [{
          id: 1,
          name: "Tom Foolery",
          class_year: 10,
          percentage: 88
        }, {
          id: 2,
          name: "Juno Forte",
          class_year: 11,
          percentage: 95
        }, {
          id: 3,
          name: "Eli Frizzel",
          class_year: 12,
          percentage: 86
        }, {
          id: 4,
          name: "Phil George",
          class_year: 9,
          percentage: 77
        }, {
          id: 5,
          name: "Anna Cornell",
          class_year: 11,
          percentage: 98
        }
      ],
      currentCourse: {},
      currentStudent: {}
    }
  }


  courseChanger = (e) => {
  this.setState({
    currentCourse: Object.assign(this.state.currentCourse, {name: e.target.value})
  })
  // fetch("https://murmuring-cliffs-39770.herokuapp.com/students/")
  //   .then(res => res.json())
  //   .then(json => console.log(json))
  //   }))
  }

  selectStudentToEdit = () => {
    console.log("hi")
  }

  render() {


    return (
      <div className="ui grid container">

        <div className="ui center aligned header sixteen wide column">
          {this.state.currentCourse.name}
        </div>

        <CourseSelector courseChanger={this.courseChanger}/>

        {/* Edit Form */}
        <form className="ui form center aligned sixteen wide column" onSubmit={''}>
          <div className="inline fields">
            <div className="four wide field">
              <input
                id="name"
                type="text"
                value={""}
                onChange={"your code here"}
              />
            </div>
            <div className="four wide field">
              <input
                id="class_year"
                type="number"
                value={""}
                onChange={"your code here"}
              />
            </div>
            <div className="four wide field">
              <input
                id="percentage"
                type="number"
                value={""}
                onChange={"your code here"}
              />
            </div>
            <button className="ui button" type="submit">Submit</button>
          </div>
        </form>

        <StudentsList students={this.state.students} courseChanger={this.courseChanger}/>

      </div>
    )
  }
}

export default CourseContainer
