import { prop, getModelForClass, Ref, modelOptions } from '@typegoose/typegoose';
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import {Crypto} from "./Crypto"

@modelOptions({ options: { allowMixed: 0 } })
export class User extends TimeStamps{

    @prop({ required: true, trim: true})
    name: string;

    @prop({ required: false, trim: true, default: "" })
    middleName?: string;

    @prop({ required: true, trim: true})
    lastName: string;

    @prop({ required: true, trim: true, lowercase:true})
    email:string;

    @prop({ required: false,  default: 123-456 })
    numberPhone: number;

    @prop({ type: () => Array, default: [] })
    favourites: Ref<Crypto>;

    @prop({ required: false, default: "https://media.discordapp.net/attachments/1005186345397927979/1009546767739658280/unknown.png" })
    picture:string;

    @prop({ required: true, trim: true, lowercase:true, minlength:8 })
    password:string;

    @prop({ type: () => Boolean, default: false})
    isBanned: boolean;

    @prop({ required: false, trim: true, default: "" })
    country:string;

    @prop({ required: false,  default: 1234 })
    postalCod: number;

    @prop({required: false, trim: true})
    adress: string;

    @prop({required: true, trim: true})
    documentType: string;

    @prop({required: true})
    documentNum: number;
}

export const UserModel = getModelForClass(User)