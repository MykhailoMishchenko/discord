import {ReactNode} from "react";

type Props = {
    children: ReactNode
};
const AuthLayout = (props: Props) => {
    const {children} = props;
    return (
        <div className='flex justify-center items-center h-full'>
            {children}
        </div>
    );
};

export default AuthLayout