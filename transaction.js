const { startSession } = require("mongoose");
const session = await startSession();
await session.withTransaction(async () => {
	await ProductModel.findOneAndUpdate(
		{
			_id: mongoId(result[i]._id),
		},
		{ $set: updatedProducts },
		{
			new: true,
			upsert: true,
			runValidators: true,
			useFindAndModify: false,
		}
	);
});

await session.commitTransaction();
session.endSession();
