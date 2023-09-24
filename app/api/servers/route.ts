import {NextResponse} from "next/server";
import {currentProfile} from "@/lib/current-profile";
import { db } from "@/lib/db";
import {v4 as uuidv4} from "uuid"
import {$Enums} from ".prisma/client";
import MemberRole = $Enums.MemberRole;

export async function POST(req: Request) {
    try {
         const {name, imageUrl} = await req.json();
         const profile = await currentProfile();

         if(!profile) {
             return new NextResponse('Unauthorize', {status: 401})
         }


        const server = await db.server.create({
             data: {
                 profileId: profile.id,
                 name,
                 imageUrl,
                 inviteCode: uuidv4(),
                 channels: {
                    create: [{name: 'General', profileId: profile.id}]
                 },
                 members: {
                     create: [{profileId: profile.id, role: MemberRole.ADMIN}]
                 }
             }
         })

    return NextResponse.json(server)
    } catch (e) {
        console.log('[SERVERS_POST]', e);
        return new NextResponse('Internal error', {status: 500})
    }
}