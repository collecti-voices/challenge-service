import {Challenge, InputChallengeSchema, OutputChallengeSchema, UpdChallenge} from "./types";
import {challengeDbController} from "./dbController";

class ChallengeService {
    create = async (inputChallengeSchema: InputChallengeSchema): Promise<OutputChallengeSchema> => {
        return await challengeDbController.createChallenge({
            ...inputChallengeSchema
        })
    }

    update = async (updChallenge: UpdChallenge): Promise<OutputChallengeSchema> => {
        const challenge: Challenge | null =  await challengeDbController.updateChallenge(updChallenge)

        return challenge as OutputChallengeSchema
    }
}

export const challengeService = new ChallengeService()
