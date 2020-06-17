class postit{
    départX;
    départY;
    largeur;
    hauteur;
    couleurfond;
    couleurtext;
    texte;
    id;
    
    
   
    constructor(départX, départY, largeur, hauteur, couleurfond, couleurtext, texte, id){
        this.départX = départX;
        this.départY = départY;
        this.largeur = largeur;
        this.hauteur = hauteur;
        this.couleurfond = couleurfond;
        this.couleurtext = couleurtext;
        this.texte = texte;
        this.id = id;
       
        
    }

    
    affichePost(){
        let monElem = document.getElementById(this.id)
        if(monElem===null){
            monElem = document.createElement('div')
            monElem.id = this.id
            monElem.addEventListener('click',()=>{
                postitdep=!postitdep
            })

            monElem.addEventListener('dblclick',()=>{
                saisieText=!saisieText
            })
        }

        //monElem.style.resize = 'both';
        //monElem.style.overflow = 'auto';
        monElem.classList.add(this.couleurfond)
        monElem.style.width = this.largeur+'px'
        monElem.style.height = this.hauteur+'px'
        monElem.style.position = 'fixed'
        monElem.style.left = this.départX+'px'
        monElem.style.top = this.départY+'px'
        monElem.style.color = this.couleurtext 
       /* monElem.style.backgroundColor =  */
        document.getElementById('post').appendChild(monElem)
        
        monElem.innerHTML = this.texte

        


        // Mon elem1 est le menu du post-it
        let monElem1 = document.createElement('div')
        monElem.appendChild(monElem1)
        monElem1.classList.add('menupost')

        // monelem2 est la corbeille

        let monElem2 = document.createElement('i')
        monElem1.appendChild(monElem2)
        monElem2.classList.add('fas','fa-dumpster')

        //monElem3 est le bouton pour agrandir

        let monElem3 = document.createElement('i')
        monElem1.appendChild(monElem3)
        monElem3.classList.add('fas' ,'fa-chevron-right')
        
        monElem3.addEventListener('click',(e)=>{
            this.largeurinit = this.largeur
            this.hauteurinit = this.hauteur
            this.Xdep = posX
            this.Ydep = posY
                postitresize=!postitresize
                e.stopPropagation()
            })

    }

    moovePost(newX,newY){
        this.départX = newX
        this.départY = newY
    }

    editText(newText){
        this.texte = newText
       
    }

    modifPost(newLargeur, newHauteur){
        this.largeur = newLargeur
        this.hauteur = newHauteur 
    }

   

   
}



function createPostJaune(){
    monPostit = new postit(300,10,200,200,'jaune','white','...','didier')
    monPostit.affichePost()

    
    

    
}

function createPostRose(){
    monPostit = new postit(300,240,200,200,'pink','white','...','françois')
    monPostit.affichePost()
    

    
}

function createPostBlue(){
    monPostit = new postit(300,470,200,200,'skyblue','white','...','ffilou')
    monPostit.affichePost()
    

    
}

function createPostOrange(){
    monPostit = new postit(300,700,200,200,'orange','white','...','franci')
    monPostit.affichePost()
    

    
}



let saisieText = false
let postitresize = false
let postitdep = false
let monPostit
let posX
let posY

document.querySelector('.jaune').addEventListener('click',createPostJaune)
document.querySelector('.pink').addEventListener('click',createPostRose)
document.querySelector('.skyblue').addEventListener('click',createPostBlue)
document.querySelector('.orange').addEventListener('click',createPostOrange)

document.body.addEventListener('mousemove',(e)=>{
    posX = e.clientX
    posY = e.clientY
    
    if(postitdep){
        monPostit.moovePost(posX-100,posY-100)
        monPostit.affichePost()
        document.getElementById(monPostit.id).style.cursor='none';
    }
    else
    {
        document.getElementById(monPostit.id).style.cursor='default';
    }

    if(postitresize){
        monPostit.modifPost(monPostit.largeurinit + (posX - monPostit.Xdep) , monPostit.hauteurinit + (posY - monPostit.Ydep))
        monPostit.affichePost()
    }
})

document.body.addEventListener('keydown', (e) => {
    monPostit.editText(monPostit.texte+e.key)
    monPostit.affichePost()
    
    console.log(e)
})


/*let monPostit = new postit(50,50,180,180,'pink','white','Salut Didier', 'didloss')
monPostit.affichePost()
monPostit.moovePost(200,50)
monPostit.modifPost(400,400)
monPostit.affichePost()
monPostit.editText("François c'est pas la moitié d'un con")
monPostit.affichePost()

let monDidier = new postit(50,280,180,180,'red', 'white', 'Hello Didier', 'vévère')
monDidier.editText("François c'est qu'un con")
monDidier.affichePost()

let monFrançois = new postit(50,530,180,180,'skyblue','white', 'Hello François', 'françois' )
monFrançois.editText("François le Français")
monFrançois.affichePost()*/

