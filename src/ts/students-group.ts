import Student from "./student";

interface IStudentGroup {
    attendance(data: string | number): number;
    performance(data: string | number): number;
}

class StudentsGroup implements IStudentGroup {
    private _students: Student[] = [];

    constructor(...args: Student[]) {
        args.forEach(student => this._students.push(student));
    }

    get students() {
        return this._students;
    };

    sortStudentsByAverageMark(): Student[] {
        return this._students.sort((student1, student2) =>
            student1.getAverageMarks() - student2.getAverageMarks()).reverse()
    };

    sortStudentsByPresence(): Student[] {
        return this._students.sort((student1, student2) =>
            student1.getAveragePresence() - student2.getAveragePresence()).reverse();
    };

    attendance(data: string | number): number {
        const sortedStudents: Student[] = data && this.sortStudentsByPresence();
        if (!sortedStudents) return;

        const student: Student = typeof data === "string" && sortedStudents.find((student, ind) => student.surname === data);
        if (student) return sortedStudents.indexOf(student) + 1;

        return typeof data === "number" && data < 25 &&
            Number((this._students.filter(student => student.presence[data - 1]).length /
                this._students.length).toFixed(2));
    };

    performance(data: string | number): number {
        const sortStudents: Student[] = data && this.sortStudentsByAverageMark();
        if (!sortStudents) return;

        const student: Student = typeof data === "string" && sortStudents.find(student => student.surname === data);
        if (student) return sortStudents.indexOf(student) + 1;

        return typeof data === "number" && Number((sortStudents.reduce((sum, student) => {
            return sum + student.marks[data - 1]
        }, 0) / this._students.length).toFixed(2));
    };
}

export default StudentsGroup;
