export default function updateStudentGradeByCity(ListOfStudent, place, ListOfUpdates){
    return ListOfStudent.filter((x) => x.location === place).map((x) => {
        const element = ListOfUpdates.find((y) => y.studentId === x.id);
        if (element){
            x.grade = element.grade;
        }
        else x.grade = "N/A";
        return x;
    });c
}