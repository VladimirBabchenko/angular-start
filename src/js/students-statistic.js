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

    return (this.students.filter(student =>
        student.presence[0]).length / this.students.length).toFixed(2)
}

StudentsStatistic.prototype.performance = function (surname) {
    var sortByStudentMarks = this.students.sort((student1, student2) =>
        student2.getAverageMark() - student1.getAverageMark())

    var studentInd, studentsAverageMark = 0;
    var searchingStudent = surname && typeof surname === "string" &&
        this.students.find(student => student.surname === surname);

    if (searchingStudent) {
        sortByStudentsAttendance.forEach((student, rate) => {
            student.surname === surname && (studentInd = rate + 1);
        });
        return studentInd;
    }

    this.students.forEach(student =>
        studentsAverageMark += student.marks[0]);
    return (studentsAverageMark / this.students.length).toFixed(2);
}


var statictic = new StudentsStatistic(babchenko, sidorova, petrova, 10);
console.log(statictic.attendance("Petrova"))
console.log(statictic.performance());