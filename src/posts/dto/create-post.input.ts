import { Field, InputType } from "@nestjs/graphql"
import { IsNotEmpty, MaxLength, IsInt } from "class-validator"

@InputType()
export class createPostInput {

    @MaxLength(20, {
        message: 'Title is too long'
    })
    @IsNotEmpty({
        message: 'Title is required'
    })
    @Field()
    title: string

    @MaxLength(400)
    @Field({ nullable: true })
    content?: string

    @IsInt()
    @Field()
    authorId: number

}