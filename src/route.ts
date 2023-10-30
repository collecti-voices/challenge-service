import {Routing} from "express-zod-api"
import {createChallengeEndpoint, updateChallengeEndpoint} from "./endpoint";

export const routing: Routing = {
    v1: {
        create: createChallengeEndpoint,
        update: updateChallengeEndpoint,
    }
}
