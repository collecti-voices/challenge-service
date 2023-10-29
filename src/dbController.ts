import {Challenge} from "./types";
import {challengeMongooseModel} from "./mongooseSchema";

class ChallengeDbController {

    createChallenge = async (challenge: Challenge): Promise<Challenge> => {
        const newChallenge = new challengeMongooseModel({
            text: challenge.text,
            audioUrl: challenge.audioUrl,
            type: challenge.type,
            data: challenge.data,
            citizen: challenge.citizen,
        })

        return newChallenge.save()
    }
}

export const challengeDbController = new ChallengeDbController()
