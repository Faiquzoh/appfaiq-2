async function fecthDtaJoke(urutanJoke:string) {

    const responeMentah = await fetch(`https://v2.jokeapi.dev/joke/any?idRange=${urutanJoke}`)
    const dataJoke = await responeMentah.json()
    return dataJoke
}

export default async function candaanYgTersortir(
    {params}:{params:Promise<{nomorCandaan:string}>}
){
    const {nomorCandaan} = await params
    const informasiJoke = await fecthDtaJoke(nomorCandaan)
    return(
        // <div>
        //     {}
        //     {/ <h1>{informasiJoke.category}</h1>
        //     <h1>Candaan tak bertanya jawab : {informasiJoke.category}</h1>
        //     <h1>pertanyaan candaan : {informasiJoke.setup}</h1>
        //     <h1>Jawaban dari candaan : {informasiJoke.delivery}</h1> /}
        // </div>
        <div>
           { informasiJoke.type === "single" ? (
                <h1>{informasiJoke.joke}</h1>):(
                <div>
                    <h1>{informasiJoke.setup}</h1>
                    <h1>{informasiJoke.delivery}</h1>
                </div>
           ) }
        </div>
    )
}
