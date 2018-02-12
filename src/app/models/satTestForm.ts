export interface SatTestForm {
    form: string;
    link: string;
    type: string;
    answerKeys: {
        section1: string[],
        section2: string[],
        section3: string[],
        section4: string[]
    },
    score: {
        section1: string[],
        section2: string[],
        math: string[]
    }
}