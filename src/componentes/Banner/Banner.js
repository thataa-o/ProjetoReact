import './Banner.css'

function Banner(){
    //JSX(Parece html, mas no react ele é um jsx e não html. ele é como o react le e transforma em elementos DOM)
    return(
        <header className="banner">
            <img src="/imagens/banner.png" alt="banner principal"/>
        </header>        
    )
}

export default Banner