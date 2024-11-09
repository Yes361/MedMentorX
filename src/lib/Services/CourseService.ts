import { Repository } from "./RepositoryService";

interface IUnit {
    unitID: number;
    unitName: string;
}

interface ILesson {
    lessonID: string;
    unitId: string;
    lessonTitle: string;
    content: string;
}


export async function CourseService() {
    const UnitRepository = new Repository<IUnit>('units', 'HOSA-APP')
    const LessonRepository = new Repository<ILesson>('lessons', 'HOSA-APP')

    // return (
    //     // async 
    // )
}