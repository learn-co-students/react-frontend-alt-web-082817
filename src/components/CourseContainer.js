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
      name: "",
      class_year: "",
      percentage: "",
      currentStudent: {},
      courseList: courseList,
      courseListId: "",
      currentCourse: "",
      currentCourseId: "",
      currentCourseList: {}
    }
  }

  handleCourseChange = newCourse => {
    this.setState({ currentCourse: newCourse })
    this.fetchCourse()
  }

  handleInputChange = e => {
    this.setState({ [e.target.id] : e.target.value })
  }

  componentDidUpdate() {
    this.findCourse()
  }

  findCourse() {
    var a = this.state.courseList.filter(course => {
      return (
        course.name ===this.state.currentCourse
      )
    })
    console.log(a)
    const courseListId = a[0].id
    console.log(courseListId)

  }

  fetchCourse() {
    fetch('https://murmuring-cliffs-39770.herokuapp.com/courses/{currentCourseId}')
    .then( res => res.json())
    .then( json => this.setState({ currentCourseList: json}))

  }

  render() {

    return (
      <div className="ui grid container">

        <div className="ui center aligned header sixteen wide column">
          {this.state.currentCourse}
          Course Title
        </div>

        <CourseSelector handleCourseChange={this.handleCourseChange} />

        {/* Edit Form */}
        <form className="ui form center aligned sixteen wide column" onSubmit={this.onHandleCourseChange}>
          <div className="inline fields">
            <div className="four wide field">
              <input
                id="name"
                type="text"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="four wide field">
              <input
                id="class_year"
                type="number"
                value={this.state.class_year}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="four wide field">
              <input
                id="percentage"
                type="number"
                value={this.state.percentage}
                onChange={this.handleInputChange}
              />
            </div>
            <button className="ui button" type="submit">Submit</button>
          </div>
        </form>

        <StudentsList students = {this.state.students}/>

      </div>
    )
  }
}

export default CourseContainer
