import connectDB from "@/config/database";
import Property from "@/models/Property";
import mongoose from "mongoose";


// GET/api/properties/:id
export const GET = async (request, { params }) => {
  try {
    await connectDB();

    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      return new Response(JSON.stringify({ error: 'Invalid property ID' }), { status: 400 });
    }

    const property = await Property.findById(params.id).lean();

    if (!property) {
      return new Response(JSON.stringify({ error: 'Property Not Found' }), { status: 404 });
    }

    return new Response(JSON.stringify(property), { status: 200 });
  } catch (error) {
    console.error("Error fetching property:", error);
    return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 });
  }
};