/*let impr=(a)=>{console.log(a)}
let soma=(a,b)=>{let result=a+b;impr(result)}
//----------------------------------------------------------*/
let inv=[]
function orientação (inventario){                   
    let ordem       
    for(let x in inventario){
        if(inventario[x] === inventario[0]){                    // Apresenta e orienta o inventário 
            ordem = `[${Number(x)+1}] ${inventario[x]}`
        }else if(inventario[x] !== inventario[0]){
            ordem += `\n[${Number(x)+1}] ${inventario[x]}`
        }
    }
    return ordem
}
let menu=()=>{
    let esc = Number(prompt("O que deseja fazer?\n[1] Ver inventário [2] finalizar"))
    if(esc===1){
        console.log(`Seu inventário tem: ${orientação(inv)}`)
        esc = Number(prompt("O que deseja fazer agora?\n[1] adicionar item \n[2] remover item"))
        if(esc===1){
            inv.push(prompt("Adicione um item:"))
        }
        else if(esc===2){
            esc=Number(prompt("qual item você deseja deletar?"))
            inv.splice(esc-1,1)
            console.log(`Agora seu inventário tem: ${orientação(inv)}`)
            
    }

}
}
menu()
