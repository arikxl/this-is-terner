export interface Riddle {
    id: number;
    answer: string;
    placeholder: string;
    hint: string;
}

export const RIDDLES_DATA: Riddle[] = [
    {
        id: 1,
        answer: "1024",
        placeholder: "_ _ _ _",
        hint:"המספרים של שני האגדות בתמונה"
    },
    {
        id: 2,
        answer: "1949",
        placeholder: "_ _ _ _ _",
        hint: "ההיסטוריה של הפועל באר שבע התחילה כאן."
    },
    // ... כאן תשלים את כל 15 החידות
];