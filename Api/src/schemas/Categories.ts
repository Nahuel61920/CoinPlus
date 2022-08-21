import { getModelForClass, modelOptions, prop, Ref } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { User } from './User';

@modelOptions({ 
    options: { allowMixed: 0 },
    schemaOptions:{
        _id: false,
        timestamps: false
    }
})
export class Categories{

    @prop({ type: String, required: true, trim:true})
    name: string;

   
}

export const CategoriesModel = getModelForClass(Categories);