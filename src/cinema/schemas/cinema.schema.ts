
import { Schema } from 'mongoose';
import { Document } from 'mongoose';

export const CinemaSchema = new Schema({
    name: String,
});

/*for document creation with XXXModel.create(cinema:Cinema)*/
export interface Cinema {
    name: string;
}

/**for query returned from database */
export interface CinemaBaseDoc extends Cinema, Document {

}