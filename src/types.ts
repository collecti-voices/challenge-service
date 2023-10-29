import {challengeSchema, inputChallengeSchema, outputChallengeSchema} from "./zodSchema"
import {z} from "zod"

export enum ChallengeTypes {
    Problem = "problem",
    Question = "question",
    Proposal = "proposal",
}

export enum ProblemStatus {
    Open = "open",
    InProgress = "inProgress",
    Closed = "closed",
}

export type Challenge = z.infer<typeof challengeSchema>

export type InputChallengeSchema = z.infer<typeof inputChallengeSchema>
export type OutputChallengeSchema = z.infer<typeof outputChallengeSchema>
