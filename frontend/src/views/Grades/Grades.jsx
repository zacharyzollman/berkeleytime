import React, { Component } from 'react';
import axios from 'axios';

import ClassCardList from '../../components/ClassCards/ClassCardList.jsx';
import GraphCard from '../../components/GraphCard/GraphCard.jsx';
import GradesInfoCard from '../../components/GradesInfoCard/GradesInfoCard.jsx';
import ClassSearchBar from '../../components/ClassSearchBar/ClassSearchBar.jsx';

import {
  grades,
} from '../../variables/Variables';

class Grades extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      classCards: Grades.defaultProps.classCards,

      //actual: last course user selected 
      selectedCourseID: Grades.defaultProps.courseID, 

      // id of sections selected by user
      sectionIDs: Grades.defaultProps.sectionIDs,
      sectionData: Grades.defaultProps.sectionData
    }
    this.fetchGrades();

    this.addClass = this.addClass.bind(this)
    this.removeClass = this.removeClass.bind(this)

  }

  addClass(classNum) {
    // add class card
    // fetch class info
  }

  removeClass(classNum) {
    this.setState((prevState, props) => ({
      classCards: prevState.classCards.filter(classInfo => classInfo.classNum !== classNum)
    }));
  }

  // fetch instructor & semester for search bar
//   async fetchInstrSem() { 
//     try {
//       this.courseInfo = await axios.get('http://localhost:8000/grades/course_grades/' + this.state.selectedCourseID + '/')
//       console.log(this.courseInfo.data)
//     } catch (error) {
//       console.error(error)
//     }
//   }

  async fetchGrades() {
    if (this.state.sectionIDs && this.state.sectionIDs.length > 0) {
      try {
        //fetch grades of selectedCourseID
        grades = await axios.get('http://localhost:8000/grades/sections/' + this.state.selectedCourseID;

        // if multiple sections
        //grades = await axios.get('http://localhost:8000/grades/sections/' + this.state.sectionIDs.join('&'));

        console.log(grades.data);

        // add metadata like semester & instructor name
        // get from course search bar
        // metadata = //response of course_grades
        /* metadatas.map((metadata) =>
          if (metadata["grade_id"] == grades["course_id"]) {
            for (var key in metadata) {
              grades[key] = metadata[key];
            }
            break;
          } 
        );*/

        this.setState({
           sectionData: grades
           //sectionData: [...this.state.sectionData, grades] 
         });
      } catch (error) {
        console.error(error)
      }
    }

  }

  getCurrentDate() {
    let today = new Date();
    return today.toString().slice(4, 15);
  }

  render() {
    return (
      <div className="app-container">
        <ClassSearchBar />

        <ClassCardList
          classCards={this.state.classCards}
          removeClass={this.removeClass}
        />

        <GraphCard
          id="chartHours"
          title="Grades"
          classData={this.state.sectionData}
        />

      </div>
    );
  }
}
Grades.defaultProps = {
  courseID: '1062',
  sectionIDs: ['31265'],
  sectionData: {
    "A+": {
        "percentile_low": 0.89,
        "percent": 0.11,
        "percentile_high": 1,
        "numerator": 351
    },
    "A": {
        "percentile_low": 0.81,
        "percent": 0.08,
        "percentile_high": 0.89,
        "numerator": 258
    },
    "A-": {
        "percentile_low": 0.71,
        "percent": 0.09,
        "percentile_high": 0.81,
        "numerator": 291
    },
    "B+": {
        "percentile_low": 0.55,
        "percent": 0.17,
        "percentile_high": 0.71,
        "numerator": 527
    },
    "B": {
        "percentile_low": 0.38,
        "percent": 0.17,
        "percentile_high": 0.55,
        "numerator": 540
    },
    "B-": {
        "percentile_low": 0.24,
        "percent": 0.13,
        "percentile_high": 0.38,
        "numerator": 424
    },
    "C+": {
        "percentile_low": 0.2,
        "percent": 0.05,
        "percentile_high": 0.24,
        "numerator": 146
    },
    "C": {
        "percentile_low": 0.15,
        "percent": 0.04,
        "percentile_high": 0.2,
        "numerator": 133
    },
    "C-": {
        "percentile_low": 0.12,
        "percent": 0.04,
        "percentile_high": 0.15,
        "numerator": 120
    },
    "D": {
        "percentile_low": 0.04,
        "percent": 0.07,
        "percentile_high": 0.12,
        "numerator": 224
    },
    "F": {
        "percentile_low": 0,
        "percent": 0.04,
        "percentile_high": 0.04,
        "numerator": 139
    },
      "course_id": 2321,
      "course_gpa": 2.841,
      "course_letter": "B-",
      "section_letter": "B-",
      "section_gpa": 2.841,
      "denominator": 3153,
      "title": "COMPSCI 61A",
      "subtitle": "The Structure and Interpretation of Computer Programs",
  }, 
  classCards: [
    {
      stripeColor: '#4EA6FB',
      classNum: 'CS 61A',
      semester: 'Spring 2018',
      faculty: 'Denero',
      title: 'The Structure and Interpretation of Computer Programs',
    }, {
      stripeColor: '#6AE086',
      classNum: 'Math 1A',
      semester: 'Spring 2018',
      faculty: 'n/a',
      title: 'Single Variable Calculus',
    }, {
      stripeColor: '#ED5186',
      classNum: 'English 43B',
      semester: 'Spring 2018',
      faculty: 'n/a',
      title: 'Introduction to the Art of Verse',
    }, {
      stripeColor: '#F9E152',
      classNum: 'Art 18',
      semester: 'Spring 2018',
      faculty: 'n/a',
      title: 'The Language of Painting',
    },
  ]
};

export default Grades;
