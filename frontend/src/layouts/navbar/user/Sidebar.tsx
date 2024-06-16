import { useStoreActions, useStoreState } from '@/store/store';
import { navLinks } from '@/constants';
import { NavLink, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { profile } from '@/assets/images';
import { ScrollArea } from '@/components/ui/scroll-area';
import { FaTimes, FaUsers } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import useWindowSize from '@/hooks/useWindowSize';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { FaFile, FaMicrophone } from 'react-icons/fa6';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Sidebar = () => {

    const { width } = useWindowSize();
    const navState = useStoreState(state => state.nav.navState);
    const setNavState = useStoreActions(action => action.nav.set);


    const lgWidth = width && width >= 768;
    const mdWidth = width && width < 768;

    return (
        <div className={cn('fixed bg-background z-40 md:w-20  md:h-screen transition-all', { 'md:w-60 md:top-0 md:h-screen': navState, "w-60 top-0 h-screen": mdWidth, "-translate-x-full": !navState && mdWidth })}>
            {navState && <div className="fixed h-full bg-custom-transparent-black left-0 right-0 top-0 -z-10" onClick={() => setNavState(false)}></div>}

            <ScrollArea className={cn(' py-2 z-30  flex flex-col gap-3 bg-background', { 'h-screen padding-x': navState || mdWidth })}>
                <div className="flex sticky top-0 bg-background py-2">
                    <Button className={cn('ml-auto', { 'hidden': lgWidth && !navState })} onClick={() => setNavState(false)}><FaTimes /></Button>
                </div>
                <div className={cn('flex flex-col gap-3', { "gap-6": lgWidth && !navState })}>
                    {navLinks.map((link) => {
                        return (
                            !link.onlyGuest
                            &&
                            <li key={link.label} className={cn("list-none *:flex *:gap-3 *:items-center *:text-xl *:hover:text-custom-red", { "*:justify-center": lgWidth && !navState })}>
                                <NavLink to={link.href} className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-custom-red after:content-[''] after:absolute after:right-3 after:block after:w-1 after:h-8 after:bg-custom-red" : ""
                                }>
                                    <span className={cn({ "text-3xl": lgWidth && !navState })}>{<link.icon />}</span>
                                    <span className={cn('hidden', { 'block': navState || mdWidth })}>{link.label}</span>
                                </NavLink>
                            </li>
                        )
                    }
                    )}
                </div>

                <div className={cn("mt-5", { "hidden": lgWidth && !navState })}>
                    <div className="flex flex-col gap-3">
                        <hr />
                        <h3>Recent courses</h3>
                        <div className='flex flex-col gap-3'>
                            <div className='flex flex-col gap-3'>
                                <NavLink to={''} className='flex gap-1 items-center'>
                                    <Avatar className=' h-7 w-7'>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CS</AvatarFallback>
                                    </Avatar>
                                    <span className="title">expert course....</span>
                                </NavLink>
                            </div>
                            <Button> <NavLink to={'/user/username/recent'}>See all</NavLink></Button>
                        </div>
                        <hr />

                        {/* <Button>more </Button> */}
                    </div>

                    <div className="flex flex-col gap-3 mt-5 pb-5">
                        <NavLink to={'/about'} className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "relative text-custom-red *:after:content-[''] *:after:absolute *:after:right-0 *:after:block *:after:w-1 *:after:h-7 *:after:bg-custom-red" : ""
                        } >
                            <div className=" flex items-center text-xl gap-3">
                                <FaUsers />
                                <span>About Us</span>
                            </div>
                        </NavLink>
                        <NavLink to={'/help'} className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "relative text-custom-red *:after:content-[''] *:after:absolute *:after:right-0 *:after:block *:after:w-1 *:after:h-7 *:after:bg-custom-red" : ""
                        } >
                            <div className=" flex items-center text-xl gap-3">
                                <AiFillQuestionCircle />
                                <span>Help</span>
                            </div>
                        </NavLink>
                        <NavLink to={'/feedback'} className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "relative text-custom-red *:after:content-[''] *:after:absolute *:after:right-0 *:after:block *:after:w-1 *:after:h-7 *:after:bg-custom-red" : ""
                        } >
                            <div className=" flex items-center text-xl gap-3">
                                <FaMicrophone />
                                <span>Feedback</span>
                            </div>
                        </NavLink>
                        <NavLink to={'/policy'} className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "relative text-custom-red *:after:content-[''] *:after:absolute *:after:right-0 *:after:block *:after:w-1 *:after:h-7 *:after:bg-custom-red" : ""
                        } >
                            <div className=" flex items-center text-xl gap-3">
                                <FaFile />
                                <span>Privacy Policy</span>
                            </div>
                        </NavLink>
                    </div>
                </div >
            </ScrollArea >
        </div >

    )
}

export default Sidebar