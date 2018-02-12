export interface ActTestForm {
    form: string;
    link: string;
    type: string;
    answerKeys: {
        english: string[],
        math: string[],
        reading: string[],
        science: string[]
    },
    score: {
        english: string[],
        math: string[],
        reading: string[],
        science: string[]
    }
}