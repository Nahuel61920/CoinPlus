import { prop, getModelForClass, Ref, modelOptions } from '@typegoose/typegoose';
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";


@modelOptions({ options: { allowMixed: 0 } })
export class Crypto extends TimeStamps{

    @prop({ required: true})
    id: number;

    @prop({ required: true, trim: true})
    name: string;

    @prop({ required: true, trim: true})
    symbol: string;

    @prop({ required: true})
    price: number;

    @prop({ required: true})
    volume_24h: number;

    @prop({ required: true})
    volume_change_24h: number;

    @prop({ required: true})
    percent_change_1h: number;

    @prop({ required: true})
    percent_change_24h: number;

    @prop({ required: true})
    percent_change_7d: number;

    @prop({ required: true})
    percent_change_30d: number;

    @prop({ required: true})
    percent_change_60d: number;

    @prop({ required: true})
    percent_change_90d: number;
}

export const CryptoModel = getModelForClass(Crypto)