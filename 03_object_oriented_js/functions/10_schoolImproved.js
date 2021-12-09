function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    info() {
      return `${name} is a ${year} year student`;
    },

    listCourses() {
      return this.courses;
    },

    addCourse(course) {
      this.courses.push(course);
    },

    addNote(code, note) {
      const course = this.getCourseByCode(code);
      if (Array.isArray(course.notes)) {
        course.notes.push(note);
      } else {
        course.notes = [note];
      }
    },

    updateNote(code, note) {
      const course = this.getCourseByCode(code);
      course.notes = [note];
    },

    viewNotes() {
      return this.courses
                 .filter(course => course.notes)
                 .map(course => {
        return course.name + ": " + course.notes.join("; ");
      }).join('\n');
    },

    getCourseByCode(code) {
      for (let course of this.courses) {
        if (course.code === code) {
          return course;
        }
      }

      return undefined;
    },

    getCourseByName(name) {
      for (let course of this.courses) {
        if (course.name === name) {
          return course;
        }
      }

      return undefined;

    },

  };
}

//
//
// courseReport: Logs the grades of all students for a given course name. Only
// student with grades are part of the course report.

// To test your code, use the three student objects listed below. Using the
// three student objects, produces the following values from the getReportCard
// and courseReport methods respectively.

/// Examples of created student objects with grades; methods on the objects are not shown here for brevity.
// The following are only showing the properties that aren't methods for the three objects

const school = (function() {
  const students = [];
  const validGrades = ['1st', '2nd', '3rd', '4th', '5th'];

  return {
    addStudent(name, year) {
      if (!validGrades.includes(year)) {
        console.log("Invalid Year");
        return;
      }

      const newStudent = createStudent(name, year);
      students.push(newStudent);
      return newStudent;
    },

    enrollStudent(student, course) {
      student.addCourse(course);
    },

    addGrade(student, course, grade) {
      if (typeof course === 'number') {
        course = student.getCourseByCode(course);
      }

      if (course === undefined) {
        console.log("Invalid course");
        return;
      }

      course.grade = grade;
    },

    getReportCard(student) {
      student.listCourses().forEach(course => {
        console.log(course.name + ": " + (course.grade || "In progress"));
      });
    },

    courseReport(courseName) {
      const studentGrades = students.map(student => {
        const course = student.getCourseByName(courseName);
        if (course) {
          return { name: student.name, grade: course.grade };
        }
      }).filter((student) => student && student.grade);

      if (studentGrades.length > 0) {
        console.log(`=${courseName} Grades=`);
        studentGrades.forEach(({name, grade}) => {
          console.log(`${name}: ${grade}`);
        });
        console.log("---");
        const total = studentGrades.map(({name, grade}) => grade)
          .reduce((sum, grade) => sum + grade);

        console.log(`Course Average: ${total / studentGrades.length}`);
      }
    },
  };
}());

const foo = school.addStudent('foo', '3rd');
const bar = school.addStudent('bar', '1st');
const qux = school.addStudent('qux', '2nd');

school.enrollStudent(foo, { name: 'Math', code: 101 });
school.enrollStudent(foo, { name: 'Advanced Math', code: 102 });
school.enrollStudent(foo, { name: 'Physics', code: 202 });
school.enrollStudent(bar, { name: 'Math', code: 101 });
school.enrollStudent(qux, { name: 'Math', code: 101 });
school.enrollStudent(qux, { name: 'Advanced Math', code: 102 });

school.addGrade(foo, 101, 95);
school.addGrade(foo, 102, 90);
school.addGrade(bar, 101, 91);
school.addGrade(qux, 101, 93);
school.addGrade(qux, 102, 90);

school.getReportCard(foo);
school.getReportCard(bar);
school.getReportCard(qux);

school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');
console.log(school.students);
