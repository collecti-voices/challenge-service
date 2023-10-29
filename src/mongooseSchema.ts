import * as mongoose from "mongoose"
import {Document, Schema} from "mongoose"
import {Challenge, ChallengeTypes, Input} from "./types"


export type MongooseDocument = Document & Challenge

export const mongooseSchema: mongoose.Schema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    audioUrl: {
        type: String,
        required: false
    },
    type: {
        type: String,
        enum: Object.values(ChallengeTypes),
        required: true
    },
    data: {
        type: Schema.Types.Mixed,
        required: false
    },
    citizen: {
        telegramUserId: {
            type: String,
            required: true
        },
    },
}, {
    timestamps: true
})

export const challengeMongooseModel = mongoose
    .model<MongooseDocument>("challenge", mongooseSchema)
