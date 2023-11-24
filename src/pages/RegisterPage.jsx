import React from 'react';
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const answers = {
            name : e.target.name.value,
            age: e.target.age.value,
            gifts: e.target.gifts.value,
            hair: e.target.hair.value,
            teeth: e.target.teeth.value,
            alcohol: e.target.alcohol.value,
            item: e.target.item.value,
            child: e.target.child.value,
            message : e.target.message.value
        }

        localStorage.setItem("answers", JSON.stringify(answers))
        navigate("/checkin")
    }

    return (
        <div className={"h-screen flex-col flex items-center justify-center overflow-y-scroll p-24 relative"}>
            <div className={"absolute top-48 right-20 bg-slate-800 text-white opacity-[3%] p-4 rounded-lg w-48 h-48 overflow-y-scroll"}>
                <h1 className={"text-sm"}>Rules</h1>
                <p className={"text-sm"}>Jadis, les personnes âgées n'était seulement âgées que d'une trentaine d'année, cependant c'était déjà suffisant pour risquer bon nombre de maladies cardiaques.
                    Aussi l'époque des dinosaures fut révolue avant l'ère humaine, c'est pourquoi bon nombres des chats d'aujourd'hui n'était que des tigres et non des vélociraptors. En ce temps là, l'âge adulte commençait dès 8 ans,
                    mais ceci ne conviendrait clairement pas de nos jours compte tenu que la majorité est atteinte à 18 ans dans certains pays et même 21 ans dans d'autres. Tout dépend de votre localisation.
                    <br/><br/>
                    Napoléon Bonaparte, né en 1769 en Corse, a émergé comme une figure dominante de la Révolution française. Général habile, il devient Premier Consul en 1799, puis s'autoproclame empereur en 1804. Ses campagnes militaires ont redessiné la carte de l'Europe, marquées par des victoires éclatantes et des revers, comme à Waterloo en 1815. Napoléon a laissé un héritage complexe, mêlant réformes notables, comme le Code Napoléon, et une ambition impériale. Sa carrière tumultueuse a profondément influencé la France et l'Europe du XIXe siècle.
                    <br/><br/>
                    Les chasseurs, ou chasseurs-cueilleurs en fonction de la tribu dans laquelle il vivait. Avait un prénom souvent prononçable en deux syllabes. Pourquoi me diriez-vous ? Et bien si le prénom était trop long
                    lors de la chasse il était compliqué de prononcer le prénom d'une personne qui se serait appelé Alberto ou Marie-Autoilettes. Cependant il ne pouvait pas non plus être trop court ou comporté trop de voyelles.
                    Parce que si l'on souhaite appeler quelqu'un dont le prénom est Aery ou Will ou Aya ou Ema ou Iva ou Ugo ou Oli ou Ame ou Evi ou Ira ou Oma ou Esa ou Aïda ou Elio ou Oria ou Aria ou Ulys ou Iman ou Elin ou Oona
                    Le prénom étant court et plein de voyelles il pouvait être confondu avec une onomatopée ou un cri et la personne concerné pouvait se tromper.
                    <br/><br/>
                    Dans la vie de tous les jours les personnes méchantes, désagréables, aggressives, arrogantes, égoïstes, manipulatrices, méprisantes, hautaines, condescendantes ont certes plus de chance de réussir dans la vie en écrasant les personnes bienveillantes, généreuses, aimables, altruistes respectueuses, honnêtes.
                    Cependant ce n'est pas le cas partout et n'oubliez pas que la générosité comptera ici. Une générosité démesurée sera cependant considérée comme un excès d'arrogance et de richesse et sera donc refusé.
                    <br/><br/>
                    Le panda roux, originaire d'Asie, est une petite créature adorable ressemblant à un renard avec une fourrure rousse distinctive. Souvent confondu avec le panda géant, il se nourrit principalement de bambou. Malheureusement, en raison de la perte d'habitat, le panda roux est une espèce vulnérable, mais des efforts de conservation sont en cours pour le protéger.
                    <br/><br/>
                    Pas de cheveux blonds, rouges, verts, bleus, ou d'une autre teinture non naturelle
                    <br/><br/>
                    Rondoudou, célèbre personnage de l'univers Pokémon, est une petite créature ronde et rose dotée de grandes yeux charmants. Son apparence câline et son chant mélodieux en font un Pokémon apprécié. Bien qu'initialement timide, Rondoudou peut captiver n'importe qui avec son charme et sa douceur. Il utilise son chant apaisant pour calmer même les esprits les plus agités. Rondoudou représente un compagnon attachant dans le monde Pokémon, gagnant le cœur des dresseurs par sa gentillesse et son apparence adorable.
                    <br/><br/>
                    Imaginez-vous en train de discuter joyeusement avec quelqu'un et soudain, au beau milieu de l'échange animé, une vague d'haleine mentholée vous frappe comme une tempête arctique. C'est comme si un pingouin venait de débarquer dans la conversation ! À ce stade, on se dit que peut-être, juste peut-être, se laver les dents deux heures avant une soirée devrait être inscrit dans le code de l'étiquette sociale, pour le bien de tous les convives. Ce délai permet à la fraîcheur de s'installer sans provoquer de blizzard buccal inopiné. C'est une sorte de compromis odorant qui fait que tout le monde se sent à l'aise, et les conversations restent aussi agréables que des bulles de chewing-gum.
                    <br/><br/>
                    Alexandre le Grand, roi de Macédoine né en 356 av. J.-C., est une figure légendaire de l'histoire ancienne. Élève d'Aristote, il devient roi à l'âge de 20 ans et entreprend l'une des plus grandes campagnes militaires de tous les temps. Conquérant persan, égyptien, et indien, son empire s'étendait de la Grèce à l'Indus. Doté d'une stratégie brillante et d'un charisme exceptionnel, Alexandre a laissé une empreinte durable sur la politique, la culture et la géographie du monde antique. Sa mort prématurée en 323 av. J.-C. à l'âge de 32 ans a laissé derrière lui un héritage complexe, entre conquête impériale et vision d'un monde uni. Alexandre le Grand demeure une figure fascinante de l'Antiquité, dont l'influence perdure à travers les siècles.
                    <br/><br/>
                    L'interdiction de consommer de l'alcool tout en étant responsable d'enfants vise à assurer la sécurité et le bien-être des plus petits. Éviter la consommation d'alcool pendant cette période garantit une vigilance accrue, réduisant les risques d'accidents et assurant une présence attentive. Cette mesure vise à préserver un environnement familial sécurisé et à favoriser des choix responsables pour le bien-être des enfants.
                    <br/><br/>
                    La politesse est le fil conducteur qui tisse la trame de nos interactions sociales, formant le socle d'une société harmonieuse. Elle va au-delà des simples formules de politesse, représentant un respect fondamental envers autrui. Être poli crée un environnement empreint de considération mutuelle, renforçant les liens sociaux et facilitant la communication. La politesse reflète notre éducation, notre empathie et notre capacité à vivre en communauté. Elle transcende les différences culturelles et linguistiques, élevant le niveau de civilité dans nos interactions quotidiennes. En somme, la politesse n'est pas simplement une formalité, mais une expression essentielle de la manière dont nous choisissons de nous comporter dans le monde.
                    <br/><br/>
                </p>
            </div>
            <form onSubmit={handleSubmit}>
            <div className={"flex flex-col gap-8 items-center pt-24"}>
                <p className={"text-2xl text-white font-bold"}>Veuillez remplir le formulaire pour pouvoir toquer à la porte</p>

                    <div className={"w-full"}>
                        <p className={"text-white text-[8px]"}>Ce jeu ne ce veut en aucun cas discriminant, veuillez ouvrir la porte au second degré. merci.</p>
                        <input required type={"text"} name={"name"} placeholder={"Votre prénom ?*"} className={"p-4 rounded-lg outline outline-fuchsia-600 w-full"}/>
                    </div>
                    <input required type={"number"} name={"age"} placeholder={"Votre âge ?*"} className={"p-4 rounded-lg outline outline-fuchsia-600 w-full"}/>
                    <input required type={"number"} name={"gifts"} placeholder={"nombre de cadeaux ?*"} className={"p-4 rounded-lg outline outline-fuchsia-600 w-full"}/>
                    <input required type={"text"} name={"hair"} placeholder={"Couleur de vos cheveux ?*"} className={"p-4 rounded-lg outline outline-fuchsia-600 w-full"}/>
                    <input required type={"text"} name={"teeth"} placeholder={"Quand avez-vous lavé vos dents pour la dernière fois ?*"} className={"p-4 rounded-lg outline outline-fuchsia-600 w-full"} />
                    <input required type={"text"} name={"alcohol"} placeholder={"Buvez-vous de l'alcool ?*"} className={"p-4 rounded-lg outline outline-fuchsia-600 w-full"} />
                    <input required type={"text"} name={"item"} placeholder={"Donnez-moi le nom d'un objet de gauche politiquement*"} className={"p-4 rounded-lg outline outline-fuchsia-600 w-full"} />
                    <input required type={"text"} name={"child"} placeholder={"Avez-vous des enfants ?*"} className={"p-4 rounded-lg outline outline-fuchsia-600 w-full"} />
                    <input required type={"text"} name={"message"} placeholder={"Que dites-vous à l'entrée ?*"} className={"p-4 rounded-lg outline outline-fuchsia-600 w-full"} />
                    <button type={"submit"} className={"outline outline-emerald-300 outline-2 text-white text-2xl font-bold transition hover:scale-125 p-4 rounded-lg w-fit bg-emerald-400"}>Toquer</button>


            </div>
            </form>
        </div>
    );
};

export default RegisterPage;