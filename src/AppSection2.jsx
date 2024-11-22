
import { useState, useTransition } from "react";
import { memo } from "react";


function AppSection2(){
    const [isPending, startTransition] = useTransition();
    const [tab, setTab] = useState("about");

    function selectTab(nextTab){
        startTransition(() => {
            setTab(nextTab);
        });
    }
    return (
        <div>
            <TabButton isActive={tab === "about"} onClick={()=>selectTab("about")}>About</TabButton>
            <TabButton isActive={tab === "posts"} onClick={()=>selectTab("posts")}>Posts</TabButton>
            <TabButton isActive={tab === "contact"} onClick={()=>selectTab("contact")}>Contact</TabButton>
            <hr/>
            {tab === 'about' && <AboutTab />}
            {tab === 'posts' && <PostTab />}
            {tab === 'contact' && <ContactTab />}
        </div>
    )
}

export default AppSection2;

function TabButton({children, isActive, onClick}){
    if(isActive){
        return <b>{children}</b>
    }
    return (
        <button onClick={()=>{onClick();}}>
            {children}
        </button>
    )
}

function AboutTab(){
    return (
        <p>Welcome to my profile</p>
    )
}

const PostTab = memo(function PostTab(){
    console.log('[Artificially slow]');

    let items = [];
    for(let i=0; i<10;i++){
        items.push(<SlowPost key={i} index={i}/>);
    }
    return (
        <ul className="items">{items}</ul>
    )
});

function SlowPost({index}){
    let startTime = performance.now();
    while(performance.now() - startTime < 1){

    }

    return (

        <li className="item">
            Post #{index + 1}
        </li>
    );
}

function ContactTab(){
    return (
        <>
        <p>Find me online here</p>
        <li>email@email.com</li>
        <li>13256243748</li>
        </>
    );
}