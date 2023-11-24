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
        <div className={"h-screen flex-col flex items-center justify-center overflow-y-scroll p-24"}>
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