import {z} from "zod"
import {ChallengeTypes, ProblemStatus, ProposalStatus, QuestionStatus} from "./types";

export const challengeSchema = z.object({
    _id: z.any().optional(),
    telegramUserId: z.string(),
    text: z.string(),
    audioUrl: z.string().optional(),
    type: z.nativeEnum(ChallengeTypes),
    data: z.any(),
})

export const problemDataSchema = z.object({
    status: z.nativeEnum(ProblemStatus),
    answer: z.string(),
})

export const questionDataSchema = z.object({
    answer: z.string(),
    status: z.nativeEnum(QuestionStatus),
})

export const proposalDataSchema = z.object({
    status: z.nativeEnum(ProposalStatus),
    answer: z.string(),
})

export const updateChallengeSchema = challengeSchema.deepPartial()


export const inputChallengeSchema = z.object({}).merge(challengeSchema)
export const outputChallengeSchema = z.object({}).merge(challengeSchema)

export const inputUpdateChallengeSchema = z.object({}).merge(updateChallengeSchema)
export const outputUpdateChallengeSchema = z.object({}).merge(challengeSchema)