import mongoose from 'mongoose';

const subscriptionSchema = new mongooseSchema({
    subscriber: { // one who subscribes
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    channel: { // one to whom
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true,
})

export const Subscription = mongoose.model("Subscription", subscriptionSchema);