import React from 'react'
import courseList from '../courseList'


class CourseSelector extends React.Component {
  constructor() {
    super()

    this.state = {
      courseName: "",
      courseId: ""
    }
  }



  handleCourseChange = e => {
    const courseName = e.target.value
    this.setState({
      courseName
       })
    this.props.handleCourseChange(e.target.value)
  }

  render() {
    console.log(this.state.courseId)
    return (
    <div className="sixteen wide column">
      <select className="ui dropdown" value={this.state.course} onChange={this.handleCourseChange}>
         {courseList.map(course => {return <option
           className="item"
           data-value={course.id} value={course.name}  >
              {course.name}
           </option>})
         }
      </select>
    </div>

    )
  }
}
export default CourseSelector
