import { prop, getModelForClass, Ref, modelOptions } from '@typegoose/typegoose';
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { User } from './User';

@modelOptions({ options: { allowMixed: 0 } })
export class CreditCard extends TimeStamps{

    @prop({ ref: "User", required: true})
    owner!: Ref<User>;

    @prop({ required: true, trim: true})
    name: string;

    @prop({ required: true, trim: true})
    lastName: string;

    @prop({ required: false,  default: 0 })
    saldo: number;

    @prop({ required: false, trim: true,  default: '1000-0000-0000-0000' })
    numTarget: string;

    @prop({ required: false, trim: true, default: 'XXX'})
    numCbu: string;
}

export const CreditCardModel = getModelForClass(CreditCard)