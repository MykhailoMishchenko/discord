import {initialProfile} from "@/lib/initial-profile";
import {db} from "@/lib/db";
import {redirect} from "next/navigation";

type Props = {
    
};
const SetupPage = async (props: Props) => {
    const prfile = await  initialProfile()

    const server = await db.server.findFirst({
        where: {
            Member: {
                some: {
                    profileId: prfile.id
                }
            }
        }
    })

    if(server) {
        return redirect(`/servers/${server.id}`)
    }

    return (
        <div>
            Create a Server
        </div>
    );
};

export default SetupPage