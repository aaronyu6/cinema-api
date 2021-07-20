
import { Schema } from 'mongoose';
import { Document } from 'mongoose';


const GeometrySchema = new Schema(
    {
        type: {
            type: String,
            default: 'Point'
        },
        coordinates: {
            type: [Number],
            default: [0, 0]
        }
    },
    { _id: false }
);

export const CinemaSchema = new Schema({
    name: String,
    building: String,
    address: String,
    description: String,
    img: String,
    geometry: GeometrySchema,
});

export interface Geometry {
    type: string;
    coordinates: number[]
}

/*for document creation with XXXModel.create(cinema:Cinema)*/
export interface Cinema {
    name: string;
    building: string;
    address: string;
    description: string;
    img: string;
    geometry: Geometry;
}

export interface CreateCinemaDto extends Cinema {

}

export interface UpdateCinemaDto extends Cinema {

}

/**for query returned from database */
export interface CinemaBaseDoc extends Cinema, Document {

}