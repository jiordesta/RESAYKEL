import Counter from "../models/Counter.js";
import { BadRequestError } from "./custom_errors.js";

export const count = async (name) => {
  try {
    const counter = await Counter.findOne({ name });
    if (counter) {
      const value = counter.value + 1;
      const updated = await Counter.findByIdAndUpdate(counter._id, { value });
      if (!updated) throw new BadRequestError("There was an error in counter");
    } else {
      const new_counter = await Counter.create({ name });
      if (!new_counter)
        throw new BadRequestError("There was an error creating a counter");
    }
    return;
  } catch (error) {
    throw new BadRequestError(error);
  }
};
