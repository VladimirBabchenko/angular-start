function StudentsStatistic(...args) {
    this._students = [];
    args.forEach(student =>
        (student instanceof Student) && this._students.push(student));
}

Object.defineProperty(StudentsStatistic.prototype, "students", {
    get: function () {
        return this._students;
    },
    set: function (student) {
        (student instanceof Student) && Array.isArray(student) ?
            this._students = this._students.concat(student) :
            this._students.push(student)
    }
})

StudentsStatistic.prototype.attendance = function (surname) {
    var sortByStudentsAttendance = this.students.sort((student1, student2) =>
        student2.getStudentPresence() - student1.getStudentPresence());

    var studentInd;
    var searchingStudent = surname && typeof surname === "string" &&
        this.students.find(student => student.surname === surname);

    if (searchingStudent) {
        sortByStudentsAttendance.forEach((student, rate) => {
            student.surname === surname && (studentInd = rate + 1);
        });
        return studentInd;
    }

    return (Number.isFinite(surname) && surname <= 25 && this.students.filter(student =>
        student.presence[surname]).length / this.students.length).toFixed(2)
}

StudentsStatistic.prototype.performance = function (surname) {
    var sortByStudentMarks = this.students.sort((student1, student2) =>
        student2.getAverageMark() - student1.getAverageMark())

    var studentInd, studentsAverageMark = 0;
    var searchingStudent = surname && typeof surname === "string" &&
        this.students.find(student => student.surname === surname);

    if (searchingStudent) {
        sortByStudentMarks.forEach((student, rate) => {
            student.surname === surname && (studentInd = rate + 1);
        });
        return studentInd;
    }

    Number.isFinite(surname) && surname <= 25 && this.students.forEach(student =>
        studentsAverageMark += student.marks[surname]);
    return (studentsAverageMark / this.students.length).toFixed(2);
}


var statistic = new StudentsStatistic(babchenko, sidorova, petrova, 10);
console.log(statistic.attendance(1))
console.log(statistic.performance(1));
