import { getModelForClass, modelOptions, prop, Ref } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { User } from './User';

@modelOptions({options:{allowMixed:0}})
export class Comment extends TimeStamps{

    @prop({ type: String, required: true, trim:true})
    content!: string;

    @prop({ ref: "User", required: true, trim:true}) //el id del user creador
    owner!: Ref<User>;

    @prop({ ref: String, required: true, trim:true}) //el id del user creador
    name!: string;

    @prop({ required: true, default: "https://www.ibei.org/images/4611/person_box.png" })
    picture:Ref<User>;

    @prop({ required: true })
    rating:number;
}

export const CommentModel = getModelForClass(Comment);