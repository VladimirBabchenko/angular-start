function Student(name, surname, yearBirth) {
    this.presence = [];
    this._marks = [];
    this.name = name;
    this.surname = surname;
    this.yearBirth = yearBirth;
}

Object.defineProperty(Student.prototype, "marks", {
    get: function () {
        return this._marks;
    },
    set: function (marks) {
        Array.isArray(marks) ?
            this._marks = this._marks.concat(marks) :
            this._marks.push(marks);
    }
})

Student.prototype.getCurrentAge = function () {
    return new Date().getFullYear() - this.yearBirth;
};

Student.prototype.getAverageMark = function () {
    return this.marks.reduce((mark1, mark2) =>
        mark1 + mark2) / this.marks.length;
};

Student.prototype.present = function () {
    this.presence.length < 25 && this.presence.push(true);
};

Student.prototype.absent = function () {
    this.presence.length < 25 && this.presence.push(false);
};

Student.prototype.getStudentPresence = function () {
    return this.presence.filter(val1 => val1).length / this.presence.length;
}

Student.prototype.summary = function () {
    const averageMark = this.getAverageMark();
    const studentPresence = this.getStudentPresence();
    if (averageMark > 90 && studentPresence > 0.9)
        return "Уйти как молодчинка";
    if (averageMark > 90 || studentPresence > 0.9)
        return "Норм"
    return "Редиска"
}

var babchenko = new Student("Vova", "Babchenko", 1982);
var sidorova = new Student("Baba", "Sidorova", 1990);
var petrova = new Student("Petya", "Petrova", 1990);

babchenko.marks = [10, 20, 30];
sidorova.marks = [20, 30, 20];
petrova.marks = [5, 20, 30];

babchenko.present();
babchenko.present();
babchenko.present();
babchenko.absent();
sidorova.absent();
petrova.present();
petrova.present();
petrova.present();
// console.log(babchenko.getStudentPresence())
// console.log(babchenko);

