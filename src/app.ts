import Student from "./ts/student";
import StudentsGroup from "./ts/students-group";

const Babchenko: Student = new Student("Vova", "Babchenko", 1982);
const Sidorov: Student = new Student("Sid", "Sidorov", 1982);
const Petrova: Student = new Student("Lena", "Petrova", 1920);

Babchenko.mark = [10, 20, 30, 40];
Babchenko.present();
Babchenko.present();
Babchenko.present();

Sidorov.mark = [90, 20, 10, 40];
Sidorov.present();
Sidorov.present();
Sidorov.absent();

Petrova.mark = [0, 20, 30, 40];
Petrova.present();
Petrova.present();
Petrova.present();
console.log(Babchenko);
console.log(Babchenko.getCurrentAge());
const group: StudentsGroup = new StudentsGroup(Babchenko, Sidorov, Petrova);
console.log(group.performance("Sidorov"));
