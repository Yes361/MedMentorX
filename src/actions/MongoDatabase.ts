'use server'

import { client } from "@/lib/db"
import { ObjectId } from "mongodb"

type FlashCardQuestion = {
    _id: any,
    Prompt: string,
    Options: any[],
    CorrectAnswer: number,
}

type FlashCardData = {
    title: string,
    Questions: FlashCardQuestion[]
}

export async function getFlashCardsByKeyword(keyword: string) {

    const query = keyword == '' ? {} : {
        $text: {    
            $search: keyword,
            $caseSensitive: false,
            $diacriticSensitive: false
        } 
    }

    return await client
        .db('HOSA-APP')
        .collection<FlashCardData>('quizzes')
        .find(query)
        .toArray()
}

export async function getFlashCardByID(id: string) {
    return await client
      .db('HOSA-APP')
      .collection<FlashCardData>('quizzes')
      .findOne({ _id: new ObjectId(id) })
}

export async function ListCourseUnits() {
    return await client
        .db('learning-resources')
        .collection('units')
        .find({})
        .toArray()
}

export async function getLessonsByUnit(id: any) {
    return await client
        .db('learning-resources')
        .collection('lessons')
        .find({ unitId: id })
        .toArray()
}

export async function getLessonsByUnitID(id: any) {
    const unitId = await getUnitByID(id)

    return await client
        .db('learning-resources')
        .collection('lessons')
        .find({ unitId: unitId!.unitID })
        .toArray()
}

export async function getUnitByID(id: string) {
    return await client
        .db('learning-resources')
        .collection('units')
        .findOne({ _id: new ObjectId(id) })
}

export async function getLessonByID(id: string) {
    return await client
        .db('learning-resources')
        .collection('lessons')
        .findOne({ _id: new ObjectId(id) })
}