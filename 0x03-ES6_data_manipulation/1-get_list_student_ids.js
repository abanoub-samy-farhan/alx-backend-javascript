export default function getListStudentIds(ListOfStudents){
    if (Array.isArray(ListOfStudents)){
        return ListOfStudents.map((student) => student.id);
    }
    return [];
}