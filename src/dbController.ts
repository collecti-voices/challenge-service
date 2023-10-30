import {Challenge, UpdChallenge} from "./types";
import {challengeMongooseModel} from "./mongooseSchema";

class ChallengeDbController {

    createChallenge = async (challenge: Challenge): Promise<Challenge> => {
        const newChallenge = new challengeMongooseModel({
            text: challenge.text,
            audioUrl: challenge.audioUrl,
            type: challenge.type,
            data: challenge.data,
            telegramUserId: challenge.telegramUserId,
        })

        return newChallenge.save()
    }

    updateChallenge = async (challenge: UpdChallenge): Promise<Challenge | null> => {
        return challengeMongooseModel
            .findByIdAndUpdate(challenge?._id, {...challenge}, {}).exec()
    }
}

export const challengeDbController = new ChallengeDbController()
