interface IStudent {
    readonly name: string;
    readonly surname: string;
    readonly yearBirth: number;
    present(): void;
    absent(): void;
    getCurrentAge(): number;
    summary(): string;
}

class Student implements IStudent {
    private _marks: number[] = [];
    private _presence: boolean[] = [];

    constructor(
        public name: string,
        public surname: string,
        public yearBirth: number
    ) { }

    present(): void {
        this._presence.length < 25 && this._presence.push(true);
    }

    absent(): void {
        this._presence.length < 25 && this._presence.push(false);
    }

    set mark(mark: number | number[]) {
        Array.isArray(mark) ?
            this._marks = this._marks.concat(mark) :
            this._marks.push(mark);
    }

    get marks() {
        return this._marks;
    }

    get presence() {
        return this._presence;
    }

    getCurrentAge(): number {
        return new Date().getFullYear() - this.yearBirth;
    }

    getAverageMarks(): number {
        return this._marks.reduce((prev, next) =>
            prev + next) / this._marks.length;
    }

    getAveragePresence(): number {
        return this._presence.filter(presence => presence).length / this._presence.length;
    }

    summary(): string {
        const averageMark: number = this.getAverageMarks();
        const averagePresence: number = this.getAveragePresence();
        if (averageMark > 90 && averagePresence > 0.9)
            return "Уйти как молодчинка!";
        if (averageMark > 90 || averagePresence > 0.9)
            return "Норм, но можно лучше";
        return "Редиска!";
    }
}

export default Student;