import {defaultEndpointsFactory} from "express-zod-api"
import {
    inputChallengeSchema,
    inputUpdateChallengeSchema,
    outputChallengeSchema,
    outputUpdateChallengeSchema
} from "./zodSchema"
import {challengeService} from "./challengeService";

export const createChallengeEndpoint = defaultEndpointsFactory.build({
    method: "post",
    input: inputChallengeSchema,
    output: outputChallengeSchema,
    handler: async ({input, options, logger }) => {
        return challengeService.create(input)
    },
})

export const updateChallengeEndpoint = defaultEndpointsFactory.build({
    method: "put",
    input: inputUpdateChallengeSchema,
    output: outputUpdateChallengeSchema,
    handler: async ({input, options, logger }) => {
        return challengeService.update(input)
    },
})
