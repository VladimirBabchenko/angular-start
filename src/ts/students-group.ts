import Student from "./student";

class StudentsGroup {
    private _students: Student[] = [];

    constructor(...args: Student[]) {
        args.forEach(student => this._students.push(student));
    }

    get students() {
        return this._students;
    }

    sortStudentsByAverageMark(): Student[] {
        return this._students.sort((student1, student2) =>
            student1.getAverageMarks() - student2.getAverageMarks()).reverse()
    }

    attendance(data?: string | number) {
        const sortedStudents: Student[] = data && typeof data === "string" && this.sortStudentsByAverageMark();
        const student: Student = sortedStudents && sortedStudents.find((student, ind) => student.surname === data);
        if (student) return sortedStudents.indexOf(student) + 1;

        return typeof data === "number" && data < 25 &&
            (this._students.filter(student => student.presence[data - 1]).length /
                this._students.length).toFixed(2);
    }
}

export default StudentsGroup;
