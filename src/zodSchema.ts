import {z} from "zod"
import {ChallengeTypes, ProblemStatus} from "./types";

export const challengeSchema = z.object({
    _id: z.any().optional(),
    text: z.string(),
    audioUrl: z.string().optional(),
    type: z.nativeEnum(ChallengeTypes),
    data: z.any().optional(),
    citizen: z.object({
        telegramUserId: z.string(),
    })
})

export const problemDataSchema = z.object({
    status: z.nativeEnum(ProblemStatus),
})


export const inputChallengeSchema = z.object({}).merge(challengeSchema)
export const outputChallengeSchema = z.object({}).merge(challengeSchema)
