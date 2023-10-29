import {InputChallengeSchema, OutputChallengeSchema} from "./types";
import {challengeDbController} from "./dbController";

class ChallengeService {
    createChallenge = async (inputChallengeSchema: InputChallengeSchema): Promise<OutputChallengeSchema> => {
        const newChallenge = await challengeDbController.createChallenge({
            ...inputChallengeSchema
        })

        return {
            _id: newChallenge._id,
            text: newChallenge.text,
            audioUrl: newChallenge.audioUrl,
            type: newChallenge.type,
            data: newChallenge.data,
            citizen: newChallenge.citizen
        }
    }
}

export const challengeService = new ChallengeService()
