import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div id="projects" className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
            Mes Projets
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
            <ProjectCard
              src="/association.jpeg"
              title="Association contre la déforestation"
              description="Projet visant à créer un site pour une association contre la déforestation"
              link="https://klow420.github.io/Association/"
            />
            <ProjectCard
              src="/apiculture.jpeg"
              title="Apiculture de Alexis"
              description="Projet visant à créer un site pour un apiculteur (test)"
              link="https://klow420.github.io/Siteapiculture/"
            />
            <ProjectCard
              src="/Mealsjs.jpeg"
              title="Application de recherche de plats"
              description="Projet visant à créer un site pour une application de recherche de plats en html, css et javascript en utilisant une API."
              link="https://klow420.github.io/Js-meals/"
            />
            <ProjectCard
              src="/todolist.png"
              title="Application de Todolist (gestionnaire de tâche)"
              description="Projet visant à créer un site pour une application de todolist en html, css et javascript en utilisant un framework CSS comme bootstrap."
              link="https://klow420.github.io/TodoList/"
            />
            <ProjectCard
              src="/appgrilleeva.png"
              title="Application de Formateur"
              description="Projet visant à créer un site pour une application pour des formateurs qui leurs permettent de générer une grille d'évaluation pour chacun de leurs élèves et de la télécharger en PDF en REACT. (Quelques problèmes subsitent.)"
              link="https://appstage.vercel.app/"
            />
            <ProjectCard
              src="/appmarcheimmobilier.jpeg"
              title="Application de marché immobilier"
              description="Projet visant à créer un site pour une application de marché immobilier moderne en utilisant REACT."
              link="https://run-ur-estate.onrender.com/"
            />
        </div>
    </div>
  )
}

export default Projects