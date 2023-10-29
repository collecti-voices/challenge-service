import {defaultEndpointsFactory} from "express-zod-api"
import {inputChallengeSchema, outputChallengeSchema} from "./zodSchema"
import {challengeService} from "./challengeService";

export const createChallengeEndpoint = defaultEndpointsFactory.build({
    method: "post",
    input: inputChallengeSchema,
    output: outputChallengeSchema,
    handler: async ({input, options, logger }) => {
        return challengeService.createChallenge(input)
    },
})


