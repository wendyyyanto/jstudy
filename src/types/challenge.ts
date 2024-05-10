import { Tables } from "./database.types";

export type Challenge = Tables<"challenges">;

export type ChallengeInputs = {
    multiple_choices: string;
};
