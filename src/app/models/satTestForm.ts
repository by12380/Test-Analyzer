export interface SatTestForm {
    form: string;
    link: string;
    type: string;
    answerKeys: {
        section3: string[],
        section4: string[]
    }
}