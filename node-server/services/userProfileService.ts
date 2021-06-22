import mongoose, { QueryOptions } from 'mongoose'
import logger from '../logger';
import { UserProfileModel } from "../models";
import { IProfilePatchRequest } from "../types";

async function getProfileByUserId(uid: string) {
    const result = await UserProfileModel.findOne({
        uid
    });
    return result?.toObject();
}

async function createOrUpdateProfile(uid: string, profileUpdate: IProfilePatchRequest) {
    const filter = {
        _id: profileUpdate.id ?? mongoose.Types.ObjectId(),
        uid
    };
    const update = {
        title: profileUpdate.title,
        subtitle: profileUpdate.subtitle
    };
    const options: QueryOptions = {
        upsert: true,
        new: true
    };

    const result = await UserProfileModel.updateOne(filter, update, options);
    logger.info({
        message: `Profile updated for uid ${uid}`,
        data: result
    });

    return result;
}

export default {
    getProfileByUserId,
    createOrUpdateProfile
};