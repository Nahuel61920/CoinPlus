import { prop, getModelForClass, Ref, modelOptions } from '@typegoose/typegoose';
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import {Crypto} from "./Crypto"
import { Comment } from './Comment';

@modelOptions({ options: { allowMixed: 0 } })
export class User extends TimeStamps{

    @prop({ required: false, trim: true})
    name: string;

    @prop({ required: false, trim: true, default: "" })
    nickname?: string;

    @prop({ required: false, trim: true})
    lastName: string;

    @prop({ required: false, trim: true, lowercase:true})
    email:string;

    @prop({ required: false, trim: true,  default: "" })
    numberPhone: string;

    @prop({ required: false, trim: true,  default: "" })
    date: string;

    @prop({ type: () => Array, default: [] })
    favourites: Ref<Crypto>;

    @prop({ type: () => Array, default: [] })
    comments: Ref<Comment>;

    @prop({ required: false, default: "https://media.discordapp.net/attachments/1005186345397927979/1009546767739658280/unknown.png" })
    picture:string;

    @prop({ required: false, trim: true, lowercase:true, minlength:8 })
    password:string;

    @prop({ type: () => Boolean, default: false})
    isBanned: boolean;

    @prop({ required: false, trim: true, default: "" })
    country:string;

    @prop({ required: false,  trim: true, default: "" })
    postalCod: string;

    @prop({required: false, trim: true})
    adress: string;

    @prop({required: false, trim: true})
    documentType: string;

    @prop({required: false, trim: true,  default: "" })
    documentNum: string;

    @prop({required: false})
    source: string;
 
}

export const UserModel = getModelForClass(User)