import {ReactNode} from "react";

type Props = {
    children: ReactNode
};
const AuthLayout = (props: Props) => {
    const {children} = props;
    return (
        <div className='bg-red-700 h-full'>
            {children}
        </div>
    );
};

export default AuthLayout