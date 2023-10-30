import {challengeSchema, inputChallengeSchema, outputChallengeSchema, updateChallengeSchema} from "./zodSchema"
import {z} from "zod"

export enum ChallengeTypes {
    Problem = "problem",
    Question = "question",
    Proposal = "proposal",
}

export enum ProblemStatus {
    Open = "open",
    Closed = "closed",
    Resolved = "resolved",
    Rejected = "rejected",
}

export enum ProposalStatus {
    Open = "open",
    Accepted = "accepted",
    Rejected = "rejected",
    Implemented = "implemented",
}

export enum QuestionStatus {
    Open = "open",
    Answered = "answered",
}

export type Challenge = z.infer<typeof challengeSchema>
export type UpdChallenge = z.infer<typeof updateChallengeSchema>

export type InputChallengeSchema = z.infer<typeof inputChallengeSchema>
export type OutputChallengeSchema = z.infer<typeof outputChallengeSchema>
