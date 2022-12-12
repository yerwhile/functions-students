const createStudent = () => {
    const student = {
        name: "Lily",
        grade: "1"
    }

    return student;
}

const addMathGrade = (studentObj) => {
    studentObj.math = "B";
}

const addHistoryGrade = (studentObj) => {
    studentObj.history = "C";
}

const addScienceGrade = (studentObj) => {
    studentObj.science = "A";
}

const studentLily = createStudent();
addMathGrade(studentLily);
addHistoryGrade(studentLily);
addScienceGrade(studentLily);
console.log(studentLily);