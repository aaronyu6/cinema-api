
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class Cinema {
    @Prop()
    name: string;

    @Prop()
    building: string;

    address: string;

    latitude
}

export type CinemaDocument = Cinema & Document;

export const CinemaSchema = SchemaFactory.createForClass(Cinema);
