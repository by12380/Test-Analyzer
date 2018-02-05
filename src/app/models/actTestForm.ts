export interface ActTestForm {
    form: string;
    link: string;
    type: string;
    answerKeys: {
        math: string[],
        science: string[]
    },
    score: {
        math: string[],
        science: string[]
    }
}