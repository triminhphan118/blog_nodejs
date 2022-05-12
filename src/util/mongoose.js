module.exports = {
    mutilpleMongooseObject: (mongooses) => {
        return mongooses.map((course) => course.toObject());
    },

    mongooseObject: (mongoose) => {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
