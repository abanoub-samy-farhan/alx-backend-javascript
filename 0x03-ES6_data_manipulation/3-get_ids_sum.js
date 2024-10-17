export default function getStudentIdsSum(ListOfStudents){
    if (Array.isArray(ListOfStudents)){
        return ListOfStudents.reduce((acc, next) => acc + next.id, 0)
    }
    return 0;
}