//1.定義Props的介面 (interface)
interface WelcomeProps{
    name: string;
}

//2.將介面應用到你的元件
function WelcomeMessage({name}:WelcomeProps){
    return <h1>Hello,{name}!</h1>
}

export default WelcomeMessage;
